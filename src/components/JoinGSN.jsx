

// import React from "react";


// const JoinGSN = () => {
//   return (
//     <section className="join-modern-section">
//       <div className="join-hero">
//         <h2>Join GSN</h2>
//         <p>Step into a Network like No Other</p>
//         <span className="hero-tagline">
//           Where smarter tech meets real relationships and your journey begins.
//         </span>
//       </div>

//       <div className="join-grid">
//         <div className="info-box">
//           <h3>Why Join GSN?</h3>
//           <ul>
//             <li>🚀 Business growth like no other network.</li>
//             <li>🤝 Genuine connections beyond business cards.</li>
//             <li>🧠 Personal evolution guided weekly.</li>
//           </ul>

//           <h3>Who Can Join?</h3>
//           <ul>
//             <li>✔ Entrepreneurs, MSMEs, Solopreneurs & Professionals</li>
//             <li>✔ One member per category per chapter</li>
//           </ul>

//           <h3>How to Join?</h3>
//           <ol>
//             <li>Attend a Tuesday meeting (7-9 AM, Marriott Teynampet)</li>
//             <li>Fill the interest form</li>
//             <li>Pay ₹15,000/year and become a member</li>
//           </ol>
//         </div>

//         <div className="form-box">
//           <h3>Apply to Join</h3>
//           <form className="gsn-form">
//             <input type="text" placeholder="Full Name" required />
//             <input type="text" placeholder="Business Name" required />
//             <input type="text" placeholder="Type of Business" required />
//             <input type="text" placeholder="Location" required />
//             <input type="tel" placeholder="Phone" required />
//             <input type="email" placeholder="Email" required />
//             <textarea placeholder="Why do you want to join GSN?" required />
//             <input type="text" placeholder="How did you hear about us?" required />
//             <textarea placeholder="Tell us your goals…" required />
//             <button type="submit">Submit Application</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JoinGSN;

// import React, { useState, useEffect } from "react";

// const infoSlides = [
//   {
//     title: "Why Join GSN?",
//     content: [
//       "🚀 Business growth like no other network.",
//       "🤝 Genuine connections beyond business cards.",
//       "🧠 Personal evolution guided weekly."
//     ]
//   },
//   {
//     title: "Who Can Join?",
//     content: [
//       "✔ Entrepreneurs, MSMEs, Solopreneurs & Professionals",
//       "✔ One member per category per chapter"
//     ]
//   },
//   {
//     title: "How to Join?",
//     content: [
//       "1. Attend a Tuesday meeting (7-9 AM, Marriott Teynampet)",
//       "2. Fill the interest form",
//       "3. Pay ₹15,000/year and become a member"
//     ]
//   }
// ];

// const JoinGSN = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % infoSlides.length);
//     }, 4000); // change every 4 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const current = infoSlides[currentSlide];

//   return (
//     <section className="join-modern-section">
//       <div className="join-hero">
//         <h2>Join GSN</h2>
//         <p>Step into a Network like No Other</p>
//         <span className="hero-tagline">
//           Where smarter tech meets real relationships and your journey begins.
//         </span>
//       </div>

//       <div className="join-grid">
//         <div className="info-box fade-slide">
//           <h3>{current.title}</h3>
//           <ul>
//             {current.content.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>

//         <div className="form-box">
//           <h3>Apply to Join</h3>
//           <form className="gsn-form">
//             <input type="text" placeholder="Full Name" required />
//             <input type="text" placeholder="Business Name" required />
//             <input type="text" placeholder="Type of Business" required />
//             <input type="text" placeholder="Location" required />
//             <input type="tel" placeholder="Phone" required />
//             <input type="email" placeholder="Email" required />
//             <textarea placeholder="Why do you want to join GSN?" required />
//             <input type="text" placeholder="How did you hear about us?" required />
//             <textarea placeholder="Tell us your goals…" required />
//             <button type="submit">Submit Application</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JoinGSN;
// // third design
// import React, { useState, useEffect } from "react";

