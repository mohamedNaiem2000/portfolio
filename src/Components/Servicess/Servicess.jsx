import React from "react";
import Subtitle from "../subtitle/Subtitle";
import Subservice from "../Subservice/Subservice";

function Servicess(props) {
  return (
    <>
      <div className="container mb-12">
        <Subtitle
          head={"Services"}
          smallhead={"Services"}
          pcontent={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
          }
        />

        <div className="items flex flex-wrap justify-evenly">
          <Subservice
            logoIcon={<i className="fa-solid fa-magnifying-glass-chart"></i>}
            text={"Web Design"}
          />
          <Subservice
            logoIcon={<i className="fa-solid fa-flask-vial"></i>}
            text={"Phtography"}
          />
          <Subservice
            logoIcon={<i className="fa-regular fa-lightbulb"></i>}
            text={"WEB DEVELOPER"}
          />
          <Subservice
            logoIcon={<i className="fa-solid fa-magnifying-glass-chart"></i>}
            text={"Web Design"}
          />
          <Subservice
            logoIcon={<i className="fa-solid fa-flask-vial"></i>}
            text={"Phtography"}
          />
          <Subservice
            logoIcon={<i className="fa-regular fa-lightbulb"></i>}
            text={"WEB DEVELOPER"}
          />
        </div>
      </div>
    </>
  );
}

export default Servicess;
