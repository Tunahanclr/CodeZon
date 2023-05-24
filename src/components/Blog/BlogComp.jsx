import React, { useState, useEffect } from "react";
import { doc, arrayUnion, updateDoc, setDoc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

export default function BlogComp() {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [header, setHeader] = useState("");
  const [posts, setPosts] = useState([]);

  // Define the 'user' variable here
  const user = { uid: "user-uid" }; // Replace with the actual user object

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !content || !header) {
      // Tüm alanların doldurulması gerektiğini kontrol et
      alert("Tüm alanları doldurun!");
      return;
    }

    setUsername("");
    setContent("");
    setHeader("");

    const docRef = doc(db, "posts", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // Belge mevcut, güncelle
      await updateDoc(docRef, {
        posts: arrayUnion({
          username,
          header,
          content,
        }),
      });
    } else {
      // Belge mevcut değil, oluştur
      await setDoc(docRef, {
        posts: [
          {
            username,
            header,
            content,
          },
        ],
      });
    }
  };

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "posts", user.uid), (doc) => {
      if (doc.exists()) {
        setPosts(doc.data().posts);
      }
    });

    return () => {
      unsub();
    };
  }, []);

  console.log(posts);

  return (
      <div className="max-w-[1040px]   mt-5 container mx-auto">
      <h1 className="font-bold text-black text-5xl text-center">Blog Post</h1>
      <div className="bg-black h-32 flex items-center justify-center rounded mt-12">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex items-center justify-center gap-4"
        >
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="User Name"
            className="outline-none w-56 h-12 rounded bg-slate-500 text-black"
          />
          <input
            type="text"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
            placeholder="enter title"
            className="outline-none w-56 h-12 rounded bg-slate-500 text-black"

          />
          <textarea
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="content"
            className="text-sm outline-none w-56 h-12 resize-none rounded bg-slate-500"
            />
          <button type="submit" className="text-xl text-white">
            Share
          </button>
        </form>
      </div>
      {posts.map((post, index) => (
       <div key={index} className="bg-black rounded mt-10 text-white">
       <h3 className="flex mr-3 text-gray-600 justify-end">{post.username}</h3>
       <h4 className="font-bold ml-6 text-lg">{post.header}</h4>
       <p className="text-center mt-6 flex justify-center items-center w-[800px] mx-auto">
         {post.content}
       </p>
     </div>
        ))}
    </div>
  );
}
