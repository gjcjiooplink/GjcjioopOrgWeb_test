'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function IPBanList() {
  const [bannedIPs, setBannedIPs] = useState<string[]>([])
  const [newIP, setNewIP] = useState('')

  useEffect(() => {
    // Fetch banned IPs from your API
    // This is a placeholder, replace with actual API call
    setBannedIPs(['192.168.168.1.1', '10.0.0.1'])
  }, [])

  const handleBanIP = (e: React.FormEvent) => {
    e.preventDefault()
    if (newIP && !bannedIPs.includes(newIP)) {
      // Send ban request to your API
      // This is a placeholder, replace with actual API call
      setBannedIPs([...bannedIPs, newIP])
      setNewIP('')
    }
  }

  const handleUnbanIP = (ip: string) => {
    // Send unban request to your API
    // This is a placeholder, replace with actual API call
    setBannedIPs(bannedIPs.filter(bannedIP => bannedIP !== ip))
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">IP 封禁列表</h3>
      <form onSubmit={handleBanIP} className="flex space-x-2">
        <Input
          value={newIP}
          onChange={(e) => setNewIP(e.target.value)}
          placeholder="输入 IP 地址"
        />
        <Button type="submit">封禁</Button>
      </form>
      <ul className="space-y-2">
        {bannedIPs.map((ip) => (
          <li key={ip} className="flex justify-between items-center">
            <span>{ip}</span>
            <Button onClick={() => handleUnbanIP(ip)} variant="destructive">
              解除封禁
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

