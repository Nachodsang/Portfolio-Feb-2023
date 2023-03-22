import React, { useEffect, useState } from "react";

// import react-scroll
import { Link } from "react-scroll";

function Header() {
  const [headerIsSolid, setheaderIsSolid] = useState(false);
  // set topic state
  const [topicState, setTopicState] = useState(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 180 ? setheaderIsSolid(true) : setheaderIsSolid(false);
    });
  });
  return (
    <div
      className={`${
        headerIsSolid
          ? "bg-gradient-to-br from-[#FDBD4F] to-[#FC5133] py-4 text-white shadow-2xl"
          : "py-6 text-white"
      } fixed top-0  w-full transition-all duration-1000 z-10   `}
    >
      {/* container */}
      <div className="px-4 max-w-[1440px] mx-auto flex justify-center  md:justify-end gap-x-4 font-semibold text-md md:gap-x-6 ">
        <Link
          onClick={() => setTopicState(0)}
          to="hero"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className={`${
            topicState === 0 && "underline"
          } transition-all duration-300 hover:underline underline-offset-4 cursor-pointer `}
        >
          About me
        </Link>
        <Link
          onClick={() => setTopicState(1)}
          to="works"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className={`${
            topicState === 1 && "underline"
          } transition-all duration-300 hover:underline underline-offset-4 cursor-pointer `}
        >
          Featured Works
        </Link>
        <Link
          onClick={() => setTopicState(2)}
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className={`${
            topicState === 2 && "underline"
          } transition-all duration-300 hover:underline underline-offset-4 cursor-pointer `}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
