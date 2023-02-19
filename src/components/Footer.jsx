import React from "react";
import Contact from "./Contact";

function Footer() {
  return (
    <div
      id="contact"
      className="relative top-20 bg-gradient-to-tl from-[#FDBD4F] to-[#FC5133]  w-full py-6"
    >
      {/* container */}
      <div className="max-w-[1440] px-4 ">
        {/* top */}
        <Contact />
        {/* buttom */}
      </div>
    </div>
  );
}

export default Footer;
