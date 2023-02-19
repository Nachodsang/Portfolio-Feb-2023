import React from "react";
// import icons
import { AiFillHtml5, AiOutlineGithub } from "react-icons/ai";
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
} from "react-icons/si";

function Skills() {
  return (
    <div className="flex flex-col py-10 gap-y-6">
      {/* title */}
      <div>
        <h1 className="text-3xl font-semibold text-[#21243D]/80">Skills</h1>
      </div>
      {/* skill icons */}

      <div className="flex flex-row justify-between items-center text-4xl md:text-8xl text-orange-400 bg-white px-4 py-6 rounded-lg">
        <SiHtml5 />
        <SiCss3 />
        <SiJavascript />
        <SiReact />
        <SiTailwindcss />
        <AiOutlineGithub />
      </div>
    </div>
  );
}

export default Skills;
