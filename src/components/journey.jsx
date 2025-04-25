// import React from "react";


// const journeyData = [
//   {
//     week: "Week 1:",
//     text: "Orientation & first 1-to-1s begin",
//     image: "/img/journey/j1.png",
//     side: "left",
//   },
//   {
//     week: "Week 2–6:",
//     text: "Meet 2 members each week, build connections",
//     image: "/img/journey/j2.png",
//     side: "right",
//   },
//   {
//     week: "",
//     text: "Discover how to present yourself clearly, speak powerfully, and attract aligned referrals",
//     image: "/img/journey/j3.png",
//     side: "left",
//   },
//   {
//     week: "",
//     text: "Learn the GSN culture of abundance, gratitude, and disciplined growth",
//     image: "/img/journey/j4.png",
//     side: "right",
//   },
//   {
//     week: "Week 7:",
//     text: "Step into full-speed, smart networking with AI insights",
//     image: "/img/journey/j5.png",
//     side: "left",
//   },
// ];

// const Journey = () => {
//   return (
//     <section className="journey-section">
//       <h2 className="journey-heading">Your Journey Begins with You</h2>
//       <p className="journey-subheading">
//         Every new member is guided through a subtle transformation — in business, mindset, and networking.
//       </p>
//       <div className="timeline-container">
//         {journeyData.map((step, index) => (
//           <div key={index} className={`timeline-item ${step.side}`}>
//             <div className="timeline-content">
//               <img src={step.image} alt={`Step ${index + 1}`} />
//               <div className="timeline-text">
//                 {step.week && <strong>{step.week}</strong>}
//                 <p>{step.text}</p>
//               </div>
//             </div>
//             <span className="dot" />
//           </div>
//         ))}
//         <div className="timeline-line" />
//       </div>
//     </section>
//   );
// };

// export default Journey;
import React from "react";

const journeyData = [
  {
    week: "Week 1:",
    text: "Orientation & first 1-to-1s begin",
    image: "/img/journey/j1.png",
    side: "left",
  },
  {
    week: "Week 2–6:",
    text: "Meet 2 members each week, build connections",
    image: "/img/journey/j2.png",
    side: "right",
  },
  {
    week: "",
    text: "Discover how to present yourself clearly, speak powerfully, and attract aligned referrals",
    image: "/img/journey/j3.png",
    side: "left",
  },
  {
    week: "",
    text: "Learn the GSN culture of abundance, gratitude, and disciplined growth",
    image: "/img/journey/j4.png",
    side: "right",
  },
  {
    week: "Week 7:",
    text: "Step into full-speed, smart networking with AI insights",
    image: "/img/journey/j5.png",
    side: "left",
  },
];

const Journey = () => (
  <section className="journey-section">
    <h2 className="journey-heading">Your Journey Begins with You</h2>
    <p className="journey-subheading">
      Every new member is guided through a subtle transformation — in business, mindset, and networking.
    </p>

    <div className="timeline-grid">
      {/* Vertical line spanning full height */}
      <div className="timeline-vertical-line" />

      {journeyData.map((step, idx) => (
        <React.Fragment key={idx}>
          {/* Left card */}
          <div className={`timeline-card left`}>
            {step.side === "left" && (
              <div className="timeline-content">
                <img src={step.image} alt={`Step ${idx + 1}`} />
                <div>
                  {step.week && <strong>{step.week}</strong>}
                  <p>{step.text}</p>
                </div>
              </div>
            )}
          </div>

          {/* Center dot */}
          <div className="timeline-center">
            <span className="timeline-dot" />
          </div>

          {/* Right card */}
          <div className={`timeline-card right`}>
            {step.side === "right" && (
              <div className="timeline-content">
                <img src={step.image} alt={`Step ${idx + 1}`} />
                <div>
                  {step.week && <strong>{step.week}</strong>}
                  <p>{step.text}</p>
                </div>
              </div>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  </section>
);

export default Journey;
