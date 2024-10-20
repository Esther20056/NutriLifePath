import EfoRiro from '../Assets/EfoRiro.jpeg'
import Beans from '../Assets/Beans.png'
import MoiMoi from '../Assets/MoiMoi.jpeg'
import Nkwobi from '../Assets/Nkwobi.jpeg'

const Products = [
    {
        "id": 1,
        "title": "Efo Riro",
        "image": EfoRiro, 
        "description": "Efo Riro is a flavorful Yoruba vegetable soup made with leafy greens, meats, iru, smoked panla fish, and spices. It pairs beautifully with different swallows, rice or boiled plantain",
        "details": "Efo Riro is a vibrant and flavorful Yoruba vegetable soup that showcases the rich culinary traditions of Nigeria. The dish is primarily made with a variety of leafy greens, such as spinach or amaranth, which are sautéed with a blend of onions, tomatoes, and peppers. The soup often includes proteins like assorted meats, smoked panla fish, cow skin (ponmo), and locust beans (iru), adding depth and richness to the dish. Seasoned with spices and a touch of palm oil, Efo Riro is both hearty and nutritious, making it a staple in many Nigerian households. Typically served with rice or pounded yam, this soup is not just a meal but a celebration of flavor and culture.",
        "ingredients": {
          "leafyGreens": {
            "options": ["Tete (Lagos Spinach)", "Soko (Spinach)", "Ugwu (Pumpkin Leaves)"],
            "benefits": {
              "Tete": "Loaded with vitamins A and C, anti-inflammatory properties.",
              "Soko": "High in antioxidants, rich in iron, and boosts immunity.",
              "Ugwu": "Rich in vitamins A and C, high in iron and fiber."
            }
          },
          "PepperMixture": {
            "ingredients": [
              { "name": "Tomato", "benefit": "Rich in vitamins C and A, supports heart health." },
              { "name": "Cayenne Pepper", "benefit": "Boosts metabolism and has anti-inflammatory properties." },
              { "name": "Onion", "benefit": "Good source of antioxidants, supports the immune system." },
              { "name": "Habanero Pepper", "benefit": "Rich in vitamins A and C, boosts metabolism, and has antioxidant properties." },
              { "name": "Garlic", "benefit": "Contains compounds that help fight infections and boost immune health." },
              { "name": "Ginger", "benefit": "Has anti-inflammatory properties and aids digestion." }
            ]
          },
          "meatsAndFish": {
            "description": "Assorted meats like goat meat, beef, cow tripe (shaki), ponmo (cow skin), smoked panla fish, and dried or fresh fish.",
            "benefits": {
              "protein": "Helps build and repair muscles.",
              "iron": "Promotes healthy blood cells.",
              "zinc": "Essential for immune function."
            }
          },
          "vegetablesAndSpices": [
            { "name": "Tomatoes", "benefit": "Rich in vitamins C and A, supports heart health." },
            { "name": "Onions", "benefit": "Good source of antioxidants, supports immune system." },
            { "name": "Palm oil", "benefit": "Contains healthy fats, rich in vitamin E." },
            { "name": "Crayfish", "benefit": "Provides added protein and flavor, rich in omega-3 fatty acids." },
            { "name": "Iru (locust beans)", "benefit": "Rich in protein, improves digestion, and adds a savory umami flavor." },
            { "name": "Stock Cubes", "benefit": "Enhances the flavor of the dish." }
          ]
        },
        "cookingInstructions": [
          "1. Wash and prepare the leafy greens (Tete, Soko, Ugwu).",
          "2. Cook the assorted meats (goat meat, beef, shaki, ponmo) with seasonings for 30 minutes or until tender.",
          "3. In a hot pot, add palm oil, let it heat for 1 minute.",
          "4. Fry the sliced onions for 3 minutes on very low heat.",
          "5. Fry the pepper mixture (tomato, habanero pepper, cayenne pepper, onions, garlic, and ginger) and spices, add the iru (locust beans) and stir to combine. Let it fry for 8 minutes on low heat.",
          "6. Taste and adjust seasoning with salt, seasoning cubes, or more iru if desired.",
          "7. Add the cooked meats and ponmo to the sauce and mix. Let it cook for 10 minutes.",
          "8. Add the smoked panla fish and allow it to cook for 2-5 minutes or until the oil floats on top.",
          "9. Add the washed leafy greens and cook for 2 minutes or until they are tender.",
          "10. Serve hot with your choice of swallow (Pounded Yam, Amala, Fufu, or eba), rice, or plantain."
        ],
        "portionSizes": {
          "meat": "500g assorted meats (including ponmo and smoked panla fish) for 4-6 people.",
          "leafyGreens": "1 bunch of Soko, Tete or Ugwu for 4-6 people.",
        "Palm Oil": "Use 1 cup (500 ml) of palm oil, but this may vary depending on the quantity of the pepper mixture and how oily you want the dish to be. Adjust the amount as needed for a balanced consistency and flavor.",
          "swallow": "200-300g of swallow per person."
        },
        "healthBenefits": {
          "general": "A balanced dish with protein, vitamins, and healthy fats that support overall well-being.",
          "swallowBenefits": [
            { "name": "Pounded Yam", "benefit": "Rich in complex carbohydrates, provides sustained energy, high in potassium." },
            { "name": "Amala", "benefit": "Provides complex carbohydrates, good for digestion, and energy." },
            { "name": "Fufu", "benefit": "Contains complex carbs, offers slow-releasing energy, high in fiber." }
          ]
        },
        "nutritionalValue": {
              "calories": "~400–600 kcal per serving (depending on portion size and type of swallow used)",
              "protein": "30–40g (from assorted meats, fish, and leafy greens)",
              "carbohydrates": "40–50g (from leafy greens and swallow like pounded yam or amala)",
              "fat": "20–30g (from palm oil and meats)",
              "fiber": "6–8g (from leafy greens and swallow)",
              "vitamins": {
                "vitaminA": "Rich in vitamin A from palm oil and leafy greens (Tete, Soko, Ugwu)",
                "vitaminC": "High in vitamin C from tomatoes, onions, and peppers",
                "vitaminE": "Good source from palm oil"
              },
              "minerals": {
                "iron": "Helps with blood health, mainly from leafy greens, meat, and fish",
                "zinc": "Supports immune function, sourced from meats, fish, and locust beans (iru)",
                "potassium": "High in potassium, especially from the swallow (pounded yam, amala, or fufu)"
              }
            }        
      },      
      {
        "id": 2,
        "title": "Beans Porridge with Fried Ripe Plantain and Fish",
        "image": Beans,
        "description": "Beans Porridge with Fried Ripe Plantain and Fish is a comforting Nigerian dish, featuring spicy beans, crispy plantain, and fish for added richness.",
        "details": "This hearty Nigerian dish combines protein-rich beans with the natural sweetness of ripe plantain, creating a balance of savory and sweet flavors. The beans are simmered in a flavorful tomato, onion, and pepper sauce. The optional mashed plantain adds extra creaminess and sweetness to the porridge. Served with fried ripe plantain and a protein source like fried fish, it makes for a filling and nutritious meal.",
        "ingredients": {
          "beans": {
            "description": "Black-eyed or brown beans, cooked until tender and simmered in a spicy tomato sauce.",
            "quantity": "4 cups of beans for 4-6 people",
            "benefits": {
              "protein": "Helps build and repair muscles.",
              "fiber": "Supports digestion and promotes fullness."
            }
          },
          "Optional (Mashed Plantain)": {
            "description": "Optional for sweetness, adds a natural sweetness to the porridge.",
            "quantity": "1 cup of mashed ripe plantain (optional)",
            "benefits": {
              "potassium": "Supports heart health and regulates blood pressure.",
              "complexCarbs": "Provides sustained energy."
            }
          },
          "Pepper Mixture": {
            "ingredients": [
              { "name": "Cayenne Pepper", "quantity": "10 pieces of cayenne pepper.", "benefit": "Boosts metabolism and has anti-inflammatory properties." },
              { "name": "Onion","quantity": "2 large onions", "benefit": "Good source of antioxidants, supports the immune system." },
              { "name": "Habanero Pepper", "quantity": "15 habanero peppers", "benefit": "Rich in vitamins A and C, boosts metabolism, and has antioxidant properties." },
            ]
          },
          "Meats and Fish": {
            "description": "Fresh mackerel or tilapia fish.",
            "benefits": {
              "protein": "Helps build and repair muscles.",
              "iron": "Promotes healthy blood cells.",
              "zinc": "Essential for immune function."
            }
          },
          "Vegetables and Spices": [
            { "name": "Palm oil", "benefit": "Contains healthy fats, rich in vitamin E." },
            { "name": "Crayfish", "quantity": "3tbs", "benefit": "Provides added protein and flavor, rich in omega-3 fatty acids." },
            { "name": "Stock Cubes (Maggi)", "quantity": "16grams", "benefit": "Enhances the flavor of the dish." }
          ]
        },
        "cookingInstructions": [
          "1. Wash the beans with salt or parboil the beans, for atleast 20 minutes to remove any chemicals like the ones used for protecting the beans.",
          "2. Cook the beans in water, add chopped onions and let it cook for about 1hour 30minutes minutes or until soft. Do not add too much water",
          "3. If using, mash the ripe plantain and stir it into the beans. Cook for 5 minutes. Under medium heat",
          "4.Add spices (salt, stock cubes (maggi), crayfish) and let it cook for 2minutes under low heat",
          "5. Add the blended habanero peppers, and cayenne pepper (optional). Stir well and cook for 5-8 minutes. Under low heat and make sure there is little amount of water in the beans or the quantity of water you want",
          "6. Add the quantity of palm oil you want and let it cook for 8-10 minutes under very low heat",       
          "9. Fry the ripe plantain slices in hot oil until golden brown and crispy.",
          "10. Serve the beans porridge with the fried plantain and your choice of protein (e.g., fried fish)."
        ],
        "portionSizes": {
          "beans": "4 cups of beans for 4-6 people.",
          "mashedPlantain": "2-3 mashed ripe plantain (optional, for sweetness).",
          "friedPlantain": "3-4 ripe plantains for 4-6 people.",
          "fish": "Half kilo of fried fish for 4-6 people.",
          "palmOil": "1 cup (500ml) of palm oil (adjust for desired oiliness)."
        },
        "healthBenefits": {
          "general": "This dish offers a balanced mix of carbohydrates, fiber, and protein, supporting overall health, muscle repair, and sustained energy."
        },
        "nutritionalValue": {
          "calories": "~450–600 kcal per serving (depending on the amount of oil and plantain used).",
          "protein": "25–30g (from beans and optional fish).",
          "carbohydrates": "60–80g (from beans and plantain).",
          "fat": "10–20g (from palm oil and fish).",
          "fiber": "10–15g (from beans and plantain).",
          "vitamins": "Rich in vitamins A, C, and E (plantain)."
        }
      },      
      {
        "id": 3,
        "title": "Moi Moi served with Pap",
        "image": MoiMoi,
        "description": "Moi Moi is a savory bean pudding paired with creamy pap, embodying Nigerian culinary tradition.",
        "details": "Moi Moi is a traditional Nigerian steamed bean pudding crafted from blended black-eyed peas, peppers, onions, and a blend of spices...",
        "ingredients": {
          "beans": {
            "description": "Black-eyed peas, soaked and blended to create the base of Moi Moi.",
            "quantity": "2 cups of soaked black-eyed peas (for 4-6 people)",
            "benefits": {
              "protein": "Supports muscle growth and repair.",
              "fiber": "Promotes healthy digestion and fullness."
            }
          },
          "Pepper Mixture": {
            "ingredients": [
              { "name": "Cayenne Pepper", "benefit": "Boosts metabolism and has anti-inflammatory properties." },
              { "name": "Habanero Pepper", "benefit": "Rich in vitamins A and C, boosts metabolism, and has antioxidant properties." },
              { "name": "Onion", "benefit": "Good source of antioxidants, supports the immune system." },
              { "name": "Garlic", "benefit": "Contains compounds that help fight infections and boost immune health." },
              { "name": "Ginger", "benefit": "Has anti-inflammatory properties and aids digestion." }
            ]
          },
          "Pap": {
            "description": "Pap is a smooth, fermented corn pudding that complements the spiciness of Moi Moi.",
            "quantity": "1-2 cups of pap (for 4-6 people)",
            "benefits": {
              "carbohydrates": "Provides energy through complex carbohydrates.",
              "fiber": "Aids in digestion and helps maintain a healthy gut."
            }
          }
        },
        "cookingInstructions": [
          "1. Soak the black-eyed peas for 10-20 minutes, then peel the skins and wash thoroughly.",
          "2. Add onions, habanero pepper, cayenne pepper, garlic, and ginger to the washed beans and blend/grind (using a grinding machine) them into a smooth paste.",
          "3. Season with salt, seasoning cubes, crayfish, and a little oil or desired quantity.",
          "4. Pour the Moi Moi mixture into Moi Moi leaves (Thaumatococcus daniellii), add your protein like boiled fish or eggs before wrapping up each leaf. Alternatively, you can use Moi Moi cans or foil containers. Cover tightly.",
          "5. Steam the Moi Moi for about 45-60 minutes or until it is firm and cooked through.",
          "6. For the pap, mix the fermented corn flour with water to form a smooth batter and cook over low heat, stirring continuously until it thickens and becomes smooth.",
          "7. Serve the Moi Moi hot with the pap on the side."
        ],
        "portionSizes": {
          "beans": "2 cups of soaked black-eyed peas for 4-6 people.",
          "pap": "1-2 cups of pap for 4-6 people."
        },
        "healthBenefits": {
          "general": "This meal is rich in protein, fiber, and essential vitamins. It supports muscle growth, heart health, and digestive health.",
          "Pap Benefits": [
            { "name": "Pap", "benefit": "Provides energy through complex carbohydrates and helps with digestion due to its high fiber content." }
          ],
          "Optional Additional Benefits": [
            { "name": "Eggs", "benefit": "High in protein and B12, supports muscle growth and overall health." },
            { "name": "Fish", "benefit": "Rich in omega-3 fatty acids, supports brain and heart health." }
          ]
        },
        "nutritionalValue": {
          "calories": "~300–400 kcal per serving (depending on whether you include eggs or fish).",
          "protein": "20–25g (from beans and optional additions like eggs or fish).",
          "carbohydrates": "45–60g (from beans and pap).",
          "fat": "10–15g (from oil and optional egg or fish).",
          "fiber": "8–10g (from beans and pap).",
          "vitamins": "Rich in vitamins A, C, B6, and B12 (from peppers, and optional additions)."
        }
      },                    
                {
                  "id": 4,
                  "title": "Nkwobi",
                  "image": Nkwobi,
                  "description": "Nkwobi is a spicy cow foot delicacy, cooked in palm oil and seasoned with local spices.",
                  "details": "Nkwobi is a flavorful Nigerian dish made from cow foot, cooked in a rich, spicy palm oil sauce. This delicacy is seasoned with ground crayfish, potash, and a blend of local spices, giving it a unique, savory taste. Often garnished with sliced onions and utazi leaves for a hint of bitterness, Nkwobi is typically served in a wooden bowl, enhancing its rustic appeal. A popular delicacy in southeastern Nigeria, it's often enjoyed as a snack or appetizer, perfect for sharing at gatherings and celebrations.",
                  "ingredients": {
                    "Cow Foot": {
                      "description": "The main ingredient in Nkwobi, cooked to tender perfection.",
                      "quantity": "1 kg of cow foot (cut into small pieces)",
                      "benefits": {
                        "protein": "Supports muscle repair and growth.",
                        "collagen": "Promotes healthy skin and joints."
                      }
                    },
                    "Palm Oil": {
                      "description": "Palm oil is used to create the rich, flavorful sauce.",
                      "quantity": "200 ml of palm oil",
                      "benefits": {
                        "healthyFats": "Contains unsaturated fats, good for heart health.",
                        "vitaminE": "Rich in antioxidants, protects cells from damage."
                      }
                    },
                    "Seasoning and Spices": {
                      "ingredients": [
                        { "name": "Crayfish", "benefit": "Adds flavor and is rich in omega-3 fatty acids." },
                        { "name": "Potash", "benefit": "Helps thicken the sauce and enhances the flavor." },
                        { "name": "Ground Ehu seeds (Aridan)", "benefit": "Gives the dish a distinct, aromatic flavor." },
                        { "name": "Seasoning Cubes", "benefit": "Enhances the flavor of the dish." },
                        { "name": "Salt", "benefit": "Balances the overall flavor of the dish." }
                      ]
                    },
                    "Vegetables and Garnish": {
                      "description": "For garnish and flavor enhancement.",
                      "ingredients": [
                        { "name": "Sliced onions", "benefit": "Adds sweetness and a slight crunch." },
                        { "name": "Utazi leaves", "benefit": "Adds a bitter contrast, balancing the rich palm oil." }
                      ]
                    }
                  },
                  "cookingInstructions": [
                    "1. Prepare the Cow Foot: Wash and clean the cow foot pieces thoroughly. Place in a pot and add water, seasoning cubes, and salt. Boil for 1 to 1.5 hours or until the cow foot is tender.",
                    "2. Prepare the Palm Oil Sauce: While the cow foot is cooking, heat the palm oil in a separate pot for about 2-3 minutes. Do not overheat the oil.",
                    "3. Add Potash: Dissolve the potash in a small amount of water and add it to the heated palm oil. Stir the mixture gently until it becomes slightly thicker and forms a smooth paste.",
                    "4. Season the Sauce: Add ground crayfish, ground ehu seeds (Aridan), and additional seasoning cubes into the palm oil mixture. Stir well to combine the spices, and allow it to simmer for 5 minutes to allow the flavors to meld.",
                    "5. Combine with Cow Foot: Once the cow foot is fully cooked and tender, drain it and add the cow foot pieces to the palm oil mixture. Stir gently to coat the cow foot in the rich, spicy sauce.",
                    "6. Cook Together: Let the cow foot and palm oil mixture cook for another 10-15 minutes under low heat, stirring occasionally to ensure it doesn’t burn and the flavors meld together.",
                    "7. Add Garnish: Slice the onions and utazi leaves, then sprinkle them over the Nkwobi. Stir gently and let it cook for another 2-3 minutes under low heat. The utazi leaves will add a touch of bitterness that balances the richness of the palm oil.",
                    "8. Serve: Serve the Nkwobi hot in a wooden bowl, which enhances the rustic appeal of this traditional dish. It can be served with cold drinks as a snack or appetizer."
                  ],
                  "portionSizes": {
                    "cow Foot": "1 kg of cow foot for 4-6 people.",
                    "palm Oil": "200 ml of palm oil (adjust for richness).",
                    "utazi Leaves": "1 small bunch of utazi leaves for garnish (optional).",
                    "onions": "1 medium onion, sliced for garnish."
                  },
                  "healthBenefits": {
                    "general": "Nkwobi provides a good source of protein from cow foot, and healthy fats from palm oil. The dish also offers collagen from the cow foot, which supports skin health and joint mobility.",
                    "Garnish Benefits": [
                      { "name": "Utazi leaves", "benefit": "Rich in antioxidants, supports digestion, and offers a bitter contrast to the richness of the dish." },
                      { "name": "Onions", "benefit": "Good source of antioxidants, helps support the immune system and add flavor." }
                    ]
                  },
                  "nutritionalValue": {
                    "calories": "~350–500 kcal per serving (depending on portion size and palm oil used).",
                    "protein": "25–30g (from cow foot).",
                    "carbohydrates": "5–10g (very low in carbs, as it is primarily protein and fat).",
                    "fat": "20–30g (from palm oil, contributing to a rich flavor).",
                    "fiber": "1–2g (from onions and utazi leaves).",
                    "vitamins": "Rich in vitamin A (from palm oil), and vitamin C (from onions)."
                  }
                },
              
];

export default Products;
