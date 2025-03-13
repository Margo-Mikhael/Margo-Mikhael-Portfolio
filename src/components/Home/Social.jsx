import React from "react";
import "./home.css";

export default function Social() {
  return (
    <>
      <div className="home__social">
        <a
          href="https://www.linkedin.com/in/margo-mikhael/"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-linkedin-alt"></i>
        </a>
        <a
          href="https://github.com/Margo-Mikhael"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-github-alt"></i>
        </a>
        <a
          href="https://www.instagram.com/margo.mikhael/"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-instagram"></i>
        </a>
      </div>
    </>
  );
}
