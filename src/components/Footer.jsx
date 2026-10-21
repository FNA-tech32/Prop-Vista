import React from "react";

export default function Footer() {
  return (
    <section id="footer">
      <div className="flex w-full flex-wrap items-center justify-between gap-y-8 p-6 sm:p-16 md:p-8 min-[1536px]:mx-auto min-[1536px]:max-w-7xl max-sm:flex-col">
        <div className="flex flex-col items-start justify-center gap-4 max-sm:items-center">
          <div className="flex items-center gap-[0.55rem]">
            <span className="h-[1.15rem] w-[1.15rem] shrink-0 rounded-full bg-orange-500" />
            <span className="text-[1.35rem] font-bold tracking-[-0.03em] text-primary">
              Prop Vista
            </span>
          </div>
          <span className="text-[0.9rem] text-muted">
            Our vision is to make all people
            <br />
            the best place to live for them.
          </span>
        </div>
        <div className="flex flex-col items-start justify-center max-sm:items-center">
          <span className="text-2xl font-bold text-primary sm:text-[2rem]">
            Information
          </span>
          <span className="text-[0.9rem] text-muted">
            480 Market Street, Suite 210
            <br />
            San Francisco, CA 94105
            <br />
            +1 (415) 555-0198
            <br />
            hello@propvista.com
          </span>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 font-medium">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}
