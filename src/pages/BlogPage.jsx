import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogData from "../data/data.json";
import { Navigation } from "../components/navigation";
import Footer from "../components/contact";

const BlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const blog = blogData.blog.find((item) => item.id.toString() === id);

  if (!blog) return <h2 className="text-center my-5">Blog not found</h2>;

  return (
    <>
      <Navigation />
      <div className="blogpage-container">
        <div className="blogpage-header">
          <img
            src={`${process.env.PUBLIC_URL}${blog.image}`}
            alt={blog.title}
            className="blogpage-image"
          />
        </div>

        <div className="blogpage-content container">
        <button
              className="btn btn-dark blogpage-button"
              onClick={() => navigate("/all-blogs")}
            > See All Blogs</button>
          <h1 className="blogpage-title">{blog.title}</h1>
          <p className="blogpage-meta">
            <span className="blogpage-author">{blog.author}</span> &nbsp;|&nbsp;{" "}
            <span className="blogpage-date">{blog.date}</span>
          </p>
          <hr className="blogpage-divider" />
          <p className="blogpage-text">{blog.content}</p>

          <div className="text-center mt-5 blogpage-buttons">
            <button
              className="btn btn-dark blogpage-button me-3"
              onClick={() => {
                navigate("/#join gsn");
                setTimeout(() => {
                  const section = document.getElementById("join gsn");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              >
              Join GSN Today
            </button>
            <button
              className="btn btn-dark blogpage-button me-3"
              onClick={() => window.open("https://gsn-global-link.com/discovery-call", "_blank")}
            >
              Book a Discovery Call
            </button>
            <button
              className="btn btn-secondary blogpage-button"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogPage;