"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const ServicePolicies = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-24">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white" variants={fadeInUp}>
            GjcjioopOrg 服务政策
          </motion.h1>
          <motion.p className="mb-8 text-gray-700 dark:text-gray-300" variants={fadeInUp}>
            我们致力于为用户提供最优质的服务体验。以下是我们详细的服务政策，请仔细阅读并遵守。
          </motion.p>
          <motion.div className="space-y-8 text-gray-700 dark:text-gray-300" variants={fadeInUp}>
            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">1. 服务范围</h2>
              <p>我们提供以下服务：</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>软件开发：包括但不限于网站开发、移动应用开发、桌面应用开发等</li>
                <li>API服务：提供各种数据接口和功能接口</li>
                <li>网络测试：包括网络性能测试、安全测试、负载测试等</li>
                <li>技术咨询：提供专业的技术建议和解决方案</li>
                <li>系统维护：定期维护和更新系统，确保稳定运行</li>
              </ul>
              <p className="mt-4">具体服务内容以合同约定为准。我们保留根据技术发展和市场需求调整服务范围的权利。</p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">2. 服务质量承诺</h2>
              <p>我们承诺提供高质量的服务，包括但不限于：</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>99.9%的服务可用性：我们努力确保我们的服务全天候可用</li>
                <li>快速响应：技术支持响应时间不超过4小时</li>
                <li>定期更新：我们会定期更新我们的服务，以确保安全性和性能</li>
                <li>数据备份：我们会定期备份数据，以防意外情况发生</li>
              </ul>
              <p className="mt-4">
                详细的服务级别协议（SLA）将在具体合同中明确。如果我们未能达到承诺的服务水平，我们将根据SLA提供相应的补偿。
              </p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">3. 数据安全与隐私保护</h2>
              <p>我们高度重视用户数据的安全和隐私保护：</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>数据加密：所有数据传输和存储都采用高级加密技术</li>
                <li>访问控制：严格的内部访问控制机制，确保只有授权人员才能访问用户数据</li>
                <li>定期审计：我们会定期进行安全审计，及时发现和修复潜在的安全漏洞</li>
                <li>隐私保护：我们严格遵守相关法律法规，不会未经授权使用或泄露用户的敏感信息</li>
              </ul>
              <p className="mt-4">详细的数据处理和隐私保护政策请参见我们的隐私协议。</p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">4. 知识产权</h2>
              <p>关于知识产权，我们有以下规定：</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>我们提供的服务和相关软件的知识产权归我公司所有</li>
                <li>用户在使用我们的服务时创建的内容，其知识产权归用户所有</li>
                <li>用户不得未经授权使用、复制、分发或修改我们的知识产权</li>
                <li>如发现知识产权侵权行为，我们将采取适当的法律行动</li>
              </ul>
              <p className="mt-4">在某些情况下，我们可能会与客户签订特殊的知识产权协议，具体以合同约定为准。</p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">5. 服务变更与终止</h2>
              <p>关于服务的变更和终止，我们有以下规定：</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>
                  服务变更：我们保留根据市场变化和技术发展对服务进行调整的权利。如遇重大变更，我们将提前30天通知用户
                </li>
                <li>
                  服务终止：在以下情况下，我们可能会终止服务：
                  <ul className="list-disc list-inside ml-8 mt-2">
                    <li>用户违反了服务条款或相关法律法规</li>
                    <li>我们因经营策略调整而停止提供某项服务</li>
                    <li>不可抗力因素导致无法继续提供服务</li>
                  </ul>
                </li>
                <li>
                  数据处理：服务终止后，我们将根据用户的要求删除或返还用户数据，并在合理期限内从我们的系统中彻底删除这些数据
                </li>
              </ul>
              <p className="mt-4">具体的服务变更和终止流程将在服务合同中详细说明。</p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">6. 责任限制</h2>
              <p>我们努力提供最好的服务，但也存在一些责任限制：</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>我们不对因不可抗力（如自然灾害、政府行为、网络攻击等）导致的服务中断或数据丢失负责</li>
                <li>
                  我们不对用户使用我们的服务而导致的直接或间接损失承担责任，除非这些损失是由我们的重大过失或故意行为造成的
                </li>
                <li>我们的赔偿责任上限不超过用户在问题发生前12个月内为相关服务支付的费用总额</li>
              </ul>
              <p className="mt-4">具体的责任限制条款将在服务合同中详细说明。</p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">7. 争议解决</h2>
              <p>如果在服务过程中产生任何争议，我们将按照以下步骤解决：</p>
              <ol className="list-decimal list-inside ml-4 space-y-2 mt-2">
                <li>友好协商：双方应首先通过友好协商解决争议</li>
                <li>调解：如协商不成，可以选择由双方认可的第三方进行调解</li>
                <li>仲裁：如调解不成，争议将提交至合同约定的仲裁机构进行仲裁</li>
                <li>诉讼：如合同未约定仲裁，争议将提交至有管辖权的人民法院诉讼解决</li>
              </ol>
              <p className="mt-4">在争议解决过程中，除争议部分外，本服务政策的其他部分仍然有效。</p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">8. 政策更新</h2>
              <p>我们可能会不时更新本服务政策。更新可能会由于以下原因进行：</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>法律法规的变化</li>
                <li>业务范围或模式的调整</li>
                <li>技术或安全实践的改进</li>
                <li>用户反馈和建议的采纳</li>
              </ul>
              <p className="mt-4">
                当我们对服务政策进行重大更改时，我们将在网站上发布通知，并通过电子邮件通知注册用户。继续使用我们的服务即表示您同意新的服务政策。
              </p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">9. 联系我们</h2>
              <p>如果您对本服务政策有任何问题、意见或建议，请通过以下方式联系我们：</p>
              <p className="mt-2">电子邮件：service@gjcjiooporg.com</p>
              <p>地址：中国北京市朝阳区xxx街xxx号</p>
              <p>电话：+86 10 xxxx xxxx</p>
              <p className="mt-4">我们的客户服务团队将在收到您的询问后的1-2个工作日内回复您。</p>
            </section>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

export default ServicePolicies

