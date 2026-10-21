import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../utils/accordion";

const frame =
  "h-[35rem] w-[30rem] overflow-hidden rounded-t-[15rem] border-8 border-[rgb(232_232_232/93%)] max-[800px]:h-[25rem] max-[800px]:w-[95%]";

export default function Values() {
  const ValuesToggleClassName = ({ expanded, onSetClassName }) => {
    useEffect(() => {
      onSetClassName(expanded ? "expanded" : "collapsed");
    }, [expanded, onSetClassName]);
  };

  return (
    <section className="pt-20" id="values">
      <div className="flex w-full flex-wrap items-center justify-around gap-y-8 p-6 sm:p-16 md:p-8 min-[1536px]:mx-auto min-[1536px]:max-w-7xl max-sm:flex-col [&>div]:flex-1">
        <div>
          <div className={frame}>
            <img src="./value.png" alt="value" className="h-full w-full" />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <span className="text-[1.2rem] font-semibold text-orange-500 sm:text-2xl">
            Our Value
          </span>
          <span className="text-2xl font-bold text-primary sm:text-[2rem]">
            Value We Give to You
          </span>
          <span className="text-[0.9rem] text-muted">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </span>

          <Accordion
            allowMultipleExpanded={false}
            preExpanded={[0]}
            className="mt-8 !border-0"
          >
            {data.map((item, index) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`mb-5 !border-t-0 overflow-hidden rounded-lg border border-[rgba(128,128,128,0.143)] bg-white ${
                    className === "expanded" ? "rounded-md shadow-card" : ""
                  }`}
                  key={index}
                  uuid={index}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="!flex w-full cursor-pointer items-center justify-between !bg-white !p-4 before:!hidden hover:!bg-white">
                      <AccordionItemState>
                        {({ expanded }) => (
                          <ValuesToggleClassName
                            expanded={expanded}
                            onSetClassName={setClassName}
                          />
                        )}
                      </AccordionItemState>

                      <div className="flex items-center justify-center rounded-[5px] bg-lightBlue p-2.5 text-brand [&_svg]:text-brand">
                        {item.icon}
                      </div>
                      <span className="text-[1.1rem] font-bold text-primary">
                        {item.heading}
                      </span>

                      <div className="flex items-center justify-center rounded-[5px] bg-lightBlue p-2.5 text-brand [&_svg]:text-brand">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="text-[0.9rem] text-muted">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
