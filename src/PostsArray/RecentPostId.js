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
             <button className='details-button'><Link className='readmorelink' to={`/recentpost/${id}/superfood/${snack.name}`}>Read More</Link>
             </button>
           </div>
         ))}
       </>
      )}

      {/* DIY Natural Skincare Remedies (DNSR) */}
      {recentPost.type === 'DNSR' && (
        <>
          <h3>DIY Natural Skincare Remedies</h3>
          {recentPost.skincare_recipes.map((dnsr, index) => (
            <div key={index}>
              <h4>{dnsr.name}</h4>
              <img
                src={dnsr.SubImage}
                alt={dnsr.name}
              />
              <p>{dnsr.description}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default RecentPostId;
