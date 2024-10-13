import React from 'react'
import './Style/Home.css'
import HomeContents from './HomeContents'
import BlogBanner from '../Assets/BlogBanner.png'
import NewsLetter from '../RegisterAndNewsLetter/NewsLetter'


function Home() {
  return (
    <div id='home-wrapper'>
      <section className="banner-container">
        <img src={BlogBanner} alt="" />
      </section>
       <HomeContents/>
       <NewsLetter/>
    </div>
  )
}

export default Home