"use client"

import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenWelcomePopup")
    if (!hasSeenPopup) {
      setIsOpen(true)
      localStorage.setItem("hasSeenWelcomePopup", "true")
    }
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-white dark:bg-gray-800">
        <DialogHeader>
          <DialogTitle>欢迎来到GjcjioopOrg官网</DialogTitle>
        </DialogHeader>
        <DialogDescription asChild>
          <div>
            <p>
              此官网GjcjioopOrg版权所有，采用全新NEXTJS框架加TS搭建，使用阿里云4Σ4G服务器，中转站采用购买了PRO计划的CloudFlare。
            </p>
            <p className="mt-4">版权声明：GjcjioopOrg Copyright 2023-2024</p>
            <p>网站开发：周景田</p>
          </div>
        </DialogDescription>
        <DialogFooter>
          <Button onClick={() => setIsOpen(false)}>了解</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