// const infoSlides = [
//   {
//     title: "Why Join GSN?",
//     points: [
//       "🚀 Business growth like no other network.",
//       "🤝 Genuine connections beyond business cards.",
//       "🧠 Personal evolution guided weekly.",
//     ],
//   },
//   {
//     title: "Who Can Join?",
//     points: [
//       "✔ Entrepreneurs, MSMEs, Solopreneurs & Professionals",
//       "✔ One member per category per chapter",
//     ],
//   },
//   {
//     title: "How to Join?",
//     points: [
//       "1️⃣ Attend a Tuesday meeting (7-9 AM, Marriott Teynampet)",
//       "📝 Fill the interest form",
//       "💳 Pay ₹15,000/year and become a member",
//     ],
//   },
// ];

// const JoinGSN = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % infoSlides.length);
//     }, 4500); // 4.5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="join gsn" className="join-modern-section">
//       <div className="join-hero">
//         <h2>Join GSN</h2>
//         <p>Step into a Network like No Other</p>
//         <span className="hero-tagline">
//           Where smarter tech meets real relationships and your journey begins.
//         </span>
//       </div>

//       <div className="join-grid">
//         {/* Left animated info section */}
//         <div className="animated-info-box">
//           <div className="overlay-card">
//             <h3>{infoSlides[currentSlide].title}</h3>
//             <ul>
//               {infoSlides[currentSlide].points.map((point, index) => (
//                 <li key={index}>{point}</li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Right form section (unchanged) */}
//         <div className="form-box">
//           <h3>Apply to Join</h3>
//           <form className="gsn-form">
//             <input type="text" placeholder="Full Name" required />
//             <input type="text" placeholder="Business Name" required />
//             <input type="text" placeholder="Type of Business" required />
//             <input type="text" placeholder="Location" required />
//             <input type="tel" placeholder="Phone" required />
//             <input type="email" placeholder="Email" required />
//             <textarea placeholder="Why do you want to join GSN?" required />
//             <input type="text" placeholder="How did you hear about us?" required />
//             <textarea placeholder="Tell us your goals…" required />
//             <button type="submit">Submit Application</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JoinGSN;


// import React, { useState, useEffect } from "react";
// import emailjs from "@emailjs/browser";


// const infoSlides = [
//   {
//     title: "Why Join GSN?",
//     points: [
//       "🚀 Business growth like no other network.",
//       "🤝 Genuine connections beyond business cards.",
//       "🧠 Personal evolution guided weekly.",
//     ],
//   },
//   {
//     title: "Who Can Join?",
//     points: [
//       "✔ Entrepreneurs, MSMEs, Solopreneurs & Professionals",
//       "✔ One member per category per chapter",
//     ],
//   },
//   {
//     title: "How to Join?",
//     points: [
//       "1️⃣ Attend a Tuesday meeting (7-9 AM, Marriott Teynampet)",
//       "📝 Fill the interest form",
//       "💳 Pay ₹15,000/year and become a member",
//     ],
//   },
// ];

// const initialFormState = {
//   fullName: "",
//   businessName: "",
//   businessType: "",
//   location: "",
//   phone: "",
//   email: "",
//   reason: "",
//   referral: "",
//   goals: "",
// };

// const JoinGSN = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [formData, setFormData] = useState(initialFormState);
//   const [status, setStatus] = useState("idle"); // idle | sending | success | error

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % infoSlides.length);
//     }, 4500);
//     return () => clearInterval(interval);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("sending");

//     const serviceID = "service_jw7w2h6";
//     const templateID = "template_1lrafh2"; // Replace with your actual EmailJS template ID
//     const userID = "Pd6q-_BpsCmfu0tEt";

//     try {
//       await emailjs.send(serviceID, templateID, formData, userID);
//       setStatus("success");
//       setFormData(initialFormState);
//     } catch (error) {
//       console.error("EmailJS Error:", error);
//       setStatus("error");
//     }
//   };

//   return (
//     <section id="join gsn" className="join-modern-section">
//       <div className="join-hero">
//         <h2>Join GSN</h2>
//         <p>Step into a Network like No Other</p>
//         <span className="hero-tagline">
//           Where smarter tech meets real relationships and your journey begins.
//         </span>
//       </div>

