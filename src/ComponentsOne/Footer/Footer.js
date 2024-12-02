import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaPinterest } from "react-icons/fa"; import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa"; import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <footer className="sea-footer">
      <div className="content">
        {/* About Section */}
        <div className="footer-contents-wrapper" style={{flexBasis: "35%"}}>
        <p className="header-text nutrilife-text">NutriLife Path</p>
          <ul>
            <li>Nigeria's #1 destination for healthy living, offering nutritious recipes, wellness tips, meal plans, and practical lifestyle guidance to help you achieve vibrant health, balance, and well-being every day.</li>
          </ul>
        </div>

        {/* Quick Links Section 1 */}
        <div className="footer-contents-wrapper">
          <p className='header-text'>Quick Links</p>
          <ul className='quick-links'>
            <li>&gt; <Link to="/" style={{ marginLeft: "0.5rem" }}>Home</Link></li>
            <li>&gt; <Link to="/aboutuspage" style={{ marginLeft: "0.5rem" }}>About</Link></li>
            <li>&gt; <Link to="/contact" style={{ marginLeft: "0.5rem" }}>Contact Us</Link></li>
            <li>&gt; <Link to="/signup" style={{ marginLeft: "0.5rem" }}>Register</Link></li>
          </ul>
        </div>

        {/* Office Address Section */}
        <div className="footer-contents-wrapper">
          <ul>
            <li><strong className='header-text'>Our head office</strong></li>
            <li>Plot 8, Bisi komolafe street,Magpdo, Lagos State.</li>
          </ul>
         <ul>
          <li><strong className='header-text'>Our second office</strong></li>
          <li>Plot 29, Bankole street, Ojota, Lagos State.</li>
         </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-contents-wrapper">
            <p className='header-text' >Social Medias</p>
          <ul className='social-platforms'>
            <li><Link><FaPinterest /></Link></li>
            <li><Link><FaFacebookF /></Link></li>
            <li><Link><FaSquareInstagram /></Link></li>
            <li><Link><FaYoutube /></Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
