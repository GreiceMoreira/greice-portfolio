import React from 'react'
import './SectionTitle.css'
import logo from '../../assets/logo.png'

const SectionTitle = ({title, className}) => {
  return (
    <div className="container">    
        <div className={className ? `${className} section-title` : 'section-title'}>
      <h1>{title}</h1>
      <img src={logo} alt="Logo" />
    </div></div>

  )
}

export default SectionTitle