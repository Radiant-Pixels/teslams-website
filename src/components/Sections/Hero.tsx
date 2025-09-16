import React from "react";
import { BackgroundRippleEffect } from "../ui/background-ripple-effect";
import RegisterButton from "../register-btn";
import EventsButton from "../events-btn";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import Image from "next/image";
import HeroMarquee from "../ui/diagonal-marquee";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex flex-col md:flex-row h-screen w-full overflow-hidden"
      >
        {/* Left light section (100% on mobile, 66% on md+) */}
        <div className="relative w-full md:w-2/3 flex flex-col justify-start px-6 sm:px-10 md:px-16 pt-32 space-y-6">
          {/* Ripple Background */}
          <div className="absolute inset-0 z-1">
            <BackgroundRippleEffect />
          </div>

          {/* Small Top Label */}
          <p className="text-sm font-medium text-gray-500 tracking-wide z-10">
            27 / 09
          </p>

          {/* Big Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 z-10">
            TESLAMS <span className="text-indigo-600">&#39;25</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 max-w-md z-10 text-base sm:text-lg">
            INNOVATION THROUGH <span className="text-yellow-600">SPARKS</span>{" "}
            <br /> IGNITING <span className="text-yellow-600">MINDS</span>,
            SHAPING <span className="text-yellow-600">FUTURES</span>
          </p>
          <div className="flex flex-col gap-4 z-10 mt-2 w-max">
            <RegisterButton />
            <EventsButton />
          </div>
          <div className="mt-6 z-10 flex">
            <FlipClockCountdown
              to={new Date("2025-09-27T00:00:00Z")}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md"
            />
          </div>
        </div>

        {/* Right dark section (hidden on mobile, 33% on md+) */}
        <div className="hidden md:block w-1/3 bg-indigo-900 relative">
          <Image
            src="/images/robo.png"
            alt="Hero Graphic"
            width={400}
            height={400}
            className="absolute bottom-16 scale-150 -left-50 z-0"
          />

          <Image
            src="/images/cog.png"
            alt="Cog Graphic"
            width={150}
            height={150}
            className="absolute bottom-115 right-24 invert z-0"
          />

          <div className="absolute bottom-4 right-4 text-white text-sm z-10">
            <p>Made with <span className="text-red-500">❤️</span> by{" "}
              <a
                href="https://www.radiantpixels.com"
                target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Radiant Pixels
            </a>
          </p>

          <Image
            src={"/images/radiantpixels.png"}
            alt="Radiant Pixels"
            width={200}
            height={200}
            className="absolute bottom-0 right-0 scale-75 z-0 invert"
          />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
