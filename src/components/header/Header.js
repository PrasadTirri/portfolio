import React from "react";
import Cta from "./Cta";
import Me from "../../assets/mypic.png";
import HeaderSocial from "./HeaderSocial";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Prasad Tirri</h1>
        <h3 className="text-light">Fullstack Developer</h3>
        <Cta />
        <HeaderSocial />

        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
