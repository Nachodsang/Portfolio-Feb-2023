import React from "react";

function CardWork({
  title,
  thumbnail,
  year,
  type,
  frameWork,
  cssFrameWork,
  api,
  dep1,
  dep2,
  dep3,
  dep4,
  gitHub,
  link,
}) {
  return (
    <div className="card w-full  shadow-md shadow-orange-400/50 flex flex-col lg:flex-row overflow-hidden">
      <figure className="lg:flex-1  bg-red-200">
        <a href={link}>
          <img
            src={thumbnail}
            className="w-[800px] h-[350px] md:w-[1000px] lg:w-[500px] lg:h-[300px] object-cover hover:scale-105 trasition-all duration-700 "
          />
        </a>
      </figure>
      <div className="card-body lg:flex-1">
        <h2 className="card-title">
          {title}
          <div className="badge badge-outline">{year}</div>
        </h2>
        <p>{type}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{frameWork}</div>
          <div className="badge badge-outline">{cssFrameWork}</div>
          <div className="badge badge-outline">{dep1}</div>
          {dep2 && <div className="badge badge-outline">{dep2}</div>}
          {dep3 && <div className="badge badge-outline">{dep3}</div>}
          {dep4 && <div className="badge badge-outline">{dep4}</div>}
          <div className="badge  badge-accent hover:badge-outline transition-all">
            <a href={gitHub} className="text-md font-bold ">
              Git Hub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardWork;
