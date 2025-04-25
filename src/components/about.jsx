
import React, { useEffect, useState } from "react";

const About = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector(".about-image img");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about">
      <div className="container">
        {/* Centered Title */}
        <h2 className="about-title">About Us</h2>

        <div className="about-content">
          {/* Left Column - Image */}
          <div className="about-image">
            <img
              src="img/about.jpg"
              alt="About GSN"
              className={isVisible ? "show" : ""}
            />
          </div>

          {/* Right Column - Text */}
          <div className="about-text">
            <h2>Welcome to <span>GSN</span></h2>
            <p className="about-description">
              {data ? data.paragraph : "Loading..."}
            </p>

            <h3>Our Vision</h3>
            <p>{data ? data.vision : "Loading..."}</p>

            <h3>Our Mission</h3>
            <p>{data ? data.mission : "Loading..."}</p>

            {/* <a href="/contact" className="btn-gold">Get in Touch</a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
