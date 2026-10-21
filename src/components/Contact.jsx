import React from "react";

import { MdCall, MdEmail } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const frame =
  "h-[35rem] w-[30rem] overflow-hidden rounded-t-[15rem] border-8 border-white/10 max-[800px]:h-[25rem] max-[800px]:w-[95%]";

const iconBox =
  "flex items-center justify-center rounded-[5px] bg-lightBlue p-2.5 text-brand [&_svg]:text-brand";

function Mode({ icon, title, detail, action }) {
  return (
    <div className="flex w-64 flex-col items-center justify-center gap-4 rounded border border-[rgba(128,128,128,0.143)] p-4 transition-all duration-300 ease-in hover:scale-110 hover:shadow-card max-sm:w-full">
      <div className="flex w-full items-center justify-start gap-[1.6em]">
        <div className={iconBox}>{icon}</div>
        <div className="flex flex-col items-start justify-center">
          <span className="text-[1.1rem] font-semibold text-primary">{title}</span>
          <span className="break-words text-[0.9rem] text-muted">{detail}</span>
        </div>
      </div>
      <div className="flex w-full cursor-pointer items-center justify-center rounded bg-lightBlue px-[1.4rem] py-[0.6rem] text-[0.9rem] font-semibold text-brand transition-all duration-300 ease-in hover:scale-[0.8] hover:bg-blue-gradient hover:text-white">
        {action}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="max-sm:pt-20">
      <div className="flex w-full flex-wrap items-center justify-around gap-y-8 p-6 sm:p-16 md:p-8 min-[1536px]:mx-auto min-[1536px]:max-w-7xl">
        <div className="flex flex-col items-start justify-center gap-2">
          <span className="text-[1.2rem] font-semibold text-orange-500 sm:text-2xl">
            Our Contact Us
          </span>
          <span className="text-2xl font-bold text-primary sm:text-[2rem]">
            Easy to contact us
          </span>
          <span className="text-[0.9rem] text-muted">
            We always ready to help by providijng the best services for you. We
            beleive a good blace
            <br /> to live can make your life better
          </span>

          <div className="mt-8 flex flex-col items-start justify-center gap-4 max-sm:w-full">
            <div className="flex items-center justify-start gap-6 max-sm:w-full max-sm:flex-col">
              <Mode
                icon={<MdCall size={25} />}
                title="Call"
                detail="+1 (415) 555-0198"
                action="Call Now"
              />
              <Mode
                icon={<BsFillChatDotsFill size={25} />}
                title="Chat"
                detail="+1 (415) 555-0142"
                action="Chat Now"
              />
            </div>

            <div className="flex items-center justify-start gap-6 max-sm:w-full max-sm:flex-col">
              <Mode
                icon={<BsFillChatDotsFill size={25} />}
                title="Video Call"
                detail="meet@propvista.com"
                action="Video Call Now"
              />
              <Mode
                icon={<HiChatBubbleBottomCenter size={25} />}
                title="Message"
                detail="+1 (415) 555-0176"
                action="Message Now"
              />
            </div>

            <div className="flex items-center justify-start gap-6 max-sm:w-full max-sm:flex-col">
              <Mode
                icon={<MdEmail size={25} />}
                title="Email"
                detail="hello@propvista.com"
                action="Email Now"
              />
            </div>
          </div>
        </div>

        <div>
          <div className={frame}>
            <img src="./contact.jpg" alt="contactImage" className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
