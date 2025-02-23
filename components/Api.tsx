"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Wifi, WifiOff, AlertTriangle } from 'lucide-react'

export default function Api() {
  const [apiStatus, setApiStatus] = useState<'checking' | 'normal' | 'performance_issue' | 'service_error'>('checking')
  const [lastChecked, setLastChecked] = useState<Date | null>(null)

  const checkAPIStatus = async () => {
    setApiStatus('checking')
    try {
      const startTime = Date.now()
      const response = await fetch('https://api.gjcjioop.com/health', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 5000 // 5秒超时
      })

      const endTime = Date.now()
      const responseTime = endTime - startTime

      if (response.ok) {
        // 根据响应时间判断状态
        if (responseTime > 1000) {
          setApiStatus('performance_issue')
        } else {
          setApiStatus('normal')
        }
      } else {
        setApiStatus('service_error')
      }
      setLastChecked(new Date())
    } catch (error) {
      setApiStatus('service_error')
      setLastChecked(new Date())
    }
  }

  useEffect(() => {
    checkAPIStatus()
    // 每5分钟自动检查一次
    const intervalId = setInterval(checkAPIStatus, 5 * 60 * 1000)
    return () => clearInterval(intervalId)
  }, [])

  const getStatusInfo = () => {
    switch (apiStatus) {
      case 'normal':
        return {
          color: 'text-green-500',
          icon: <Wifi size={24} />,
          text: 'API 服务正常'
        }
      case 'performance_issue':
        return {
          color: 'text-yellow-500',
          icon: <AlertTriangle size={24} />,
          text: '性能异常'
        }
      case 'service_error':
        return {
          color: 'text-red-500',
          icon: <WifiOff size={24} />,
          text: '服务异常'
        }
      default:
        return {
          color: 'text-gray-500',
          icon: <Wifi size={24} />,
          text: '正在检查...'
        }
    }
  }

  const handleAPIRedirect = () => {
    window.open('https://api.gjcjioop.com', '_blank')
  }

  const statusInfo = getStatusInfo()

  return (
    <section id="api" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 dark:text-white">
          我们的API
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <span className={`mr-2 ${statusInfo.color}`}>
                {statusInfo.icon}
              </span>
              <span className={`text-lg font-semibold ${statusInfo.color}`}>
                {statusInfo.text}
              </span>
            </div>
            {lastChecked && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                最后检查：{lastChecked.toLocaleString()}
              </span>
            )}
          </div>
          <h3 className="text-xl font-semibold mb-2 dark:text-white">API文档</h3>
          <p className="mb-4 dark:text-gray-300">这里是我们的API文档API中心，点击访问可以进入api中心，内容包含所有api的集合与查找，为开发者们提供很大的便利，其中还包含调用方法请求参数等等。</p>
          <div className="flex space-x-4">
            <Button 
              className="bg-blue-500 text-white hover:bg-blue-600 transition-colors"
              onClick={handleAPIRedirect}
            >
              访问API中心
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export async function fetchGlobalNodes() {
  try {
    const response = await fetch('https://api.gjcjioop.com/global-nodes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
      },
      cache: 'no-store'
    })

    if (!response.ok) {
      throw new Error('Failed to fetch global nodes')
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching global nodes:', error)
    return null
  }
}

