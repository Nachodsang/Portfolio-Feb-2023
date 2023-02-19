import React from "react";
// import icons
import { MdEmail, MdCall } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";

function Contact() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-y-2 text-white">
      <div className="font-normal text-md">
        All rights reserved. Nachod's Portfolio 2023.
      </div>
      <div className="flex justify-evenly items-center gap-x-6">
        {/* email */}
        <div className="cursor-pointer hover:underline underline-offset-4">
          <div className="flex justify-center items-center gap-x-1 ">
            <MdCall size={30} />
            <span className="font-semibold text-md">+66-80-900-8468</span>
          </div>
        </div>
        <div className="hover:underline underline-offset-4">
          <a href="mailto:nachodsang@gmail.com">
            <div className="flex justify-center items-center gap-x-2">
              <MdEmail size={30} />
              <span className="font-semibold text-md">
                nachodsang@gmail.com
              </span>
            </div>
          </a>
        </div>
        <div className="hover:underline underline-offset-4">
          <a href="https://github.com/Nachodsang">
            <AiOutlineGithub size={40} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
