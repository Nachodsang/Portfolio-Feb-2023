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
}) {
  return (
    <div className="card w-full  shadow-lg shadow-orange-400/80 flex flex-col lg:flex-row">
      <figure className="lg:flex-1 lg:rounded-md">
        <img src={thumbnail} />
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
          <div className="badge badge-outline">{api}</div>
        </div>
      </div>
    </div>
  );
}

export default CardWork;
