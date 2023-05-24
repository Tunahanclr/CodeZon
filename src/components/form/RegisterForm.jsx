import React from "react";
import { useFormik } from "formik";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function LoginForm() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Email is required";
      }

      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        
        const ref = doc(db, "users", user.uid);
        toast.success("Registration successful!"); // Başarılı kayıt mesajı
        navigate("/login"); // Login sayfasına yönlendirme
        const docRef = setDoc(ref, {
          email: values.email,
          password: values.password,
          created: Timestamp.now(),
        });
        setDoc(doc(db, "posts", user.uid), { posts: [] });
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="">
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          placeholder="E-mail Address"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="bg-gray-100 w-72 rounded-md h-10 outline-blue-500 "
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-xs">{formik.errors.email}</div>
        ) : null}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="bg-gray-100 w-72 rounded-md h-10 outline-blue-500 "
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-xs">{formik.errors.password}</div>
        ) : null}

        <div className="mr-52">
          <button
            type="submit"
            className="w-24 h-9 text-white text-sm bg-blue-500 rounded-md hover:shadow-md hover:shadow-blue-300 transition-all"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
