"use client"

import { useState, useEffect } from 'react'
import { Wifi, WifiOff } from 'lucide-react'
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export default function APIStatusChecker() {
  const [apiStatus, setApiStatus] = useState<'checking' | 'online' | 'offline'>('checking')
  const [lastChecked, setLastChecked] = useState<Date | null>(null)

  const checkAPIStatus = async () => {
    setApiStatus('checking')
    try {
      const response = await fetch('https://api.gjcjioop.com/health', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 5000 // 5秒超时
      })

      if (response.ok) {
        setApiStatus('online')
      } else {
        setApiStatus('offline')
      }
      setLastChecked(new Date())
    } catch (error) {
      setApiStatus('offline')
      setLastChecked(new Date())
    }
  }

  useEffect(() => {
    checkAPIStatus()
    // 每5分钟自动检查一次
    const intervalId = setInterval(checkAPIStatus, 5 * 60 * 1000)
    return () => clearInterval(intervalId)
  }, [])

  const handleAPIRedirect = () => {
    window.open('https://api.gjcjioop.com', '_blank')
  }

  const getStatusColor = () => {
    switch (apiStatus) {
      case 'online': return 'text-green-500 dark:text-green-400'
      case 'offline': return 'text-red-500 dark:text-red-400'
      default: return 'text-gray-500 dark:text-gray-400'
    }
  }

  const getStatusText = () => {
    switch (apiStatus) {
      case 'online': return 'API 服务正常'
      case 'offline': return 'API 服务异常'
      default: return '正在检查...'
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <div 
            className={`flex items-center ${getStatusColor()} cursor-help`}
          >
            {apiStatus === 'online' ? <Wifi size={20} /> : <WifiOff size={20} />}
            <span className="ml-2 text-sm">{getStatusText()}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          {lastChecked && (
            <p>
              最后检查时间：{lastChecked.toLocaleString()}
            </p>
          )}
        </TooltipContent>
      </Tooltip>
      
      <Button 
        variant="outline" 
        size="sm" 
        onClick={handleAPIRedirect}
        className="ml-2"
      >
        进入 API 中心
      </Button>
    </div>
  )
} 