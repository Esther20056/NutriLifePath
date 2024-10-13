import React from 'react';
import '../Style/HealthyLivingTips.css';
import { Link } from 'react-router-dom';

function HealthyNigeriaRecipes(props) {
  return (
    <div className="hlt-container">
      <h1>Healthy Nigerian Recipes for Every Home</h1>
      <p>Explore the flavors of Nigeria with these nutritious and easy-to-make recipes. Whether you're looking for a hearty lunch or a light dinner, these dishes incorporate fresh, locally-sourced ingredients that promote a healthy lifestyle.</p>

      {/* Breakfast Recipes */}
      <section>
        <h2>1. Breakfast Recipes</h2>
        
        <div className="recipe">
          <h3>Porridge Yam with Spinach</h3>
          <p><strong>Ingredients:</strong> Yam, fresh spinach, onions, palm oil, seasoning cubes, salt, and water.</p>
          <p><strong>Nutrition:</strong> High in carbohydrates from the yam, and rich in vitamins A and C from the spinach. Contains fiber for digestion and iron for blood health.</p>
        </div>

        <div className="recipe">
          <h3>Plantain & Egg Frittata</h3>
          <p><strong>Ingredients:</strong> Ripe plantain, eggs, onions, bell peppers, seasoning cubes, olive oil, and a pinch of salt.</p>
          <p><strong>Nutrition:</strong> Provides a healthy dose of protein and healthy fats from the eggs and plantains, and vitamins from the veggies.</p>
        </div>

        <div className="recipe">
          <h3>Ogi with Akara</h3>
          <p><strong>Ingredients:</strong> Ogi (fermented maize), beans, onions, peppers, seasoning cubes, oil for frying.</p>
          <p><strong>Nutrition:</strong> High in protein from beans, and the ogi provides a good source of carbohydrates for energy.</p>
        </div>

        <div className="recipe">
          <h3>Beans and Plantain Porridge</h3>
          <p><strong>Ingredients:</strong> Beans, ripe plantains, palm oil, onions, seasoning cubes, and spices.</p>
          <p><strong>Nutrition:</strong> Rich in fiber from beans and plantains, and a good source of complex carbohydrates.</p>
        </div>

        <div className="recipe">
          <h3>Shakshuka with Nigerian Spices</h3>
          <p><strong>Ingredients:</strong> Eggs, tomatoes, onions, bell peppers, palm oil, seasoning cubes, and spices like thyme and curry powder.</p>
          <p><strong>Nutrition:</strong> High in protein and vitamins from the vegetables and eggs, with a mix of flavors from spices.</p>
        </div>

        <div className="recipe">
          <h3>Boiled Plantain with Garden Egg Sauce</h3>
          <p><strong>Ingredients:</strong> Ripe plantains, garden eggs (African eggplant), onions, palm oil, seasoning cubes, and pepper.</p>
          <p><strong>Nutrition:</strong> Plantain provides complex carbohydrates, while garden eggs are rich in fiber and vitamins.</p>
        </div>

      </section>

      {/* Lunch Recipes */}
      <section>
        <h2>2. Lunch Recipes</h2>
        
        <div className="recipe">
          <h3>Jollof Rice with Grilled Chicken</h3>
          <p><strong>Ingredients:</strong> Rice, tomatoes, onions, bell peppers, garlic, ginger, chicken, thyme, curry powder, vegetable oil, seasoning cubes.</p>
          <p><strong>Nutrition:</strong> The tomatoes and peppers in Jollof rice provide antioxidants, while chicken offers lean protein.</p>
        </div>

        <div className="recipe">
          <h3>Rice and Stew with Yam Porridge</h3>
          <p><strong>Ingredients:</strong> Rice, tomatoes, onions, bell peppers, groundnut oil, seasoning cubes, yam, palm oil, fresh spinach, and seasoning.</p>
          <p><strong>Nutrition:</strong> Rice provides carbs for energy, while yam porridge is rich in fiber and the stew offers essential vitamins and protein.</p>
        </div>

        <div className="recipe">
          <h3>Fried Rice with Plantain</h3>
          <p><strong>Ingredients:</strong> Rice, mixed vegetables, liver (optional), shrimp (optional), plantains, seasoning cubes, and vegetable oil.</p>
          <p><strong>Nutrition:</strong> Fried rice offers a balanced meal with protein from shrimp/liver and complex carbs from rice, while plantain adds fiber and energy.</p>
        </div>

        <div className="recipe">
          <h3>Pounded Yam with Efo Riro</h3>
          <p><strong>Ingredients:</strong> Pounded yam, spinach (efo), tomatoes, onions, palm oil, seasoning cubes, and pepper.</p>
          <p><strong>Nutrition:</strong> Pounded yam is high in carbohydrates, while the spinach stew offers vitamins and iron.</p>
        </div>

        <div className="recipe">
          <h3>Amala with Gbegiri and Ewedu</h3>
          <p><strong>Ingredients:</strong> Amala (yam flour), beans (for Gbegiri), ewedu (Jute leaves), palm oil, seasoning cubes, and pepper.</p>
          <p><strong>Nutrition:</strong> Amala provides a good source of carbohydrates, and the Gbegiri and Ewedu offer fiber and essential vitamins.</p>
        </div>

        <div className="recipe">
          <h3>Tuwo Shinkafa with Miyan Kuka</h3>
          <p><strong>Ingredients:</strong> Tuwo (rice flour), kuka powder (baobab leaves), seasoning cubes, and palm oil.</p>
          <p><strong>Nutrition:</strong> Tuwo is rich in carbohydrates, and the Miyan Kuka is packed with vitamins and antioxidants.</p>
        </div>

      </section>

      {/* Dinner Recipes */}
      <section>
        <h2>3. Dinner Recipes</h2>
        
        <div className="recipe">
          <h3>Pounded Yam with Egusi Soup</h3>
          <p><strong>Ingredients:</strong> Yam, melon seeds (egusi), spinach or other leafy greens, palm oil, onions, seasoning cubes.</p>
          <p><strong>Nutrition:</strong> Pounded yam is high in carbohydrates, while egusi is rich in protein and healthy fats.</p>
        </div>

        <div className="recipe">
          <h3>Ofada Rice with Ayamase Sauce</h3>
          <p><strong>Ingredients:</strong> Ofada rice, green bell peppers, onions, tomatoes, palm oil, seasoning cubes, and assorted meats.</p>
          <p><strong>Nutrition:</strong> Ofada rice is a good source of complex carbs and fiber, while ayamase sauce provides protein from assorted meats and vitamins from vegetables.</p>
        </div>

        <div className="recipe">
          <h3>Fried Plantain with Pepper Sauce</h3>
          <p><strong>Ingredients:</strong> Ripe plantain, red bell peppers, onions, tomatoes, palm oil, seasoning cubes, and pepper.</p>
          <p><strong>Nutrition:</strong> Plantains provide healthy carbs, while the pepper sauce adds vitamins and a spicy kick to the meal.</p>
        </div>

        <div className="recipe">
          <h3>Vegetable Stir Fry with Quinoa</h3>
          <p><strong>Ingredients:</strong> Quinoa, mixed vegetables (carrots, broccoli, bell peppers), olive oil, garlic, and seasoning cubes.</p>
          <p><strong>Nutrition:</strong> Quinoa is a high-protein grain, and mixed vegetables provide essential vitamins and minerals.</p>
        </div>

        <div className="recipe">
          <h3>Grilled Fish with Ukodo (Yam Porridge)</h3>
          <p><strong>Ingredients:</strong> Yam, fresh fish, palm oil, onions, seasoning cubes, and pepper.</p>
          <p><strong>Nutrition:</strong> Fish is rich in protein and omega-3 fatty acids, while yam provides energy through complex carbs.</p>
        </div>

        <div className="recipe">
          <h3>Jamaican Style Coconut Rice with Nigerian Suya</h3>
          <p><strong>Ingredients:</strong> Coconut rice, grilled beef (suya), onions, tomatoes, seasoning cubes, and vegetable oil.</p>
          <p><strong>Nutrition:</strong> Coconut rice offers healthy fats from coconut, while suya is a great source of lean protein.</p>
        </div>

      </section>

      <footer className="hlt-footer">
        <p>NutriLife Path offers more affordable healthy recipes, tips, and meal plans that suit every Nigerian. Explore and start living healthier today!</p>
      </footer>
    </div>
  );
}

export default HealthyNigeriaRecipes;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../Style/HealthyLivingTips.css';

// function HealthyNigeriaRecipes({ section }) {
//   const filteredRecipes = recipes.filter(recipe => recipe.section === section);

//   return (
//     <div className="hlt-container">
//       <h1>{section.charAt(0).toUpperCase() + section.slice(1)} Recipes</h1>
//       {filteredRecipes.map((recipe) => (
//         <div className="recipe" key={recipe.id}>
//           <h3>{recipe.title}</h3>
//           <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
//           <p><strong>Nutrition:</strong> {recipe.nutrition}</p>
//           <Link to={`/recipe-details/${recipe.id}`}>
//             <button>How to Prepare</button>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default HealthyNigeriaRecipes;
