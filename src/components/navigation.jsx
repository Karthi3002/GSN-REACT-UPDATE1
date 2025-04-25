

// import React, { useState, useEffect } from "react";
// import { Link } from "react-scroll";

// export const Navigation = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav id="menu" className={`navbar navbar-default navbar-fixed-top ${scrolled ? "scrolled" : ""}`}>
//       <div className="container">
//         <div className="navbar-header">
//           <a className="navbar-brand page-scroll" href="#page-top">
//             <img src="/img/logo-1.png" alt="GSN Logo" className="gsn-logo" />
//           </a>
//           <button
//             type="button"
//             className="navbar-toggle collapsed"
//             data-toggle="collapse"
//             data-target="#bs-example-navbar-collapse-1"
//           >
//             <span className="sr-only">Toggle navigation</span>
//             <span className="icon-bar"></span>
//             <span className="icon-bar"></span>
//             <span className="icon-bar"></span>
//           </button>
//         </div>

//         <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//           <ul className="nav navbar-nav navbar-right">
//             <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
//             <li><Link to="about" smooth={true} duration={500}>About</Link></li>
//             <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
//             <li><Link to="experience" smooth={true} duration={500}>GSN Experience</Link></li>
//             <li><Link to="join gsn" smooth={true} duration={500}>Join GSN</Link></li>
//             <li><Link to="blog" smooth={true} duration={500}>Blog</Link></li>
//             <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };


import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "experience", label: "GSN Experience" },
    { id: "join gsn", label: "Join GSN" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav id="menu" className={`navbar navbar-default navbar-fixed-top ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src="/img/logo-1.png" alt="GSN Logo" className="gsn-logo" />
          </a>
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            {navItems.map((item) => (
              <li key={item.id} className={activeSection === item.id ? "active" : ""}>
                <ScrollLink
                  to={item.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  onSetActive={() => setActiveSection(item.id)}
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
