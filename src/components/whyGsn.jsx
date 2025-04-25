import React from "react";


const WhyGsn = () => {
  return (
    <section className="why-gsn-section">
      <h2 className="why-gsn-heading">Why GSN – The New Way to Network</h2>
      <div className="why-gsn-content">
        <div className="why-gsn-text">
          <h3>Why GSN is Different</h3>
          <ul>
            <li>We believe the right mindset attracts the right opportunities.</li>
            <li>GSN blends human emotion with smart systems to build real relationships.</li>
            <li>Our AI gives you nudges, matches, and insights tailored to your goals.</li>
            <li>Here, business growth starts from the inside — with clarity, focus, and abundance.</li>
            <li>No sales pressure. Just purpose-driven connections that elevate everyone.</li>
          </ul>
        </div>
        <div className="why-gsn-image">
          <img src={`${process.env.PUBLIC_URL}/img/whygsnimg.png`} alt="Thinking woman" />
        </div>
      </div>
    </section>
  );
};

export default WhyGsn;
