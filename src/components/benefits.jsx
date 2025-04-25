import React, { useEffect, useState } from "react";

const Benefits = () => {
  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data);
        if (Array.isArray(data.benefits)) {
          setBenefits(data.benefits);
        } else {
          console.error("Unexpected JSON format:", data);
        }
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <section className="benefits-section">
      <h2 className="benefits-title">GSN Benefits</h2>
      <div className="benefits-container">
        {benefits.length > 0 ? (
          benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <h3 className="benefit-heading">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
              <span className="benefit-icon">{benefit.icon}</span>
            </div>
          ))
        ) : (
          <p>Loading benefits...</p>
        )}
      </div>
    </section>
  );
};

export default Benefits;
