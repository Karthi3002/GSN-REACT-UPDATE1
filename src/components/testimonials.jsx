
// import React, { useState } from "react";


// const testimonialsData = [
//   {
//     message:
//       "GSN turned my network into my strength—pure magic!",
//     name: "Rajesh",
//     role: "Financial Consultant",
//   },
//   {
//     message:
//       "Six weeks in, I’ve got clients and confidence I never imagined.",
//     name: "Priya",
//     role: "Wellness Coach",
//   },
//   {
//     message:
//       "This is more than a group—it’s a game-changer that knows me.",
//     name: "Karthik",
//     role: "Branding Expert",
//   },
// ];

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
//     );
//   };

//   const { message, name, role } = testimonialsData[currentIndex];

//   return (
//     <section className="testimonial-section">
//       <div className="testimonial-container">
//         <div className="testimonial-image">
//           <img src="img/about.jpg" alt="GSN Members" />
//         </div>
//         <div className="testimonial-content">
//           <div className="testimonial-card">
//             <div className="quote">“</div>
//             <p className="message">{message}</p>
//             <p className="name">{name}</p>
//             <p className="role">{role}</p>
//             <div className="navigation-buttons">
//               <button onClick={prevTestimonial}>&lt;</button>
//               <button onClick={nextTestimonial}>&gt;</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import React, { useState } from 'react';


const testimonials = [
  {
    message: "The personalized guidance and early access to opportunities as a member of Our Teams have been a true blessing. I’ve gained insights and connections that have opened doors I couldn’t have imagined.",
    name: "Nirmal",
    role: "Business Owner",
    avatar: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png" // placeholder
  },
  {
    message: "Being part of Our Teams has helped me grow professionally. The support system here is unmatched.",
    name: "Priya",
    role: "Startup Founder",
    avatar: "https://cdn-icons-png.flaticon.com/512/9131/9131510.png"
  },
  {
    message: "Great community and helpful sessions. I found the perfect mentorship I was looking for.",
    name: "Rahul",
    role: "Marketing Lead",
    avatar: "https://cdn-icons-png.flaticon.com/512/9131/9131545.png"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-heading">
    <h2>Testimonials</h2>
    <h3>Real Wins, Real Stories</h3>
    <p>Hear from GSN members who’ve turned networking into success</p>
  </div>
      <div className="testimonial-wrapper">
        <div className="testimonial-image">
          <img src="img/testi.jpg" alt="" />
          <div className="image-overlay">
    <div className="overlay-content">
      <p>Ready to write your own success story?</p>
      <a href="#join" className="join-btn">Join GSN Today</a>
    </div>
  </div>
        </div>
        <div className="testimonial-content">
          <div className="quote-icon">❝</div>
          <p className="testimonial-message">{testimonials[currentIndex].message}</p>
          <div className="testimonial-user">
            <img className="avatar" src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
            <h3>{testimonials[currentIndex].name}</h3>
            <span>{testimonials[currentIndex].role}</span>
          </div>
          <div className="dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleSelect(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
