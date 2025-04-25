
// import React from 'react';


// const ComingSoon = () => {
//   return (
//     <section className="coming-section">
//       <p className="coming-top-text">We’re building something extraordinary.</p>
//       <div className="glow-circle" />
//       <h1 className="coming-title">C o m i n g &nbsp; S o o n</h1>
//       <div className="coming-description">
//         <p>GSN is evolving into a smarter, more intuitive experience.</p>
//         <p>
//           Behind the scenes, our team is crafting tools that will help you connect deeper, grow faster,
//           and operate with unmatched clarity.
//         </p>
//         <p>
//           <strong>Stay tuned</strong> – something transformational is on its way.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default ComingSoon;

import React from "react";


const Coming = () => (
  <div className="coming-root">
  
    <div className="coming-subtitle">We’re building something extraordinary.</div>
    <div className="eclipse-wrapper">
      <div className="eclipse-glow"></div>
      <div className="eclipse-half"></div>
      <div className="coming-soon-script">C&nbsp;o&nbsp;m&nbsp;i&nbsp;n&nbsp;g&nbsp;&nbsp;S&nbsp;o&nbsp;o&nbsp;n</div>
    </div>
    <div className="coming-desc">
      <div>GSN is evolving into a smarter, more intuitive experience.</div>
      <div>
        Behind the scenes, our team is crafting tools that will help you connect deeper, grow faster, and operate with unmatched clarity.
      </div>
      <div>
        <span className="coming-bold">Stay tuned</span> – something transformational is on its way.
      </div>
    </div>
  </div>
);

export default Coming;
