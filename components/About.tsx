"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import VideoModal from "./VideoModal"
import { PlayCircle, Users } from "lucide-react"

const teamMembers = [
  {
    name: "周景田",
    role: "CEO, 创始人",
    image: "/placeholder.svg?height=150&width=150",
    description:
      "周景田是GjcjioopOrg的创始人、CEO和核心关键人员。他拥有20年的科技行业经验，曾在多家知名科技公司担任高管职位。周景田的远见卓识和战略思维使GjcjioopOrg在短短几年内成为行业翘楚。他热衷于创新，并致力于将最新技术应用于解决实际问题。",
  },
  {
    name: "翁洋",
    role: "副总裁, 第三方平台管理CEO",
    image: "/placeholder.svg?height=150&width=150",
    description:
      "翁洋是我们的副总裁和第三方平台管理CEO。他在代码流畅度与可用性评估方面有着丰富的经验。翁洋负责确保我们的产品在各个平台上都能保持高质量的用户体验。他的专业知识对于公司的跨平台战略至关重要。",
  },
  {
    name: "虚位以待",
    role: "期待您的加入",
    image: "/placeholder.svg?height=150&width=150",
    description:
      "我们正在寻找充满激情和才华的人才加入我们的团队。如果您对科技创新充满热情，并希望在一个充满活力的环境中工作，我们期待您的加入。这个位置可能就是为您预留的！",
  },
]

export default function About() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const handleEmployeeCenter = () => {
    window.open("http://hr.gjcjioop.com", "_blank")
  }

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          关于我们
        </motion.h2>
        <motion.div
          className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            GjcjioopOrg是一个致力于创新和卓越的组织。我们的使命是通过我们的产品和服务为客户创造价值。
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            自成立以来，我们一直在不断发展和进步，为满足客户不断变化的需求而努力。
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => setIsVideoModalOpen(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white"
              size="lg"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              介绍视频
            </Button>
            <Button onClick={handleEmployeeCenter} className="bg-green-500 hover:bg-green-600 text-white" size="lg">
              <Users className="mr-2 h-5 w-5" />
              员工中心
            </Button>
          </div>
        </motion.div>

        <h3 className="text-2xl font-bold text-center mb-8 dark:text-white">我们的团队</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold dark:text-white">{member.name}</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{member.role}</p>
              <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">{member.description}</p>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="bg-green-500 text-white hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                    联系{member.name}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>联系{member.name}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </section>
  )
}

