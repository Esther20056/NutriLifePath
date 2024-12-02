import Jollof from './../Assets/Jollof.jpeg'
import Ofada from './../Assets/Ofada.jpeg'
import PepperSoup from './../Assets/PepperSoup.jpeg'
import PlantainFritata from './../Assets/PlantainFritata.jpeg'
import Tuwo from './../Assets/Tuwo.jpeg'
import Fufu from './../Assets/Fufu.jpeg'
import Eko from './../Assets/Eko.jpeg'
import EfoRiro from './../Assets/EfoRiro.jpeg'

const blogPosts = [
  {
    "id": 2,
    "title": "Nigerian Jollof Rice with Turkey",
    "image": Jollof, 
    "description": "Nigerian Jollof rice is a rich and flavorful dish made with tomatoes, peppers, and spices, served with tender chicken.",
    "details": "Jollof Rice is a popular Nigerian dish made with rice cooked in a rich tomato-based sauce with onions, peppers, and spices. The rice is slow-cooked to absorb all the flavors. It is typically served with grilled or fried turkey, making it a hearty and satisfying meal enjoyed during festive occasions and family gatherings.",
    "ingredients": {
      "Rice": {
        "benefit": "Rich in carbohydrates, provides energy."
      },
      "tomatoPepperMixture": {
        "ingredients": [
          { "name": "Tomato", "benefit": "Rich in vitamins C and A, supports heart health." },
          { "name": "Bell Peppers", "benefit": "Good source of vitamins A, C, and E, supports immune health." },
          { "name": "Onions", "benefit": "Good source of antioxidants, supports the immune system." },
          { "name": "Habanero Pepper", "benefit": "Rich in vitamins A and C, boosts metabolism." },
          { "name": "Garlic", "benefit": "Contains compounds that help fight infections." }
        ]
      },
      "Turkey": {
        "description": "Fried or grilled turkey for protein.",
        "benefits": {
          "protein": "Helps build and repair muscles.",
          "iron": "Promotes healthy blood cells."
        }
      },
      "seasonings": [
        { "name": "Stock Cubes", "benefit": "Enhances flavor." },
        { "name": "Thyme", "benefit": "Adds aroma and depth to flavor." },
        { "name": "Bay Leaves", "benefit": "Adds a unique flavor to the dish." },
        { "name": "Palm Oil", "benefit": "Contains healthy fats, rich in vitamin E." }
      ]
    },
    "cookingInstructions": [
      "1. Wash the rice and set aside.",
      "2. Blend the tomatoes, onions, bell peppers, and habanero pepper.",
      "3. In a pot, heat some palm oil and fry chopped onions until translucent.",
      "4. Add the blended tomato mixture and fry for 10 minutes until the oil separates.",
      "5. Add stock cubes, thyme, and bay leaves, then stir.",
      "6. Add the washed rice to the sauce and stir until the rice is coated with the tomato mixture.",
      "7. Pour in enough water to cook the rice, cover, and let it cook on low heat for 25–30 minutes.",
      "8. Fry or grill the turkey until crispy and serve alongside the Jollof rice."
    ],
    "healthBenefits": {
      "general": "A balanced meal with carbohydrates, protein, and healthy fats."
    }
  },
  {
    "id": 3,
    "title": "Ofada Rice and Stew",
    "image": Ofada, 
    "description": "Ofada rice, a fragrant local rice, paired with spicy, savory stew made with assorted meats and palm oil.",
    "details": "Ofada rice is a special Nigerian rice variety known for its unique fragrance. It is often served with a rich stew made from tomatoes, peppers, and assorted meats. The stew is cooked in palm oil, giving it a distinct taste and color, making it a popular meal for celebrations and gatherings.",
    "ingredients": {
      "Rice": {
        "benefit": "Rich in complex carbohydrates, provides sustained energy."
      },
      "stewIngredients": [
        { "name": "Tomatoes", "benefit": "Rich in vitamins C and A, supports heart health." },
        { "name": "Bell Peppers", "benefit": "Good source of vitamins A, C, and E." },
        { "name": "Onions", "benefit": "Good source of antioxidants, supports immune function." },
        { "name": "Palm Oil", "benefit": "Contains healthy fats, rich in vitamin E." },
        { "name": "Assorted Meats", "benefit": "Provides protein, iron, and zinc." }
      ]
    },
    "cookingInstructions": [
      "1. Wash the Ofada rice and cook in a pot with enough water for 25–30 minutes.",
      "2. In a separate pot, heat palm oil and fry onions until soft.",
      "3. Add the blended tomato and pepper mixture and cook until the oil rises to the top.",
      "4. Add stock cubes, seasonings, and assorted meats. Let it simmer for 10 minutes.",
      "5. Serve the stew over the cooked Ofada rice."
    ],
    "healthBenefits": {
      "general": "A filling meal rich in carbohydrates, protein, and healthy fats."
    }
  },
  {
    "id": 4,
    "title": "Plantain Frittata",
    "image": PlantainFritata, 
    "description": "A tasty frittata made with ripe plantains, eggs, and vegetables for a filling breakfast or brunch.",
    "details": "Plantain frittata is a versatile dish made with fried plantains, eggs, onions, peppers, and other vegetables. It is a perfect breakfast or brunch option and can be served with a side of salad or toast.",
    "ingredients": {
      "Plantains": {
        "benefit": "High in potassium, provides energy."
      },
      "Eggs": {
        "benefit": "Rich in protein, supports muscle growth."
      },
      "Vegetables": [
        { "name": "Tomatoes", "benefit": "Rich in vitamins C and A." },
        { "name": "Onions", "benefit": "Supports immune health." },
        { "name": "Bell Peppers", "benefit": "Rich in vitamins A, C, and E." }
      ]
    },
    "cookingInstructions": [
      "1. Peel and slice the plantains, then fry until golden brown.",
      "2. In a bowl, whisk eggs with salt, pepper, and chopped vegetables.",
      "3. Add the fried plantains to the egg mixture and pour into a hot, oiled pan.",
      "4. Cook on low heat until the eggs are set, then flip to cook the other side.",
      "5. Serve hot, optionally with a side of salad."
    ],
    "healthBenefits": {
      "general": "Provides energy from plantains and protein from eggs."
    }
  },
  {
    "id": 5,
    "title": "Pepper Soup",
    "image": PepperSoup, 
    "description": "A spicy and aromatic Nigerian soup made with fish, meat, or chicken, flavored with local spices and herbs.",
    "details": "Pepper soup is a popular Nigerian dish known for its spicy and aromatic flavors. It is typically made with fish, goat meat, or chicken, and infused with a blend of local spices like pepper, ginger, and garlic. The soup is perfect for cooling off during the rainy season or for rejuvenating after a long day.",
    "ingredients": {
      "Meats and Fish": {
        "description": "Fish, chicken, or goat meat as the base of the soup.",
        "benefits": {
          "protein": "Supports muscle growth.",
          "iron": "Promotes healthy blood cells."
        }
      },
      "spicesAndHerbs": [
        { "name": "Scotch Bonnet Pepper", "benefit": "Adds spice, rich in vitamins A and C." },
        { "name": "Ginger", "benefit": "Has anti-inflammatory properties." },
        { "name": "Garlic", "benefit": "Helps boost immune health." },
        { "name": "Thyme", "benefit": "Adds flavor and aroma." },
        { "name": "Cloves", "benefit": "Has antiseptic properties." }
      ]
    },
    "cookingInstructions": [
      "1. Boil the fish, chicken, or goat meat with spices and herbs until tender.",
      "2. Add water and bring to a boil for a few minutes.",
      "3. Adjust seasoning with salt and stock cubes.",
      "4. Serve hot as a soothing meal."
    ],
    "healthBenefits": {
      "general": "Good for boosting immunity and digestion."
    }
  },
  {
    "id": 6,
    "title": "Agidi",
    "image": Eko, 
    "description": "A firm, savory meal made from corn starch, similar to polenta, often served with soups or stews.",
    "details": "Agidi is made from corn starch and is a popular Nigerian side dish. It is cooked until firm and is typically served with soups, stews, or pepper sauce.",
    "ingredients": {
      "Corn Starch": {
        "benefit": "Rich in carbohydrates, provides energy."
      }
    },
    "cookingInstructions": [
      "1. Mix corn starch with water and stir to avoid lumps.",
      "2. Cook on medium heat until thickened.",
      "3. Pour into a mold and let it cool and firm up.",
      "4. Slice and serve with soups or stews."
    ],
    "healthBenefits": {
      "general": "Rich in carbohydrates, provides energy."
    }
  },
  {
    "id": 7,
    "title": "Tuwo Shinkafa",
    "image": Tuwo, 
    "description": "A traditional Nigerian dish made from rice flour, served with rich soups or stews.",
    "details": "Tuwo Shinkafa is a soft and doughy meal made from rice flour, commonly eaten with soups like Miyan Kuka or Egusi. It is a staple in the Northern parts of Nigeria.",
    "ingredients": {
      "Rice Flour": {
        "benefit": "Rich in carbohydrates, offers energy."
      }
    },
    "cookingInstructions": [
      "1. Boil water in a pot.",
      "2. Gradually add rice flour and stir until it thickens.",
      "3. Continue stirring until it forms a doughy consistency.",
      "4. Serve hot with your choice of soup."
    ],
    "healthBenefits": {
      "general": "Rich in energy-providing carbohydrates."
    }
  },
  {
    "id": 8,
    "title": "Edikang Ikong",
    "image": EfoRiro, 
    "description": "A nutritious vegetable soup made with a blend of spinach and pumpkin leaves, served with rice or swallows.",
    "details": "Edikang Ikong is a popular vegetable soup in Nigeria, made with spinach (or similar greens) and pumpkin leaves. It’s rich in vitamins and iron, often cooked with meats and fish for added flavor.",
    "ingredients": {
      "Leafy Greens": {
        "benefit": "Rich in vitamins and minerals, supports health."
      },
      "Meats and Fish": {
        "benefit": "Provides protein and other nutrients."
      }
    },
    "cookingInstructions": [
      "1. Wash and chop the spinach and pumpkin leaves.",
      "2. Cook the meats and fish until tender.",
      "3. Add the vegetables to the pot and cook for 5 minutes.",
      "4. Season and serve with rice or swallows."
    ],
    "healthBenefits": {
      "general": "A nutritious dish that supports overall health with high iron content."
    }
  },
  {
    "id": 9,
    "title": "Apu (Fufu)",
    "image": Fufu, 
    "description": "A smooth, stretchy meal made from yam, cassava, or plantains, commonly served with soups and stews.",
    "details": "Apu (or Fufu) is made by fermenting cassava or yam and pounding it into a stretchy, dough-like consistency. It's a common staple in Nigerian cuisine, often paired with vegetable soups like Efo Riro or Ogbono.",
    "ingredients": {
      "Cassava": {
        "benefit": "Rich in carbohydrates, provides energy."
      }
    },
    "cookingInstructions": [
      "1. Boil the cassava until soft.",
      "2. Pound it into a smooth, stretchy dough.",
      "3. Serve with your favorite soup or stew."
    ],
    "healthBenefits": {
      "general": "Rich in energy-providing carbohydrates."
    }
  }
];

export default blogPosts;
