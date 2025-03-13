import React from "react";
import Slider from "react-slick";
import "./certficates.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import we from "../../assets/Certficates/Hacking-We.jpg";
import udemy from "../../assets/Certficates/UC-37a8ac16-bcc3-4d1c-9ffb-69a598d1d571.jpg";
import career from "../../assets/Certficates/Margo-Mikhael.jpg";
import icpc from "../../assets/Certficates/ICPC-Contest_page-0001.jpg";
import autonoma from "../../assets/Certficates/9DD598E3-0F49-4CCE-8CBC-4EB4637C490A-export_page-0001.jpg";
import aast from "../../assets/Certficates/9DD598E3-0F49-4CCE-8CBC-4EB4637C490A-export_page-0002.jpg";
import route from "../../assets/Certficates/9DD598E3-0F49-4CCE-8CBC-4EB4637C490A-export_page-0003.jpg";
import vodafone from "../../assets/Certficates/vodafone.jpg";

export default function Certficates() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="section cert" id="cert">
        <h2 className="section__title">Certificates</h2>
        <span className="section__subtitle">My Achievements</span>
        <div className="cert__container container">
          <Slider {...settings}>
            <div>
              <img
                src={vodafone}
                alt="Vodafone Certificate"
                className="cert__img"
              />
            </div>
            <div>
              <img
                src={udemy}
                alt="Web Development Certificate"
                className="cert__img"
              />
            </div>
            <div>
              <img
                src={career}
                alt="Career Certificate"
                className="cert__img"
              />
            </div>
            <div>
              <img src={route} alt="Route Certificate" className="cert__img" />
            </div>
            <div>
              <img
                src={autonoma}
                alt="Autonoma Certificate"
                className="cert__img"
              />
            </div>
            <div>
              <img src={icpc} alt="Route Certificate" className="cert__img" />
            </div>
            <div>
              <img src={we} alt="Vodafone Certificate" className="cert__img" />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}
