import React from "react";
import "./Subservice.css";
function Subservice({ logoIcon, text }) {
  return (
    <>
      <div className="subservice mt-4 p-5 pt-7 pb-20 text-center">
        <span className="text-yellow-400 text-5xl">{logoIcon}</span>
        <p className="mt-4">{text}</p>
      </div>
    </>
  );
}

export default Subservice;
