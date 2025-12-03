import React from "react";
import { ExpandableCardDemo } from "../components/ExpandableCardDemo";

function Events() {
  return (
    <div className="h-full w-full bg-[#f2ccc3] mt-10 flex flex-col justify-center items-center">
      <div
        className="relative text-3xl font-bold text-center w-3/4 p-2 m-2 md:m-4 md:p-4 rounded-xl text-[#f0f1f2] overflow-hidden"
        style={{
          boxShadow: "inset 0 18px 18px #FFFFFF",
        }}
        data-aos="zoom-in"
      >
        {/* Blurred background layer */}
        <div
          style={{
            background: "linear-gradient(to top, #19324d, #cd6474)",
            filter: "blur(4px)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            boxShadow: " inset 0 4px 8px #FFFFFF",
          }}
        />
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          <span className="relative z-10 text-FFFFFF text-[19px] md:text-3xl">
            ⋆ 🎀 𝒯𝑜𝑔𝑒𝓉𝒽𝑒𝓇 𝒯𝒽𝓇𝑜𝓊𝑔𝒽 𝐸𝓋𝑒𝓇𝓎 𝒯𝓇𝒶𝒹𝒾𝓉𝒾𝑜𝓃 🎀 ⋆
          </span>
        </div>
      </div>

      <ExpandableCardDemo />
    </div>
  );
}

export default Events;
