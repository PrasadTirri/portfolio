import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";
import "./Header.css";

const HeaderSocial = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/prasad-tirri-253571229"
        target="__blank"
      >
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/PrasadTirri" target="__blank">
        {" "}
        <BsGithub />
      </a>
      <a href="https://dribble.com" target="__blank">
        <BsDribbble />
      </a>
    </div>
  );
};

export default HeaderSocial;
