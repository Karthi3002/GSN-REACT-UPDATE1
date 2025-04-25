// import React from "react";

// export const Services = (props) => {
//   return (
//     <div id="services" className="text-center ">
//       <div className="container">
//         <div className="section-title">
//           <h2>Our Services</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
//             dapibus leonec.
//           </p>
//         </div>
//         <div className="row">
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.name}-${i}`} className="col-md-4">
//                   {" "}
//                   <i className={d.icon}></i>
//                   <div className="service-desc">
//                     <h3>{d.name}</h3>
//                     <p>{d.text}</p>
//                   </div>
//                 </div>
//               ))
//             : "loading"}
//         </div>
//       </div>
//     </div>
//   );
// };
import React from "react";
import { FaHandshake, FaUsers, FaBullhorn, FaLightbulb, FaChartLine, FaCheckCircle } from "react-icons/fa";


const serviceData = [
  { icon: <FaHandshake />, name: "Smarter Referrals", text: "Unlock high-value opportunities with tech that’s ahead of the curve." },
  { icon: <FaUsers />, name: "Leadership Edge", text: "Sharpen your skills to lead and inspire." },
  { icon: <FaBullhorn />, name: "Pitch Power", text: "Stand out and win clients with confidence." },
  { icon: <FaLightbulb />, name: "Success Secrets", text: "Master business and mindset through our unique sessions." },
  { icon: <FaChartLine />, name: "Personal Growth Path", text: "Evolve with tools and support tailored just for you." },
  { icon: <FaCheckCircle />, name: "Purpose-Driven Wins", text: "Build a business that matters, step by step." }
];

const Services = () => {
  return (
    <section className="services">
      <div className="services-container">
      <h2 className="services-main-title">Services</h2> 
        <h2 className="services-title">What GSN Brings You</h2>
        <p className="services-description">
        Join a network that goes beyond meetings—it's your launchpad to future success.
        </p>
        <div className="services-grid">
          {serviceData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.name}</h3>
              <p className="service-text">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
