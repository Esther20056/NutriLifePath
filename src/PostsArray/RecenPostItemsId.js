import React from 'react';
import { useParams } from 'react-router-dom';
import Products from './ApiProducts';
import './RecentPostItemsId.css';

function renderContent(data) {
  if (Array.isArray(data)) {
    return (
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {renderContent(item)} {/* Recursively render content */}
          </li>
        ))}
      </ul>
    );
  } else if (typeof data === 'object' && data !== null) {
    return (
      <ul>
        {Object.keys(data).map((key, index) => (
          <li key={index}>
            <strong>{key}:</strong> {renderContent(data[key])} {/* Recursively render the value */}
          </li>
        ))}
      </ul>
    );
  } else {
    return <span>{data}</span>;
  }
}

function RecenPostItemsId() {
  const { id } = useParams();
  const product = Products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className='RecenPostItemsId'>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} id="recent-post-item-img" />
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Details:</strong> {product.details}</p>

      {/* Ingredients Section */}
      <div>
        <h2>Ingredients</h2>
        {renderContent(product.ingredients)}
      </div>

      {/* Cooking Instructions */}
      <div>
        <h2>Cooking Instructions</h2>
        {renderContent(product.cookingInstructions)}
      </div>

      {/* Portion Sizes */}
      <div>
        <h2>Portion Sizes</h2>
        {renderContent(product.portionSizes)}
      </div>

      {/* Health Benefits */}
      <div>
        <h2>Health Benefits</h2>
        {renderContent(product.healthBenefits)}
      </div>

      {/* Nutritional Information */}
      <div>
        <h2>Nutritional Value</h2>
        {renderContent(product.nutritionalValue)}
      </div>
    </div>
  );
}

export default RecenPostItemsId;
