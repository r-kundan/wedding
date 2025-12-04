"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "./hooks/useOutsideClick";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);
 

  
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    const isSmallScreen = window.matchMedia("(max-width: 1023px)").matches; // Tailwind's lg breakpoint

    if (active && typeof active === "object" && isSmallScreen) {
      document.body.style.overflow = "visible";
      document.body.style.height = "100vh"; // Full viewport height
      document.body.style.position = "fixed"; // Prevent scrolling
      document.body.style.width = "100%"; // Full width
      document.body.style.top = `-${window.scrollY}px`; // Store scroll position
    } else {
      // Restore body styles when modal is closed
      const scrollY = document.body.style.top;
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";

      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              style={{
                background:
                  "linear-gradient( to bottom, #cd6474, #19324d,#19324d,#19324d)",
                boxShadow: " inset 0 -1px 20px #FFFFFF",
              }}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%] flex flex-col  sm:rounded-3xl overflow-hidden"
            
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-90 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg  "
                  style={{
                    boxShadow: "  0 -1px 20px #FFFFFF",
                  }}
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-[#fffffff8] text-[25px]"
                      data-aos="fade-right"
                      data-aos-duration="3000"
                      data-aos-delay="300"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-[#eeeeeee9] text-lg"
                      data-aos="fade-right"
                      data-aos-duration="4000"
                      data-aos-delay="500"
                      data-
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div
                  className="pt-4 relative px-4"
                  data-aos="fade-right"
                  data-aos-duration="5000"
                  data-aos-delay="700"
                  data-aos-easing="linear"
                >
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-[#f7f7f7cd] bold italic text-md md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul
        className="max-w-4xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 items-start justify-between p-4 lg:gap-14 gap-8"
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        {cards.map((card, index) => (
          <motion.div
            style={{
              background:
                "linear-gradient(to bottom, #19324d,#19324d,#19324d, #cd6474)",
              boxShadow: "0 6px 16px #000000",
            }}
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col bg-[#19324d] h-90 md:h-full rounded-xl shadow-4xl"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  style={{ boxShadow: "0 3px 14px  #cddceb" }}
                  className="h-60 md:h-90 w-full rounded-lg object-cover object-top shadow-3xl"
                  data-aos="flip-left"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-100 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-300 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "19Feb,2026",
    title: "🌼 HALDI",
    src: "haldi.png",

    content: () => {
      return (
        <p>
          Sunshine, turmeric, and endless smiles—
          <br /> <br />
          as we prepare the bride & groom with blessings wrapped in yellow.
          Let’s paint their beginning with joy, laughter, and golden memories.
        </p>
      );
    },
  },
  {
    description: "20Feb,2026",
    title: "🎶 MEHNDI ",
    src: "mehndi.png",

    content: () => {
      return (
        <p>
          Henna blooms and love whispers.
          <br /> <br />
          Each curve and swirl tells a story of joy, tradition, and a bond for
          life. Join us as we adorn the bride with the art of blessings.
        </p>
      );
    },
  },

  {
    description: "21Feb,2026",
    title: "💃 SANGEET ",
    src: "sangeet.png",

    content: () => {
      return (
        <p>
          Lights, music, and love in the air—
          <br /> <br />
          tonight we celebrate with dance, rhythm, and sparkling hearts.Let the
          night sing the story of their love.
        </p>
      );
    },
  },
  {
    description: "22Feb,2026",
    title: "🐎 BARAT",
    src: "barat.png",

    content: () => {
      return (
        <p>
          The groom arrives in celebration, music, and royal charm. <br />{" "}
          <br />A parade of joy, dancing feet, and heartfelt excitement— as he
          comes to claim his bride and begin a new journey together.
        </p>
      );
    },
  },
];
