"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { BookingMethod } from "@/types/booking"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function BookingPage() {
  const router = useRouter()
  const [bookingMethod, setBookingMethod] = useState<BookingMethod>("offline")
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [formData, setFormData] = useState({
    location: "",
    address: "",
    meetingTime: "",
    platform: "zoom",
    accountId: "",
    contactInfo: "",
    name: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      alert("预约已提交！我们会尽快与您联系。")
      window.location.href = "https://gjcjiooporg.com"
      window.close()
    } catch (error) {
      console.error("Error submitting booking:", error)
      alert("提交预约时出错，请稍后再试。")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-2xl mx-auto shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="bg-blue-500 text-white">
          <CardTitle className="text-2xl">预约服务</CardTitle>
          <CardDescription className="text-blue-100">请选择您想要的预约方式和相关信息</CardDescription>
        </CardHeader>
        <CardContent className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Label>预约方式</Label>
              <RadioGroup
                defaultValue="offline"
                onValueChange={(value) => setBookingMethod(value as BookingMethod)}
                className="grid grid-cols-3 gap-4"
              >
                {["offline", "online", "message"].map((method) => (
                  <div key={method}>
                    <RadioGroupItem value={method} id={method} className="peer sr-only" />
                    <Label
                      htmlFor={method}
                      className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-white p-4 hover:bg-blue-50 peer-data-[state=checked]:border-blue-500 peer-data-[state=checked]:bg-blue-100 [&:has([data-state=checked])]:border-blue-500"
                    >
                      <span>{method === "offline" ? "线下会面" : method === "online" ? "线上会议" : "信息交流"}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <AnimatePresence mode="wait">
              {bookingMethod === "message" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="rounded-lg bg-yellow-50 p-4 text-yellow-700"
                >
                  信息交流功能暂不支持，请选择其他预约方式。
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>选择日期</Label>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md border shadow p-3"
                        disabled={(date) => date < new Date()}
                      />
                      {selectedDate && (
                        <p className="text-sm text-blue-600 mt-2">
                          您选择的日期: {format(selectedDate, "yyyy年MM月dd日")}
                        </p>
                      )}
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="meetingTime">时间</Label>
                        <Select
                          name="meetingTime"
                          onValueChange={(value) =>
                            handleInputChange({ target: { name: "meetingTime", value } } as any)
                          }
                        >
                          <SelectTrigger className="rounded-lg w-full">
                            <SelectValue placeholder="选择时间" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="09:00">09:00</SelectItem>
                            <SelectItem value="10:00">10:00</SelectItem>
                            <SelectItem value="11:00">11:00</SelectItem>
                            <SelectItem value="14:00">14:00</SelectItem>
                            <SelectItem value="15:00">15:00</SelectItem>
                            <SelectItem value="16:00">16:00</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {bookingMethod === "offline" && (
                        <>
                          <div>
                            <Label htmlFor="location">城市</Label>
                            <Input
                              id="location"
                              name="location"
                              value={formData.location}
                              onChange={handleInputChange}
                              required
                              className="rounded-lg w-full"
                            />
                          </div>
                          <div>
                            <Label htmlFor="address">详细地址</Label>
                            <Input
                              id="address"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              required
                              className="rounded-lg w-full"
                            />
                          </div>
                        </>
                      )}

                      {bookingMethod === "online" && (
                        <>
                          <div>
                            <Label htmlFor="platform">会议平台</Label>
                            <Select
                              name="platform"
                              onValueChange={(value) =>
                                handleInputChange({ target: { name: "platform", value } } as any)
                              }
                            >
                              <SelectTrigger className="rounded-lg w-full">
                                <SelectValue placeholder="选择平台" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="zoom">Zoom</SelectItem>
                                <SelectItem value="teams">Microsoft Teams</SelectItem>
                                <SelectItem value="meet">Google Meet</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="accountId">会议账号</Label>
                            <Input
                              id="accountId"
                              name="accountId"
                              value={formData.accountId}
                              onChange={handleInputChange}
                              required
                              className="rounded-lg w-full"
                            />
                          </div>
                        </>
                      )}

                      <div>
                        <Label htmlFor="contactInfo">联系方式</Label>
                        <Input
                          id="contactInfo"
                          name="contactInfo"
                          value={formData.contactInfo}
                          onChange={handleInputChange}
                          required
                          className="rounded-lg w-full"
                        />
                      </div>
                      <div>
                        <Label htmlFor="name">姓名</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="rounded-lg w-full"
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                    disabled={bookingMethod === "message" || isSubmitting}
                  >
                    {isSubmitting ? "提交中..." : "提交预约"}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

