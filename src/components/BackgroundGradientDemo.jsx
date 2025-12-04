"use client";
import React from "react";
import { BackgroundGradient } from "./ui/BackgroundGradient";

export function BackgroundGradientDemo({ imgSrc, name, description }) {
  return (
    <div>
      <BackgroundGradient className="rounded-22px max-w-sm p-3 m-2  bg-zinc-900">
        <img
          src={imgSrc}
          alt={name}
          height="400"
          width="400"
          className="object-contain rounded-2xl"
          
          style={{
            boxShadow: "0px 1px 8px 1px #FFFFFF",
          }}
        />
        <p className="text-4xl  mt-4 flex justify-center mb-2 text-neutral-200" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300"
                  style={{ fontFamily: "Great Vibes ,Dancing Script" }}
>
          {name}
        </p>
        <p className="text-sm md:text-lg font-bold text-[#ffffffb0]" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
          {description}
        </p>
      </BackgroundGradient>
    </div>
  );
}
