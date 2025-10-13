import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ConnectButton from '../Buttons/ConnectButton';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
       <img src={logo} alt='logo'/> 
       <ul className='nav-menu'>
            <li className={menu ==="home" ? "active":""} onClick={()=>setMenu("home")}><AnchorLink className='anchor-link' href='#home'><p>Home</p></AnchorLink></li>
            <li className={menu ==="about" ? "active":""} onClick={()=>setMenu("about")}><AnchorLink className='anchor-link' offset={50} href='#about'><p>About Me</p></AnchorLink></li>
            <li className={menu ==="work" ? "active":""} onClick={()=>setMenu("work")}><AnchorLink className='anchor-link' offset={50} href='#work'><p>Portifolio</p></AnchorLink></li>
            <li className={menu ==="contact" ? "active":""} onClick={()=>setMenu("contact")}><AnchorLink className='anchor-link' offset={50} href='#contact'><p>Contact</p></AnchorLink></li>
       </ul>
        <ConnectButton/>
    </div>
  )
}

export default Navbar