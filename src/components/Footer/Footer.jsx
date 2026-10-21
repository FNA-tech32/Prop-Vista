import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="f-wrapper" id="footer">
      <div className="f-container innerWidth paddings flexCenter">
        <div className="left-side flexColStart">
          <div className="brand">
            <span className="brand-mark" />
            <span className="brand-name">Prop Vista</span>
          </div>
          <span className="secondaryText">
            Our vision is to make all people
            <br />
            the best place to live for them.
          </span>
        </div>
        <div className="right-side flexColStart">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
            480 Market Street, Suite 210
            <br />
            San Francisco, CA 94105
            <br />
            +1 (415) 555-0198
            <br />
            hello@propvista.com
          </span>
          <div className="f-menu flexCenter">
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
