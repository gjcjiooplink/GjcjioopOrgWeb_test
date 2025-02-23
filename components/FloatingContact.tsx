'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, FileEdit, Bot } from 'lucide-react'
import Image from 'next/image'

export default function FloatingContact() {
  const [isHovered, setIsHovered] = useState<string | null>(null)

  const handleAppointmentClick = () => {
     const timestamp = Date.now();
     const currentUrl = new URL('http://gjcjioop.com/buy/booking');
     currentUrl.searchParams.set('t', timestamp.toString());
     currentUrl.searchParams.set('appid', '1001');
     currentUrl.searchParams.set('by', 'zhoujingtian');
     const appointmentUrl = `https://www.gjcjioop.com${currentUrl.pathname}${currentUrl.search}`;
     window.location.href = appointmentUrl;
   }

  return (
    <div className="fixed right-8 bottom-32 z-50">
      <div className="flex flex-col items-center gap-2">
        {/* Appointment Button */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onHoverStart={() => setIsHovered('appointment')}
          onHoverEnd={() => setIsHovered(null)}
        >
          <button 
            onClick={handleAppointmentClick}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
          >
            <FileEdit className="w-6 h-6 text-gray-600" />
          </button>
          <AnimatePresence>
            {isHovered === 'appointment' && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-black text-white text-sm py-1 px-3 rounded whitespace-nowrap"
              >
                预约
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Phone Button */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onHoverStart={() => setIsHovered('phone')}
          onHoverEnd={() => setIsHovered(null)}
        >
          <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300">
            <Phone className="w-6 h-6 text-gray-600" />
          </button>
          <AnimatePresence>
            {isHovered === 'phone' && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-black text-white text-sm py-1 px-3 rounded whitespace-nowrap"
              >
                电话
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Online Consultation Button */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onHoverStart={() => setIsHovered('consultation')}
          onHoverEnd={() => setIsHovered(null)}
        >
          <button className="w-12 h-12 bg-blue-500 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Customer Service"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
          </button>
          <AnimatePresence>
            {isHovered === 'consultation' && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-black text-white text-sm py-1 px-3 rounded whitespace-nowrap"
              >
                在线咨询
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* AI Assistant Button */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onHoverStart={() => setIsHovered('ai')}
          onHoverEnd={() => setIsHovered(null)}
        >
          <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300">
            <Bot className="w-6 h-6 text-gray-600" />
          </button>
          <AnimatePresence>
            {isHovered === 'ai' && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-black text-white text-sm py-1 px-3 rounded whitespace-nowrap"
              >
                AI助理
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

