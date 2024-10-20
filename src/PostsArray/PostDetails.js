import React from 'react';
import { useParams } from 'react-router-dom';
import RecentPosts from './RecentPost';

function PostDetails() {
  const { id, type, itemName } = useParams();
  const recentPost = RecentPosts.find((item) => item.id === parseInt(id));

  if (!recentPost) {
    return <p>Post not found!</p>;
  }
  // Find the specific item based on the type and itemName
  let item = null;
  if (type === 'superfood') {
    item = recentPost.superfoods.find((food) => food.name === itemName);
  } else if (type === 'smoothie') {
    item = recentPost.smoothie_recipes.find((smoothie) => smoothie.name === itemName);
  } else if (type === 'snack') {
    item = recentPost.snack_recipes.find((snack) => snack.name === itemName);
  } else if (type === 'dnsr') {
    item = recentPost.skincare_recipes.find((dnsr) => dnsr.name === itemName);
  }

  if (!item) {
    return <p>Item not found!</p>;
  }

  return (
    <div className='recentpost-container'>
      <h4>{item.name}</h4>
      <img src={item.SubImage} alt={item.name}  className='recent-post-items-image'/>
      <p className='recent-post-items-p'>{item.description}</p>

      {type === 'superfood' && (
        <>
          <h5>Usage</h5>
          <p>{item.usage}</p>
          <h5>Health Benefits</h5>
          <ul>
            {item.health_benefits.map((benefit, idx) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default PostDetails;
