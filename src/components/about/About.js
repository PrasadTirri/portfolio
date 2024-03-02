import React from "react";
import "./About.css";
import Me from "../../assets/mypic-about.png";
import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>1.5+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            • Results-oriented Front-End Developer with over 1.6 years of
            experience in crafting dynamic and user friendly web applications.{" "}
            <br />
            <span>
              • Proficient in ReactJS, TypeScript, and Redux, optimizing
              high-performance, scalable apps with clean code and architecture.
            </span>{" "}
            <br />
            <span>
              • Implemented custom hooks and useReducer for effective state
              management, ensuring optimized performance and enhanced user
              experience.
            </span>{" "}
            <br />
            <span>
              • Experience in using ReactJS components, Forms, Events, Keys,
              Router, Redux and Animations.{" "}
            </span>
            <br />
            <span>
              • Experienced as a User Interface/ Front End Developer in
              developing applications using HTML/HTML5, CSS/CSS3 grid, Flexbox,
              JavaScript and JSON.{" "}
            </span>
            <br />
            <span>
              • Having Positive Attitude, Patience, Hardworking nature and Quick
              Learning.
            </span>
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
