const RecipesArray = [
    // {
    //     "smallChops": [
    //       {
    //         "name": "Samosa",
    //         "servings": 10,
    //         "ingredients": [
    //           {
    //             "name": "All-purpose flour",
    //             "quantity": "2 cups"
    //           },
    //           {
    //             "name": "Salt",
    //             "quantity": "1/2 tsp"
    //           },
    //           {
    //             "name": "Baking powder",
    //             "quantity": "1/4 tsp"
    //           },
    //           {
    //             "name": "Water",
    //             "quantity": "2-3 tbsp"
    //           },
    //           {
    //             "name": "Vegetable oil",
    //             "quantity": "2 tbsp"
    //           },
    //           {
    //             "name": "Boiled and mashed potatoes",
    //             "quantity": "2 cups"
    //           },
    //           {
    //             "name": "Minced meat or chicken (optional)",
    //             "quantity": "1 cup"
    //           },
    //           {
    //             "name": "Onion (chopped)",
    //             "quantity": "1 small"
    //           },
    //           {
    //             "name": "Garlic (minced)",
    //             "quantity": "2 cloves"
    //           },
    //           {
    //             "name": "Ground cumin",
    //             "quantity": "1/2 tsp"
    //           },
    //           {
    //             "name": "Curry powder",
    //             "quantity": "1/2 tsp"
    //           },
    //           {
    //             "name": "Ground coriander",
    //             "quantity": "1/4 tsp"
    //           },
    //           {
    //             "name": "Salt and pepper",
    //             "quantity": "To taste"
    //           },
    //           {
    //             "name": "Vegetable oil (for frying)",
    //             "quantity": "As needed"
    //           }
    //         ],
    //         "steps": [
    //           "In a mixing bowl, combine the flour, salt, and baking powder. Add the oil and gradually add water to form a smooth dough. Knead for about 5 minutes. Cover the dough and let it rest for 30 minutes.",
    //           "Heat some oil in a pan and sauté the onions and garlic until soft. Add the minced meat (if using), and cook until browned. You can skip this if making vegetarian samosas. Add the mashed potatoes, cumin, curry powder, coriander, salt, and pepper. Stir well and cook for 5 minutes. Set aside to cool.",
    //           "Divide the dough into small balls and roll each into a flat circle (about 4 inches wide). Cut the circle into half, forming two semi-circles. Fold each semi-circle into a cone shape, sealing the edge with a bit of water. Fill the cone with the potato filling, then fold the open end and seal with water.",
    //           "Heat vegetable oil in a pan and fry the samosas until golden brown (about 4-5 minutes on each side). Drain on paper towels and serve."
    //         ]
    //       },
    //       {
    //         "name": "Spring Roll",
    //         "servings": 10,
    //         "ingredients": [
    //           {
    //             "name": "Thinly sliced cabbage",
    //             "quantity": "2 cups"
    //           },
    //           {
    //             "name": "Julienned carrot",
    //             "quantity": "1 medium"
    //           },
    //           {
    //             "name": "Sliced mushrooms",
    //             "quantity": "1/2 cup"
    //           },
    //           {
    //             "name": "Sliced bell peppers",
    //             "quantity": "1/2 cup"
    //           },
    //           {
    //             "name": "Minced garlic",
    //             "quantity": "1 tsp"
    //           },
    //           {
    //             "name": "Soy sauce",
    //             "quantity": "1 tsp"
    //           },
    //           {
    //             "name": "Spring roll wrappers",
    //             "quantity": "10"
    //           },
    //           {
    //             "name": "Egg (for sealing)",
    //             "quantity": "1"
    //           },
    //           {
    //             "name": "Vegetable oil (for frying)",
    //             "quantity": "As needed"
    //           }
    //         ],
    //         "steps": [
    //           "In a pan, heat a bit of oil and stir-fry the garlic for about 1 minute. Add the cabbage, carrots, mushrooms, and bell peppers. Stir-fry for about 3-4 minutes until vegetables are slightly tender. Add soy sauce, salt, and pepper, and stir to combine. Remove from heat and let it cool.",
    //           "Lay the spring roll wrapper flat on a surface. Place a spoonful of the vegetable mixture near the edge. Roll the wrapper tightly, folding in the sides as you go. Seal the end with a bit of egg wash.",
    //           "Heat oil in a pan and fry the spring rolls until crispy and golden (about 3-4 minutes on each side). Drain on paper towels and serve."
    //         ]
    //       },
    //       {
    //         "name": "Puff Puff",
    //         "servings": 10,
    //         "ingredients": [
    //           {
    //             "name": "All-purpose flour",
    //             "quantity": "2 cups"
    //           },
    //           {
    //             "name": "Sugar",
    //             "quantity": "1/4 cup"
    //           },
    //           {
    //             "name": "Yeast",
    //             "quantity": "2 tsp"
    //           },
    //           {
    //             "name": "Salt",
    //             "quantity": "1/2 tsp"
    //           },
    //           {
    //             "name": "Warm water",
    //             "quantity": "1 cup"
    //           },
    //           {
    //             "name": "Ground nutmeg (optional)",
    //             "quantity": "1/2 tsp"
    //           },
    //           {
    //             "name": "Vegetable oil (for frying)",
    //             "quantity": "As needed"
    //           }
    //         ],
    //         "steps": [
    //           "In a bowl, combine the warm water, yeast, and a pinch of sugar. Let it sit for about 10 minutes until it becomes frothy.",
    //           "In a large bowl, mix the flour, sugar, salt, and nutmeg. Pour the yeast mixture into the flour and mix until smooth. The dough should be thick but soft. Cover the dough with a cloth and let it rise for about 1 hour.",
    //           "Heat oil in a deep pan (about 350°F). Using your hands or a spoon, drop small portions of dough into the hot oil. Fry in batches, turning occasionally until golden brown on all sides (about 3-5 minutes). Drain on paper towels and serve."
    //         ]
    //       },
    //       {
    //         "name": "Plantain Mosa",
    //         "servings": 10,
    //         "ingredients": [
    //           {
    //             "name": "Ripe plantains",
    //             "quantity": "2 (peeled and mashed)"
    //           },
    //           {
    //             "name": "Small onion (finely chopped)",
    //             "quantity": "1"
    //           },
    //           {
    //             "name": "Garlic (minced)",
    //             "quantity": "2 cloves"
    //           },
    //           {
    //             "name": "Ground pepper",
    //             "quantity": "1 tsp"
    //           },
    //           {
    //             "name": "Egg",
    //             "quantity": "1"
    //           },
    //           {
    //             "name": "Salt",
    //             "quantity": "To taste"
    //           },
    //           {
    //             "name": "Vegetable oil (for frying)",
    //             "quantity": "As needed"
    //           }
    //         ],
    //         "steps": [
    //           "Mash the plantains in a bowl. Add the finely chopped onion, minced garlic, ground pepper, salt, and the egg. Mix thoroughly.",
    //           "Heat oil in a frying pan. Take spoonfuls of the mixture and form small patties. Fry the patties until golden brown on both sides (about 3-4 minutes on each side). Drain on paper towels and serve."
    //         ]
    //       },
    //       {
    //         "name": "Chicken Wings",
    //         "servings": 10,
    //         "ingredients": [
    //           {
    //             "name": "Chicken wings",
    //             "quantity": "10"
    //           },
    //           {
    //             "name": "Olive oil",
    //             "quantity": "2 tbsp"
    //           },
    //           {
    //             "name": "Garlic (minced)",
    //             "quantity": "2 cloves"
    //           },
    //           {
    //             "name": "Lemon juice",
    //             "quantity": "1 tbsp"
    //           },
    //           {
    //             "name": "Paprika",
    //             "quantity": "1 tsp"
    //           },
    //           {
    //             "name": "Thyme",
    //             "quantity": "1 tsp"
    //           },
    //           {
    //             "name": "Salt and pepper",
    //             "quantity": "To taste"
    //           }
    //         ],
    //         "steps": [
    //           "In a bowl, combine olive oil, garlic, lemon juice, paprika, thyme, salt, and pepper. Rub the marinade all over the chicken wings and let it marinate for at least 30 minutes (or up to 2 hours in the fridge).",
    //           "Preheat the oven to 400°F. Arrange the wings on a baking tray and bake for 25-30 minutes until fully cooked and golden brown. Serve with dipping sauces."
    //         ]
    //       }
    //     ]
    //   },
       {  
    id: 1,
          section: 'breakfast',
          title: 'Porridge Yam with Spinach',
          ingredients: 'Yam, fresh spinach, onions, palm oil, seasoning cubes, salt, and water.',
          nutrition: 'High in carbohydrates from the yam, and rich in vitamins A and C from the spinach. Contains fiber for digestion and iron for blood health.'
        },
        {
          id: 2,
          section: 'lunch',
          title: 'Jollof Rice with Grilled Chicken',
          ingredients: 'Rice, tomatoes, onions, bell peppers, garlic, ginger, chicken, thyme, curry powder, vegetable oil, seasoning cubes.',
          nutrition: 'The tomatoes and peppers in Jollof rice provide antioxidants, while chicken offers lean protein.'
        },
        {
          id: 3,
          section: 'dinner',
          title: 'Pounded Yam with Egusi Soup',
          ingredients: 'Yam, melon seeds (egusi), spinach or other leafy greens, palm oil, onions, seasoning cubes.',
          nutrition: 'Pounded yam is high in carbohydrates, while egusi is rich in protein and healthy fats.'
        }
      
]
export default RecipesArray