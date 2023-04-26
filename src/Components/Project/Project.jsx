import React from "react";
import Subtitle from "../subtitle/Subtitle";
import "./Project.css";
function Project(props) {
  return (
    <>
      <div className="container">
        <Subtitle
          head={" Projects"}
          smallhead={"Our Projects"}
          pcontent={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
          }
        />
        <div className="project flex flex-wrap justify-evenly mt-24">
          <div className="minproject ">
            <img className="w-full object-cover" src="/images/project-4.jpg" />
          </div>
          <div className="maxproject">
            <img className="w-full object-cover" src="/images/project-5.jpg" />
          </div>

          <div className="maxproject ">
            <img className="w-full object-cover" src="/images/project-1.jpg" />
          </div>
          <div className="minproject">
            <img className="w-full object-cover" src="/images/project-3.jpg" />
          </div>

          <div className="maxproject">
            <img className="w-full object-cover" src="/images/project-6.jpg" />
          </div>
          <div className="minproject">
            <img className="w-full object-cover" src="/images/project-3.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
