import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

// Hook
export function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage<boolean>(
    'dark-mode-enabled',
    false
  )

  const enabled = typeof darkMode !== 'undefined' && darkMode

  useEffect(() => {
    const className = 'dark'
    const element = window.document.body
    if (enabled) {
      element.classList.add(className)
    } else {
      element.classList.remove(className)
    }
  }, [enabled])

  return { darkMode, setDarkMode }
}
