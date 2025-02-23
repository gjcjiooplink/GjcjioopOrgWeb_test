'use client'

import { useEffect, useState } from 'react'

export default function WarningPage() {
  const [timestamp, setTimestamp] = useState('')

  useEffect(() => {
    setTimestamp(new Date().toISOString())
  }, [])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">温馨提示</h1>
        <p className="text-xl mb-2">关闭 DevTools 除非你知道你正在做什么</p>
        <p>time: {timestamp}</p>
      </div>
    </div>
  )
}

