import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import send from "../../assets/send-svgrepo-com.svg";
import "./contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p9h0wip",
        "template_ev4dzai",
        form.current,
        "ErdIAOIQ5HpgW1yz7" // Public key as a string, not an object
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
        },
        (error) => {
          console.log("Error:", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
          <div className="contact__content">
            <h3 className="contact__title">Talk to me</h3>

            <div className="contact__info">
              <div className="contact__card">
                <i className="bx bxs-envelope contact__card-icon"></i>

                <h3 className="contact__card-title">Email</h3>
                <span className="contact__card-data">
                  margomikhaell@gmail.com
                </span>

                <a
                  href="mailto:margomikhaell@gmail.com"
                  className="contact__button"
                >
                  Write me
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>

              <div className="contact__card">
                <i className="bx bxl-whatsapp contact__card-icon"></i>

                <h3 className="contact__card-title">Number</h3>
                <span className="contact__card-data">+201013103051</span>

                <a
                  href="https://api.whatsapp.com/send/?phone=201013103051&text&type=phone_number&app_absent=0"
                  target="_blank"
                  className="contact__button"
                >
                  Write me
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>

              <div className="contact__card">
                <i className="bx bxl-linkedin contact__card-icon"></i>

                <h3 className="contact__card-title">Linkedin</h3>
                <span className="contact__card-data">Margo Mikhael</span>

                <a
                  href="https://www.linkedin.com/in/margo-mikhael"
                  className="contact__button"
                  target="_blank"
                >
                  Write me{" "}
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact__content">
            <h3 className="contact__title">Let's connect</h3>

            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="contact__form-div">
                <label className="contact__form-tag">Name</label>
                <input
                  type="text"
                  name="name"
                  className="contact__form-input"
                  placeholder="Insert your name"
                />
              </div>

              <div className="contact__form-div">
                <label className="contact__form-tag">Mail</label>
                <input
                  type="email"
                  name="email"
                  className="contact__form-input"
                  placeholder="Insert your email"
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag">Message</label>
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  className="contact__form-input"
                  placeholder="Write me your Message"
                ></textarea>
              </div>

              <button href="#contact" className="button button--flex">
                Send Message
                <img
                  src={send}
                  alt="send icon"
                  className="send__icon"
                  id="svg-icon"
                />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
