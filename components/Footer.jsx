import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer-container">
      <p>
        MG[dev] ElectricEdge | Cutting Edge Audio Accessories | © 2023 All
        Rights Reserved
      </p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
}

export default Footer;
