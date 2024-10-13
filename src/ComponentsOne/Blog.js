import React from 'react';
import './Style/HealthyLivingTips.css'
import {Link} from 'react-router-dom'

function Blog() {
  return (
    <div className="hlt-container">
      <h1>Welcome to the NutriLife Path Blog</h1>
      <p>Our blog provides you with the latest tips, articles, and insights on how to live a healthier, happier life. Whether you're looking to improve your diet, boost your fitness, or maintain your mental well-being, we've got you covered. Explore our posts below!</p>

      <section className='blog-container'>
        <h2>Featured Articles</h2>

        <div className="blog-post">
          <h3>10 Easy and Affordable Nigerian Recipes for a Healthier You</h3>
          <p>
            Discover easy, delicious, and nutritious Nigerian recipes that are perfect for anyone looking to eat healthy without breaking the bank. From jollof rice to boiled plantains and vegetable soups, these meals are both budget-friendly and packed with essential nutrients.
          </p>
          <Link to="" className="read-more-link">Read More</Link>
        </div>

        <div className="blog-post">
          <h3>5 Simple Workouts You Can Do at Home</h3>
          <p>
            Staying fit doesn't require a gym membership. Learn how to do simple but effective workouts at home with just your body weight. These exercises are perfect for anyone with a busy schedule or on a budget.
          </p>
          <Link to="" className="read-more-link">Read More</Link>
        </div>

        <div className="blog-post">
          <h3>Boost Your Mental Health: 5 Quick Stress-Relief Techniques</h3>
          <p>
            Mental health is just as important as physical health. In this article, we explore five quick and effective techniques to help reduce stress, anxiety, and mental fatigue. Start incorporating these practices into your routine for a clearer, calmer mind.
          </p>
          <Link to="" className="read-more-link">Read More</Link>
        </div>

        <div className="blog-post">
          <h3>How to Build Healthy Habits That Stick</h3>
          <p>
            Building long-term healthy habits doesn’t have to be overwhelming. Learn how to create sustainable habits that will improve your overall well-being, regardless of your lifestyle or financial situation. 
          </p>
          <Link to="" className="read-more-link">Read More</Link>
        </div>

        <div className="blog-post">
          <h3>The Importance of Water: Hydrate for Better Health</h3>
          <p>
            Water is vital for every function in your body. Learn about the numerous health benefits of staying hydrated and why it's important to drink enough water every day. Tips on how to incorporate more water into your daily routine.
          </p>
          <Link to="" className="read-more-link">Read More</Link>
        </div>
      </section>

      <section className='blog-container'>
        <h2>Latest Posts</h2>

        <div className="blog-post">
          <h3>How to Use Local Ingredients for Glowing Skin</h3>
          <p>
            Explore natural skincare remedies using locally sourced ingredients like shea butter, aloe vera, and coconut oil. These remedies are not only affordable but highly effective in giving you radiant and healthy skin.
          </p>
          <Link to="" className="read-more-link">Read More</Link>
        </div>

        <div className="blog-post">
          <h3>Self-Care for the Busy Nigerian Professional</h3>
          <p>
            Juggling work, family, and personal time can be overwhelming. In this article, we share self-care tips for professionals working long hours in Nigeria, offering practical advice on how to prioritize your mental and physical health.
          </p>
          <Link to="" className="read-more-link">Read More</Link>
        </div>

        <div className="blog-post">
          <h3>Superfoods You Should Include in Your Diet Today</h3>
          <p>
            Learn about Nigerian superfoods that are packed with essential vitamins, minerals, and antioxidants. Including foods like tiger nuts, moringa, and groundnuts in your diet can boost your energy and improve overall health.
          </p>
          <Link to="" className="read-more-link">Read More</Link>
        </div>
      </section>

      <footer className="hlt-footer">
        <p>Want to read more? Check out all of our articles and stay updated on the latest health trends, tips, and expert advice to help you live a healthier lifestyle!</p>
      </footer>
    </div>
  );
}

export default Blog;
