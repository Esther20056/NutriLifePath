import NIB from '../Assets/NIB.png'
import PABA from '../Assets/PABA.png'
import NGS from '../Assets/NGS.png'
import NDBC from '../Assets/NDBC.png'
import BW from '../Assets/BW.png'
//   SUPERFOODS IMAGES
import Ugu from '../SuperFoosImages/Ugu.jpeg'
import BitterKola from "../SuperFoosImages/BitterKola.jpeg"
import Coconut from "../SuperFoosImages/Coconut.jpeg"
import Moringa from '../SuperFoosImages/Moringa.jpeg'
import Groundnut from '../SuperFoosImages/Groundnut.jpeg'
import Tigernut from '../SuperFoosImages/Tigernut.jpeg'
import RipePlantain from '../SuperFoosImages/RipePlantain.jpeg'
import UnRipePlantain from  '../SuperFoosImages/UnRipePlantain.jpeg'
// Smoothie Recipes Images
import SmoothieOne from "../SuperFoosImages/SmoothieOne.jpeg"
import SmoothieTwo from "../SuperFoosImages/SmoothieTwo.jpeg"
import SmoothieThree from "../SuperFoosImages/SmoothieThree.jpeg"
import SmoothieFour from "../SuperFoosImages/SmoothieFour.jpeg"
import SmoothieFive from "../SuperFoosImages/SmoothieFive.jpeg"
// Snacks Recipes Images
import Akara from "../SuperFoosImages/Akara.jpeg"
import PuffPuff from "../SuperFoosImages/PuffPuff.jpeg"
import PlantainChips from "../SuperFoosImages/PlantainChips.jpeg"
import PotatoPorridge from "../SuperFoosImages/PotatoPorridge.jpeg"
import ChinChin from "../SuperFoosImages/ChinChin.jpeg"
import KuliKuli from "../SuperFoosImages/KuliKuli.jpeg"
import Kokoro from "../SuperFoosImages/Kokoro.jpeg"
// Hydration and Local Beverages Images
import ZoboDrink from '../SuperFoosImages/ZoboDrink.jpeg'
import Fura from '../SuperFoosImages/Fura.jpeg'
import CoconutWater from '../SuperFoosImages/CoconutWater.jpeg'
import PalmWine from '../SuperFoosImages/PalmWine.jpeg'
import Kunu from '../SuperFoosImages/Kunu.jpeg'
// SkinCare Images
import AloeAndGreenTea from '../SuperFoosImages/AloeAndGreenTea.jpeg'
import AvocadoMask from '../SuperFoosImages/AvocadoMask.jpeg'
import CoconutAlmond from '../SuperFoosImages/CoconutAlmond.jpeg'
import JojobaRosehipOil from '../SuperFoosImages/JojobaRosehipOil.jpeg'
import Marula from '../SuperFoosImages/Marula.jpeg'
import RiceToner from '../SuperFoosImages/RiceToner.jpeg'
import OatAndManuka from '../SuperFoosImages/OatAndManuka.jpeg'
import TumericYoghurt from '../SuperFoosImages/TumericYoghurt.jpeg'
const RecentPosts =[
    {
        "id": 1,
        "image":NIB,
        "type":"Superfood",
        "title": "Nigerian Superfoods to Boost Your Health",
        "description": "Unlock the health benefits of Nigerian superfoods like moringa, ugu, and tiger nuts. Incorporate coconut, ripe and unripe plantains, bitter kola, and groundnuts to elevate your meals and nutrition!",
        "superfoods": [
            {
                "name": "Moringa",
                "description": "Moringa, often referred to as the 'miracle tree,' is packed with essential nutrients that can boost your overall health.",
                "SubImage": Moringa,
                "usage": "You can add moringa leaves to soups, stews, smoothies, or salads. Moringa powder can also be added to drinks or sprinkled on foods for extra nutrition.",
                "health_benefits": [
                    "Boosts immunity due to high vitamin C content.",
                    "Promotes healthy bones and teeth with its calcium content.",
                    "Supports energy levels and overall well-being with protein and iron."
                ]
            },
            {
                "name": "Ugu (Pumpkin Leaves)",
                "description": "Ugu leaves are a traditional Nigerian leafy green packed with vitamins and minerals essential for maintaining good health.",
                "SubImage": Ugu,
                "usage": "Ugu leaves are commonly used in Nigerian soups like 'Egusi' or 'Efo Riro.' Simply wash the leaves thoroughly and add them to the soup towards the end of cooking to retain their nutrients.",
                "health_benefits": [
                    "Promotes good vision with high vitamin A content.",
                    "Supports immune health and wound healing with its vitamin C.",
                    "Strengthens bones and teeth thanks to calcium."
                ]
            },
            {
                "name": "Tiger Nuts",
                "description": "Tiger nuts, also known as 'Earth Almonds,' are small, nutrient-rich tubers that are an excellent source of fiber, healthy fats, and vitamins.",
                "SubImage": Tigernut,
                "usage": "Tiger nuts can be eaten raw as a snack, blended into smoothies, or made into a drink called 'Kunu.' You can also use tiger nut flour in baking or cooking as a gluten-free alternative.",
                "health_benefits": [
                    "High in fiber, aiding digestion and promoting gut health.",
                    "Supports heart health with healthy fats, especially monounsaturated fats.",
                    "Rich in potassium, helping to regulate blood pressure."
                ]
            },
            {
                "name": "Coconut",
                "description": "Coconut is a tropical fruit that provides healthy fats, fiber, and various vitamins and minerals, making it a versatile addition to any diet.",
                "SubImage": Coconut,
                "usage": "Coconut can be used in many ways—drink coconut water for hydration, eat the flesh for a healthy snack, or use coconut oil for cooking or moisturizing the skin. You can also add dried coconut flakes to granola, desserts, or smoothies.",
                "health_benefits": [
                    "Boosts hydration with its natural electrolytes in coconut water.",
                    "Provides healthy fats that support heart health and brain function.",
                    "Contains antioxidants that protect the body from oxidative stress."
                ]
            },
            {
                "name": "Ripe Plantains",
                "description": "Ripe plantains are an excellent source of potassium and complex carbohydrates, making them a perfect energy-boosting food.",
                "SubImage": RipePlantain,
                "usage": "Ripe plantains can be fried, baked, or grilled. They're often used in dishes like 'plantain chips' or 'fried plantains.' You can also mash them for a nutritious side dish.",
                "health_benefits": [
                    "Rich in potassium, which helps regulate blood pressure.",
                    "Provides sustained energy due to its complex carbohydrate content.",
                    "Supports digestive health with natural fiber."
                ]
            },
            {
                "name": "Unripe Plantains",
                "description": "Unripe plantains are rich in resistant starch, which helps regulate blood sugar levels and promote gut health.",
                "SubImage": UnRipePlantain,
                "usage": "Unripe plantains can be boiled, fried, or baked. They are often used in savory dishes like 'yam and plantain porridge' or 'plantain fufu.' They're also great when mashed or turned into plantain flour for gluten-free baking.",
                "health_benefits": [
                    "Helps regulate blood sugar levels due to resistant starch.",
                    "Aids digestion and gut health by promoting healthy bowel movements.",
                    "Supports weight management by keeping you fuller for longer."
                ]
            },
            {
                "name": "Bitter Kola",
                "description": "Bitter kola is known for its powerful anti-inflammatory properties and is often used in traditional medicine to boost energy and fight fatigue.",
                "SubImage": BitterKola,
                "usage": "Bitter kola can be chewed raw or ground into powder. It’s often used in traditional remedies or consumed with water for its health benefits. Some people add it to herbal teas for extra medicinal properties.",
                "health_benefits": [
                    "Acts as a natural energy booster and improves alertness.",
                    "Contains anti-inflammatory compounds that support joint health.",
                    "Helps regulate blood sugar and combat infections."
                ]
            },
            {
                "name": "Groundnuts (Peanuts)",
                "description": "Groundnuts, also known as peanuts, are a great source of protein and healthy fats, making them an excellent addition to your diet.",
                "SubImage": Groundnut,
                "usage": "Groundnuts can be roasted, boiled, or made into peanut butter. They're also great in soups, stews, or as a snack. You can blend them into smoothies or sprinkle them on top of salads for an extra crunch.",
                "health_benefits": [
                    "Provides high-quality protein, supporting muscle growth and repair.",
                    "Rich in heart-healthy monounsaturated fats.",
                    "Boosts brain function with its vitamin E and healthy fats."
                ]
            }
        ]
    },    
    {
        "id": 2,
        "title": "Supercharged Nigerian Smoothies for Every Health Goal",
        "description": "Fuel your day with vibrant Nigerian smoothies designed for specific health goals! Whether you need an energy boost, detox, or immune support, these smoothies combine nutrient-packed local fruits and superfoods. Blend ripe bananas, pawpaw (papaya), and mangoes with greens like spinach, bitter leaf, and superfood add-ins like moringa or ginger. For a refreshing twist, mix in local herbs like mint, and spices such as cloves or turmeric for added health benefits. These smoothies are more than just tasty—they are tailored to your needs!",
        "image": PABA,
        "type": "Smoothie",
        "smoothie_recipes": [
            {
                "name": "Energy Boosting Smoothie",
                "SubImage": SmoothieOne,
                "ingredients": [
                    "1 ripe banana",
                    "1/2 cup pawpaw (papaya)",
                    "1 tablespoon moringa powder",
                    "1/2 cup spinach",
                    "1 teaspoon ginger",
                    "1 cup coconut water"
                ],
                "description": "Packed with natural sugars, potassium, and moringa for sustained energy, this smoothie will keep you alert and energized throughout the day.",
                "health_benefits": [
                    "Boosts energy naturally without the crash of caffeine.",
                    "Promotes muscle recovery and overall well-being with potassium and magnesium.",
                    "Supports immune function with moringa and ginger."
                ],
                "usage": "Blend all ingredients until smooth and enjoy as a pre-workout or mid-day snack for an energy boost."
            },
            {
                "name": "Immune Support Smoothie",
                "SubImage": SmoothieTwo,
                "ingredients": [
                    "1 orange (peeled)",
                    "1/2 cup mango",
                    "1/4 cup bitter leaf",
                    "1 tablespoon honey",
                    "1 teaspoon turmeric",
                    "1/2 cup water or unsweetened almond milk"
                ],
                "description": "This zesty smoothie is packed with vitamin C, antioxidants, and anti-inflammatory compounds, perfect for supporting a strong immune system.",
                "health_benefits": [
                    "Boosts immune function with high levels of vitamin C from orange and mango.",
                    "Reduces inflammation and supports overall health with turmeric and bitter leaf.",
                    "Fights off infections naturally with honey and bitter leaf's healing properties."
                ],
                "usage": "Blend until smooth and enjoy this refreshing immune-boosting drink in the morning or when you need a pick-me-up."
            },
            {
                "name": "Detox & Cleanse Smoothie",
                "SubImage": SmoothieThree,
                "ingredients": [
                    "1/2 green apple",
                    "1/2 cucumber",
                    "1/2 lemon (juiced)",
                    "1 tablespoon ginger",
                    "1/2 cup spinach",
                    "1 tablespoon chia seeds",
                    "1 cup water"
                ],
                "description": "A green powerhouse designed to flush out toxins, hydrate, and improve digestion. The cucumber and lemon cleanse your system, while the chia seeds add fiber for a smooth digestive process.",
                "health_benefits": [
                    "Promotes detoxification by flushing out toxins and waste.",
                    "Aids digestion and supports a healthy gut with chia seeds and ginger.",
                    "Hydrates and rejuvenates skin with cucumber and lemon's natural hydration."
                ],
                "usage": "Blend all ingredients until smooth. Drink in the morning or after meals to support digestion and detoxification."
            },
            {
                "name": "Skin Glow Smoothie",
                "SubImage": SmoothieFour,
                "ingredients": [
                    "1/2 cup guava (seedless)",
                    "1/2 mango",
                    "1/2 cup yogurt (optional for creaminess)",
                    "1 tablespoon honey",
                    "1 tablespoon flaxseeds",
                    "1 cup coconut water"
                ],
                "description": "This tropical smoothie is packed with antioxidants and essential fatty acids that help maintain a healthy, radiant complexion.",
                "health_benefits": [
                    "Rich in vitamin C and antioxidants to fight free radicals and promote skin health.",
                    "Hydrates and nourishes skin from the inside out with coconut water and flaxseeds.",
                    "Boosts skin elasticity and radiance with guava and honey."
                ],
                "usage": "Blend until smooth and enjoy this refreshing smoothie for glowing skin anytime, especially in the morning."
            },
            {
                "name": "Weight Management Smoothie",
                "SubImage": SmoothieFive,
                "ingredients": [
                    "1/2 unripe plantain (boiled or steamed)",
                    "1/2 cup avocado",
                    "1 tablespoon chia seeds",
                    "1/2 teaspoon cinnamon",
                    "1/2 cup water or almond milk"
                ],
                "description": "This smoothie combines healthy fats with fiber to help you stay fuller for longer, promoting healthy weight management.",
                "health_benefits": [
                    "Supports weight loss by providing healthy fats and fiber for satiety.",
                    "Balances blood sugar levels with avocado and unripe plantain.",
                    "Promotes a healthy metabolism with cinnamon and chia seeds."
                ],
                "usage": "Blend all ingredients until creamy. Drink as a filling breakfast or snack to keep cravings at bay and maintain energy throughout the day."
            }
        ]
    },    
    {
        "id": 3,
        "title": "Traditional Snacks with a Healthy Twist",
        "description": "Nigeria's traditional snacks are a culinary delight but can be high in calories. Here’s a healthy twist on popular favorites to enjoy guilt-free! Learn how to make these delicious snacks using affordable ingredients that won’t break the bank.",
        "image": NGS,
        "type": "Snacks",
        "snack_recipes": [
          {
            "name": "Healthy Puff-Puff",
            "SubImage": PuffPuff,
            "ingredients": [
              "1 cup whole wheat flour (or regular flour if preferred)",
              "1/2 cup unsweetened almond milk (or water)",
              "1 tablespoon coconut oil",
              "1 tablespoon honey (optional)",
              "1/2 teaspoon ground cinnamon",
              "1/2 teaspoon active dry yeast",
              "1/4 teaspoon sea salt",
              "Water (as needed)"
            ],
            "description": "A lighter, more nutritious version of the beloved puff-puff! Whole wheat flour adds fiber, while almond milk and coconut oil provide healthy fats, making this a guilt-free indulgence.",
            "how_to_make": [
              "1. In a large bowl, combine the flour, yeast, cinnamon, and salt.",
              "2. In a separate bowl, mix the almond milk, coconut oil, and honey (if using).",
              "3. Gradually add the wet mixture to the dry ingredients, stirring until a dough forms. Add water if necessary to reach a soft, sticky dough consistency.",
              "4. Cover the dough and let it rise in a warm place for about 1 hour, or until it doubles in size.",
              "5. Heat oil in a deep pan and drop spoonfuls of the dough into the hot oil, frying until golden brown on both sides.",
              "6. Drain excess oil on paper towels and serve warm!"
            ],
            "affordable_ingredients": "Whole wheat flour is affordable at local markets, and coconut oil can be replaced with vegetable oil or palm oil if necessary. Almond milk can be swapped with regular milk or even water.",
            "health_benefits": [
              "Provides more fiber and nutrients than regular white flour puff-puff.",
              "Coconut oil contributes healthy fats that support heart health.",
              "Contains less sugar and is lower in calories, making it a healthier snack choice."
            ]
          },
          {
            "name": "Baked Chin Chin",
            "SubImage": ChinChin,
            "ingredients": [
              "2 cups whole wheat flour",
              "1/4 cup coconut flour (optional, or use regular flour)",
              "2 tablespoons olive oil",
              "2 tablespoons honey",
              "1/2 teaspoon vanilla extract",
              "1/2 teaspoon baking powder",
              "1/4 teaspoon sea salt",
              "1/2 cup water"
            ],
            "description": "A healthier, oven-baked version of the traditional chin chin! This recipe swaps frying for baking, and uses whole wheat flour and coconut flour for extra fiber and fewer calories.",
            "how_to_make": [
              "1. Preheat your oven to 350°F (175°C).",
              "2. In a large bowl, mix the flour, coconut flour, baking powder, and salt.",
              "3. In another bowl, whisk together the olive oil, honey, vanilla extract, and water.",
              "4. Gradually add the wet ingredients to the dry, stirring until a dough forms. If the dough is too sticky, add a little more flour.",
              "5. Roll out the dough on a floured surface until it’s about 1/8-inch thick.",
              "6. Cut the dough into small squares or strips, and place them on a baking tray lined with parchment paper.",
              "7. Bake for 15-20 minutes, or until golden brown and crispy.",
              "8. Let them cool before serving."
            ],
            "affordable_ingredients": "Whole wheat flour is a staple in many Nigerian markets, and olive oil can be swapped for vegetable oil or palm oil. Honey can be replaced with sugar if needed.",
            "health_benefits": [
              "Baked instead of fried, reducing calorie content and unhealthy fats.",
              "Whole wheat and coconut flour boost fiber, helping digestion and keeping you fuller longer.",
              "A great alternative for those looking to reduce refined sugar and processed ingredients."
            ]
          },
          {
            "name": "Plantain Chips",
            "SubImage": PlantainChips,
            "ingredients": [
              "2 ripe plantains",
              "1 tablespoon olive oil",
              "1/2 teaspoon smoked paprika",
              "1/4 teaspoon garlic powder",
              "1/4 teaspoon sea salt"
            ],
            "description": "A crispy, healthier alternative to fried chips. Using ripe plantains baked with olive oil and seasonings, these chips are both nutritious and delicious, perfect for snacking guilt-free.",
            "how_to_make": [
              "1. Preheat your oven to 400°F (200°C).",
              "2. Peel the plantains and slice them thinly into rounds.",
              "3. In a bowl, toss the plantain slices with olive oil, smoked paprika, garlic powder, and sea salt.",
              "4. Arrange the slices in a single layer on a baking tray.",
              "5. Bake for 15-20 minutes, flipping halfway through, until golden brown and crispy.",
              "6. Let the chips cool before serving."
            ],
            "affordable_ingredients": "Plantains are widely available at local markets and affordable. Olive oil can be substituted with vegetable oil if needed, and spices like paprika and garlic powder can be found in most markets or substituted with locally available seasonings.",
            "health_benefits": [
              "Plantains are rich in potassium, which helps regulate blood pressure.",
              "Baking instead of frying keeps these chips lower in unhealthy fats.",
              "Olive oil provides healthy monounsaturated fats that support heart health."
            ]
          },
          {
            "name": "Healthy Akara (Bean Cakes)",
            "SubImage": Akara,
            "ingredients": [
              "2 cups black-eyed peas (soaked overnight)",
              "1/2 cup chopped onions",
              "2 cloves garlic, minced",
              "1 small red bell pepper, chopped",
              "1 tablespoon olive oil",
              "1 teaspoon ground cumin",
              "1/2 teaspoon ground pepper",
              "1/4 teaspoon chili flakes",
              "Salt to taste"
            ],
            "description": "This version of akara uses less oil and no frying, making it a lighter and healthier choice. The black-eyed peas provide protein and fiber, while the flavors of garlic and red pepper add delicious depth.",
            "how_to_make": [
              "1. Drain and rinse the soaked black-eyed peas.",
              "2. Blend the peas, onions, garlic, and red pepper until smooth. Add water gradually to achieve a thick, smooth batter.",
              "3. Stir in the cumin, ground pepper, chili flakes, and salt.",
              "4. Preheat the oven to 375°F (190°C).",
              "5. Line a baking tray with parchment paper and spoon small dollops of the batter onto the tray, shaping them into small cakes.",
              "6. Bake for 20-25 minutes, or until the akara are golden brown and crispy on the outside.",
              "7. Serve warm with a side of spicy sauce or pepper sauce."
            ],
            "affordable_ingredients": "Black-eyed peas are inexpensive and widely available. Olive oil can be substituted with palm oil or any affordable cooking oil, and spices like cumin and chili flakes can be found in local markets.",
            "health_benefits": [
              "Black-eyed peas are a great source of plant-based protein and fiber.",
              "Olive oil provides healthy fats, which promote heart health.",
              "Lower in fat compared to traditional fried akara, making it easier to fit into a balanced diet."
            ]
          },
          {
            "name": "Sweet Potato Porridge (Asaro)",
            "SubImage": PotatoPorridge,
            "ingredients": [
              "2 medium-sized sweet potatoes, peeled and chopped",
              "1 tablespoon palm oil",
              "1 onion, chopped",
              "2 cloves garlic, minced",
              "1/2 teaspoon ground ginger",
              "1/2 teaspoon ground turmeric",
              "1/2 cup chopped tomatoes",
              "1/2 cup water or vegetable broth",
              "1 tablespoon ground flaxseeds (optional)"
            ],
            "description": "A lighter, nutrient-dense take on the classic Asaro. Sweet potatoes are high in vitamins A and C, and this version uses less oil, with the addition of flaxseeds for extra fiber and omega-3s.",
            "how_to_make": [
              "1. Boil the sweet potatoes until tender, about 15-20 minutes. Drain and set aside.",
              "2. In a pan, heat the palm oil and sauté the onions and garlic until translucent.",
              "3. Add the ground ginger, turmeric, and chopped tomatoes, cooking for another 5 minutes.",
              "4. Add the water or vegetable broth and stir.",
              "5. Mash the boiled sweet potatoes and add them to the pan, mixing well.",
              "6. Simmer for 5-10 minutes, then stir in the ground flaxseeds (if using).",
              "7. Serve warm as a side dish or main meal."
            ],
            "affordable_ingredients": "Sweet potatoes are affordable and nutritious. Palm oil is traditional and inexpensive. Ground flaxseeds are optional but can be found in health food shops, and turmeric and ginger are widely available and affordable in Nigerian markets.",
            "health_benefits": [
              "Sweet potatoes are rich in beta-carotene (vitamin A) which supports vision and immune health.",
              "Flaxseeds add omega-3 fatty acids, which support heart health and reduce inflammation.",
              "Low in unhealthy fats and a great source of vitamins and antioxidants."
            ]
          },
          {
            "name": "Kuli Kuli",
            "SubImage": KuliKuli,
            "ingredients": [
              "2 cups groundnut (peanut) flour",
              "1/2 teaspoon ground ginger",
              "1/2 teaspoon ground pepper",
              "1/4 teaspoon garlic powder",
              "Salt to taste",
              "1 tablespoon palm oil",
              "Water (as needed)"
            ],
            "description": "A crunchy and protein-rich snack made from groundnuts. Kuli Kuli is a popular Nigerian snack that’s high in fiber and healthy fats, perfect for a satisfying snack on the go.",
            "how_to_make": [
              "1. Roast the groundnuts until golden brown, then grind them into a fine powder.",
              "2. In a bowl, combine the groundnut flour, ground ginger, ground pepper, garlic powder, and salt.",
              "3. Add the palm oil and mix well to form a dough.",
              "4. Gradually add water to make the dough pliable, then shape into small balls or flat discs.",
              "5. Heat oil in a pan and fry the kuli kuli until golden brown and crispy.",
              "6. Let them cool before serving."
            ],
            "affordable_ingredients": "Groundnuts are widely available and affordable in Nigerian markets, and palm oil is a traditional and inexpensive oil.",
            "health_benefits": [
              "Rich in protein and healthy fats.",
              "High in fiber, which helps with digestion.",
              "Low in carbohydrates and great for a protein-packed snack."
            ]
          },
          {
            "name": "Kokoro",
            "SubImage": Kokoro,
            "ingredients": [
              "2 cups corn flour",
              "1/4 cup palm oil",
              "1 teaspoon ground pepper",
              "1/2 teaspoon ginger",
              "1/2 teaspoon garlic powder",
              "Salt to taste",
              "Water (as needed)"
            ],
            "description": "A crispy and savory snack made from corn flour, lightly spiced for extra flavor. Kokoro is a great snack for those looking for something crunchy and flavorful.",
            "how_to_make": [
              "1. In a bowl, combine the corn flour, ground pepper, ginger, garlic powder, and salt.",
              "2. Add palm oil and water to form a dough.",
              "3. Shape the dough into long thin strips or any shape you prefer.",
              "4. Fry in hot oil until crispy and golden brown.",
              "5. Let them cool before serving."
            ],
            "affordable_ingredients": "Corn flour is a staple ingredient and is very affordable. Palm oil is commonly used in Nigerian cooking.",
            "health_benefits": [
              "High in fiber and low in unhealthy fats.",
              "Provides sustained energy due to the carbohydrates from corn flour.",
              "A good source of essential minerals like magnesium and iron."
            ]
          }
        ]
      },            
      {
        "id": 4,
        "title": "DIY Natural Skincare Remedies",
        "type": "DNSR",
        "description": "In Nigeria, the richness of our natural resources extends to skincare. But the world offers a treasure trove of natural skincare ingredients, from African marula oil to Japanese green tea, each with incredible benefits for the skin. These remedies are chemical-free, sustainable, and effective. Let’s explore their advantages and how to create simple DIY skincare recipes at home using unique global ingredients.",
        "image": NDBC,
        "skincare_recipes": [
            {
                "name": "Marula Oil Moisturizing Face Serum",
                "ingredients": [
                    "2 tablespoons marula oil",
                    "1 tablespoon rose water",
                    "1 drop lavender essential oil",
                    "1 drop frankincense essential oil"
                ],
                "description": "Marula oil is packed with antioxidants and fatty acids, making it ideal for hydrating and restoring dry skin. This serum helps combat signs of aging, improve elasticity, and give your skin a radiant glow.",
                "SubImage": Marula,
                "how_to_make": [
                    "In a small glass dropper bottle, combine the marula oil and rose water.",
                    "Add the lavender and frankincense essential oils.",
                    "Shake the bottle gently to mix the ingredients.",
                    "Apply a few drops of the serum onto your face after cleansing, focusing on dry areas. Use daily for best results."
                ],
                "affordable_ingredients": "Marula oil is often available at specialty health stores or online. Rose water and essential oils like lavender and frankincense can be found in natural wellness shops or online. A small bottle of marula oil goes a long way as a little goes a long way.",
                "skin_benefits": [
                    "Rich in antioxidants and fatty acids, which help hydrate and rejuvenate the skin.",
                    "Promotes youthful skin by improving elasticity and reducing the appearance of fine lines.",
                    "Calms irritated skin and reduces redness with its anti-inflammatory properties."
                ]
            },
            {
                "name": "Green Tea & Aloe Vera Face Mask",
                "ingredients": [
                    "1 tablespoon matcha green tea powder",
                    "2 tablespoons aloe vera gel",
                    "1 teaspoon honey",
                    "1/2 teaspoon lemon juice (optional)"
                ],
                "description": "Green tea is packed with antioxidants, while aloe vera soothes and hydrates the skin. This mask works wonders for reducing inflammation, fighting acne, and giving the skin a refreshing glow.",
                "SubImage": AloeAndGreenTea,
                "how_to_make": [
                    "In a small bowl, mix the matcha green tea powder with the aloe vera gel and honey until a smooth paste forms.",
                    "Add lemon juice for extra brightness (optional).",
                    "Apply the mask evenly to your face and leave it on for 15-20 minutes.",
                    "Rinse off with lukewarm water and pat your face dry."
                ],
                "affordable_ingredients": "Matcha powder is widely available at health stores and online. Aloe vera gel can be sourced fresh from aloe plants or purchased at most supermarkets. Honey and lemon juice are kitchen staples that are easy to find.",
                "skin_benefits": [
                    "Antioxidants in green tea protect skin cells from damage and help reduce inflammation.",
                    "Aloe vera deeply hydrates and soothes irritated skin, making it great for acne or sunburns.",
                    "Honey is a natural humectant, drawing moisture into the skin and helping to keep it soft and hydrated."
                ]
            },
            {
                "name": "Turmeric & Yogurt Brightening Scrub",
                "ingredients": [
                    "1 tablespoon turmeric powder",
                    "2 tablespoons plain yogurt",
                    "1 teaspoon honey",
                    "1 tablespoon oats (optional for extra exfoliation)"
                ],
                "description": "Turmeric has anti-inflammatory and brightening properties, while yogurt contains lactic acid to exfoliate and rejuvenate the skin. This scrub helps improve skin tone, reduces dark spots, and gives a youthful glow.",
                "SubImage": TumericYoghurt,
                "how_to_make": [
                    "Mix the turmeric powder, plain yogurt, and honey in a small bowl until you get a smooth paste.",
                    "If you want extra exfoliation, add oats and mix again.",
                    "Gently massage the scrub into your skin in circular motions for 2-3 minutes.",
                    "Let it sit for 5-10 minutes, then rinse off with warm water. Apply once or twice a week."
                ],
                "affordable_ingredients": "Turmeric powder is inexpensive and available at most grocery stores. Plain yogurt and honey are also kitchen staples. Oats are cheap and easily accessible for added exfoliation.",
                "skin_benefits": [
                    "Turmeric helps lighten dark spots and evens out skin tone.",
                    "Yogurt’s lactic acid gently exfoliates, removing dead skin cells and revealing smoother skin.",
                    "Honey adds moisture and promotes skin healing, while oats provide a gentle exfoliation."
                ]
            },
            {
                "name": "Rice Water Brightening Toner",
                "ingredients": [
                    "1/2 cup rice",
                    "2 cups water",
                    "1 tablespoon rose water (optional)",
                    "1 tablespoon aloe vera gel (optional)"
                ],
                "description": "Rice water has been used for centuries to brighten skin and improve its texture. This toner helps balance the skin’s pH, refine pores, and create a youthful, glowing complexion.",
                "SubImage": RiceToner,
                "how_to_make": [
                    "Rinse the rice thoroughly and place it in a bowl.",
                    "Add the 2 cups of water and let the rice soak for about 30 minutes.",
                    "After 30 minutes, strain the rice water into a clean bottle.",
                    "Add rose water and aloe vera gel for extra hydration (optional).",
                    "Apply the toner to your face using a cotton pad after cleansing, and let it dry naturally. Use daily for brightening and pore tightening."
                ],
                "affordable_ingredients": "Rice is a staple in many households, and you can easily find it in local markets. Rose water and aloe vera gel are optional additions but are affordable and available in most health stores. This is a very budget-friendly remedy.",
                "skin_benefits": [
                    "Brightens the complexion and improves skin texture with regular use.",
                    "Helps tighten pores and balance the skin's natural oils.",
                    "Rich in antioxidants that protect against environmental damage and premature aging."
                ]
            },
            {
                "name": "Avocado & Honey Hydrating Face Mask",
                "ingredients": [
                    "1 ripe avocado",
                    "1 tablespoon honey",
                    "1 tablespoon olive oil"
                ],
                "description": "Avocado is rich in healthy fats and vitamins that nourish and hydrate the skin. Combined with honey’s moisture-locking properties and olive oil’s antioxidants, this mask is perfect for dry or dull skin.",
                "SubImage": AvocadoMask,
                "how_to_make": [
                    "Mash the ripe avocado in a bowl until smooth.",
                    "Add the honey and olive oil, mixing until well combined.",
                    "Apply the mask to your face and leave it on for 15-20 minutes.",
                    "Rinse off with lukewarm water and pat dry with a towel."
                ],
                "affordable_ingredients": "Avocado is a nutrient-dense fruit and widely available. Honey and olive oil are kitchen staples that are affordable and easy to find.",
                "skin_benefits": [
                    "Avocado is full of fatty acids, vitamins A, D, and E, which hydrate and nourish the skin.",
                    "Honey locks in moisture and leaves the skin feeling soft and plump.",
                    "Olive oil has antioxidant properties and helps protect the skin from environmental damage."
                ]
            },
            {
                "name": "Oats & Manuka Scrub",
                "ingredients": [
                    "2 tablespoons ground oats",
                    "1 tablespoon manuka honey",
                    "1 tablespoon coconut oil"
                ],
                "description": "Oats are soothing and act as a gentle exfoliant, while manuka honey has antibacterial and moisturizing properties. Coconut oil hydrates and nourishes the skin, making this scrub perfect for sensitive or acne-prone skin.",
                "SubImage": OatAndManuka,
                "how_to_make": [
                    "In a small bowl, combine ground oats, manuka honey, and coconut oil.",
                    "Mix until you form a paste.",
                    "Apply the scrub to damp skin and massage gently in circular motions for 2-3 minutes.",
                    "Rinse off with warm water and pat dry. Use once a week for best results."
                ],
                "affordable_ingredients": "Ground oats and coconut oil are commonly available in most grocery stores, while manuka honey may be a bit more expensive but is available at specialty health stores.",
                "skin_benefits": [
                    "Oats gently exfoliate and soothe the skin, removing dead skin cells without irritation.",
                    "Manuka honey hydrates and has antibacterial properties, making it great for acne-prone skin.",
                    "Coconut oil deeply moisturizes and nourishes the skin."
                ]
            },
            {
                "name": "Jojoba & Rosehip Oil Hydrating Serum",
                "ingredients": [
                    "2 tablespoons jojoba oil",
                    "2 tablespoons rosehip oil",
                    "1 drop geranium essential oil (optional)"
                ],
                "description": "Jojoba oil is excellent for balancing skin oils, while rosehip oil is packed with vitamins and antioxidants. This serum provides deep hydration and promotes skin regeneration, perfect for dry or aging skin.",
                "SubImage": JojobaRosehipOil,
                "how_to_make": [
                    "Combine jojoba oil and rosehip oil in a small glass dropper bottle.",
                    "Add a drop of geranium essential oil if you wish to enhance the scent and benefits.",
                    "Shake well to mix the oils.",
                    "Apply a few drops to your face after cleansing and gently massage in. Use daily for the best results."
                ],
                "affordable_ingredients": "Jojoba and rosehip oils are widely available online or in natural wellness stores. Geranium oil is optional but can add an extra boost of rejuvenating properties.",
                "skin_benefits": [
                    "Jojoba oil mimics the skin's natural oils, helping to balance and moisturize the skin.",
                    "Rosehip oil helps to regenerate skin cells, reduce the appearance of scars, and promote a youthful glow.",
                    "This serum hydrates and nourishes, making it great for dry, aging, or sensitive skin."
                ]
            },
            {
                "name": "Coconut & Almond Oil Moisturizing Treatment",
                "ingredients": [
                    "1 tablespoon coconut oil",
                    "1 tablespoon almond oil",
                    "1 drop lavender essential oil (optional)"
                ],
                "description": "Coconut oil provides deep hydration while almond oil is packed with vitamin E to nourish and repair the skin. This moisturizing treatment is perfect for dry or irritated skin.",
                "SubImage": CoconutAlmond,
                "how_to_make": [
                    "Mix coconut oil and almond oil in a small bowl.",
                    "Add lavender essential oil if you like a soothing fragrance.",
                    "Massage into your skin after cleansing, focusing on dry or rough areas.",
                    "Leave it on for 15-20 minutes before rinsing off with lukewarm water."
                ],
                "affordable_ingredients": "Coconut and almond oils are widely available at grocery stores or health stores. Lavender oil is optional but affordable if desired.",
                "skin_benefits": [
                    "Coconut oil deeply moisturizes and hydrates the skin, leaving it soft and smooth.",
                    "Almond oil nourishes and repairs, improving the texture of the skin.",
                    "Lavender oil adds a calming, anti-inflammatory touch."
                ]
            }
        ]
    },
    {
        "id": 6,
        "type": "Hydration",
        "title": "Importance of Hydration and Local Beverages",
        "description": "Staying hydrated is crucial for overall health, especially in Nigeria's warm climate. Proper hydration aids digestion, regulates body temperature, and supports skin health. While water is essential, incorporating traditional beverages can enhance your hydration routine while offering additional health benefits. Here, we explore the significance of hydration and recommend local drinks like zobo, kunu, fura da nono, and more.",
        "image": BW,
        "hydration_tips": [
            {
                "name": "Zobo (Hibiscus Tea)",
                "description": "Zobo is made from dried hibiscus petals and is a popular traditional drink in Nigeria. It's not only hydrating but also packed with antioxidants, Vitamin C, and other beneficial compounds.",
                "SubImage": ZoboDrink,
                "ingredients": [
                    "1 cup dried hibiscus petals",
                    "5 cups water",
                    "1-2 tablespoons sugar (optional)",
                    "A few slices of ginger or pineapple for extra flavor (optional)"
                ],
                "health_benefits": [
                    "Rich in antioxidants that help fight free radicals and reduce inflammation.",
                    "High in Vitamin C, boosting the immune system and promoting healthy skin.",
                    "Can help lower blood pressure and improve heart health when consumed regularly.",
                    "Hydrates effectively, making it a great alternative to plain water on hot days."
                ],
                "how_to_make": ["Rinse the dried hibiscus petals thoroughly.",
                    "Boil 5 cups of water, then add the petals and simmer for about 10 minutes.",
                     "Strain the liquid and discard the petals.",
                      "Add sugar to taste and chill in the fridge. You can also add slices of ginger or pineapple for extra flavor. Serve over ice for a refreshing drink."
                ],
                "affordable_ingredients": "Dried hibiscus petals are widely available in local markets, and sugar and ginger are common kitchen staples."
            },
            {
                "name": "Kunu (Fermented Millet Drink)",
                "description": "Kunu is a mildly fermented beverage made from millet or sorghum and is a staple in Nigerian households. It’s rich in nutrients and offers hydration along with a mild energy boost due to its carbohydrate content.",
                "SubImage": Kunu,
                "ingredients": [
                    "1 cup millet or sorghum",
                    "4 cups water",
                    "1 tablespoon ginger",
                    "1 tablespoon sugar or honey",
                    "A pinch of cloves or nutmeg (optional)"
                ],
                "health_benefits": [
                    "Rich in carbohydrates, providing a slow-release source of energy.",
                    "Contains dietary fiber, which helps with digestion.",
                    "Ginger helps to soothe the stomach and is an anti-inflammatory.",
                    "Contains probiotics that support gut health due to its fermentation process."
                ],
                "how_to_make": ["Rinse the millet or sorghum and soak it in water for 24 hours.", 
                "After soaking, blend the grains with fresh water and ginger until smooth.",
                 "Strain the mixture through a fine sieve.", 
                 "Pour the liquid into a pot, add sugar or honey and spices, and cook over medium heat for about 15-20 minutes. Allow it to cool, then refrigerate. Serve chilled."],
                "affordable_ingredients": "Millet and sorghum are widely available in Nigerian markets, and ginger, cloves, and sugar are inexpensive ingredients."
            },
            {
                "name": "Fura da Nono (Millet and Fermented Milk Drink)",
                "description": "Fura da Nono is a traditional drink made from fermented milk (Nono) and millet balls (Fura). It’s a nutritious and hydrating drink, offering protein, probiotics, and essential vitamins. This drink is commonly consumed for breakfast or as a snack.",
                "SubImage":Fura,
                "ingredients": [
                    "1 cup millet flour (Fura)",
                    "2 cups fermented milk (Nono)",
                    "1-2 tablespoons sugar (optional)",
                    "A pinch of cinnamon or cloves (optional)"
                ],
                "health_benefits": [
                    "Rich in protein, which helps with muscle repair and growth.",
                    "Fermented milk contains probiotics that improve gut health and digestion.",
                    "Millet is a good source of fiber and essential minerals like magnesium and phosphorus.",
                    "Helps maintain hydration while providing a balanced mix of nutrients."
                ],
                "how_to_make": ["Prepare the millet flour by mixing it with water to form dough balls (Fura).", 
                    "Cook the millet balls in water for about 10-15 minutes until soft.",
                     "Blend the cooked millet with Nono (fermented milk) until smooth.", 
                     "Add sugar and spices, then serve chilled."],
                "affordable_ingredients": "Millet flour is available in local markets, and Nono can be sourced from nearby dairy farms. Sugar and cinnamon are common kitchen ingredients."
            },
            {
                "name": "Coconut Water",
                "description": "Coconut water is a natural drink packed with electrolytes that help with hydration and replenishment, especially after physical activity. It’s also low in calories and has many health benefits.",
                "SubImage": CoconutWater,
                "ingredients": [
                    "Fresh Coconut"
                ],
                "health_benefits": [
                    "High in potassium, which helps regulate fluid balance and muscle function.",
                    "Contains natural electrolytes, making it a great hydrating drink after exercise.",
                    "Low in calories and sugar, making it a healthy choice for hydration.",
                    "Contains antioxidants that help reduce inflammation and oxidative stress."
                ],
                "how_to_make": ["Simply crack open a fresh coconut, pour out the water into a clean glass or bottle, and enjoy. It’s best consumed fresh, but can also be stored in the refrigerator for a couple of days."],
                "affordable_ingredients": "Fresh coconuts can be found in many Nigerian markets at affordable prices."
            },
            {
                "name": "Palm Wine (Tapping Drink)",
                "description": "Palm wine is a naturally fermented beverage made from the sap of palm trees. While it’s more of an alcoholic beverage, it’s also a hydrating drink with a slightly sweet flavor.",
                "SubImage": PalmWine,
                "ingredients": [
                    "Palm tree sap",
                    "Banana leaves"
                ],
                "health_benefits": [
                    "Contains antioxidants that support cardiovascular health.",
                    "Rich in vitamins and minerals, particularly potassium, magnesium, and zinc.",
                    "Can help with digestion and may have anti-inflammatory properties."
                ],
                "how_to_make":["Palm wine is harvested from the sap of the palm tree and fermented naturally. It’s best consumed fresh, as it can spoil quickly.", "Palm wine vendors are often available in many parts of Nigeria."],
                "affordable_ingredients": "Palm wine is naturally available from local tapper vendors, though it is more commonly consumed for ceremonial or social purposes."
            }
        ],      
    },    
]
export default RecentPosts