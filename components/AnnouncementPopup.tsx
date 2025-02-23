'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { getAnnouncementSettings } from '@/utils/api'

export default function AnnouncementPopup() {
  const [open, setOpen] = useState(false)
  const [announcement, setAnnouncement] = useState({ text: '', isActive: false, styles: {} })
  const [dontShowAgain, setDontShowAgain] = useState(false)

  useEffect(() => {
    const fetchAnnouncementSettings = async () => {
      const storedAnnouncement = await getAnnouncementSettings()
      const dontShow = localStorage.getItem('dontShowAnnouncement')

      if (storedAnnouncement) {
        setAnnouncement(storedAnnouncement)

        if (storedAnnouncement.isActive && dontShow !== 'true') {
          setOpen(true)
        }
      }
    }

    fetchAnnouncementSettings()
  }, [])

  const handleClose = () => {
    setOpen(false)
    if (dontShowAgain) {
      localStorage.setItem('dontShowAnnouncement', 'true')
    }
  }

  const getAnnouncementStyles = () => {
    const { bold, italic, underline, strikethrough } = announcement.styles || {}
    return {
      fontWeight: bold ? 'bold' : 'normal',
      fontStyle: italic ? 'italic' : 'normal',
      textDecoration: `${underline ? 'underline' : ''} ${strikethrough ? 'line-through' : ''}`.trim(),
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">网站公告</DialogTitle>
        </DialogHeader>
        <DialogDescription className="mt-4 text-base whitespace-pre-wrap" style={getAnnouncementStyles()}>
          {announcement.text}
        </DialogDescription>
        <div className="flex items-center space-x-2 mt-4">
          <Checkbox
            id="dontShowAgain"
            checked={dontShowAgain}
            onCheckedChange={(checked) => setDontShowAgain(checked as boolean)}
          />
          <label htmlFor="dontShowAnnouncement" className="text-sm text-gray-500">不再显示</label>
        </div>
        <DialogFooter>
          <Button onClick={handleClose} className="mt-4">确定</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

