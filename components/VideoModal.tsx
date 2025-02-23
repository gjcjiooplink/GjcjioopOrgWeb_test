"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>公司介绍视频</DialogTitle>
        </DialogHeader>
        <div className="aspect-video relative">
          <video
            className="w-full h-full rounded-lg"
            controls
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WeChat_20250121164302-HOG4mYqbRWqskQ2t799oZjZ7VmaVYg.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  )
}

