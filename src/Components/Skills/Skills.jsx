import React from "react";
import Subtitle from "../subtitle/Subtitle";
import Progress from "../Progressbar/Progress";

function Skills(props) {
  return (
    <div className="container ">
      <Subtitle
        head={"My Skills"}
        smallhead={"Skills"}
        pcontent={
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
        }
      />
      <div className="flex justify-evenly flex-wrap ">
        <Progress course={"HTML"} rate={"90"} />
        <Progress course={"CSS"} rate={"80"} />
        <Progress course={"JS"} rate={"70"} />
        <Progress course={"JQUERY"} rate={"60"} />
        <Progress course={"PHOTOSHOP"} rate={"50"} />
        <Progress course={"WordPress"} rate={"40"} />
      </div>
    </div>
  );
}

export default Skills;
