import React from 'react'
import './ConnectButton.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useTranslation } from 'react-i18next';

const ConnectButton = () => {
  const {t} = useTranslation();
  return (
    <div className="button-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'><p>{t("buttons.connect")}</p></AnchorLink>
    </div>
  )
}

export default ConnectButton