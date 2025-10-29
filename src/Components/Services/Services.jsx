import React from 'react'
import './Services.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import UnderConstruction from '../UnderConstruction/UnderConstruction'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const { t } = useTranslation();

  return (
    <div id='services' className='services'> 
    <SectionTitle title={t("services.title")}/>
    <UnderConstruction/>
    </div>
  )
}

export default Services