'use client'

import { Music, Wifi, PenToolIcon as Tool, Archive } from 'lucide-react'
import { motion } from 'framer-motion'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

const products = [
  { 
    name: 'KirinMusic麒麟音乐', 
    description: 'KirinMusic麒麟音乐是您的个人音乐助手，为您带来无与伦比的听觉盛宴。我们的智能算法根据您的听歌习惯，为您推荐最适合的音乐，让您随时随地享受高品质音频。丰富的音乐库涵盖各种流派，满足您多样化的音乐需求。独特的社交功能让您与志同道合的音乐爱好者分享心得，共同探索音乐的魅力。', 
    icon: <Music size={40} />,
    color: 'bg-purple-500'
  },
  { 
    name: 'Fastnet网络压力测试', 
    description: 'Fastnet网络压力测试工具是您确保网络性能的得力助手。我们提供全面的网络诊断和压力测试服务，帮助您识别并解决潜在的网络问题。通过模拟各种网络条件和用户行为，Fastnet能够准确评估您的网络承载能力，优化网络配置，提高系统稳定性和响应速度，为您的用户提供流畅的在线体验。', 
    icon: <Wifi size={40} />,
    color: 'bg-blue-500'
  },
  { 
    name: 'Toobur电脑工具箱', 
    description: 'Toobur电脑工具箱是您的一站式电脑维护解决方案。我们集成了多种实用工具，包括系统清理、注册表优化、硬盘碎片整理等功能，全方位提升您的电脑性能。独特的智能诊断功能可以自动检测并修复常见的系统问题，让您的电脑始终保持最佳状态。用户友好的界面设计使得即使是计算机新手也能轻松操作，为您的数字生活保驾护航。', 
    icon: <Tool size={40} />,
    color: 'bg-green-500'
  },
  { 
    name: 'Centnet Zip压缩软件', 
    description: 'Centnet Zip压缩软件是您处理文件压缩和解压的最佳选择。我们支持多种主流压缩格式，确保您能够轻松处理各类文件。独特的压缩算法不仅能够显著减小文件体积，还能保证压缩和解压的速度。内置的文件加密功能为您的敏感数据提供额外的安全保障。直观的用户界面和批量处理功能大大提高了您的工作效率，让文件管理变得轻而易举。', 
    icon: <Archive size={40} />,
    color: 'bg-red-500'
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          我们的产品
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.map((product, index) => (
            <motion.div 
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut"
                  }
                }
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-center mb-4">
                <div className={`${product.color} p-3 rounded-full mr-4 text-white`}>
                  {product.icon}
                </div>
                <h3 className="text-xl font-semibold dark:text-white">{product.name}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="bg-blue-500 text-white px-6 py-3 text-lg rounded-md font-semibold hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 btn-hover-effect"
                    onClick={() => alert("此选项还没有完善")}
                  >
                    了解更多
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>此选项还没有完善</p>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

