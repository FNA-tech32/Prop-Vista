import React from "react";

export default function Companies() {
  return (
    <section>
      <div className="flex w-full flex-col items-center justify-around gap-4 p-6 sm:flex-row sm:p-16 md:p-8 min-[1536px]:mx-auto min-[1536px]:max-w-7xl">
        <img src="./prologis.png" alt="logo1" className="w-36" />
        <img src="./tower.png" alt="logo2" className="w-36" />
        <img src="./equinix.png" alt="logo3" className="w-36" />
        <img src="./realty.png" alt="logo4" className="w-36" />
      </div>
    </section>
  );
}
