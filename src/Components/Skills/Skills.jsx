import React from "react";
import Subtitle from "../subtitle/Subtitle";
import Progress from "../Progressbar/Progress";

function Skills(props) {
  return (
    <div className="container pb-50">
      <Subtitle
        head={"My Skills"}
        smallhead={"Skills"}
        pcontent={
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
        }
      />
      <div className="flex justify-evenly flex-wrap ">
        <Progress course={"Html"} rate={"90%"}/>
        <Progress course={"Html"} rate={"80%"}/>
        <Progress course={"Html"} rate={"70%"}/>
        <Progress course={"Html"} rate={"50%"}/>
        <Progress course={"Html"} rate={"70%"}/>
        <Progress course={"Html"} rate={"50%"}/>
      </div>
    </div>
  );
}

export default Skills;
