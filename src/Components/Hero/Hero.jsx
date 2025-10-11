import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img2.png'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I’m Greice Moreira,</span> a Software Development student at BYU–Idaho. </h1>
        <p>I’ve been studying at BYU–Idaho since 2024, but my journey in tech began in 2021 with a Full Stack Designer program focused on UX/UI and Front-End Development. I’m passionate about creating thoughtful digital experiences that blend clean design with solid functionality.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero