import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HealthyFood from '../Assets/HealthyFood.png'
import Products from '../PostsArray/ApiProducts';
import RecentPosts from '../PostsArray/RecentPost';
import Item from '../PostsArray/Item';
import RecentPostItems from '../PostsArray/RecentPostItems';

function HomeContents() {
  const [data, setData] = useState(Products)
  const [posts, setPosts] = useState(RecentPosts)
  return (
    <div>
      <section className="welcome-message">
        <div className="welcome-message-container">
          <img src={HealthyFood} alt="" />
          <p>Welcome to NutriLife Path! Here, you'll discover delicious smoothies, nutritious fruit recipes, and healthy dishes from around the world. Our mission is to inspire you to embrace a vibrant, balanced lifestyle while celebrating local flavors and traditions. Join us on this journey!</p>
        </div>
      </section>
      <section className="recipes">
        <h3 className='fr-h3'>Featured Recipes</h3>
        <div className="featured-recipes-container">
          {data.map((item) => (
            <div key={item.id} className="featured-container">
              <Item
                id={item.id}
                title={item.title}
                image={item.image}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="recent-posts">
    <h3 className='fr-h3'>Recent Posts</h3>
    <div className="recent-post-container">
        {posts.map((recentpostitem) => (
            <div key={recentpostitem.id} className="item-container">
                <RecentPostItems
                id={recentpostitem.id}
                title={recentpostitem.title}
                image={recentpostitem.image}
                description={recentpostitem.description}
              />
            </div>
        ))}
    </div>
</section>

    </div>
  )
}

export default HomeContents