import React from "react";

// import data
import { featuredWorks } from "../assets/data";
// import components
import CardWork from "./CardWork";

function Work() {
  return (
    <div id="works" className="w-full  relative top-20  bg-white ">
      <div className="max-w-[1040px] px-4 mx-auto py-10 ">
        {/* title */}
        <div>
          <h1 className="text-3xl font-semibold text-[#21243D]/80">
            Featured Works
          </h1>
        </div>
        {/* list */}
        <div className="flex flex-col gap-y-6 pt-8  pb-8">
          {featuredWorks.map((item, index) => {
            // destructure item
            const { id, title, thumbnail, year, type, api } = item;
            return (
              <CardWork
                id={id}
                title={title}
                thumbnail={thumbnail}
                year={year}
                type={type}
                api={api}
                data={item}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
