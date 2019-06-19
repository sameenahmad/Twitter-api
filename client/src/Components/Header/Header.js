import "./Headerstyle.css";
import twitter from "./twitter.png";
import React, { Component } from "react";
import Logincontrol from "./LoginControl";
const Header = () => {
  return (
    <div className="header">
      <img src={twitter} />
      <div className='links'>
        <a href="#">Home</a>
        <a href="#"><Logincontrol /></a>
      </div>{" "}
    </div>
  );
};
export default Header;
