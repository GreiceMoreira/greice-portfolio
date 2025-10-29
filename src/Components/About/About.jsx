import React from 'react'
import './About.css'
import logo from '../../assets/logo.png'
import profile_img from '../../assets/about_img.png'
import SectionTitle from '../SectionTitle/SectionTitle'
import { useTranslation } from 'react-i18next'

const About = () => {
    const { t } = useTranslation();
  return (
    <div id='about' className='about'>
        <SectionTitle title={t('about.title')}/>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>{t('about.para-1')}</p>
                    <p>{t('about.para-2')}</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"90%"}} /></div>
                    <div className="about-skill"><p>JavaScript & React</p><hr style={{width:"80%"}} /></div>
                    <div className="about-skill"><p>Python & Java</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>APIs & Node.js</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>SQL & Databases</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>UX/UI & Figma</p><hr style={{width:"70%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>15+</h1>
                <p>{t("achievements.projects")}</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>6+</h1>
                <p>{t("achievements.languages")}</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>1000+</h1>
                <p>{t("achievements.hours")}</p>
            </div>
        </div>
    </div>
  )
}

export default About