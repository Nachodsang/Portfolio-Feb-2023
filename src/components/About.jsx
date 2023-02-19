import React from "react";

// import components

import Skills from "./Skills";

function About() {
  return (
    <div className="w-full bg-[#EDF7FA] relative top-20">
      {/* section container */}
      <div className="max-w-[1040px] mx-auto px-4 pb-14 pt-8">
        <Skills />
      </div>
    </div>
  );
}

export default About;
