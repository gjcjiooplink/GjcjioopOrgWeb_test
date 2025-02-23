import { motion } from 'framer-motion'
import { Server, HeadphonesIcon, Zap, ShieldCheck, Unlock, Eye } from 'lucide-react'

const reasons = [
  {
    icon: <Server className="w-24 h-24 text-blue-500" />,
    title: "高速响应的云服务器与OpenApi",
    description: "我们的云服务器采用最新的硬件和优化技术，确保您的应用始终保持高速响应。结合我们强大的OpenApi，您可以轻松集成和扩展功能，满足各种复杂的业务需求。我们的服务不仅处理海量数据和支持高并发访问，还提供实时监控和自动扩展功能，让您的业务在任何规模下都能保持卓越性能。此外，我们的全球CDN网络确保内容快速分发，无论用户身在何处，都能享受到极速体验。"
  },
  {
    icon: <HeadphonesIcon className="w-24 h-24 text-green-500" />,
    title: "完整的售后服务",
    description: "我们深知优质的售后服务对于企业至关重要。我们的专业团队全天候待命，随时为您解答疑问和解决问题。从技术支持到业务咨询，我们提供全方位的售后保障。我们不仅仅是被动响应，还主动进行定期的系统健康检查和性能优化建议。我们的售后服务还包括定制化的培训课程，帮助您的团队更好地利用我们的产品和服务。通过持续的客户反馈和满意度调查，我们不断改进服务质量，确保您获得最佳的用户体验。"
  },
  {
    icon: <Zap className="w-24 h-24 text-yellow-500" />,
    title: "完美的体验与速度",
    description: "我们致力于为用户提供极致的体验和卓越的速度。通过持续优化的算法和先进的缓存技术，我们确保您的每一次操作都能得到快速响应。我们的用户界面经过精心设计，直观易用，让您能够轻松上手并高效工作。我们采用了最新的前端技术，如懒加载和预加载，优化了资源加载策略，大大提升了页面加载速度。此外，我们的智能分析系统能够预测用户行为，提前加载可能需要的资源，进一步提升用户体验。无论是数据处理还是页面渲染，您都将感受到前所未有的流畅体验。"
  },
  {
    icon: <ShieldCheck className="w-24 h-24 text-red-500" />,
    title: "稳定提供的服务",
    description: "稳定性是我们服务的核心。我们采用多重备份和负载均衡技术，确保服务的持续可用性。我们的系统经过严格的压力测试和安全审核，能够应对各种突发情况。我们建立了完善的监控系统，能够及时发现并解决潜在问题，最大限度地减少服务中断的可能性。我们的数据中心分布在全球多个地理位置，采用热备份技术，即使在极端情况下也能保证服务的连续性。此外，我们还提供详细的服务水平协议（SLA），明确承诺服务的可用性和性能指标，为您的业务提供坚实可靠的技术支持。"
  },
  {
    icon: <Unlock className="w-24 h-24 text-purple-500" />,
    title: "免费且开放",
    description: "我们相信技术的力量应该被广泛分享。因此，我们提供大量的免费资源和开放的平台，让更多的开发者和企业能够受益。我们鼓励社区贡献，定期举办开源项目和技术分享会。通过开放的态度，我们不仅促进了技术的进步，也为用户创造了更多的可能性。我们的开发者社区活跃度高，有大量的教程、文档和示例代码可供参考。我们还设立了创新基金，支持有潜力的开源项目，推动整个行业的发展。通过这种方式，我们不仅分享技术，更是在培育一个充满创新和协作精神的生态系统。"
  },
  {
    icon: <Eye className="w-24 h-24 text-indigo-500" />,
    title: "易用且透明",
    description: "我们深知复杂的技术背后需要简单直观的使用方式。我们的产品和服务设计秉承易用性原则，即使是技术新手也能快速上手。我们提供详细的文档、视频教程和交互式指南，帮助用户轻松掌握各项功能。同时，我们保持高度的透明度，清晰地展示我们的定价策略、服务条款和隐私政策。我们的计费系统提供实时的使用量统计和成本预估，让您随时了解资源使用情况。我们还定期发布技术白皮书和安全报告，公开我们的技术架构和安全措施。我们相信，只有让用户充分了解和信任我们，才能建立长久的合作关系。"
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">选择我们的理由</h2>
        <div className="space-y-24">
          {reasons.map((reason, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
              <motion.div 
                className="w-full md:w-1/3 flex justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <div className="bg-white dark:bg-gray-700 p-8 rounded-full shadow-lg">
                  {reason.icon}
                </div>
              </motion.div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">{reason.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

