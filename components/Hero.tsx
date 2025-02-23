'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import dynamic from 'next/dynamic'

// 确保 motion 组件可以在服务器端正确渲染
const MotionDiv = motion.div
const MotionH1 = motion.h1
const MotionH2 = motion.h2

// 动态导入 Three.js 组件
const TechInnovationScene = dynamic(() => import('./TechInnovationScene'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-200 animate-pulse"></div>
})

const carouselItems = [
  {
    title: "欢迎来到 GjcjioopOrg",
    subtitle: "Welcome to GjcjioopOrg",
    description: "我们致力于提供高效、安全的技术服务，助力企业数字化转型。",
    background: "bg-gradient-to-r from-blue-500 to-purple-600",
    renderContent: (buttons) => (
      <div className="text-center mb-8">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl font-bold mb-4 text-white"
        >
          欢迎来到 GjcjioopOrg
        </motion.h1>
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl mb-8 text-white"
        >
          Welcome to GjcjioopOrg
        </motion.h2>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center space-x-8"
        >
          {buttons}
        </motion.div>
      </div>
    ),
    buttons: [
      { 
        text: "加入我们", 
        href: "https://wx-in-i.dingtalk.com/invite-page/weixin.html?bizSource=____source____&corpId=ding66fb26f5d0a47b3824f2f5cc6abecb85&inviteCode=t8lXpwrN26UBsPh&dtaction=os", 
        variant: "default",
        className: "bg-blue-600 text-white px-8 py-4 text-lg rounded-lg font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg",
        hasAnimation: true
      },
      { 
        text: "购买产品", 
        href: "http://gjcjioop.com/buy", 
        variant: "outline",
        className: "bg-purple-600 text-white px-8 py-4 text-lg rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg",
        hasAnimation: true
      }
    ]
  },
  {
    title: "技术生态系统",
    subtitle: "创新驱动未来",
    description: "构建全面、高效的技术生态系统，整合最新技术趋势和创新解决方案。",
    background: "bg-gradient-to-r from-indigo-600 to-purple-600",
    renderContent: (buttons) => (
      <div className="w-full h-full flex items-center justify-center p-8 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto grid grid-cols-2 gap-8 items-center"
        >
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white/10 p-5 rounded-xl border border-white/20 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-3">技术生态系统</h2>
              <p className="text-white/80 text-base">
                我们构建了一个全面、高效的技术生态系统，整合最新技术趋势和创新解决方案。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { 
                  title: "微服务架构", 
                  description: "灵活、可扩展的分布式系统设计",
                  icon: "🔗"
                },
                { 
                  title: "云原生技术", 
                  description: "高性能、可靠的云端应用部署",
                  icon: "☁️"
                },
                { 
                  title: "AI集成", 
                  description: "智能算法赋能业务创新",
                  icon: "🤖"
                },
                { 
                  title: "安全防护", 
                  description: "多层次、全方位的安全解决方案",
                  icon: "🛡️"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.3 + index * 0.1, 
                    duration: 0.5 
                  }}
                  className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-white/70 text-xs">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex space-x-4"
            >
              {buttons}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative z-10 bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { 
                    label: "开发效率", 
                    value: "95%", 
                    color: "bg-green-500", 
                    description: "敏捷开发，快速迭代",
                    icon: "🚀"
                  },
                  { 
                    label: "系统稳定性", 
                    value: "99.9%", 
                    color: "bg-blue-500", 
                    description: "高可用性架构",
                    icon: "🛡️"
                  },
                  { 
                    label: "安全等级", 
                    value: "A+", 
                    color: "bg-purple-500", 
                    description: "多重安全防护",
                    icon: "🔒"
                  }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 0.5 + index * 0.1, 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 300
                    }}
                    className="text-center bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-all group"
                  >
                    <div className="flex items-center justify-center mb-3">
                      <div className={`w-16 h-16 rounded-full ${stat.color} flex items-center justify-center text-white text-2xl font-bold mr-3 group-hover:rotate-12 transition-transform`}>
                        {stat.icon}
                      </div>
                      <div className={`w-16 h-16 rounded-full ${stat.color} flex items-center justify-center text-white text-xl font-bold`}>
                        {stat.value}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-1">{stat.label}</h4>
                    <p className="text-white/70 text-xs">{stat.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-4 bg-white/10 p-3 rounded-lg text-center">
                <p className="text-white/80 text-xs">
                  我们致力于提供高质量、高性能的技术解决方案
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    ),
    buttons: [
      { 
        text: "技术路线", 
        href: "#products", 
        variant: "default", 
        className: "bg-white text-purple-600 px-6 py-2 rounded-lg hover:bg-white/90 transition-all font-semibold text-sm",
        hasAnimation: false 
      },
      { 
        text: "深入了解", 
        href: "#ecosystem", 
        variant: "outline", 
        className: "border border-white text-white px-6 py-2 rounded-lg hover:bg-white/20 transition-all font-semibold text-sm",
        hasAnimation: false 
      }
    ]
  },
  {
    title: "安全可靠的解决方案",
    subtitle: "保护您的数字资产",
    description: "我们提供端到端的安全解决方案，确保您的业务安全无忧。",
    background: "bg-gradient-to-r from-red-500 to-orange-600",
    renderContent: (buttons) => (
      <div className="w-full h-full flex items-center justify-center p-8 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto flex flex-col items-center"
        >
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-white mb-4">数字安全防御盾</h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              我们构建全方位的安全防御体系，如同数字世界的坚固堡垒，为您的业务提供360°全方位保护。
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-8 w-full max-w-5xl">
            {[
              { 
                title: "数据加密", 
                description: "端到端加密，保护敏感信息",
                icon: "🔐",
                color: "bg-red-500",
                details: [
                  "多重加密算法",
                  "实时数据保护",
                  "安全传输通道"
                ]
              },
              { 
                title: "威胁检测", 
                description: "实时监控，主动防御攻击",
                icon: "🛡️", 
                color: "bg-orange-500",
                details: [
                  "AI智能分析",
                  "异常行为识别",
                  "快速响应机制"
                ]
              },
              { 
                title: "合规保护", 
                description: "满足行业最严格合规标准",
                icon: "📜",
                color: "bg-pink-500",
                details: [
                  "GDPR合规",
                  "等保三级认证",
                  "行业最高标准"
                ]
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.3 + index * 0.2, 
                  duration: 0.6 
                }}
                className="bg-white/10 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-4 group"
              >
                <div className="flex items-center mb-4">
                  <div className={`text-4xl mr-4 ${item.color} p-3 rounded-full group-hover:rotate-12 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="space-y-2 mt-4">
                  {item.details.map((detail, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center text-white/80 text-sm"
                    >
                      <span className="mr-2 text-green-400">✓</span>
                      {detail}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex space-x-6 mt-12"
          >
            {buttons}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-8 bg-white/10 p-4 rounded-xl max-w-2xl text-center"
          >
            <p className="text-white/80 text-sm">
              我们的安全解决方案不仅仅是防御，更是您业务持续发展的坚实基石
            </p>
          </motion.div>
        </motion.div>
      </div>
    ),
    buttons: [
      { 
        text: "安全服务", 
        href: "#security", 
        variant: "default", 
        className: "bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-white/90 transition-all font-semibold text-base",
        hasAnimation: false 
      },
      { 
        text: "风险评估", 
        href: "#risk-assessment", 
        variant: "outline", 
        className: "border border-white text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-all font-semibold text-base",
        hasAnimation: false 
      }
    ]
  },
  {
    title: "AI智能生态",
    subtitle: "智能革新，无限可能",
    description: "DeepSeek - R1 引领企业进入智能创新时代",
    background: "bg-gradient-to-r from-black via-gray-900 to-blue-900",
    renderContent: (buttons) => (
      <div className="w-full h-full flex items-center justify-center p-8 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-blue-900 opacity-50 z-0"></div>
        
        <MotionDiv 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto grid grid-cols-2 gap-12 items-center relative z-10"
        >
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4 bg-blue-500 p-3 rounded-full">🤖</div>
                <h2 className="text-4xl font-bold text-white">DeepSeek - R1</h2>
              </div>
              <p className="text-white/80 text-lg">
                突破性的人工智能平台，融合最前沿技术，为企业提供全方位智能解决方案。
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { 
                  title: "智能推理", 
                  description: "毫秒级响应，极致性能",
                  icon: "⚡",
                  color: "bg-green-500"
                },
                { 
                  title: "跨模态", 
                  description: "多维度智能理解",
                  icon: "🧠", 
                  color: "bg-purple-500"
                },
                { 
                  title: "自适应", 
                  description: "持续学习，智能进化",
                  icon: "🔬",
                  color: "bg-blue-500"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.3 + index * 0.2, 
                    duration: 0.5 
                  }}
                  className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group text-center"
                >
                  <div className={`text-4xl mx-auto mb-3 w-16 h-16 flex items-center justify-center ${item.color} rounded-full group-hover:rotate-12 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70 text-xs">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex space-x-4"
            >
              {buttons}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative z-10 bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white/10 p-6 rounded-xl flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">模型性能</h4>
                    <p className="text-white/70 text-sm">海量知识，极致推理</p>
                  </div>
                  <div className="text-3xl font-bold text-blue-400">1.3B</div>
                </div>
                
                <div className="bg-white/10 p-6 rounded-xl flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">响应速度</h4>
                    <p className="text-white/70 text-sm">毫秒级智能响应</p>
                  </div>
                  <div className="text-3xl font-bold text-green-400">&lt; 50ms</div>
                </div>
                
                <div className="bg-white/10 p-6 rounded-xl flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">准确率</h4>
                    <p className="text-white/70 text-sm">高精度智能决策</p>
                  </div>
                  <div className="text-3xl font-bold text-purple-400">96.5%</div>
                </div>
              </div>
              
              <div className="mt-6 bg-white/10 p-4 rounded-lg text-center">
                <p className="text-white/80 text-xs">
                  DeepSeek - R1：重新定义企业智能计算边界
                </p>
              </div>
            </div>
          </motion.div>
        </MotionDiv>
      </div>
    ),
    buttons: [
      { 
        text: "立即接入", 
        href: "https://api.gjcjioop.com/deepseek", 
        variant: "default", 
        className: "bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold text-base",
        hasAnimation: true 
      },
      { 
        text: "探索更多", 
        href: "#ai-solution", 
        variant: "outline", 
        className: "border border-white text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-all font-semibold text-base",
        hasAnimation: false 
      }
    ]
  },
  {
    title: "全球云计算基础设施",
    subtitle: "智能网络，无限可能",
    description: "超越传统，重新定义云计算的边界",
    background: "bg-gradient-to-r from-black via-gray-900 to-indigo-900",
    renderContent: (buttons) => (
      <div className="w-full h-full flex items-center justify-center p-8 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-indigo-900 opacity-50 z-0"></div>
        
        <MotionDiv 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto grid grid-cols-2 gap-12 items-center relative z-10"
        >
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4 bg-blue-500 p-3 rounded-full">🌐</div>
                <h2 className="text-4xl font-bold text-white">云网络生态</h2>
              </div>
              <p className="text-white/80 text-lg">
                智能、安全、高效的全球云计算网络，为企业提供无限可能的数字基础设施。
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { 
                  title: "智能调度", 
                  description: "实时资源优化",
                  icon: "🤖",
                  color: "bg-green-500"
                },
                { 
                  title: "全球节点", 
                  description: "多地区无缝连接",
                  icon: "🌍", 
                  color: "bg-blue-500"
                },
                { 
                  title: "安全防护", 
                  description: "多层次安全保障",
                  icon: "🛡️",
                  color: "bg-purple-500"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.3 + index * 0.2, 
                    duration: 0.5 
                  }}
                  className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group text-center"
                >
                  <div className={`text-4xl mx-auto mb-3 w-16 h-16 flex items-center justify-center ${item.color} rounded-full group-hover:rotate-12 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70 text-xs">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex space-x-4"
            >
              {buttons}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative z-10 bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
              <div className="relative w-full h-96">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-white/10 rounded-full animate-pulse border-4 border-white/20 flex items-center justify-center">
                    <div className="w-48 h-48 bg-white/20 rounded-full animate-spin-reverse flex items-center justify-center">
                      <div className="w-32 h-32 bg-white/30 rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">云网络</span>
                      </div>
                    </div>
                  </div>
                </div>

                {[
                  { left: '10%', top: '20%', color: 'bg-blue-500', pulse: true },
                  { left: '80%', top: '30%', color: 'bg-green-500', pulse: false },
                  { left: '40%', top: '80%', color: 'bg-purple-500', pulse: true },
                  { left: '60%', top: '10%', color: 'bg-red-500', pulse: false }
                ].map((node, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1.2, 1], 
                      opacity: [0, 1, 0.7],
                      left: node.left,
                      top: node.top
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      delay: index * 0.5
                    }}
                    className={`absolute w-4 h-4 ${node.color} rounded-full ${node.pulse ? 'animate-ping' : ''}`}
                  />
                ))}
              </div>
              
              <div className="mt-6 bg-white/10 p-4 rounded-lg text-center">
                <p className="text-white/80 text-xs">
                  智能云网络：连接全球，释放无限潜能
                </p>
              </div>
            </div>
          </motion.div>
        </MotionDiv>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(100)].map((_, index) => (
            <motion.div 
              key={index}
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{ 
                x: [
                  Math.random() * window.innerWidth, 
                  Math.random() * window.innerWidth, 
                  Math.random() * window.innerWidth
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight
                ],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
            />
          ))}
        </div>
      </div>
    ),
    buttons: [
      { 
        text: "探索网络", 
        href: "#global-network", 
        variant: "default", 
        className: "bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold text-base",
        hasAnimation: true 
      },
      { 
        text: "技术详情", 
        href: "#cloud-tech", 
        variant: "outline", 
        className: "border border-white text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-all font-semibold text-base",
        hasAnimation: false 
      }
    ]
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null)
  const manualSlideTimerRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoSlide = () => {
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current)
    }
    
    autoSlideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
      setDirection('right')
    }, 10000)
  }

  useEffect(() => {
    startAutoSlide()
    return () => {
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      // 可以在这里添加响应式处理逻辑
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handlePrev = () => {
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current)
    }
    
    if (manualSlideTimerRef.current) {
      clearTimeout(manualSlideTimerRef.current)
    }

    manualSlideTimerRef.current = setTimeout(startAutoSlide, 5000)

    setCurrentSlide((prev) => 
      prev === 0 ? carouselItems.length - 1 : prev - 1
    )
    setDirection('left')
  }

  const handleNext = () => {
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current)
    }
    
    if (manualSlideTimerRef.current) {
      clearTimeout(manualSlideTimerRef.current)
    }

    manualSlideTimerRef.current = setTimeout(startAutoSlide, 5000)

    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    setDirection('right')
  }

  const currentItem = carouselItems[currentSlide]

  const slideVariants = {
    initial: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? '100%' : '-100%',
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.5
      }
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? '-100%' : '100%',
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 0.5
      }
    })
  }

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div 
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`absolute inset-0 flex flex-col items-center justify-center ${currentItem.background} text-white`}
        >
          {currentItem.renderContent(currentItem.buttons.map((btn, index) => (
            <Button
              key={index}
              className={`relative ${btn.className}`}
              onClick={() => {
                if (btn.href.startsWith('http')) {
                  window.open(btn.href, '_blank')
                } else {
                  const element = document.querySelector(btn.href)
                  element?.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              {btn.hasAnimation && (
                <motion.span 
                  className={`absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 ${index === 0 ? 'bg-green-400' : 'bg-blue-400'} rounded-full`}
                    animate={{
                      scale: [1, index === 0 ? 1.2 : 1.5, 1],
                      opacity: [1, index === 0 ? 0.7 : 0.5, 1]
                    }}
                    transition={{
                      duration: index === 0 ? 1.5 : 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.span>
              )}
              {btn.text}
            </Button>
          )))}
        </motion.div>
      </AnimatePresence>

      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full z-10"
      >
        <ChevronLeft className="text-white" />
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full z-10"
      >
        <ChevronRight className="text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {carouselItems.map((_, index) => (
          <div 
            key={index} 
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => {
              setCurrentSlide(index)
              setDirection(index > currentSlide ? 'right' : 'left')
            }}
          />
        ))}
      </div>
    </section>
  )
}

