import React from "react";
import { BackgroundGradientDemo } from "../components/BackgroundGradientDemo";

function Img() {
  return (
    <div className="h-full w-full bg-[#f2ccc3] mt-10 flex flex-col gap-6 sm:gap-12 justify-center items-center">
      <div
        className="relative text-3xl font-bold text-center w-3/4 m-4 p-4 rounded-xl text-[#f0f1f2] overflow-hidden"
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
        <div data-aos="fade-right" data-aos-duration="2000" data-aos-delay="300">
        <span className="relative z-10 text-[19px] md:text-3xl w-fit"  >⋆  🎀  𝐿o𝓋𝑒 𝓂𝒶𝒹𝑒 𝓊𝓈 o𝓃𝑒  🎀  ⋆</span></div>
      </div>
      <div className="w-full h-full flex flex-row justify-evenly items-center rounded-2xl gap-4">
        {/* <BackgroundGradient/>
         */}
         <div  data-aos="fade-right" data-aos-duration="2000" data-aos-delay="100">
        <BackgroundGradientDemo
          imgSrc="/renu.JPG"
          name="Renu"
          description="💎💞 𝒲𝒾𝓉𝒽 𝒽𝒾𝓂, 𝑒𝓋𝑒𝓇𝓎 𝓂o𝓂𝑒𝓃𝓉 𝒻𝑒𝑒𝓁𝓈 𝓁𝒾𝓀𝑒 𝒶 𝒷𝓁𝑒𝓈𝓈𝒾𝓃𝑔."
          style={{
            fontFamily: "Great Vibes ,Dancing Script"
          }} 
        />
        </div>
        <div  data-aos="fade-left" data-aos-duration="2000" data-aos-delay="100">
        <BackgroundGradientDemo
          imgSrc="/yoguu.JPG"
          name="Yogesh"
          description="💎💞 𝐹𝑜𝓇  𝒽𝑒𝓇, 𝐼’𝓁𝓁 𝒸𝒽𝑜𝑜𝓈𝑒 𝓁𝑜𝓋𝑒 𝒾𝓃 𝑒𝓋𝑒𝓇𝓎 𝓁𝒾𝒻𝑒𝓉𝒾𝓂𝑒."
        />
        </div>
      </div>
    </div>
  );
}

export default Img;
