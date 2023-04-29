import React from "react";

function Subtitle({ head, smallhead, pcontent }) {
  return (
    <>
      <div className="resumetext relative text-center ">
        <h1 className="big absolute left-0 right-0 text-8xl -z-10 font-extrabold top-4 ">
          {head}
        </h1>
        <h1 className="small text-center font-bold text-6xl">{smallhead}</h1>
        <p className="mt-9 ms-3 text-lg psmall">{pcontent}</p>
      </div>
    </>
  );
}

export default Subtitle;
