import { useLocalStorage } from '@/hooks/useLocalStorage'
import { createContext, useState, ReactNode, useEffect } from 'react'

export type Settings = {
  themeMode: 'dark' | 'light'
}

export type SettingsContextValue = {
  settings: Settings
  saveSettings: (updateSettings: Settings) => void
}

const initialSettings: Settings = {
  themeMode: 'light',
}

export const SettingsContext = createContext<SettingsContextValue>({
  settings: initialSettings,
  saveSettings: () => null,
})

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<Settings>({ ...initialSettings })
  const [darkMode, setDarkMode] = useLocalStorage<boolean>(
    'dark-mode-enabled',
    false
  )

  const saveSettings = (updatedSettings: Settings) => {
    setSettings(updatedSettings)
    setDarkMode(!darkMode)
  }

  const enabled = typeof darkMode !== 'undefined' && darkMode

  useEffect(() => {
    const className = 'dark'
    const element = window.document.body

    if (enabled) {
      setDarkMode(enabled)
      setSettings({ ...settings, themeMode: 'dark' })
      element.classList.add(className)
    } else {
      setDarkMode(enabled)
      setSettings({ ...settings, themeMode: 'light' })
      element.classList.remove(className)
    }
  }, [enabled])

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}

export const SettingsConsumer = SettingsContext.Consumer
