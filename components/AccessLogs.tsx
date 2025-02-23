'use client'

import React, { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

interface AccessLog {
  ip: string
  timestamp: string
  url: string
}

export function AccessLogs() {
  const [logs, setLogs] = useState<AccessLog[]>([])

  useEffect(() => {
    // Fetch access logs from your API
    // This is a placeholder, replace with actual API call
    setLogs([
      { ip: '192.168.1.1', timestamp: '2023-06-15T10:30:00Z', url: '/home' },
      { ip: '10.0.0.1', timestamp: '2023-06-15T11:45:00Z', url: '/products' },
    ])
  }, [])

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">访问记录</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>IP 地址</TableHead>
            <TableHead>时间</TableHead>
            <TableHead>访问页面</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {logs.map((log, index) => (
            <TableRow key={index}>
              <TableCell>{log.ip}</TableCell>
              <TableCell>{new Date(log.timestamp).toLocaleString()}</TableCell>
              <TableCell>{log.url}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

