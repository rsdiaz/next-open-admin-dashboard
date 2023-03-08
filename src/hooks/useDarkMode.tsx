import { SettingsContext, SettingsContextValue } from '@/context/SettingContext'
import { useContext } from 'react'

export const useSettings = (): SettingsContextValue =>
  useContext(SettingsContext)
