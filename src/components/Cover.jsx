import React from "react";
import glacier from "../assets/images/_7290706.JPG";

const Cover = () => {
  return (
    <div className="relative h-screen shadow-2xl shadow-orange-300 w-full">
      <img className="absolute w-full h-screen object-cover " src={glacier} />
      <div className="absolute top-0 bottom-0 h-full bg-black/10 w-full"></div>

      {/* canvas*/}
      <div className=" absolute top-0 bottom-0 w-full h-full">
        {/* container */}
        <div className="relative max-w-[1040px] px-4 h-full mx-auto ">
          {/* name and title */}
          <div className="flex flex-col lg:items-start items-center md:gap-8 gap-6 lg:gap-10 w-full absolute lg:top-[25%] top-[40%]  mx-auto">
            <div className="flex flex-col text-white/90 items-center lg:items-start">
              <h1 className="text-7xl md:text-8xl font-bold">Nachod</h1>
              <h1 className="text-4xl mt-[-10px] md:text-6xl lg:text-8xl font-bold">
                Sanguansataya
              </h1>
            </div>
            <p className="text-3xl lg:text-5xl md:text-4xl font-semibold text-white/70">
              &lt;WebDeveloper/&gt;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
