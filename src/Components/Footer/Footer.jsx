import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    const year = new Date().getFullYear();
    
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p>© {year} | 👩🏼‍💻 Greice Moreira | Quebec, Canada</p>
        <div className="footer-icons">
          <a href="mailto:greice.moreira@email.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/greicemoreira"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/greicemoreira"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer