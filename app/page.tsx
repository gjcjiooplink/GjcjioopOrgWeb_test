'use client'

import { useState, useEffect } from 'react'
import MainContent from '@/components/MainContent'
import AnnouncementPopup from '@/components/AnnouncementPopup'

export default function Home() {
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const [settings, setSettings] = useState({
    isWebsiteOpen: true,
    showMaintenancePage: false,
    enableHumanVerification: false,
    enableChineseNewYearTheme: false,
    chineseNewYearTheme: {
      backgroundColor: '#FF0000',
      buttonColor: '#FFD700'
    },
    pageTitle: 'GjcjioopOrg',
    announcement: {
      text: '',
      isActive: false,
      styles: {}
    },
    specialEvent: {
      title: '',
      description: '',
      buttonText: '',
      eventDate: ''
    }
  })

  useEffect(() => {
    setIsFirstLoad(false)

    const savedSettings = localStorage.getItem('adminSettings')
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings)
        setSettings(prev => ({
          ...prev,
          ...parsedSettings,
          chineseNewYearTheme: {
            ...prev.chineseNewYearTheme,
            ...(parsedSettings.chineseNewYearTheme || {})
          },
          specialEvent: {
            ...prev.specialEvent,
            ...(parsedSettings.specialEvent || {})
          },
          announcement: {
            ...prev.announcement,
            ...(parsedSettings.announcement || {})
          }
        }))
      } catch (error) {
        console.error('Error parsing saved settings:', error)
      }
    }
  }, [])

  useEffect(() => {
    document.title = settings.pageTitle || 'GjcjioopOrg'
    
    // Apply Chinese New Year theme to body
    if (settings.enableChineseNewYearTheme) {
      document.body.style.setProperty('--theme-background', settings.chineseNewYearTheme.backgroundColor)
      document.body.style.setProperty('--theme-button', settings.chineseNewYearTheme.buttonColor)
      document.body.classList.add('chinese-new-year-theme')
    } else {
      document.body.style.removeProperty('--theme-background')
      document.body.style.removeProperty('--theme-button')
      document.body.classList.remove('chinese-new-year-theme')
    }
  }, [settings])


  if (isFirstLoad) {
    return null
  }

  if (!settings.isWebsiteOpen || settings.showMaintenancePage) {
    return (
      <div className="h-screen flex items-center justify-center bg-background-primary">
        <h1 className="text-4xl font-bold text-text-primary">网站维护中，请稍后再试。</h1>
      </div>
    )
  }

  return (
    <div className={settings.enableChineseNewYearTheme ? 'chinese-new-year-theme' : ''}>
      <AnnouncementPopup settings={settings} />
      <MainContent settings={settings} />
    </div>
  )
}

