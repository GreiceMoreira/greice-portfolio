import { useEffect, useState } from 'react'


export default function useTheme() {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) return savedTheme
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    return prefersDark ? "dark" : "light"
  }

  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {

    document.body.classList.remove("light", "dark")
    document.body.classList.add(theme)

    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return { theme, toggleTheme }
}