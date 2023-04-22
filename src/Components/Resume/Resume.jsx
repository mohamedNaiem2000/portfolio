import React from "react";
import Experince from "../Experince/Experince";
import Subtitle from "../subtitle/Subtitle";

function Resume(props) {
  return (
    <>
      <div className="resume container mt-20 pb-32">
        <div className="resumetext relative text-center">
          <Subtitle
            head={"Resume"}
            smallhead={"Resume"}
            pcontent={
              " A small river named Duden flows by their place and supplies it withthe necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
            }
          />
        </div>
        <div className="flex flex-wrap">
          <Experince
            year={"2014-2015"}
            degree={"Master Degree of Design"}
            university={"CAMBRIDGE UNIVERSITY"}
            content={
              "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
            }
          />
          <Experince
            year={"2014-2015"}
            degree={"Art & Creative Director"}
            university={"CAMBRIDGE UNIVERSITY"}
            content={
              "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
            }
          />
          <Experince
            year={"2014-2015"}
            degree={"Bachelor's Degree of C.A"}
            university={"CAMBRIDGE UNIVERSITY"}
            content={
              "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
            }
          />
          <Experince
            year={"2014-2015"}
            degree={"Wordpress Developer"}
            university={"CAMBRIDGE UNIVERSITY"}
            content={
              "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
            }
          />
          <Experince
            year={"2014-2015"}
            degree={"Diploma in Computer"}
            university={"CAMBRIDGE UNIVERSITY"}
            content={
              "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
            }
          />
          <Experince
            year={"2017-2018"}
            degree={"UI/UX Designer"}
            university={"CAMBRIDGE UNIVERSITY"}
            content={
              "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
            }
          />
          <button className="rounded-full m-auto bg-yellow-400 font-medium text-lg px-12 py-3 text-black mt-8">
            Download cv
          </button>
        </div>
      </div>
    </>
  );
}

export default Resume;
