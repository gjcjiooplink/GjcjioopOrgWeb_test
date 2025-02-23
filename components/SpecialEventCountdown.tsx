'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SpecialEventCountdownProps {
  date?: string
}

export function SpecialEventCountdown({ date }: SpecialEventCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    if (!date) return;

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const eventDate = new Date(date).getTime()
      const difference = eventDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [date])

  if (!date) return null;

  const FlipCard = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={value}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-200 rounded-lg p-2 mb-1 text-2xl font-bold"
        >
          {value.toString().padStart(2, '0')}
        </motion.div>
      </AnimatePresence>
      <span className="text-sm">{label}</span>
    </div>
  )

  return (
    <div className="flex justify-center space-x-4">
      <FlipCard value={timeLeft.days} label="天" />
      <FlipCard value={timeLeft.hours} label="时" />
      <FlipCard value={timeLeft.minutes} label="分" />
      <FlipCard value={timeLeft.seconds} label="秒" />
    </div>
  )
}

