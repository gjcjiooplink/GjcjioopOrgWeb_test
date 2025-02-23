'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

function SpecialEventCountdown() {
  const [timeUntilEvent, setTimeUntilEvent] = useState('')
  const [isEventStarted, setIsEventStarted] = useState(false)

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const eventDate = new Date(now.getFullYear() + 1, 0, 1) // 下一个元旦
      const timeDiff = eventDate.getTime() - now.getTime()

      if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)

        setTimeUntilEvent(`${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`)
        setIsEventStarted(false)
      } else {
        setTimeUntilEvent('元旦快乐！')
        setIsEventStarted(true)
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return { timeUntilEvent, isEventStarted }
}

export default function SpecialEvent() {
  const { timeUntilEvent, isEventStarted } = SpecialEventCountdown()

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg text-gray-800 dark:text-white">
          <h2 className="text-3xl font-bold mb-4">元旦特别活动</h2>
          <p className="mb-6 text-xl">欢迎参加我们的元旦特别活动！</p>
          <p className="text-2xl font-semibold mb-8">倒计时: {timeUntilEvent}</p>
          <Button
            className="bg-yellow-500 text-white px-8 py-4 text-lg rounded-full font-semibold hover:bg-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
            disabled={!isEventStarted}
            onClick={() => window.open('https://github.com/gjcjiooporg/GjcjioopOrg', '_blank')}
          >
            {isEventStarted ? '参与活动' : '活动即将开始'}
          </Button>
        </div>
      </div>
    </section>
  )
}

