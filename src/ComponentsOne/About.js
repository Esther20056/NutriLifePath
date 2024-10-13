import React from 'react'
import {Link} from 'react-router-dom'
import './Style/About.css'

function About() {
  return (
    <div className='about'>
      <div className="text-wrapper">
        <p className="about-text">
          Hello and welcome to NutriLife Path—the ultimate destination where healthy living meets culinary delight! Our mission is simple: to empower you to make mindful, nourishing food choices that promote overall well-being—without compromising on taste, budget, or your precious time. 
        </p>
        <p className="about-text">
          Whether you're a busy professional, a student juggling multiple responsibilities, or anyone striving to live a healthier life, our blog is designed with you in mind. Here, we celebrate the rich flavors of Nigerian cuisine and beyond, offering practical advice that integrates wellness into your daily life, from nutrition and mental health to fitness and self-care.  
        </p>
      </div>

      <div className="text-wrapper">
        <h3 className="about-text-h3">A Celebration of Nourishing Food: Local and International Recipes</h3>
        <p className="about-text">
          At NutriLife Path, we believe in the power of food to nourish not just the body, but the soul. We blend traditional Nigerian dishes with international culinary inspirations, offering a variety of healthy, easy-to-make recipes that will fuel your body and satisfy your taste buds. 
        </p>
        <p className="about-text">
          From hearty meals to light smoothies, our recipes ensure you're getting the vitamins, minerals, and nutrients your body needs to thrive. We also make sure these recipes are practical—using ingredients easily found in your local market—so that healthy eating is accessible to everyone, regardless of time or budget constraints.
        </p>
      </div>

      <div className="text-wrapper">
        <h3 className="about-text-h3">From Plant-Based Power to Traditional Delights: NutriLife Recipes</h3>
        <ol>
          <li><strong className="small-header">Power-Packed Plant-Based Recipes</strong><br />We offer a variety of plant-based meals like hearty bean stews, creamy vegetable soups, and delicious plantain fritters—packed with flavor and nutrients. These meals are budget-friendly and nourishing.</li>
          <li><strong className="small-header">Healthy Nigerian Classics</strong><br />We add a healthy twist to your favorite Nigerian dishes. Enjoy a more nutritious version of <strong>jollof rice</strong> or a lighter <strong>beans and plantain</strong> dish, all while keeping the delicious flavors intact.</li>
          <li><strong className="small-header">Smoothies and Juices for Every Season</strong><br />Boost your energy and nutrients with our refreshing smoothies and fresh juices. Whether it’s a <strong>green detox smoothie</strong> or a <strong>banana-coconut smoothie</strong> for sustained energy, we’ve got the perfect recipe for any season.</li>
        </ol>
      </div>

      <div className="text-wrapper">
        <h3 className="about-text-h3">Achieving Work-Life Balance and Mental Health Through Nutrition</h3>
        <p className="about-text">
          At NutriLife Path, we believe that wellness goes beyond what you eat. It's about nurturing your mental health, managing stress, and staying active. Our holistic approach shows how food can directly impact your physical and mental well-being.
        </p>
        <ol>
          <li><strong className="small-header">Mental Health and Nutrition: A Powerful Connection</strong><br />Research shows that nutrient-dense food can improve mood, reduce anxiety, and enhance mental clarity. We provide insights into how specific nutrients—like omega-3s, magnesium, and B vitamins—can support mental wellness, from stress management to better sleep.</li>
          <li><strong className="small-header">Tackling Stress with Simple Solutions</strong><br />Managing stress doesn’t need to be complicated. Through simple daily habits like mindful breathing, gratitude practice, and nourishing meals, we help you reduce stress and manage your personal and professional commitments more effectively.</li>
        </ol>
      </div>

      <div className="text-wrapper">
        <h3 className="about-text-h3">Self-Care on a Budget: Simplifying Wellness</h3>
        <p className="about-text">
          Self-care is not just about indulging in luxury treatments; it’s about taking time for small, meaningful habits that nurture your well-being. From <strong>natural body care remedies</strong> to creating <strong>homemade face masks</strong> with ingredients like honey and aloe vera, we’ll help you embrace self-care on a budget.
        </p>
        <ol>
          <li><strong className='small-header'>Building Healthy Routines: Morning and Night</strong><br />The way you start and end your day has a huge impact on your mood and productivity. We offer simple routines—like a warm glass of lemon water in the morning and a 10-minute evening stretch—that can help you feel more balanced and energized.</li>
        </ol>
      </div>

      <div className="text-wrapper">
        <h3 className="about-text-h3">Empowering Nigerians to Lead Vibrant, Healthy Lives</h3>
        <p className="about-text">
          Our goal is to empower every Nigerian to lead a healthier, more vibrant life. Whether you're looking for budget-friendly recipes, mental health strategies, or self-care tips, NutriLife Path is here to support you on your wellness journey.
        </p>
        <p className="about-text">
          Life is a journey, and every small choice you make brings you closer to a healthier version of yourself. Whether you're just beginning or well on your path to wellness, we're here to be your trusted companion along the way. Together, let's take one step at a time toward a brighter, healthier future.
        </p>
      </div>

      {/* Optional: Add a Founder’s Message */}
      <div className="text-wrapper">
        <h3 className="about-text-h3">A Personal Message from the Founder</h3>
        <p className="about-text">
          Hi there! I’m Kelvin, and I started NutriLife Path with a passion for healthy living and a love for great food. I believe that living well doesn’t have to be expensive or complicated. Through NutriLife Path, I aim to make wellness easy, accessible, and enjoyable for everyone—especially Nigerians who want to embrace healthier habits while staying connected to their culture and roots. I’m so excited to be part of your journey toward a happier, healthier life. Let's get started!
        </p>
      </div>

      {/* Call to Action (CTA) */}
      <div className="cta-wrapper">
        <h3 className="cta-heading">Ready to Transform Your Life?</h3>
        <p className="cta-text">
          Join the NutriLife Path community for weekly tips, healthy recipes, and wellness advice delivered straight to your inbox! Together, we can make healthy living simple and enjoyable.
        </p>
        <Link to="/signup" className="cta-button">Sign Up Now</Link>
      </div>
    </div>
  )
}

export default About;
