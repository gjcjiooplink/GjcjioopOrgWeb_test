import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const historyEvents = [
  { 
    year: 2010, 
    event: "GjcjioopOrg成立", 
    description: "在科技创新的浪潮中，GjcjioopOrg应运而生。由一群充满激情的年轻工程师创立，我们立志成为数字时代的领航者，为用户提供卓越的软件解决方案。"
  },
  { 
    year: 2012, 
    event: "推出第一款产品KirinMusic麒麟音乐", 
    description: "经过两年的潜心研发，我们推出了革命性的音乐应用KirinMusic。它不仅是一个音乐播放器，更是一个智能音乐推荐系统，通过先进的算法为用户打造个性化的听歌体验。"
  },
  { 
    year: 2015, 
    event: "公司规模扩大到100人", 
    description: "随着业务的快速发展，我们的团队不断壮大。我们吸引了来自全球的顶尖人才，包括软件工程师、数据科学家和设计师，共同推动公司的创新进程。"
  },
  { 
    year: 2018, 
    event: "获得A轮融资1亿元", 
    description: "我们的潜力得到了投资界的认可。在A轮融资中，我们成功募集了1亿元资金。这笔资金不仅支持了我们的技术研发，还帮助我们拓展了市场，将产品推向国际舞台。"
  },
  { 
    year: 2020, 
    event: "推出Fastnet网络压力测试工具", 
    description: "为了满足企业级客户的需求，我们开发了Fastnet网络压力测试工具。这款工具能够模拟各种网络环境，帮助企业优化其在线服务的性能和稳定性。"
  },
  { 
    year: 2022, 
    event: "公司用户突破1000万", 
    description: "这是一个重要的里程碑！我们的用户群体突破了1000万，覆盖了全球50多个国家。这不仅证明了我们产品的价值，也激励我们继续创新，为用户提供更好的服务。"
  },
]

export default function CompanyHistory() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">公司发展史</h2>
        <motion.div 
          className="relative"
          animate={{ height: isExpanded ? "auto" : "400px" }}
          transition={{ duration: 0.5 }}
        >
          <div className={`space-y-8 ${isExpanded ? '' : 'overflow-hidden'}`} style={{ maxHeight: isExpanded ? 'none' : '400px' }}>
            {historyEvents.map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-start"
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="text-2xl font-bold dark:text-white">{item.year}</span>
                </div>
                <div className="flex-grow pb-8 border-l-4 border-blue-500 pl-8 relative">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full left-0 top-0 transform -translate-x-2"></div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{item.event}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-100 dark:from-gray-800 to-transparent" />
          )}
        </motion.div>
        <div className="text-center mt-8">
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            {isExpanded ? (
              <>
                收起历史 <ChevronUp className="ml-2" />
              </>
            ) : (
              <>
                查看完整历史 <ChevronDown className="ml-2" />
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  )
}

