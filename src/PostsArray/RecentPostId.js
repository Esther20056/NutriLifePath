import React from 'react';
import { useParams, Link } from 'react-router-dom';
import RecentPosts from './RecentPost';
import "./RecentPost.css"

function RecentPostId() {
  const { id } = useParams();
  const recentPost = RecentPosts.find(item => item.id === parseInt(id));

if (!recentPost) {
  return (
    <div>
      <p>Item not found.</p>
      <Link to="/blog">Go back to blog</Link>
    </div>
  );
}

  return (
    <div className='recentpost-container'>
      <h1 className='recent-post-items-h1'>{recentPost.title}</h1>

      {/* Superfoods */}
      {recentPost.type === 'Superfood' && (
        <>
          {recentPost.superfoods.map((superfood, index) => (
            <div key={index} className='recent-post-items'>
              <h4 className='recent-post-items-h4'>{superfood.name}</h4>
                <img
                  src={superfood.SubImage}
                  alt={superfood.name}
                  className='recent-post-items-image'
                />
              <p className='recent-post-items-p'>{superfood.description}</p>
              <button className='details-button'><Link className='readmorelink' to={`/recentpost/${id}/superfood/${superfood.name}`}>Read More</Link>
              </button>
            </div>
          ))}
        </>
      )}

 {/* Smothie */}
 {recentPost.type === 'Smoothie' && (
         <>
         {recentPost.smoothie_recipes.map((smoothie, index) => (
           <div key={index} className='recent-post-items'>
             <h4 className='recent-post-items-h4'>{smoothie.name}</h4>
               <img
                 src={smoothie.SubImage}
                 alt={smoothie.name}
                 className='recent-post-items-image'
               />
             <p className='recent-post-items-p'>{smoothie.description}</p>
             <button className='details-button'><Link className='readmorelink' to={`/recentpost/${id}/smoothie/${smoothie.name}`}>Read More</Link>
             </button>
           </div>
         ))}
       </>
      )}
      {/* Snacks */}
      {recentPost.type === 'Snacks' && (
         <>
         {recentPost.snack_recipes.map((snack, index) => (
           <div key={index} className='recent-post-items'>
             <h4 className='recent-post-items-h4'>{snack.name}</h4>
               <img
                 src={snack.SubImage}
                 alt={snack.name}
                 className='recent-post-items-image'
               />
             <p className='recent-post-items-p'>{snack.description}</p>
             <button className='details-button'><Link className='readmorelink' to={`/recentpost/${id}/snack/${snack.name}`}>Read More</Link>
             </button>
           </div>
         ))}
       </>
      )}

      {/* DIY Natural Skincare Remedies (DNSR) */}
      {recentPost.type === 'DNSR' && (
         <>
         {recentPost.skincare_recipes.map((skincare, index) => (
           <div key={index} className='recent-post-items'>
             <h4 className='recent-post-items-h4'>{skincare.name}</h4>
               <img
                 src={skincare.SubImage}
                 alt={skincare.name}
                 className='recent-post-items-image'
               />
             <p className='recent-post-items-p'>{skincare.description}</p>
             <button className='details-button'><Link className='readmorelink' to={`/recentpost/${id}/dnsr/${skincare.name}`}>Read More</Link>
             </button>
           </div>
         ))}
       </>
      )}
      {recentPost.type === 'Hydration' && (
         <>
         {recentPost.hydration_tips.map((hydration, index) => (
           <div key={index} className='recent-post-items'>
             <h4 className='recent-post-items-h4'>{hydration.name}</h4>
               <img
                 src={hydration.SubImage}
                 alt={hydration.name}
                 className='recent-post-items-image'
               />
             <p className='recent-post-items-p'>{hydration.description}</p>
             <button className='details-button'><Link className='readmorelink' to={`/recentpost/${id}/hydrate/${hydration.name}`}>Read More</Link>
             </button>
           </div>
         ))}
       </>
      )}
    </div>
  );
}

export default RecentPostId;
