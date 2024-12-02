import React from 'react';
import './Style/HealthyLivingTips.css';
import './Blog.css'
import blogPosts from '../PostsArray/BlogPostArray';

function Blog() {
  return (
    <div className='blog-main-container'>
    {blogPosts.map((post) => (
      <div key={post.id} className="blog-post">
        <h2>{post.title}</h2>
        <img src={post.image} alt={post.title} />
        <p>{post.description}</p>
        <p>{post.details}</p>
        <h3>Ingredients:</h3>
        <ul>
          {Object.keys(post.ingredients).map((ingredientKey) => {
            const ingredient = post.ingredients[ingredientKey];
            if (Array.isArray(ingredient)) {
              return ingredient.map((item, index) => (
                <li key={index}>
                  {item.name}: {item.benefit}
                </li>
              ));
            } else {
              return (
                <li key={ingredientKey}>
                  {ingredientKey}: {ingredient.benefit || ingredient.description}
                </li>
              );
            }
          })}
        </ul>
        <h3>Cooking Instructions:</h3>
        <ol>
          {post.cookingInstructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
        <h3>Health Benefits:</h3>
        <p>{post.healthBenefits.general}</p>
      </div>
    ))}
  </div>
  );
}

export default Blog;
