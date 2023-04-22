import React from "react";
import "./Experince.css";
function Experince({ year, degree, university, content }) {
  return (
    <>
      <div className="exp p-9 m-3">
        <h1 className="text-4xl font-bold text-yellow-400">{year}</h1>
        <h2 className=" leading-9 text-3xl mt-4">{degree}</h2>
        <h3 className="mt-4 text-gray-400 text-1xl">{university}</h3>
        <p className="text-gray-400 mt-4 text-base">{content}</p>
      </div>
    </>
  );
}

export default Experince;
