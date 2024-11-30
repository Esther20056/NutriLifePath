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
  switch (type) {
    case 'superfood':
      item = recentPost.superfoods.find((food) => food.name === itemName);
      break;
    case 'smoothie':
      item = recentPost.smoothie_recipes.find((smoothie) => smoothie.name === itemName);
      break;
    case 'snack':
      item = recentPost.snack_recipes.find((snack) => snack.name === itemName);
      break;
    case 'dnsr':
      item = recentPost.skincare_recipes.find((dnsr) => dnsr.name === itemName);
      break;
      case 'hydrate':
      item = recentPost.hydration_tips.find((hydrate) => hydrate.name === itemName);
      break;
    default:
      break;
  }

  if (!item) {
    return <p>Item not found!</p>;
  }

  return (
    <div className='recentpost-container'>
      <h4>{item.name}</h4>
      <img src={item.SubImage} alt={item.name} className='recent-post-items-image'/>
      <p className='recent-post-items-p'>{item.description}</p>

      {type === 'superfood' && (
        <>
          <h5 className='recent-post-items-h5'>Usage</h5>
          <p className='list-text'>{item.usage}</p>
          <h5 className='recent-post-items-h5'>Health Benefits</h5>
          <ul>
            {item.health_benefits.map((benefit, idx) => (
              <li className='list-text' key={idx}><p>{benefit}</p></li>
            ))}
          </ul>
        </>
      )}
       {type === 'smoothie' && (
        <>
          <h5 className='recent-post-items-h5'>Usage</h5>
          <p className='list-text'>{item.usage}</p>
          <h5 className='recent-post-items-h5'>Ingredients</h5>
          <ul>
            {item.ingredients.map((benefit, idx) => (
              <li className='list-text' key={idx}><p>{benefit}</p></li>
            ))}
          </ul>
          <h5 className='recent-post-items-h5'>Health Benefits</h5>
          <ul>
            {item.health_benefits.map((benefit, idx) => (
              <li className='list-text' key={idx}><p>{benefit}</p></li>
            ))}
          </ul>
        </>
      )}
        {type === 'snack' && (
        <>
          <h5 className='recent-post-items-h5'>Ingredients</h5>
          <ul>
            {item.ingredients.map((ingredient, idx) => (
              <li className='list-text' key={idx}><p>{ingredient}</p></li>
            ))}
          </ul>
          <h5 className='recent-post-items-h5'>How to Make</h5>
          <ul>
            {item.how_to_make.map((benefit, idx) => (
              <li className='list-text' key={idx}><p>{benefit}</p></li>
            ))}
          </ul>
          <h5 className='recent-post-items-h5'>Affordable Ingredients</h5>
          <p className='list-text'>{item.affordable_ingredients}</p>
          <h5 className='recent-post-items-h5'>Health Benefits</h5>
          <ul>
            {item.health_benefits.map((benefit, idx) => (
              <li className='list-text' key={idx}><p></p></li>
            ))}
          </ul>
        </>
      )}
        {type === 'dnsr' && (
        <>
          <h5 className='recent-post-items-h5'>Ingredients</h5>
          <ul>
            {item.ingredients.map((ingredient, idx) => (
              <li className='list-text' key={idx}><p>{ingredient}</p></li>
            ))}
          </ul>
          <h5 className='recent-post-items-h5'>How to Make</h5>
          {/* <ul>
            {item.how_to_make.map((benefit, idx) => (
              <li className='list-text' key={idx}>{benefit}</li>
            ))}
          </ul> */}
          <h5 className='recent-post-items-h5'>Affordable Ingredients</h5>
          <p className='list-text'><p>{item.affordable_ingredients}</p></p>
          <h5 className='recent-post-items-h5'>Skin Benefits</h5>
          <ul>
            {item.skin_benefits.map((benefit, idx) => (
              <li className='list-text' key={idx}><p>{benefit}</p></li>
            ))}
          </ul>
        </>
      )}
         {type === 'hydrate' && (
        <>
          <h5 className='recent-post-items-h5'>Ingredients</h5>
          <ul>
            {item.ingredients.map((ingredient, idx) => (
              <li className='list-text' key={idx}><p>{ingredient}</p></li>
            ))}
          </ul>
          <h5 className='recent-post-items-h5'>How to Make</h5>
          {/* <ul>
            {item.how_to_make.map((benefit, idx) => (
              <li className='list-text' key={idx}>{benefit}</li>
            ))}
          </ul> */}
          <h5 className='recent-post-items-h5'>Skin Benefits</h5>
          <ul>
            {item.hydration_tip.map((benefit, idx) => (
              <li className='list-text' key={idx}><p>{benefit}</p></li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default PostDetails;
