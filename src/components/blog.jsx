// import React from "react";

// const Blog = () => {
//   const posts = [
//     {
//       title: "Networking’s Next Frontier—Are You Ready?",
//       date: "March 26, 2025",
//       excerpt:
//         "GSN is rewriting the rules with a bold, forward-thinking approach. Discover how we’re defining the future of networking.",
//       author: "By GSN Team",
//       image: "img/blog/sucess.png",
//     },
//     {
//       title: "How GSN Unlocked My Next Big Win",
//       date: "March 24, 2025",
//       excerpt:
//         "A member shares their journey—without spilling the secrets—highlighting growth, resilience, connections, and the unexpected turns that led to success..",
//       author: "By GSN Member",
//       image: "img/blog/win.png",
//     },
//     {
//       title: "The Secret to Smarter Success",
//       date: "March 20, 2025",
//       excerpt:
//         "What’s the key to turning connections into cash? Discover powerful strategies, smart networking tips, and real-world success stories that deliver results..",
//       author: "By GSN Insights",
//       image: "img/blog/network.png",
//     },
//   ];

//   return (
//     <section id="blog" className="blog-section py-5">
//       <div className="blogContainer">
//         <h2 className="blogsection-title text-center mb-4">
//           Insights for Smarter Success
//         </h2>
//         <p className="blogtext-center blogsection-subtitle mb-5">
//           Stay ahead with GSN’s latest thoughts and stories
//         </p>
//         <div className="row g-4">
//           {posts.map((post, index) => (
//             <div className="col-md-4 d-flex" key={index}>
//               <div className="blog-card blogcard d-flex flex-column w-100">
//                 <img
//                   src={post.image}
//                   className="blogcard-img-top"
//                   alt={post.title}
//                 />
//                 <div className="blogcard-body d-flex flex-column ">
//                   <div className="blogcard-content  mb-3">
//                     <h5 className="blogcard-title">{post.title}</h5>
//                     <p className="blogcard-text">{post.excerpt}</p>
//                     <small className="blogtext-muted">
//                       {post.author} — {post.date}
//                     </small>
//                     <button className="btn readmore-btn w-100">
//                       Read More
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;


import React from "react";
import { Link } from "react-router-dom";
import blogData from "../data/data.json";

const Blog = () => {
  const posts = blogData.blog;

  return (
    <section className="blog-section py-5" id="blog">
      <div className="blogContainer">
        <h2 className="blogtext-center mb-4">Insights for Smarter Success</h2>
        <div className="row g-4">
          {posts.map((post) => (
            <div className="col-md-4 d-flex" key={post.id}>
              <div className="blog-card blogcard d-flex flex-column w-100">
                <img
                  src={`${process.env.PUBLIC_URL}${post.image}`}
                  alt={post.title}
                  className="blogcard-img-top"
                />
                <div className="blogcard-body d-flex flex-column">
                  <h5 className="blogcard-title">{post.title}</h5>
                  <p className="blogcard-text">{post.excerpt}</p>
                  <small>{post.author} — {post.date}</small>
                  <Link
                    to={`/blog/${post.id}`}
                    className="btn readmore-btn w-100 mt-2"
                    onClick={(e) => e.stopPropagation()} // prevents jQuery from hijacking the link
                  >Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
