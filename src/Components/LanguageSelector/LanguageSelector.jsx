import React from 'react'
import i18n from '../../i18n/i18n'
import '../LanguageSelector/LanguageSelector.css'

const LanguageSelector = () => {
  return (
    <div className="language">
      <button className="button-language" onClick={() => i18n.changeLanguage('en')}>EN</button>
      <button className="button-language" onClick={() => i18n.changeLanguage('fr')}>FR</button>
      <button className="button-language" onClick={() => i18n.changeLanguage('pt')}>PT</button>
    </div>
  )
}

export default LanguageSelector