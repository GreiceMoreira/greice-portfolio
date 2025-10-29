import React from 'react';
import './HamburgerMenu.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import ThemeToggle from '../Buttons/ThemeToggle';
import ConnectButton from '../Buttons/ConnectButton';
import { useTranslation } from 'react-i18next';

const HamburgerMenu = ({ isOpen, onClose, menu, setMenu }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={`menu-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>

      <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <button className="menu-close" onClick={onClose}>✕</button>
        </div>

        <div className="menu-controls">
          <LanguageSelector />
          <ThemeToggle />
        </div>

        <ul className="menu-links">
          <li className={menu === "home" ? "active" : ""} onClick={() => { setMenu("home"); onClose(); }}>
            <AnchorLink href="#home">{t("navbar.home")}</AnchorLink>
          </li>
          <li className={menu === "about" ? "active" : ""} onClick={() => { setMenu("about"); onClose(); }}>
            <AnchorLink href="#about">{t("navbar.about")}</AnchorLink>
          </li>
          <li className={menu === "work" ? "active" : ""} onClick={() => { setMenu("work"); onClose(); }}>
            <AnchorLink href="#work">{t("navbar.portifolio")}</AnchorLink>
          </li>
          <li className={menu === "contact" ? "active" : ""} onClick={() => { setMenu("contact"); onClose(); }}>
            <AnchorLink href="#contact">{t("navbar.contact")}</AnchorLink>
          </li>
        </ul>

        <div className="menu-footer">
          <ConnectButton />
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
