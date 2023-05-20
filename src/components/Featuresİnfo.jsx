import React from "react";

export default function Featuresİnfo() {
  return (
    <div className="container mx-auto max-w-[1200px] mt-32">
      <h4 className="text-blue-500 text-xl  font-semibold">WHY CHOOSE US</h4>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10">
        <div>
          <img
            className="w-[1500px]"
            src="https://preview.colorlib.com/theme/imagine/images/undraw_gift_card_6ekc.svg"
            alt=""
          />
        </div>
        <div className="text-center flex justify-center items-center flex-col">
          <h2 className="text-3xl font-bold w-96 text-center">
          Because we are an Extremely New and İnnovative Team
                    </h2>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            neque nisi architecto autem molestias corrupti officia veniam.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse justify-center items-center mt-10">
        <div>
          <img
            className="w-[1500px]"
            src="https://preview.colorlib.com/theme/imagine/images/undraw_metrics_gtu7.svg"
            alt=""
          />
        </div>
        <div className="text-center flex justify-center items-center flex-col">
          <h2 className="text-3xl font-bold w-96 text-center">
          If you want to Freely write Down Lessons Learned From what you know for People to see          </h2>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            neque nisi architecto autem molestias corrupti officia veniam.
          </p>
        </div>
      </div>
    </div>
  );
}
