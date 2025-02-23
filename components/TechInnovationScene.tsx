import { motion } from 'framer-motion'

export default function TechInnovationScene() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full h-full flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 p-8"
    >
      <div className="container mx-auto grid grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-white mb-4">技术生态系统</h2>
            <p className="text-white/80 text-lg">
              我们构建了一个全面、高效的技术生态系统，整合最新技术趋势和创新解决方案。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
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
              <div 
                key={index} 
                className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="flex space-x-4">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-white/90 transition-all font-semibold">
              技术路线
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-all font-semibold">
              深入了解
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="relative z-10 bg-white/20 rounded-3xl p-8 backdrop-blur-sm">
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: "开发效率", value: "95%", color: "bg-green-500" },
                { label: "系统稳定性", value: "99.9%", color: "bg-blue-500" },
                { label: "安全等级", value: "A+", color: "bg-purple-500" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-all"
                >
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-full ${stat.color} flex items-center justify-center text-white text-2xl font-bold`}>
                    {stat.value}
                  </div>
                  <p className="text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.div
        animate={{
          rotate: 360,
          transition: {
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }
        }}
        className="absolute w-64 h-64 border-4 border-white/20 rounded-full"
      />
    </motion.div>
  )
}