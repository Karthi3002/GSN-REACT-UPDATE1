
import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="video-container">
        <video autoPlay loop muted playsInline>
          <source src={`${process.env.PUBLIC_URL}/img/hero.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>

                {/* Buttons Section */}
                <div className="header-buttons">
                  <a href="#join gsn" className="btn-custom">Join the Future of Networking</a>
                  <a href="#book-call" className="btn-custom">Book a Discovery Call</a>
                  <a href="#gsn-difference" className="btn-custom">See the GSN Difference</a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};