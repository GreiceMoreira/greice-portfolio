import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ConnectButton from '../Buttons/ConnectButton';
import ThemeToggle from '../Buttons/ThemeToggle';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
          <img src={logo} alt='logo'/>  
      
      
        
       <ul className='nav-menu'>
            <li className={menu ==="home" ? "active":""} onClick={()=>setMenu("home")}>
              <AnchorLink className='anchor-link' href='#home'><p>{t("navbar.home")}</p></AnchorLink></li>
            <li className={menu ==="about" ? "active":""} onClick={()=>setMenu("about")}>
              <AnchorLink className='anchor-link' offset={50} href='#about'><p>{t("navbar.about")}</p></AnchorLink></li>
            <li className={menu ==="work" ? "active":""} onClick={()=>setMenu("work")}>
              <AnchorLink className='anchor-link' offset={50} href='#work'><p>{t("navbar.portifolio")}</p></AnchorLink></li>
            <li className={menu ==="contact" ? "active":""} onClick={()=>setMenu("contact")}>
              <AnchorLink className='anchor-link' offset={50} href='#contact'><p>{t("navbar.contact")}</p></AnchorLink></li>
       </ul>
        <div className='nav-buttons'>  
          <ConnectButton/>
          <div className='nav-preferences'>
            <ThemeToggle/>
            <LanguageSelector/>
          </div>
          
        </div>
      
    </div>
  )
}

export default Navbar