import React from 'react'
import './ResumeButton.css'
// import resumePDF from '../../assets/GreiceMoreira_resume.pdf';
import resumeEN from '../../assets/GreiceMoreira_CV_en.pdf';
import resumeFR from '../../assets/GreiceMoreira_CV_fr.pdf';
import resumePT from '../../assets/GreiceMoreira_CV_pt.pdf';
import { useTranslation } from 'react-i18next';

const resumeMap = {
    en: resumeEN,
    fr: resumeFR,
    pt: resumePT,
}

const ResumeButton = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.slice(0,2);
  const resumePDF = resumeMap[currentLang] || resumeEN;


  return (
    <div className="resume">
      <a 
        href={resumePDF} 
        target="_blank" 
        rel="noopener noreferrer"
        className="resume-link"
      >
        <p>{t("buttons.resume")}</p>
      </a>
    </div>
  )
}

export default ResumeButton