//       <div className="join-grid">
//         {/* Left animated info section */}
//         <div className="animated-info-box">
//           <div className="overlay-card">
//             <h3>{infoSlides[currentSlide].title}</h3>
//             <ul>
//               {infoSlides[currentSlide].points.map((point, index) => (
//                 <li key={index}>{point}</li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Right form section */}
//         <div className="form-box">
//           <h3>Apply to Join</h3>
//           <form className="gsn-form" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Full Name"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               name="businessName"
//               placeholder="Business Name"
//               value={formData.businessName}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               name="businessType"
//               placeholder="Type of Business"
//               value={formData.businessType}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               name="location"
//               placeholder="Location"
//               value={formData.location}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <textarea
//               name="reason"
//               placeholder="Why do you want to join GSN?"
//               value={formData.reason}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               name="referral"
//               placeholder="How did you hear about us?"
//               value={formData.referral}
//               onChange={handleChange}
//               required
//             />
//             <textarea
//               name="goals"
//               placeholder="Tell us your goals…"
//               value={formData.goals}
//               onChange={handleChange}
//               required
//             />
//             {status === "success" && (
//               <p className="text-success">✅ Application sent! We'll be in touch soon.</p>
//             )}
//             {status === "error" && (
//               <p className="text-danger">⚠ Something went wrong. Try again later.</p>
//             )}
//             <button type="submit" disabled={status === "sending"}>
//               {status === "sending" ? "Submitting..." : "Submit Application"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JoinGSN;


// final one
// import React, { useState, useEffect, useRef } from "react";
// import emailjs from "@emailjs/browser";
// import ReCAPTCHA from "react-google-recaptcha";

// const infoSlides = [
//   {
//     title: "Why Join GSN?",
//     points: [
//       "🚀 Business growth like no other network.",
//       "🤝 Genuine connections beyond business cards.",
//       "🧠 Personal evolution guided weekly.",
//     ],
//   },
//   {
//     title: "Who Can Join?",
//     points: [
//       "✔ Entrepreneurs, MSMEs, Solopreneurs & Professionals",
//       "✔ One member per category per chapter",
//     ],
//   },
//   {
//     title: "How to Join?",
//     points: [
//       "1️⃣ Attend a Tuesday meeting (7-9 AM, Marriott Teynampet)",
//       "📝 Fill the interest form",
//       "💳 Pay ₹15,000/year and become a member",
//     ],
//   },
// ];

// const initialFormState = {
//   fullName: "",
//   businessName: "",
//   businessType: "",
//   location: "",
//   phone: "",
//   email: "",
//   reason: "",
//   referral: "",
//   goals: "",
// };

// const JoinGSN = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [formData, setFormData] = useState(initialFormState);
//   const [status, setStatus] = useState("idle"); // idle | sending | success | error
//   const recaptchaRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % infoSlides.length);
//     }, 4500);
//     return () => clearInterval(interval);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("sending");
  
//     try {
//       const token = await recaptchaRef.current.executeAsync();
//       recaptchaRef.current.reset();
  
//       const finalData = {
//         ...formData,
//         "g-recaptcha-response": token,
//       };
//       console.log("Final data being sent:", finalData);
  
//       console.log("Sending to EmailJS:", finalData);
  
//       const response = await emailjs.send(
//         "service_jw7w2h6",
//         "template_1lrafh2",
//         finalData,
//         "Pd6q-_BpsCmfu0tEt"
//       );
  
//       console.log("EmailJS response:", response);
//       setStatus("success");
//       setFormData(initialFormState);
//     } catch (error) {
//       console.error("Caught EmailJS error:", error); // Log the error details
//       setStatus("error");
//     }
//   };    

//   return (
//     <section id="join gsn" className="join-modern-section">
//       <div className="join-hero">
//         <h2>Join GSN</h2>
//         <p>Step into a Network like No Other</p>
//         <span className="hero-tagline">
//           Where smarter tech meets real relationships and your journey begins.
//         </span>
//       </div>

