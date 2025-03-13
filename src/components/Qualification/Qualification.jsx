import React, { useState } from "react";
import "./qualification.css";

export default function Qualification() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personel journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Experience
            </div>
          </div>

          <div className="qualification__sections">
            <div
              className={
                toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Bachelor of Computer Science
                  </h3>
                  <span className="qualification__subtitle">
                    University of Northampton UK | AASTMT Program
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2019 - 2023
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                    Frontend Web development Diploma
                  </h3>
                  <span className="qualification__subtitle">Route Academy</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> Dec 2023 - Jul 2024
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Frontend Bootcamp</h3>
                  <span className="qualification__subtitle">
                    Career 180 | Learn it
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> Aug 2024 - Dec2024
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Web Masters</h3>
                  <span className="qualification__subtitle">
                    Frontend Development internship
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> Jan 2025 - Present
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Vodafone</h3>
                  <span className="qualification__subtitle">
                    Vodanation Summer Internship
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>Jul 2023 - Aug 2023
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Universitat Autònoma de Barcelona
                  </h3>
                  <span className="qualification__subtitle">
                    {" "}
                    Summer Training in Artificial intelligence
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> Sep 2022
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
