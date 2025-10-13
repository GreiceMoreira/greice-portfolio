import React from 'react'
import './ResumeButton.css'
import resumePDF from '../../assets/GreiceMoreira_resume.pdf';

const ResumeButton = () => {
  return (
    <div className="resume">
      <a 
        href={resumePDF} 
        target="_blank" 
        rel="noopener noreferrer"
        className="resume-link"
      >
        <p>My Resume</p>
      </a>
    </div>
  )
}

export default ResumeButton