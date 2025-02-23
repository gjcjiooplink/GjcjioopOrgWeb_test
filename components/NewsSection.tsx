import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const newsItems = [
  { 
    title: "GjcjioopOrg推出全新AI助手", 
    date: "2023-06-15", 
    summary: "我们很高兴地宣布，全新的AI助手现已上线，为用户提供更智能、更个性化的服务。" 
  },
  { 
    title: "公司荣获'年度最佳科技创新奖'", 
    date: "2023-05-20", 
    summary: "在昨晚举行的科技创新大会上，GjcjioopOrg凭借其在音乐AI领域的突破性成果，荣获'年度最佳科技创新奖'。" 
  },
  { 
    title: "GjcjioopOrg与多家顶级音乐厂牌达成合作", 
    date: "2023-04-10", 
    summary: "我们很高兴地宣布，GjcjioopOrg已与多家国际知名音乐厂牌达成战略合作，这将极大丰富我们的音乐库资源。" 
  },
]

export default function NewsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">新闻资讯</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div 
              key={index}
              className={`bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer ${
                index === activeIndex ? 'ring-2 ring-blue-500' : ''
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIndex(index)}
            >
              <h3 className="text-xl font-bold mb-2 dark:text-white">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{item.date}</p>
              <AnimatePresence mode="wait">
                {index === activeIndex && (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600 dark:text-gray-300"
                  >
                    {item.summary}
                  </motion.p>
                )}
              </AnimatePresence>
              {index === activeIndex && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button className="mt-4 bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                    阅读更多 <ChevronRight className="ml-2" size={16} />
                  </Button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

