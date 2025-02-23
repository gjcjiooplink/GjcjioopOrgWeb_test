'use client'

import { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Pencil, Save, X } from 'lucide-react'

interface EditableTableProps {
  data: any[]
  columns: {
    key: string
    title: string
    editable?: boolean
  }[]
  onSave: (index: number, data: any) => void
}

export function EditableTable({ data, columns, onSave }: EditableTableProps) {
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editingData, setEditingData] = useState<any>(null)

  const handleEdit = (index: number) => {
    setEditingIndex(index)
    setEditingData({ ...data[index] })
  }

  const handleSave = (index: number) => {
    onSave(index, editingData)
    setEditingIndex(null)
    setEditingData(null)
  }

  const handleCancel = () => {
    setEditingIndex(null)
    setEditingData(null)
  }

  const handleChange = (key: string, value: string) => {
    setEditingData(prev => ({
      ...prev,
      [key]: value
    }))
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map(column => (
            <TableHead key={column.key}>{column.title}</TableHead>
          ))}
          <TableHead>操作</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            {columns.map(column => (
              <TableCell key={column.key}>
                {editingIndex === index && column.editable ? (
                  <Input
                    value={editingData[column.key]}
                    onChange={(e) => handleChange(column.key, e.target.value)}
                  />
                ) : (
                  item[column.key]
                )}
              </TableCell>
            ))}
            <TableCell>
              {editingIndex === index ? (
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleSave(index)}
                  >
                    <Save className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleCancel}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleEdit(index)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export { EditableTable }

