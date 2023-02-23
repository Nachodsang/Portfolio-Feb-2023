import React from "react";

function Hero() {
  return (
    <div id="hero" className="relative top-20 w-full  -z-0  mb-10">
      <div className="px-4 max-w-[1040px] mx-auto flex flex-col-reverse md:flex-row justify-between items-center ">
        <div className="flex flex-col items-start flex-1">
          <div className="flex flex-col ">
            <h1 className="text-2xl md:text-6xl font-bold">Nachod</h1>
            <h1 className="text-xl mt-[-10px] md:text-5xl font-bold">
              Sanguansataya
            </h1>
          </div>
          <p className="text-md md:text-xl mt-2">Web Developer</p>
          {/* about me */}
          <p className="text-justify mt-4">
            I am an aspiring web developer with a passion for creating beautiful
            and functional websites. Through my portfolio, I aim to showcase my
            skills and abilities, as well as my eagerness to learn and grow in
            the field. I am excited to take on new challenges and opportunities
            and am committed to delivering high-quality work. Thank you for
            considering me for any web development roles you may have available.
          </p>

          <a
            className="mt-10 hover:scale-105 transition"
            // resume link
            href="https://drive.google.com/uc?export=download&id=12fniSV8QPIvqcmI2fxUmh-ij0tCyjZQQ"
          >
            <button className="bg-gradient-to-br from-[#FDBD4F] to-[#FC5133] px-5 py-3 rounded-md text-white">
              Download Resume
            </button>
          </a>
        </div>
        <div className=" flex justify-end flex-1">
          <img
            className="w-[180px] h-[180px] md:w-[300px] md:h-[300px] object-cover shadow-xl shadow-orange-200/80 rounded-full"
            id="profile"
            src="https://i.postimg.cc/Gpymhz8S/315551.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
