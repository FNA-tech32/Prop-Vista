import React from "react";

export default function GetStart() {
  return (
    <section id="getStart">
      <div className="flex w-full flex-wrap items-center justify-center gap-y-8 p-6 sm:p-16 md:p-8 min-[1536px]:mx-auto min-[1536px]:max-w-7xl">
        <div className="flex w-full flex-col items-center justify-center gap-6 rounded-[10px] border-[6px] border-[#5d77d6] bg-[#4161df] p-8 text-center">
          <span className="text-2xl font-semibold text-white sm:text-[2rem]">
            Get started with Prop Vista
          </span>
          <span className="text-[0.9rem] text-white/60">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>
          <button className="cursor-pointer rounded-[10px] border-2 border-white bg-[#5a73d7] px-[1.4rem] py-[0.6rem] font-medium text-white shadow-card transition-all duration-300 ease-in hover:scale-110">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
