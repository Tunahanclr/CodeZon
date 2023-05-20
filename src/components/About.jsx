import React from "react";
import { GiConfirmed } from "react-icons/gi";
export default function About() {
  return (
    <div id="about" className="bg-gray-200 h-[900px] md:h-[760px] mt-28">
      <h1 className="text-center font-semibold pt-20 text-4xl">About Us</h1>
      <div className="container  mx-auto max-w-[1200px]">
        <div className="flex mt-10 gap-11 md:flex-row flex-col justify-center items-center">
          <div>
            <img
              className=" w-[400px] md:w-[550px]"
              src="	https://preview.colorlib.com/theme/imagine/images/undraw_bookmarks_r6up.svg"
              alt=""
            />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl  font-semibold">Our Mission</h3>
            <p className="mt-6 text-sm md:text-base text-gray-600 w-96">
              Eos cumque optio dolores excepturi rerum temporibus magni
              recusandae eveniet, totam omnis consectetur maxime quibusdam
              expedita dolorem dolor nobis dicta labore quaerat esse magnam
              unde, aperiam delectus! At maiores, itaque.
            </p>
            <div className="flex flex-col mt-4 gap-4">
              <div className="flex items-center gap-6">
                <GiConfirmed className="text-green-500 text-3xl" />
                <span className="text-gray-500">
                  Laborum enim quasi at modi
                </span>
              </div>
              <div className="flex items-center gap-6">
                <GiConfirmed className="text-green-500 text-3xl" />
                <span className="text-gray-500">
                  Laborum enim quasi at modi
                </span>
              </div>
              <div className="flex items-center gap-6">
                <GiConfirmed className="text-green-500 text-3xl" />
                <span className="text-gray-500">
                  Laborum enim quasi at modi
                </span>
              </div>
            </div>
            <div className=" mt-3 md:mt-6">
              <button class="w-36 mt-4 h-11 rounded-full bg-blue-500 shadow-md shadow-blue-400 hover:-translate-y-1 transition-all text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
