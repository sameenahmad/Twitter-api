import "./Headerstyle.css";
import twitter from "./twitter.png";
import React, { Component } from "react";
const Header = () => {
  return (
    <div className="header">
      <img src={twitter} />
      <div>
        <a href="#">Home</a>
        <a style={{ paddingLeft: "2rem" }} href="#">
          {" "}
          Toggle
        </a>
      </div>{" "}
    
    </div>
  );
};
export default Header;
