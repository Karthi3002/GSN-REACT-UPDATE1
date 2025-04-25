// import { useState } from "react";
// import emailjs from "@emailjs/browser";
// import React from "react";

// const initialState = {
//   name: "",
//   email: "",
//   message: "",
// };
// export const Contact = (props) => {
//   const [formState, setFormState] = useState(initialState);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormState((prevState) => ({ ...prevState, [name]: value }));
//   };
//   const clearState = () => setFormState({ ...initialState });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, message } = formState;
//     console.log(name, email, message);

//     /* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */

//     const serviceID = "service_jw7w2h6";
//     const templateID = "template_u69302r";
//     const userID = "Pd6q-_BpsCmfu0tEt";

//     emailjs
//       .sendForm(serviceID, templateID, e.target, userID)
//       .then(
//         (result) => {
//           console.log(result.text);
//           //clearState();
// // Send auto-reply to user
// const autoReplyTemplateID = "template_6kl9fo7"; // Replace with your auto-reply template ID
// const templateParams = {
//   email: email,
//   user_name: name,
//   // Add other parameters required by your auto-reply template
//   message: message,
// };
// console.log("Sending auto-reply...");
// console.log(templateParams);

// emailjs
//   .send(serviceID, autoReplyTemplateID, templateParams, userID)
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       ).then(
//         (autoResult) => {
//           console.log("Auto-reply sent:", autoResult);
//         },
//         (error) => {
//           console.log("Error sending auto-reply:", error.text);
//         }
//       );

//   };
//   return (
//     <div>
//       <div id="contact">
//         <div className="container">
//           <div className="col-md-8">
//             <div className="row">
//               <div className="section-title">
//                 <h2>Get In Touch</h2>
//                 <p>
//                   Please fill out the form below to send us an email and we will
//                   get back to you as soon as possible.
//                 </p>
//               </div>
//               <form name="sentMessage" validate onSubmit={handleSubmit}>
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         className="form-control"
//                         placeholder="Name"
//                         required
//                         onChange={handleChange}
//                       />
//                       <p className="help-block text-danger"></p>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         className="form-control"
//                         placeholder="Email"
//                         required
//                         onChange={handleChange}
//                       />
//                       <p className="help-block text-danger"></p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <textarea
//                     name="message"
//                     id="message"
//                     className="form-control"
//                     rows="4"
//                     placeholder="Message"
//                     required
//                     onChange={handleChange}
//                   ></textarea>
//                   <p className="help-block text-danger"></p>
//                 </div>
//                 <div id="success"></div>
//                 <button type="submit" className="btn btn-custom btn-lg">
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//           <div className="col-md-3 col-md-offset-1 contact-info">
//             <div className="contact-item">
//               <h3>Contact Info</h3>
//               <p>
//                 <span>
//                   <i className="fa fa-map-marker"></i> Address
//                 </span>
//                 {props.data ? props.data.address : "loading"}
//               </p>
//             </div>
//             <div className="contact-item">
//               <p>
//                 <span>
//                   <i className="fa fa-phone"></i> Phone
//                 </span>{" "}
//                 {props.data ? props.data.phone : "loading"}
//               </p>
//             </div>
//             <div className="contact-item">
//               <p>
//                 <span>
//                   <i className="fa fa-envelope-o"></i> Email
//                 </span>{" "}
//                 {props.data ? props.data.email : "loading"}
//               </p>
//             </div>
//           </div>
//           <div className="col-md-12">
//             <div className="row">
//               <div className="social">
//                 <ul>
//                   <li>
//                     <a href={props.data ? props.data.facebook : "/"}>
//                       <i className="fa fa-facebook"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href={props.data ? props.data.twitter : "/"}>
//                       <i className="fa fa-twitter"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href={props.data ? props.data.youtube : "/"}>
//                       <i className="fa fa-youtube"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div id="footer">
//         <div className="container text-center">
//           <p>
//           GSN - Your Gateway to Meaningful Business Connections. Join us and grow your network today{" "}
//            <span> Copyright © 2024 GSN. All rights reserved.</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// src/components/Footer.jsx

// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* Contact Info */}
//         <div className="footer-column">
//           <h3>Let’s Connect</h3>
//           <p>Have questions? Want to learn more? Reach out to GSN:</p>
//           <ul>
//             <li>
//             <i className="fa fa-map-marker-alt"></i>
//               GSN Vikshan Hub, Marriott Teynampet,
//               Chennai
//             </li>
//             <li>
//             <i className="fa fa-envelope"></i>
//               <a href="mailto:support@gsnconnect.com">support@gsnconnect.com</a>
//             </li>
//             <li>
//             <i className="fa fa-phone-alt"></i>
//               <a href="tel:+919500078674">+91-95000 78674</a>
//             </li>
//             <li>
//             <i className="fa fa-clock"></i>
//              Mon–Fri | 9:00 AM to 6:00 PM
//             </li>
//           </ul>
//         </div>

//         {/* Google Map Embed */}
//         <div className="footer-column">
//           <h3>Google Map</h3>
//           <div className="map-placeholder">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.4102394606443!2d80.2480057746939!3d13.041557987295497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52677f4e3f9b83%3A0x3b7a111b3e6a4d88!2sMarriott%20Chennai!5e0!3m2!1sen!2sin!4v1713166920470!5m2!1sen!2sin"
//               width="100%"
//               height="150"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               title="GSN Location"
//             ></iframe>
//           </div>
//         </div>

//         {/* Social Media Icons */}
//         <div className="footer-column">
//           <h3>Connect With Us</h3>
//           <div className="social-icons">
//             <a
//               href="https://facebook.com/gsn"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Facebook"
//             >
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a
//               href="https://instagram.com/gsn"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Instagram"
//             >
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a
//               href="https://linkedin.com/company/gsn"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LinkedIn"
//             >
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//           </div>

//           <p className="chatbot-note">
//             Connect with GSN’s support team or our AI Chatbot anytime!
//           </p>
//         </div>
//       </div>

//       {/* Bottom Copyright */}
//       <div className="footer-bottom">
//         <p>&copy; {new Date().getFullYear()} GSN | All rights reserved</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

//final code 
import React from 'react';


const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        {/* Left Side: Logo */}
        <div className="footer-logo">
          <img src={`${process.env.PUBLIC_URL}/img/logo-1.png`} alt="GSN Logo" className="logo" />
        </div>

        {/* Right Side: Contact Info and Social Media */}
        <div className="footer-right">
          {/* Contact Info */}
          <div className="footer-contact">
            <p>
              <i className="fas fa-map-marker-alt"></i>
              GSN Vikshan Hub, Marriott Teynampet, Chennai, Tamil Nadu, India
            </p>
            <p>
              <i className="fas fa-envelope"></i>
              <a href="mailto:support@gsnconnect.com">support@gsnconnect.com</a>
            </p>
            <p>
              <i className="fas fa-phone"></i>
              +91-95000 78674
            </p>
            <p>
              <i className="far fa-clock"></i>
               Mon–Fri | 10:00 AM to 6:00 PM
            </p>
          </div>

          {/* Social Media */}
          <div className="footer-social">
            {/* <p>Social Media</p> */}
            <div className="social-icons">
              <a href="https://facebook.com/gsn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com/gsn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com/company/gsn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer: Links and Copyright */}
      <div className="footer-bottom">
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/gsn-experience">GSN Experience</a>
          <a href="/join-gsn">Join GSN</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-copyright">
          Copyright &copy; {new Date().getFullYear()} Global Success Network. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
