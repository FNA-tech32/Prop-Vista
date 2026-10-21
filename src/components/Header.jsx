import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { HashLink as Link } from "react-router-hash-link";

export default function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleClick = () => {
    setMenuOpened((prev) => !prev);
  };

  return (
    <section className="fixed z-[9999] w-full bg-ink text-white">
      <div className="flex w-full flex-wrap items-center justify-between px-8 py-4 text-white/80">
        <Link to="#hero" className="flex items-center gap-[0.55rem] text-white">
          <span className="h-[1.15rem] w-[1.15rem] shrink-0 rounded-full bg-brand" />
          <span className="text-[1.35rem] font-bold tracking-[-0.03em] text-white">
            Prop Vista
          </span>
        </Link>

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            className={`flex flex-wrap items-center justify-center gap-8 [&_*]:hover:cursor-pointer max-md:absolute max-md:top-12 max-md:z-[9999] max-md:flex-col max-md:items-start max-md:rounded-[10px] max-md:bg-white max-md:p-12 max-md:font-medium max-md:text-ink max-md:shadow-[0px_4px_4px_rgba(0,0,0,0.05)] max-md:transition-all max-md:duration-300 max-md:ease-in ${
              menuOpened ? "max-md:right-16" : "max-md:-right-full"
            }`}
          >
            <Link to="#residencies">Residences</Link>
            <Link to="#values">Our Value</Link>
            <Link to="#contact">Contact Us</Link>
            <Link to="#getStart">Get Started</Link>
            <button className="cursor-pointer rounded border-0 bg-blue-gradient px-[1.4rem] py-[0.6rem] font-medium text-white transition-all duration-300 ease-in hover:scale-110">
              <Link to="#contact">Contact</Link>
            </button>
          </div>
        </OutsideClickHandler>
        <div className="hidden max-md:block">
          <BiMenuAltRight size={30} onClick={handleClick} />
        </div>
      </div>
    </section>
  );
}
