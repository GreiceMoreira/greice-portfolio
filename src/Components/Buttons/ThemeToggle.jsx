import React from 'react'
import useTheme from '../../hooks/useTheme'
import { FaMoon, FaSun } from 'react-icons/fa'
import './ThemeToggle.css'

const ThemeToggle = () => {
    const {theme, toggleTheme} = useTheme()

  return (
    <button onClick={toggleTheme} className='themeToggle'>ThemeToggle
        {theme === "light" ? <FaMoon /> : <FaSun />}
        {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  )
}

export default ThemeToggle