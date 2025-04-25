// import React, { useState, useEffect } from 'react';


// const comingSoonItems = [
//   "New Chapter Launches",
//   "Expanding Connections",
//   "Unleashing New Opportunities",
//   "Empowering New Communities"
// ];

// const Chapters = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex(prev => (prev + 1) % comingSoonItems.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="chapters-section">
//       <div className="overlay-box">
//         <h2 className="section-title">Chapters</h2>
//         <p className="subtitle">GSN – Growing Worldwide</p>
//         <p className="description">
//           Our network starts strong and scales fast—leading the charge into networking’s future.
//         </p>

//         <div className="current-chapter">
//           <h3>Current Chapter</h3>
//           <p>Our Launchpad, redefining networking every Tuesday at our vibrant hub.</p>
//         </div>

//         <div className="coming-soon">
//           <h3>Coming Soon</h3>
//           <div className="carousel">
//             <p>{comingSoonItems[currentIndex]}</p>
//           </div>
//           <div className="buttons">
//             <a href="#contact" className="btn-contact">Contact Us to Start One</a>
//             <a href="https://maps.app.goo.gl/peLwTAJLZgPBxLBT6" target="_blank" rel="noopener noreferrer" className="btn-map">View Map</a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Chapters;

// working code
// import React from "react";


// const Chapters = () => (
//   <section className="chapters-section">
//     <h2 className="chapters-title">Chapters</h2>
//     <div className="chapters-header">
//       <div className="subtitle">GSN – Growing Worldwide.</div>
//       <div className="description">
//         Our network starts strong and scales fast—leading the charge into networking’s future
//       </div>
//     </div>
//     <div className="map-container">
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8375657617967!2d80.24524987321112!3d13.046009313246353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52664f46d28afb%3A0xf3dd735b0b1f2c43!2sCourtyard%20by%20Marriott%20Chennai!5e0!3m2!1sen!2sin!4v1744736214113!5m2!1sen!2sin"
//         width="600"
//         height="450"
//         style={{ border: 0 }}
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//         title="GSN Location Map"
//         className="map-iframe"
//       />
//       <div className="chapter-card">
//         <img
//           src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
//           alt="Chapter"
//           className="chapter-photo"
//         />
//         <div className="chapter-info">
//           <div className="chapter-current">Current Chapter</div>
//           <div className="chapter-location">GSN Vikshan – Chennai, India</div>
//           <div className="chapter-desc">
//             Our Launchpad, redefining networking every Tuesday at Marriott Teynampet.
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="chapters-footer">
//       <em>
//         Coming Soon - From Chennai to cities, states, and countries—GSN is rewriting the map of success.
//       </em>
//       <br />
//       <strong>Want a chapter near you?</strong>
//     </div>
//   </section>
// );

// export default Chapters;
import React, { useState, useEffect } from 'react';


const Carousel = ({ messages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  return <em className="carousel-text">{messages[currentIndex]}</em>;
};

const Chapters = () => {
  const comingSoonMessages = [
    "Coming Soon - From Chennai to cities, states, and countries—GSN is rewriting the map of success.",
    "Want a chapter near you?",
  ];

  return (
    <section className="chapters-section">
      <h2 className="chapters-title">Chapters</h2>
      <div className="chapters-header">
        <div className="subtitle">GSN – Growing Worldwide.</div>
        <div className="description">
          Our network starts strong and scales fast—leading the charge into networking’s future
        </div>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8375657617967!2d80.24524987321112!3d13.046009313246353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52664f46d28afb%3A0xf3dd735b0b1f2c43!2sCourtyard%20by%20Marriott%20Chennai!5e0!3m2!1sen!2sin!4v1744736214113!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="GSN Location Map"
          className="map-iframe"
        />
        <div className="chapter-card">
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
            alt="Chapter"
            className="chapter-photo"
          />
          <div className="chapter-info">
            <div className="chapter-current">Current Chapter</div>
            <div className="chapter-location">GSN Vikshan – Chennai, India</div>
            <div className="chapter-desc">
              Our Launchpad, redefining networking every Tuesday at Marriott Teynampet.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="chapters-footer">
        <Carousel messages={comingSoonMessages} />
      </div> */}
    </section>
  );
};

export default Chapters;
