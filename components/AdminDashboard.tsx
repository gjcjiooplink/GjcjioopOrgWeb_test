'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { SidebarProvider } from '@/components/ui/sidebar'
import AdminSidebar from '@/components/AdminSidebar'
import AdminMainContent from '@/components/AdminMainContent'
import SaveConfirmationDialog from '@/components/SaveConfirmationDialog'
import { motion } from 'framer-motion'

export default function AdminDashboard() {
  const [activeCategory, setActiveCategory] = useState('dashboard')
  const [settings, setSettings] = useState({
    joinUsLink: '',
    buyProductLink: '',
    heroTitle: '',
    heroSubtitle: '',
    announcement: {
      text: '',
      isActive: false
    },
    isWebsiteActive: true,
    specialEvent: {
      title: '',
      description: '',
      buttonText: '',
      eventDate: '',
    },
    aboutUs: {
      description: '',
      teamMembers: []
    },
    companyHistory: [],
    news: [],
    products: [],
    apis: [],
    pageTitle: ''
  })
  const [showSaveConfirmation, setShowSaveConfirmation] = useState(false)
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn')
    if (!isLoggedIn) {
      router.push('/admin')
      return
    }

    // Load settings from localStorage
    const savedSettings = localStorage.getItem('adminSettings')
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings)
        setSettings(prev => ({
          ...prev,
          ...parsed
        }))
      } catch (error) {
        console.error('Error parsing settings:', error)
      }
    }

    // Sync data from page elements
    syncPageData()
  }, [router])

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault()
        e.returnValue = ''
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [hasUnsavedChanges])

  const syncPageData = () => {
    // Get page title
    const pageTitle = document.title

    // Get existing products data
    const productElements = document.querySelectorAll('[data-product]')
    const products = Array.from(productElements).map(el => ({
      id: el.getAttribute('data-product-id'),
      name: el.querySelector('[data-product-name]')?.textContent || '',
      description: el.querySelector('[data-product-description]')?.textContent || '',
      link: el.querySelector('[data-product-link]')?.getAttribute('href') || '',
      buttonText: el.querySelector('[data-product-button]')?.textContent || '',
    })).filter(p => p.name && p.description)

    // Get existing team member data
    const memberElements = document.querySelectorAll('[data-team-member]')
    const teamMembers = Array.from(memberElements).map(el => ({
      id: el.getAttribute('data-member-id'),
      name: el.querySelector('[data-member-name]')?.textContent || '',
      role: el.querySelector('[data-member-role]')?.textContent || '',
      description: el.querySelector('[data-member-description]')?.textContent || '',
    })).filter(m => m.name && m.role)

    // Get existing history data
    const historyElements = document.querySelectorAll('[data-history]')
    const companyHistory = Array.from(historyElements).map(el => ({
      id: el.getAttribute('data-history-id'),
      year: el.querySelector('[data-history-year]')?.textContent || '',
      event: el.querySelector('[data-history-event]')?.textContent || '',
      description: el.querySelector('[data-history-description]')?.textContent || '',
    })).filter(h => h.year && h.event)

    // Get existing news data
    const newsElements = document.querySelectorAll('[data-news]')
    const news = Array.from(newsElements).map(el => ({
      id: el.getAttribute('data-news-id'),
      title: el.querySelector('[data-news-title]')?.textContent || '',
      date: el.querySelector('[data-news-date]')?.getAttribute('datetime') || '',
      summary: el.querySelector('[data-news-summary]')?.textContent || '',
    })).filter(n => n.title && n.date)

    // Get existing API data
    const apiElements = document.querySelectorAll('[data-api]')
    const apis = Array.from(apiElements).map(el => ({
      id: el.getAttribute('data-api-id'),
      name: el.querySelector('[data-api-name]')?.textContent || '',
      description: el.querySelector('[data-api-description]')?.textContent || '',
      link: el.querySelector('[data-api-link]')?.getAttribute('href') || '',
    })).filter(a => a.name && a.description)

    // Update settings with synced data
    setSettings(prev => ({
      ...prev,
      pageTitle,
      products: products.length ? products : prev.products,
      aboutUs: {
        ...prev.aboutUs,
        teamMembers: teamMembers.length ? teamMembers : prev.aboutUs.teamMembers,
      },
      companyHistory: companyHistory.length ? companyHistory : prev.companyHistory,
      news: news.length ? news : prev.news,
      apis: apis.length ? apis : prev.apis,
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, section?: string) => {
    const { name, value } = e.target
    setSettings(prev => {
      if (section) {
        return {
          ...prev,
          [section]: { ...prev[section], [name]: value }
        }
      } else {
        return { ...prev, [name]: value }
      }
    })
    setHasUnsavedChanges(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    applySettings()
    setHasUnsavedChanges(false)
  }

  const applySettings = () => {
    // Apply settings to the page elements
    document.querySelectorAll('[data-product]').forEach(el => {
      const id = el.getAttribute('data-product-id')
      const product = settings.products.find(p => p.id === id)
      if (product) {
        el.querySelector('[data-product-name]')!.textContent = product.name
        el.querySelector('[data-product-description]')!.textContent = product.description
        el.querySelector('[data-product-link]')?.setAttribute('href', product.link)
        el.querySelector('[data-product-button]')!.textContent = product.buttonText
      }
    })

    // Update page title
    document.title = settings.pageTitle

    // Save announcement settings to localStorage
    localStorage.setItem('announcementSettings', JSON.stringify(settings.announcement))

    // Save all settings to localStorage
    localStorage.setItem('adminSettings', JSON.stringify(settings))

    alert('设置已保存并应用成功！')
  }

  const handleLogout = () => {
    if (hasUnsavedChanges) {
      setShowSaveConfirmation(true)
    } else {
      logout()
    }
  }

  const logout = () => {
    localStorage.removeItem('adminLoggedIn')
    router.push('/admin')
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-50">
        <AdminSidebar 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
          handleLogout={handleLogout} 
        />
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AdminMainContent
            activeCategory={activeCategory}
            settings={settings}
            setSettings={setSettings}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </motion.div>
      </div>
      <SaveConfirmationDialog
        open={showSaveConfirmation}
        onClose={() => setShowSaveConfirmation(false)}
        onSave={() => {
          applySettings()
          setHasUnsavedChanges(false)
          logout()
        }}
        onDiscard={logout}
      />
    </SidebarProvider>
  )
}

