import React from 'react'
import './Contact.css'

import SectionTitle from '../SectionTitle/SectionTitle'
import UnderConstruction from '../UnderConstruction/UnderConstruction'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation();

  return (
       <div id='contact' className='contact'> 
        <SectionTitle title={t("contact.title")}/>
        <UnderConstruction/>
       </div>
  )
}

export default Contact