//       <div className="join-grid">
//         {/* Left animated info section */}
//         <div className="animated-info-box">
//           <div className="overlay-card">
//             <h3>{infoSlides[currentSlide].title}</h3>
//             <ul>
//               {infoSlides[currentSlide].points.map((point, index) => (
//                 <li key={index}>{point}</li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Right form section */}
//         <div className="form-box">
//           <h3>Apply to Join</h3>
//           <form className="gsn-form" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Full Name"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               name="businessName"
//               placeholder="Business Name"
//               value={formData.businessName}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               name="businessType"
//               placeholder="Type of Business"
//               value={formData.businessType}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               name="location"
//               placeholder="Location"
//               value={formData.location}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <textarea
//               name="reason"
//               placeholder="Why do you want to join GSN?"
//               value={formData.reason}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               name="referral"
//               placeholder="How did you hear about us?"
//               value={formData.referral}
//               onChange={handleChange}
//               required
//             />
//             <textarea
//               name="goals"
//               placeholder="Tell us your goals…"
//               value={formData.goals}
//               onChange={handleChange}
//               required
//             />

//             {/* reCAPTCHA (invisible) */}
//             <ReCAPTCHA
//   sitekey="6LdNuRsrAAAAANQjpsEibuc6SH6fIKu80kBH1-cD" // Replace with your actual site key
//   size="invisible"
//   ref={recaptchaRef}
// />

//             {status === "success" && (
//               <p className="text-success">✅ Application sent! We'll be in touch soon.</p>
//             )}
//             {status === "error" && (
//               <p className="text-danger">⚠ Something went wrong. Try again later.</p>
//             )}

//             <button type="submit" disabled={status === "sending"}>
//               {status === "sending" ? "Submitting..." : "Submit Application"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JoinGSN;

// last final one 

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const infoSlides = [
  {
    title: "Why Join GSN?",
    points: [
      "🚀 Business growth like no other network.",
      "🤝 Genuine connections beyond business cards.",
      "🧠 Personal evolution guided weekly.",
    ],
  },
  {
    title: "Who Can Join?",
    points: [
      "✔ Entrepreneurs, MSMEs, Solopreneurs & Professionals",
      "✔ One member per category per chapter",
    ],
  },
  {
    title: "How to Join?",
    points: [
      "1️⃣ Attend a Tuesday meeting (7-9 AM, Marriott Teynampet)",
      "📝 Fill the interest form",
      "💳 Pay ₹15,000/year and become a member",
    ],
  },
];

const initialFormState = {
  fullName: "",
  businessName: "",
  businessType: "",
  location: "",
  phone: "",
  email: "",
  reason: "",
  referral: "",
  goals: "",
};

const JoinGSN = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % infoSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    setStatus("sending");

    try {
      const finalData = { ...formData };

      const response = await emailjs.send(
        "service_jw7w2h6",
        "template_1lrafh2",
        finalData,
        "Pd6q-_BpsCmfu0tEt"
      );

      console.log("EmailJS response:", response);
      setStatus("success");
      setFormData(initialFormState);
    } catch (error) {
      console.error("Caught EmailJS error:", error);

      if (error instanceof Error) {
        alert(`Error: ${error.message}`);
      } else {
        alert("An unknown error occurred. Please try again later.");
      }

      setStatus("error");
    }
  };

  return (
    <section id="join gsn" className="join-modern-section">
      <div className="join-hero">
        <h2>Join GSN</h2>
        <p>Enter a Network Beyond Compare</p>
        <span className="hero-tagline">
        Where Advanced Technology Meets Authentic Connections—And Your Journey Starts Here.
        </span>
      </div>

      <div className="join-grid">
        {/* Left animated info section */}
        <div className="animated-info-box"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/image.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overlay-card">
            <h3>{infoSlides[currentSlide].title}</h3>
            <ul>
              {infoSlides[currentSlide].points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right form section */}
        <div className="form-box">
          <h3>Apply to Join</h3>
          <form className="gsn-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              aria-label="Full Name"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="businessName"
              placeholder="Business Name"
              value={formData.businessName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="businessType"
              placeholder="Type of Business"
              value={formData.businessType}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="reason"
              placeholder="Why do you want to join GSN?"
              value={formData.reason}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="referral"
              placeholder="How did you hear about us?"
              value={formData.referral}
              onChange={handleChange}
              required
            />
            <textarea
              name="goals"
              placeholder="Tell us your goals…"
              value={formData.goals}
              onChange={handleChange}
              required
            />

            {status === "success" && (
              <p className="text-success">✅ Application sent! We'll be in touch soon.</p>
            )}
            {status === "error" && (
              <p className="text-danger">⚠ Something went wrong. Try again later.</p>
            )}

            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinGSN;