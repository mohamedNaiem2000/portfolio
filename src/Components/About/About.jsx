import React from "react";
import "../About/About.css";

function About(props) {
  return (
    <>
      <div className="About mt-28 flex justify-center container text-center pb-8">
        <div className="aboutimg w-5/12">
          <div className="imgsrc w-9/12 m-auto">
            <img src="/images/Mohamed1.jpeg" />
          </div>
        </div>
        <div className="abouttext relative text-left">
          <h1 className="big absolute text-8xl  -z-10 font-extrabold top-4">
            About
          </h1>
          <h1 className="small ms-5 font-bold text-6xl">About me</h1>
          <p className="mt-9 ms-3 text-lg psmall">
            A small river named Duden flows by their place and supplies it
            <br /> with the necessary regelialia.
          </p>

          <div className="info">
            <ul className="text-lg mt-12">
              <li className="flex justify-start">
                <span className=" ms-3 me-6">name:</span>
                <span className="title ms-16">Mohamed Naiem</span>
              </li>

              <li className="flex justify-start mt-3">
                <span className=" ms-3 me-6">Date of birth:</span>
                <span className="title ms-3">July 12, 2000</span>
              </li>

              <li className="flex justify-start mt-3">
                <span className=" ms-3 me-6">Address:</span>
                <span className="title ms-10">Zagazig CA 97987 Egypt</span>
              </li>

              <li className="flex justify-start mt-3">
                <span className=" ms-3 me-6">Zip code:</span>
                <span className="title ms-9">1000</span>
              </li>

              <li className="flex justify-start mt-3">
                <span className=" ms-3 me-6">Email:</span>
                <span className="title ms-16">mohamednaiem735@gmail.com</span>
              </li>

              <li className="flex justify-start mt-3">
                <span className=" ms-3 me-10">Phone:</span>
                <span className="title ms-9">01062891914</span>
              </li>
            </ul>
          </div>
          <div className="counter mt-6 ms-3">
            <p className="text-3xl text-white">
              <span style={{ color: "#ffbd39" }} className="">
                120{" "}
              </span>
              Project complete
            </p>
            <button className="rounded-full bg-yellow-400 font-medium text-lg px-6 py-3 text-black mt-4">
              Download cv
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
