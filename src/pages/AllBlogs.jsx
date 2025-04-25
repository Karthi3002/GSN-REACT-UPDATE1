
import React, { useState } from "react";
import { Link } from "react-router-dom";
import blogData from "../data/data.json";
import { Navigation } from "../components/navigation";
import Footer from "../components/contact";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const categories = [
  "All",
  "Referral Strategies",
  "Member Success Stories",
  "Leadership & Mind-set",
  "AI Revolution in Networking",
  "GSN Culture & Values",
];

const AllBlogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const blogs = blogData.blog;

  // Get top 3 latest blogs for hero slider
  const latestBlogs = blogs.slice(0, 3);

  // Filtered blog list (excluding the top 3 from All category)
  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((post) => post.category === selectedCategory);

  return (
    <>
      <Navigation />
      <div className="hero-blog">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {latestBlogs.map((post) => (
            <SwiperSlide key={post.id}>
              <div
                className="hero-slide"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}${post.image})`,
                }}
                >
                <div className="hero-overlay"></div>  
                <div className="hero-blog-content">
                  <h1>{post.title}</h1>
                  <p className="hero-meta">
                    By {post.author} • {post.date}
                  </p>
                  <p className="hero-excerpt">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="hero-read-btn">
                    Read More →
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Blog List Section */}
      <div className="all-blogs-container">
        <h2 className="section-title">Explore Our Blogs</h2>

        <div className="category-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cat-btn ${selectedCategory === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {filteredBlogs.map((post) => (
            <div className="blog-card" key={post.id}>
              <img
                src={`${process.env.PUBLIC_URL}${post.image}`}
                alt={post.title}
                className="blog-img"
              />
              <div className="blog-content">
                <h5 className="blog-title">{post.title}</h5>
                <p className="blog-meta">
                  By {post.author} • {post.date}
                </p>
                <p className="blog-excerpt">{post.excerpt}</p>
                <span className="blog-category">{post.category}</span>
                <Link to={`/blog/${post.id}`} className="read-more-btn">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="back-home">
          <Link to="/" className="back-home-link">
            ← Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AllBlogs;