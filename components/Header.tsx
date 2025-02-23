"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Moon, Sun, Music, Wifi, PenToolIcon as Tool, Archive, Menu, X } from "lucide-react"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import OldWebsiteWarningModal from './OldWebsiteWarningModal'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showOldWebsiteModal, setShowOldWebsiteModal] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)
    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  const menuItems = [
    { href: "#products", icon: <Archive className="mr-1" size={18} />, text: "产品" },
    { href: "#services", icon: <Tool className="mr-1" size={18} />, text: "服务" },
    { href: "#api", icon: <Wifi className="mr-1" size={18} />, text: "API" },
    { href: "#about", icon: <Music className="mr-1" size={18} />, text: "关于我们" },
    { href: "#contact", icon: <Tool className="mr-1" size={18} />, text: "联系我们" },
  ]

  const handleMenuItemClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleOldWebsiteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowOldWebsiteModal(true)
  }

  const oldVersionButton = (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleOldWebsiteClick}
        >
          旧版官网
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>前往旧版页面</p>
      </TooltipContent>
    </Tooltip>
  )

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50 transition-all duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="http://gjcjioop.com" className="text-2xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer">
            GjcjioopOrg
          </Link>
          <div className="flex items-center space-x-6">
            {isMobile ? (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            ) : (
              <>
                <ul className="flex space-x-6">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={item.href}
                            onClick={(e) => {
                              e.preventDefault()
                              handleMenuItemClick(item.href)
                            }}
                            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none"
                          >
                            {item.icon}
                            <span>{item.text}</span>
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>{item.text}</TooltipContent>
                      </Tooltip>
                    </li>
                  ))}
                </ul>
                {oldVersionButton}
              </>
            )}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </nav>
        {isMobile && isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 shadow-md"
          >
            <ul className="py-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleMenuItemClick(item.href)
                    }}
                    className="flex items-center px-6 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
            {oldVersionButton}
          </motion.div>
        )}
      </motion.header>
      {showOldWebsiteModal && (
        <OldWebsiteWarningModal 
          onClose={() => setShowOldWebsiteModal(false)}
        />
      )}
    </>
  )
}

