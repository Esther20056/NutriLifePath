import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Topheaader from './ComponentsOne/Topheaader';
import Home from '../src/ComponentsOne/Home';
import About from '../src/ComponentsOne/About'
import HealthyLivingTips from '../src/ComponentsOne/HealthyLivingTips'
import HealthyNigeriaRecipes from '../src/ComponentsOne/NutritionRecipesDropDown/HealthyNigeriaRecipes'
import FruitsAndVegetables from '../src/ComponentsOne/NutritionRecipesDropDown/FruitsAndVegetables'
import MealPlans from '../src/ComponentsOne/NutritionRecipesDropDown/MealPlans'
import SmoothiesAndJuices from '../src/ComponentsOne/NutritionRecipesDropDown/SmoothiesAndJuices'
import Fitness from '../src/ComponentsOne/BodyCareDropDown/Fitness'
import NaturalRemedies from '../src/ComponentsOne/BodyCareDropDown/NaturalRemedies'
import SelfCarePractices from '../src/ComponentsOne/BodyCareDropDown/SelfCarePractices'
import SkinCare from '../src/ComponentsOne/BodyCareDropDown/SkinCare'
import WorkLifeBalance from '../src/ComponentsOne/LifeStyle/WorkLifeBalance'
import BuildingHealthyHabit from '../src/ComponentsOne/LifeStyle/BuildingHealthyHabit'
import MentalHealth from '../src/ComponentsOne/LifeStyle/MentalHealth'
import Blog from './ComponentsOne/Blog';
import NotFound from './ComponentsOne/NotFound';
import Footer from './ComponentsOne/Footer/Footer';
import Signup from './RegisterAndNewsLetter/Signup';
import RecenPostItemsId from './PostsArray/RecenPostItemsId';
import Login from './RegisterAndNewsLetter/Login';
import ContactPage from './ComponentsOne/Footer/ContactPage';
import RecentPostId from './PostsArray/RecentPostId';
import PostDetails from './PostsArray/PostDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topheaader />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutuspage' element={<About />} />
          <Route path='/healthyLivingTips' element={<HealthyLivingTips />} />
          <Route path='/fruitsandvegetables' element={<FruitsAndVegetables />} />
          <Route path='/healthynigeriarecipes' element={<HealthyNigeriaRecipes />} />
          <Route path='/mealplans' element={<MealPlans />} />
          <Route path='/smoothiesandjuices' element={<SmoothiesAndJuices />} />
          <Route path='/fitness' element={<Fitness />} />
          <Route path='/skincare' element={<SkinCare />} />
          <Route path='/selfcarepractices' element={<SelfCarePractices />} />
          <Route path='/naturalremedies' element={<NaturalRemedies />} />
          <Route path='/worklifebalance' element={<WorkLifeBalance/>} />
          <Route path='/buildinghealthyhabit' element={<BuildingHealthyHabit/>} />
          <Route path='/mentalhealth' element={<MentalHealth/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='*' element={<NotFound/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/recentpostitems/:id' element={<RecenPostItemsId/>}/>
          <Route path='/recentpost/:id' element={<RecentPostId/>}/>
          <Route
          path="/recentpost/:id/:type/:itemName"
          element={<PostDetails />}
        />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
