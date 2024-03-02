import React from "react";
import CV from "../../assets/PrasadTirri.pdf";
import "./Header.css";

const Cta = () => {
  const handleSendEmail = () => {
    const emailAddress = "www.prasadtirri333@gmail.com"; // Your email address
    const subject = " ";
    const body = "";

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )} &body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download
      </a>
      <button onClick={handleSendEmail} className="btn btn-primary">
        Let's Talk
      </button>
    </div>
  );
};

export default Cta;
