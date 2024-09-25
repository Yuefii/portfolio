import { useTheme } from '@/providers/ThemeProvider'
import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} className="border rounded-full p-1 bg-white ">
      {isDarkMode ? (
        <>
          <FaMoon size="20" />
        </>
      ) : (
        <FaSun size="20" />
      )}
    </button>
  )
}

export default ThemeToggle
