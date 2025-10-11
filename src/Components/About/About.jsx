import React from 'react'
import './About.css'
import logo from '../../assets/logo.png'
import profile_img from '../../assets/about_img.png'
import SectionTitle from '../SectionTitle/SectionTitle'

const About = () => {
  return (
    <div id='about' className='about'>
        <SectionTitle title="About me"/>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hi, I’m Greice Moreira. I’m passionate about creating engaging digital experiences that blend creativity and functionality. My journey in tech began in 2021 with UX/UI projects, exploring design, user research, and Figma prototypes, before diving deeper into front-end development.</p>
                    <p>In 2024, I started my studies in Software Development at BYU–Idaho, where I expanded my skills into Python, Java, and backend projects. I love combining creativity with problem-solving, and I’m excited to contribute to projects that are both functional and delightful for users.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React Js</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Next Js</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
        
                <h1>10+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About