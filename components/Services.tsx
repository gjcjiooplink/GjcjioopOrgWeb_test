'use client'

import { Music, UserCheck, Wifi, Code } from 'lucide-react'
import { motion } from 'framer-motion'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

const services = [
  {
    name: '酷狗音乐Api服务',
    description: '我们的酷狗音乐Api服务为开发者提供了强大而灵活的音乐数据接口。通过这个服务，您可以轻松获取海量音乐资源，包括歌曲信息、歌词、专辑封面等。我们的API支持多种查询方式，如按歌手、专辑、流派等搜索，并提供实时的音乐排行榜数据。高效的缓存机制和负载均衡确保了API的快速响应和稳定性，让您的应用能够提供流畅的音乐体验。',
    icon: <Music size={40} />,
    color: 'bg-indigo-500'
  },
  {
    name: '多平台聚合数据登录服务',
    description: '我们的多平台聚合数据登录服务为您的应用提供了一站式的用户认证解决方案。支持包括微信、QQ、微博等在内的多个主流社交平台，让用户可以使用已有的社交账号快速登录您的应用。我们的服务不仅简化了用户的注册流程，还能帮助您收集用户的社交数据，从而更好地了解您的用户群体。强大的数据加密和隐私保护机制确保了用户信息的安全，让您和您的用户都能安心使用。',
    icon: <UserCheck size={40} />,
    color: 'bg-green-500'
  },
  {
    name: '网络信息测试服务',
    description: '我们的网络信息测试服务为企业和个人用户提供全面的网络诊断工具。通过模拟各种网络环境和用户行为，我们的服务可以帮助您评估网站或应用的性能、加载速度和稳定性。我们提供详细的测试报告，包括响应时间、并发用户数、服务器资源利用率等关键指标，帮助您识别潜在的性能瓶颈。此外，我们的智能分析引擎还能为您提供针对性的优化建议，帮助您不断提升用户体验。',
    icon: <Wifi size={40} />,
    color: 'bg-yellow-500'
  },
  {
    name: '网页开发与程序接单',
    description: '我们的网页开发与程序接单服务为您提供一站式的定制化解决方案。我们的团队由经验丰富的开发人员组成，精通前端和后端技术，能够满足您的各种开发需求。无论是响应式网站设计、企业管理系统开发，还是移动应用程序制作，我们都能为您提供高质量的服务。我们注重与客户的沟通，确保最终产品完全符合您的期望。同时，我们还提供后续的技术支持和维护服务，让您的项目长期保持最佳状态。',
    icon: <Code size={40} />,
    color: 'bg-purple-500'
  }
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

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          我们的服务
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
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
                <div className={`${service.color} p-3 rounded-full mr-4 text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold dark:text-white">{service.name}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="bg-blue-500 text-white px-6 py-3 text-lg rounded-md font-semibold hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 btn-hover-effect"
                  >
                    了解更多
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>了解更多关于{service.name}的信息</p>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

