import { useState, useEffect } from "react";
import "./Hero.css";

import hero1 from "../../assets/images/hero1.jpg";
import hero2 from "../../assets/images/hero2.jpg";
import hero3 from "../../assets/images/hero3.jpg";

function Hero() {
  const slides = [hero1, hero2, hero3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-section">

      {/* Left Slider */}
      <div className="hero-slider">

        <img
          src={slides[current]}
          alt="Hero"
          className="hero-image"
        />

        <button className="hero-btn left" onClick={prevSlide}>
          &#10094;
        </button>

        <button className="hero-btn right" onClick={nextSlide}>
          &#10095;
        </button>

        <div className="hero-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={current === index ? "dot active" : "dot"}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>

      </div>

      {/* Right Panel */}

      <div className="vision-panel">

        <div className="vision-box">
          <h3>OUR VISION</h3>

          <p>
            To become a leading Ayurveda institution in education,
            research and patient care.
          </p>
        </div>

        <div className="mission-box">
          <h3>OUR MISSION</h3>

          <p>
            To provide quality education, healthcare and
            preserve the rich heritage of Ayurveda.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Hero;