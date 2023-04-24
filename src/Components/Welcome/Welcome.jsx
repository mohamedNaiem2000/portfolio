import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "./Welcome.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function Welcome(props) {
  return (
    <>
      <div className="container">
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper mt-5"
        >
          <SwiperSlide className="flex justify-evenly">
            <div className="text text-left text-5xl font-bold p-0">
              <h1 className="text-2xl">Hello!</h1>
              <h1>
                I'm a
                <span className="text-yellow-600">
                  {" "}
                  Web
                  <br />
                  Designer based
                </span>{" "}
                <br />
                in Egypt
              </h1>
              <div className="buttons mt-6">
                <button className="rounded-full bg-yellow-400 font-medium text-lg px-6 py-3 text-black">
                  Hire me
                </button>
                <button className="rounded-full bg-white py-3 px-6 text-lg text-black ml-4">
                  My Works
                </button>
              </div>
            </div>
            <img src="/images/Mohamed1.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-evenly">
            <div className="text text-left text-5xl font-bold p-0">
              <h1 className="text-2xl">Hello!</h1>
              <h1>
                I'm a
                <span className="text-yellow-600">
                  {" "}
                  Web
                  <br />
                  Designer based
                </span>{" "}
                <br />
                in Egypt
              </h1>
              <div className="buttons mt-6">
                <button className="rounded-full bg-yellow-400 font-medium text-lg px-6 py-3 text-black">
                  Hire me
                </button>
                <button className="rounded-full bg-white py-3 px-6 text-lg text-black ml-4">
                  My Works
                </button>
              </div>
            </div>
            <img src="/images/Mohamed2.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-evenly">
            <div className="text text-left text-5xl font-bold p-0">
              <h1 className="text-2xl">Hello!</h1>
              <h1>
                I'm a
                <span className="text-yellow-600">
                  Web
                  <br />
                  Designer based
                </span>
                <br />
                in Egypt
              </h1>
              <div className="buttons mt-6">
                <button className="rounded-full bg-yellow-400 font-medium text-lg px-6 py-3 text-black">
                  Hire me
                </button>
                <button className="rounded-full bg-white py-3 px-6 text-lg text-black ml-4">
                  My Works
                </button>
              </div>
            </div>
            <img src="/images/Mohamed3.jpeg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Welcome;
