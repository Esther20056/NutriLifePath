import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HealthyFood from '../../src/Assets/HealthyFood.png'
import './Topheader.css'

function Topheaader() {
    const [barsOpen, setBarsOpen] = useState(false);
    return (
        <div className='topheaader-container'>
            <div className="topheader">
                <div className="logo-container">
                    <img src={HealthyFood} alt="Logo" />
                    <p className="logo-name">NutriLife Path</p>
                </div>
                <div className={`hamburger ${barsOpen ? 'hidden' : ''}`} onClick={() => setBarsOpen(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {barsOpen && (
                    <button className="cancel-button" onClick={() => setBarsOpen(false)}>
                        <strong className='times'>&times;</strong>
                    </button>
                )}
                <ul id="navbar-links" className={barsOpen ? 'open' : ''}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutuspage">About</Link></li>
                    <li><Link to="/healthyLivingTips">Healthy Living Tips</Link></li>
                    <li class="nav-item dropdown">
                        <Link
                            class="nav-link dropdown-toggle"
                            to=""
                            id="dropdownId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >Nutrition & Recipes</Link>
                        <div
                            class="dropdown-menu"
                            aria-labelledby="dropdownId"
                        >
                            <Link class="dropdown-item" to="/healthynigeriarecipes"
                            >Healthy Nigeria Recipes</Link>
                            <Link class="dropdown-item" to="/mealplans"
                            >Meal Plans</Link>
                            <Link class="dropdown-item" to="/fruitsandvegetables"
                            >Fruits & Vegetables</Link>
                            <Link class="dropdown-item" to="/smoothiesandjuices"
                            >Smoothies & Juices</Link>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <Link
                            class="nav-link dropdown-toggle"
                            to=""
                            id="dropdownId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >Body Care</Link>
                        <div
                            class="dropdown-menu"
                            aria-labelledby="dropdownId"
                        >
                            <Link class="dropdown-item" to="/skincare"
                            >Skin Care</Link>
                            <Link class="dropdown-item" to="/fitness"
                            >Fitness</Link>
                            <Link class="dropdown-item" to="/selfcarepractices"
                            >Self-care Practices</Link>
                            <Link class="dropdown-item" to="/naturalremedies"
                            >Natural Remedies</Link>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <Link
                            class="nav-link dropdown-toggle"
                            to=""
                            id="dropdownId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >Lifestyle</Link>
                        <div
                            class="dropdown-menu"
                            aria-labelledby="dropdownId"
                        >
                            <Link class="dropdown-item" to="/worklifebalance"
                            >Work-Life Balance</Link>
                            <Link class="dropdown-item" to="/buildinghealthyhabit"
                            >Building Healthy Habits</Link>
                            <Link class="dropdown-item" to="/mentalhealth"
                            >Mental Health</Link>
                        </div>
                    </li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Topheaader

