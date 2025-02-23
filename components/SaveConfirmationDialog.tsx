import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface SaveConfirmationDialogProps {
  open: boolean
  onClose: () => void
  onSave: () => void
  onDiscard: () => void
}

export default function SaveConfirmationDialog({
  open,
  onClose,
  onSave,
  onDiscard
}: SaveConfirmationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>未保存的更改</DialogTitle>
          <DialogDescription>
            您有未保存的更改。是否要保存这些更改？
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={onDiscard}>放弃更改</Button>
          <Button variant="secondary" onClick={onClose}>取消</Button>
          <Button onClick={onSave}>保存并退出</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

