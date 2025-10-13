import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img2.png'
import ResumeButton from '../Buttons/ResumeButton'
import ConnectButton from '../Buttons/ConnectButton'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I’m Greice Moreira,</span> a Software Development student at BYU–Idaho. </h1>
        <p>Designing and crafting clever solutions for meaningful projects</p>
        <div className="hero-action">
           <ConnectButton/>
            <ResumeButton/>
        </div>
    </div>
  )
}

export default Hero