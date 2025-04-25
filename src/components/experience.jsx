import React from "react";
import { FaTools, FaUsers, FaTrophy } from "react-icons/fa";

const GSNExperience = () => {
  return (
    <section id="experience" className="gsn-experience">
      <div className="experience-container">
        <h2 className="experience-title">GSN Experience</h2>
        <p className="experience-subtitle">
          A Smarter Way to Connect and Grow
        </p>
        <p className="experience-description">
          Networking’s future starts here—GSN turns the old ways upside down. Here’s what it feels like:
        </p>

        <div className="experience-grid">
          <div className="experience-card">
            <FaTools className="experience-icon" />
            <h3>Smarter Tools Every Week</h3>
            <p>Get personalized nudges to spark opportunities—crafted just for you.</p>
          </div>

          <div className="experience-card">
            <FaUsers className="experience-icon" />
            <h3>Real Connections in Small Teams</h3>
            <p>Join tight-knit groups to share, support, and succeed together.</p>
          </div>

          <div className="experience-card">
            <FaTrophy className="experience-icon" />
            <h3>Results That Matter</h3>
            <p>Turn relationships into wins with a system that’s leading the charge.</p>
          </div>
        </div>

        <p className="experience-highlight">
          From GSN Vikshan’s vibrant meetings in Chennai to chapters worldwide, we’re not just ahead—we’re rewriting the game. 
        </p>

        <div className="experience-container">
          <a href="Join Gsn" className="experience-button">Join GSN Now</a>
        </div>
      </div>
    </section>
  );
};

export default GSNExperience;
