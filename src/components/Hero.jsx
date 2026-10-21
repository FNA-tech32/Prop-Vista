import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const frame =
  "h-[35rem] w-[30rem] overflow-hidden rounded-t-[15rem] border-8 border-white/10 max-[800px]:h-[25rem] max-[800px]:w-[95%]";

export default function Hero() {
  return (
    <section className="relative py-20 text-white" id="hero">
      <div className="flex w-full flex-wrap items-end justify-around gap-y-8 p-6 sm:p-16 md:p-8 min-[1536px]:mx-auto min-[1536px]:max-w-7xl max-[800px]:mt-8">
        <div className="flex flex-col items-start justify-center gap-12">
          <div className="relative z-[1]">
            <div className="absolute -top-[10%] right-[28%] -z-10 h-16 w-16 rounded-full bg-orange-gradient" />
            <motion.h1
              initial={{ y: "3rem", opacity: 0 }}
              animate={{ y: 0, opacity: "1" }}
              transition={{ duration: 2, type: "spring" }}
              className="text-[3.8rem] font-semibold leading-[4rem] max-[800px]:text-[2.5rem] max-[800px]:leading-[3rem]"
            >
              Discover <br />
              Most Suitable <br />
              Property
            </motion.h1>
          </div>

          <div>
            <p className="text-[0.9rem] text-muted">
              Find a variety of properties that suit you very easily
              <br /> Forget all difficulties in finding a residence for you
            </p>
          </div>

          <div className="flex w-full flex-wrap items-center justify-between gap-y-8 rounded-[5px] border-[3px] border-[rgba(120,120,120,0.374)] bg-white px-4 py-2">
            <HiLocationMarker color="#4066ff" size={25} />
            <input type="text" className="min-w-0 flex-1 border-none bg-transparent text-ink outline-none" />
            <button className="cursor-pointer rounded border-0 bg-blue-gradient px-[1.4rem] py-[0.6rem] font-medium text-white transition-all duration-300 ease-in hover:scale-110">
              Search
            </button>
          </div>

          <div className="flex w-full flex-wrap items-center justify-between gap-y-8 max-[800px]:justify-center max-[800px]:gap-6">
            <div className="flex flex-col items-center justify-center">
              <span className="text-[2rem]">
                <CountUp start={8800} end={9000} duration={4} />{" "}
                <span className="text-orange-500">+</span>
              </span>
              <span className="text-[0.9rem] text-muted">Premium Products</span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="text-[2rem]">
                <CountUp start={1950} end={2000} duration={4} />{" "}
                <span className="text-orange-500">+</span>
              </span>
              <span className="text-[0.9rem] text-muted">Happy Customer</span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="text-[2rem]">
                <CountUp end={28} /> <span className="text-orange-500">+</span>
              </span>
              <span className="text-[0.9rem] text-muted">Awards Winning</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-y-8">
          <motion.div
            className={frame}
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: "1" }}
            transition={{ duration: 2, type: "spring" }}
          >
            <img src="./hero-image.png" alt="hero" className="h-full w-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
