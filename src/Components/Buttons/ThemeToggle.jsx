import React from 'react'
import useTheme from '../../hooks/useTheme'
import { FaMoon, FaSun } from 'react-icons/fa'
import './ThemeToggle.css'
import { useTranslation } from 'react-i18next'

const ThemeToggle = () => {
    const {theme, toggleTheme} = useTheme();
    const { t } = useTranslation();

  return (
    <button onClick={toggleTheme} className='themeToggle'>{t("buttons.toggle")}
        {theme === "light" ? <FaMoon /> : <FaSun />}
        {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  )
}

export default ThemeToggle