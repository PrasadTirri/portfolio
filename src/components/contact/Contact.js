import React from "react";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";

import { AiOutlineWhatsApp } from "react-icons/ai";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_dwlsfvq",
      "template_ftkicas",
      form.current,
      "PzT7_VSFc66J2Acej"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Getin Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>prasastirri3@gmail.com</h5>
            <a href="mailto:prasadtirri333@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+91 77023......</h5>
            <a
              href="https://api.whatsapp.com/send?phone=917702341208"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
