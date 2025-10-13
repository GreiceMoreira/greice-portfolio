import React from 'react'
import './ConnectButton.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const ConnectButton = () => {
  return (
    <div className="button-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'><p>Connect With Me</p></AnchorLink>
    </div>
  )
}

export default ConnectButton