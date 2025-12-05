import React from "react";
import CountdownTimer from "../components/CountdownTimer";
import { PointerHighlightDemo } from "../components/PointerHighlightDemo";

function TopOfHomePAge() {
  return (
    <>
      <div className="flex justify-center flex-col lg:flex-row items-center gap-8  md:gap-16 p-8 ">
        <div className="w-full flex flex-col justify-center items-center">
          <PointerHighlightDemo />

          <div
            className="relative text-3xl font-bold text-center sm:w-3/4 m-4 p-4 rounded-xl text-[#f0f1f2] overflow-hidden" data-aos="zoom-in-left" data-aos-duration="2000"
          // data-aos-delay="300"
            style={{
              boxShadow: "inset 0 18px 18px #cd6474",
            }}       >
            <div
              style={{
                filter: "blur(100px)",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 0,
                width: "100%",
                // boxShadow: " inset 0 12px 8px #cd6474",
              }}
            />
            <span className="relative z-10 text-[#cd6474]">
              {" "}
              <CountdownTimer targetDate="2026-02-23T00:00:00" />
            </span>
          </div>
        </div>

        <div
          style={{
            boxShadow: `
    0 0 20px 5px #FFFFFF,
    0 0 40px 25px #cd6474AA
  `,

            // boxShadow: "  0 4px 14px #cd6474,#19324d",
          }}
          className="relative flex justify-center items-center w-full xl:w-[750px] xl:h-[750px] bg-gradient-to-br from-[#19324d] to-[#cd6474] rounded-full shadow-xl overflow-hidden" data-aos="zoom-in-down" data-aos-duration="2000"
        >
          <div className="flex justify-center items-center rounded-full w-[360px] h-[360px] sm:w-[580px] sm:h-[580px] xl:w-[700px] xl:h-[700px] bg-gradient-to-r from-[#cd6474] via-[#8c3e54] to-[#361f2d] p-4 shadow-lg border-[6px] border-white">
            <div className="flex justify-center items-center rounded-full w-[340px] h-[340px] sm:w-[550px] sm:h-[550px] xl:w-[650px] xl:h-[650px] bg-[#162c44] p-2 shadow-md border-[5px] border-[#cd6474]/70">
              <div className="flex justify-center items-center rounded-full w-[320px] h-[320px] sm:w-[520px] sm:h-[520px] xl:w-[600px] xl:h-[600px] bg-gradient-to-tl from-[#cd6474] to-[#531a2c] shadow border-[3px] border-[#19324d]/40">
                <img
                  src="/home.jpg"
                  alt="food image"
                  className="rounded-full w-[295px] h-[295px] sm:w-[460px] sm:h-[460px] xl:w-[550px] xl:h-[550px] object-cover border-[4px] border-[#cd6474]/25 shadow-2xl"
                />
              </div>
            </div>
          </div>
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              boxShadow: "0 0 120px 40px #cd647466, 0 0 220px 90px #19324d55",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default TopOfHomePAge;



