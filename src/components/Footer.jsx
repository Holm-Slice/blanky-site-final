import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div id="footer">
      <h1>Connect with us at... </h1>
      <h2>Blanky.band@gmail.com</h2>
      <div className="social-icons">
        <a
          href="https://www.instagram.com/blanky.band?igsh=MWc0eTVmbng4YjBhdw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/Blanky.band/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
    </div>
  );
}

export default Footer;
