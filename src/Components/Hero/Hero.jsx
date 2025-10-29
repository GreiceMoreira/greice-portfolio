import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img2.png'
import ConnectButton from '../Buttons/ConnectButton'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div id='home' className='hero'>

        <h1>
          <span>{t('hero.h1-span')}</span>
          {t('hero.h1')}</h1>
        <p>{t('hero.paragraph')}</p>
        <div className="hero-action">
           <ConnectButton/>
        </div>

    </div>
  )
}

export default Hero