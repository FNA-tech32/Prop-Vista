import React from "react";
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import data from "../utils/slider.json";
import { sliderSettings } from "../utils/common";

export default function Residencies() {
  return (
    <section id="residencies">
      <div className="relative w-full overflow-hidden p-6 sm:p-16 md:p-8 min-[1536px]:mx-auto min-[1536px]:max-w-7xl max-sm:pt-20">
        <div className="mb-8 flex flex-col items-start justify-center max-sm:items-center">
          <span className="text-[1.2rem] font-semibold text-orange-500 sm:text-2xl">
            Best Choices
          </span>
          <span className="text-2xl font-bold text-primary sm:text-[2rem]">
            Popular Residencies
          </span>
        </div>

        <Swiper {...sliderSettings} className="!overflow-visible">
          <SliderButton />
          {data.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="mx-auto flex max-w-max flex-col items-start justify-center gap-[0.6rem] rounded-[10px] p-4 transition-all duration-300 ease-in hover:scale-[1.025] hover:cursor-pointer hover:bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(136,160,255,0.46)_217.91%)] hover:shadow-[0px_72px_49px_-51px_rgba(136,160,255,0.21)]">
                <img src={card.image} alt="property" className="w-full max-w-[15rem]" />
                <span className="text-[1.2rem] font-semibold text-muted">
                  <span className="text-orange-500">$</span>
                  <span>{card.price}</span>
                </span>
                <span className="text-[1.5rem] font-bold text-primary">{card.name}</span>
                <span className="w-[15rem] text-[0.7rem] text-muted">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function SliderButton() {
  const swiper = useSwiper();
  return (
    <div className="absolute -top-16 right-0 flex items-center justify-center gap-4 max-sm:static max-sm:mt-8">
      <button
        onClick={() => {
          swiper.slidePrev();
        }}
        className="cursor-pointer rounded-[5px] border-0 bg-white px-[0.8rem] py-[0.2rem] text-[1.2rem] text-[blue] shadow-[0px_0px_5px_1px_rgba(0,0,0,0.25)] hover:scale-110 hover:bg-[rgb(232,232,232)]"
      >
        &lt;
      </button>
      <button
        onClick={() => {
          swiper.slideNext();
        }}
        className="cursor-pointer rounded-[5px] border-0 bg-white px-[0.8rem] py-[0.2rem] text-[1.2rem] text-[blue] shadow-[0px_0px_5px_1px_rgba(0,0,0,0.25)] hover:scale-110 hover:bg-[rgb(232,232,232)]"
      >
        &gt;
      </button>
    </div>
  );
}
