import React from "react";
import "./NavBarNews.css";
import HambergerDrawer from "./HambergerDrawer";
function NavBarNews(props) {
  return (
    <div className="nav">
      <div className="icon">
        <HambergerDrawer setCategory={props.setCategory} />
      </div>
      <img
        style={{ cursor: "pointer" }}
        src="https://www.adgully.com/img/400/201804/inshorts-logo.jpg"
        height="70px"
        alt="News app Logo"
      />
    </div>
  );
}

export default NavBarNews;
