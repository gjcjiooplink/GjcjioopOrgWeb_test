'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const TermsOfUse = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

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
                staggerChildren: 0.1
              }
            }
          }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white"
            variants={fadeInUp}
          >
            使用条款
          </motion.h1>
          <motion.div 
            className="space-y-8 text-gray-700 dark:text-gray-300"
            variants={fadeInUp}
          >
            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">1. 接受条款</h2>
              <p>欢迎使用GjcjioopOrg提供的服务。通过访问或使用我们的网站、应用程序或任何其他服务（统称为"服务"），您同意受这些使用条款的约束。如果您不同意这些条款，请不要使用我们的服务。</p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">2. 服务说明</h2>
              <p>GjcjioopOrg提供各种技术服务，包括但不限于软件开发、API服务、网络测试等。具体服务内容可能会随时间变化，请以我们网站上的最新描述为准。我们保留随时修改、暂停或终止任何服务的权利，恕不另行通知。</p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">3. 用户账户</h2>
              <p>某些服务可能需要您创建账户。您同意提供准确、完整和最新的信息，并及时更新这些信息。您有责任保护您的账户安全，包括保密您的密码。您同意对您账户下发生的所有活动负责。如果您发现任何未经授权的使用，请立即通知我们。</p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">4. 用户行为</h2>
              <p>在使用我们的服务时，您同意：</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>遵守所有适用的法律和法规</li>
                <li>尊重他人的知识产权和隐私权</li>
                <li>不发布、上传或传播任何非法、有害、威胁、辱骂、骚扰、诽谤、淫秽或其他不当内容</li>
                <li>不进行任何可能损害我们服务或系统的行为，如发送病毒、垃圾邮件或进行黑客攻击</li>
                <li>不冒充他人或虚假陈述您与任何人或实体的关系</li>
              </ul>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">5. 知识产权</h2>
              <p>我们的服务和相关内容（包括但不限于文本、图形、标识、按钮图标、图像、音频剪辑、数字下载、数据编辑和软件）是GjcjioopOrg或其许可方的财产，受版权、商标和其他知识产权法律的保护。您同意不复制、修改、出租、租赁、借出、销售、分发或创作基于我们服务的衍生作品。</p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">6. 免责声明</h2>
              <p>我们的服务按"原样"和"可用"的基础提供，不作任何明示或暗示的保证。我们不保证服务将不间断、及时、安全或无错误，也不保证结果将准确或可靠。使用我们的服务的风险由您自行承担。</p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">7. 责任限制</h2>
              <p>在法律允许的最大范围内，GjcjioopOrg及其董事、员工、合作伙伴或代理人不对任何直接、间接、附带、特殊、后果性或惩罚性损害负责，包括但不限于利润损失、商誉、使用、数据或其他无形损失。</p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">8. 条款修改</h2>
              <p>我们保留随时修改这些使用条款的权利。修改后的条款将在我们的网站上发布。继续使用我们的服务即表示您接受修改后的条款。我们建议您定期查看这些条款。</p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">9. 适用法律</h2>
              <p>这些使用条款应受中华人民共和国法律管辖并按其解释，不考虑法律冲突原则。您同意服从中华人民共和国法院的专属管辖权。</p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">10. 联系我们</h2>
              <p>如果您对这些使用条款有任何问题或意见，请联系我们：</p>
              <p className="mt-2">电子邮件：terms@gjcjiooporg.com</p>
              <p>地址：中国北京市朝阳区xxx街xxx号</p>
              <p>电话：+86 10 xxxx xxxx</p>
            </section>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

export default TermsOfUse

