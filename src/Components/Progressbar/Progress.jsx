import React from "react";
import "./Progress.css";
function Progress({ course, rate }) {
  return (
    <div className="progres text-left mt-10">
      <div className="pro ">
        <h3 className="text-xl">{course}</h3>
        <div className="prs  h-3 ">
          <div
            className="progress relative bg-yellow-400 h-3 mt-2"
            style={{ width: `${rate}%` }}
          >
            <span className="absolute right-0 -top-9 text-xl">{rate}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
