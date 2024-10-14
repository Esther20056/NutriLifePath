import React from 'react';
import './Style/HealthyLivingTips.css';
import { Link } from 'react-router-dom';
import blogPosts from '../PostsArray/BlogPostArray';
function Blog() {
  return (
    <div className="hlt-container">
      <h1>Welcome to the NutriLife Path Blog</h1>
      <p>
        Our blog provides you with the latest tips, articles, and insights on how
        to live a healthier, happier life. Whether you're looking to improve your
        diet, boost your fitness, or maintain your mental well-being, we've got
        you covered. Explore our posts below!
      </p>
      <section className="blog-container">
        <h2>Featured Articles</h2>
        {blogPosts.slice(0, 5).map((post, index) => (
          <div className="blog-post" key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <Link to={post.link} className="read-more-link">
              Read More
            </Link>
          </div>
        ))}
      </section>

      {/* Latest Posts Section */}
      <section className="blog-container">
        <h2>Latest Posts</h2>
        {blogPosts.slice(5).map((post, index) => (
          <div className="blog-post" key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <Link to={post.link} className="read-more-link">
              Read More
            </Link>
          </div>
        ))}
      </section>

      {/* Footer Section */}
      <footer className="hlt-footer">
        <p>
          Want to read more? Check out all of our articles and stay updated on
          the latest health trends, tips, and expert advice to help you live a
          healthier lifestyle!
        </p>
      </footer>
    </div>
  );
}

export default Blog;
