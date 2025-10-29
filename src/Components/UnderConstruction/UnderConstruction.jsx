import React from 'react'
import site_building from '../../assets/designing_img.png'
import { useTranslation } from 'react-i18next'

const UnderConstruction = () => {
  const {t} = useTranslation()
  return (
        <div className="construction">        
           <h1>{t("underConstruction")}</h1>
           <img src={site_building} alt="" />
         </div>    
  )
}

export default UnderConstruction