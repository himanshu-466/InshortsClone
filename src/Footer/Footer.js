import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/piyush-eon" target="__blank">
          Himanshu Agrawal
        </a>
      </span>
      <hr style={{ width: "90%" }} />
    </div>
  );
};

export default Footer;
