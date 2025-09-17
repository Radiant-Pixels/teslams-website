"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { m } from "framer-motion";
const marqueeData = [
  {
    content: (
      <>
        Gears are turning at{" "}
        <span className="text-black/50 font-caveat">RoboFest 2025</span> • Join
        the most awaited tech showdown • Unleash your bot’s full potential •{" "}
        <span className="text-black/50 font-caveat">
          Innovate • Compete • Win
        </span>{" "}
        • See you in the arena! •
      </>
    ),
    bg: "bg-[#ff9500]",
    textColor: "text-black",
    skew: "-2deg",
    duration: 20,
  },
  {
    content: (
      <>
        Register now at{" "}
        <span className="text-[#ff9500] font-caveat">
          registrations.isdlabsrm.in
        </span>{" "}
        • Be part of{" "}
        <span className="text-[#ff9500] font-caveat">
          SRM's premier robotics fest
        </span>{" "}
        • Show your metal • Compete with the best minds •{" "}
        <span className="text-[#ff9500] font-caveat">Let your bot speak</span> •
      </>
    ),
    bg: "bg-[#1f1f1f]",
    textColor: "text-white",
    skew: "2deg",
    duration: 12,
  },
];

export default function DiagonalMarquee() {
  const tickerRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    tickerRefs.current.forEach((ticker, index) => {
      if (!ticker) return;
      const inner = ticker.querySelector(".ticker-wrap");
      const content = inner?.querySelector(".ticker-text");
      const duration = Number(ticker.dataset.duration || 20);

      if (inner && content) {
        inner.appendChild(content.cloneNode(true));
        const animations: gsap.core.Tween[] = [];

        inner.querySelectorAll(".ticker-text").forEach((el) => {
          const anim = gsap.to(el, {
            x: "-100%",
            repeat: -1,
            duration,
            ease: "linear",
          });
          animations.push(anim);
        });

        ticker.addEventListener("mouseenter", () => {
          animations.forEach((a) => a.pause());
        });
        ticker.addEventListener("mouseleave", () => {
          animations.forEach((a) => a.play());
        });
      }
    });
  }, []);

  return (
    <section className="flex flex-col gap-32 min-h-screen justify-center overflow-hidden font-oswald">
      {marqueeData.map((marquee, idx) => (
        <div
          key={idx}
          className={`ticker scale-[1.1] ${marquee.bg}`}
          data-duration={marquee.duration}
          style={{ transform: `rotate(${marquee.skew})` }}
          ref={(el) => {
            tickerRefs.current[idx] = el;
          }}
        >
          <div className="ticker-wrap flex gap-8 whitespace-nowrap px-[1vw]">
            <div
              className={`ticker-text text-[clamp(40px,4.375vw,70px)] font-semibold ${marquee.textColor}`}
            >
              {marquee.content}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
