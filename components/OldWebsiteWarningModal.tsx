"use client"

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function OldWebsiteWarningModal({ 
  onClose 
}: { 
  onClose?: () => void 
}) {
  const [isAgreed, setIsAgreed] = useState(false)

  const handleAgree = () => {
    if (isAgreed) {
      const referenceCode = `0080482367677285781703578160848341758`
      window.open(`https://old.gjcjioop.com?ref=${referenceCode}`, '_blank')
      onClose && onClose()
    }
  }

  return (
    <Dialog 
      open={true} 
      onOpenChange={(open) => {
        if (!open && onClose) {
          onClose()
        }
      }}
    >
      <DialogContent 
        className="sm:max-w-[500px] rounded-xl bg-white dark:bg-gray-800 shadow-2xl border border-gray-200 dark:border-gray-700"
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white">
            友情提示
          </DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-300">
            此网站过于老旧，部分功能与资源没有更新和完善，其已不受GjcjioopOrg团队所管制。
            进入此网站时需要进行校验操作，获取您的设备ID与信息。
          </DialogDescription>
        </DialogHeader>
        
        <div 
          className="flex items-center space-x-2 mt-4 cursor-pointer"
          onClick={() => setIsAgreed(!isAgreed)}
        >
          <Checkbox 
            id="agreement" 
            checked={isAgreed}
            onCheckedChange={(checked) => setIsAgreed(!!checked)}
            className="border-gray-300 dark:border-gray-600"
          />
          <Label 
            htmlFor="agreement" 
            className="text-gray-700 dark:text-gray-300 cursor-pointer select-none"
          >
            我同意协议
          </Label>
        </div>

        <div className="mt-4 flex justify-end">
          <Button 
            onClick={handleAgree} 
            disabled={!isAgreed}
            className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            前往
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
} 