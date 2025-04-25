// import React, { useState, useEffect } from "react";
// import "font-awesome/css/font-awesome.min.css";

// import { Navigation } from "./components/navigation";
// import { Header } from "./components/header";
// import WhyGsn from "./components/whyGsn";
// import Journey from './components/journey';
// import Features from './components/features';
// import Benefits from "./components/benefits";
// import About from "./components/about";
// import Services from "./components/services";
// import Experience from "./components/experience";
// import JoinGSN from "./components/JoinGSN";
// import Testimonials from "./components/testimonials";
// import Blog from "./components/blog";
// import Chapters from "./components/Chapters";
// import Coming from "./components/Coming";
// import Contact from "./components/contact";
// import ScrollToTop from "./components/ScrollToTop";
// import JsonData from "./data/data.json";
// import SmoothScroll from "smooth-scroll";
// import "./App.css";

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

// const App = () => {
//   const [landingPageData, setLandingPageData] = useState({});
//   useEffect(() => {
//     setLandingPageData(JsonData);
//   }, []);

//   return (
//     <div>
//       <Navigation />
//       <Header data={landingPageData.Header} />
//       <WhyGsn />
//       <Journey />
//       <Features />
//       <Benefits data={landingPageData.Benefits} />
//       <About data={landingPageData.About} />
//       <Services data={landingPageData.Services} />
//       <Experience data={landingPageData.Experience} />
//       <JoinGSN data={landingPageData.JoinGSN} />
//       <Testimonials data={landingPageData.Testimonials} />
//       <Blog data={landingPageData.blog} /> {/* Updated to use Blog component */}
//       <Chapters data={landingPageData.Chapters} />
//       <Coming />
//       <Contact data={landingPageData.Contact} />
//       <ScrollToTop /> {/* Scroll to top button */}
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import WhyGsn from "./components/whyGsn";
import Journey from './components/journey';
import Features from './components/features';
import Benefits from "./components/benefits";
import About from "./components/about";
import Services from "./components/services";
import Experience from "./components/experience";
import JoinGSN from "./components/JoinGSN";
import Testimonials from "./components/testimonials";
import Blog from "./components/blog";
import Chapters from "./components/Chapters";
import Coming from "./components/Coming";
import Contact from "./components/contact";
import ScrollToTop from "./components/ScrollToTop";

import BlogPage from "./pages/BlogPage";
import AllBlogs from "./pages/AllBlogs";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

// 🟡 New Component: Handles section scrolling using state (from navigation)
const ScrollHandler = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const hash = window.location.hash;

    // ✅ Only scroll to hash if it's a valid in-page anchor (no slashes)
    if (hash && !hash.includes("/")) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }

    // ✅ Optional: Support programmatic scroll from location.state
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }, [location]);

  return children;
};

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <ScrollHandler>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <Header data={landingPageData.Header} />
                <WhyGsn />
                <Journey />
                <Features />
                <Benefits data={landingPageData.Benefits} />
                <About data={landingPageData.About} />
                <Services data={landingPageData.Services} />
                <Experience data={landingPageData.Experience} />
                <JoinGSN data={landingPageData.JoinGSN} />
                <Testimonials data={landingPageData.Testimonials} />
                <Blog />
                <Chapters data={landingPageData.Chapters} />
                <Coming />
                <Contact data={landingPageData.Contact} />
                <ScrollToTop />
              </>
            }
          />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/all-blogs" element={<AllBlogs />} />
          <Route path="/join" element={<JoinGSN />} />
        </Routes>
      </ScrollHandler>
    </Router>
  );
};

export default App;
