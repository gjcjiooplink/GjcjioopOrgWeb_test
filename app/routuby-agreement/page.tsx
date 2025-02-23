'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const PrivacyPolicy = () => {
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
            隐私协议
          </motion.h1>
          <motion.div 
            className="space-y-8 text-gray-700 dark:text-gray-300"
            variants={fadeInUp}
          >
            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">1. 信息收集</h2>
              <p className="mb-4">我们可能收集以下类型的信息：</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>个人识别信息（如姓名、电子邮件地址、电话号码等）</li>
                <li>使用数据（如IP地址、浏览器类型、访问时间等）</li>
                <li>设备信息（如设备ID、操作系统等）</li>
                <li>位置信息（如GPS数据、Wi-Fi接入点等）</li>
                <li>交易信息（如购买历史、账单地址等）</li>
              </ul>
              <p className="mt-4">我们收集这些信息的目的是为了提供、改进和个性化我们的服务，以及遵守法律要求。我们承诺只收集必要的信息，并采取适当的措施保护您的隐私。</p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">2. 信息使用</h2>
              <p className="mb-4">我们收集的信息将用于：</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>提供、维护和改进我们的服务</li>
                <li>处理交易和发送相关信息</li>
                <li>发送技术通知、更新、安全警报和支持消息</li>
                <li>回应用户的评论和问题，提供客户服务</li>
                <li>进行研究和分析，以改善用户体验</li>
                <li>个性化内容和广告推荐</li>
                <li>检测、预防和解决欺诈或其他非法活动</li>
              </ul>
              <p className="mt-4">我们承诺不会将您的个人信息用于未经授权的目的，也不会在未经您同意的情况下与第三方共享您的个人信息。</p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">3. 信息共享</h2>
              <p className="mb-4">我们不会出售或出租您的个人信息给第三方。但在以下情况下，我们可能会共享您的信息：</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>经您明确同意</li>
                <li>遵守法律要求、法院命令或政府机构的合法要求</li>
                <li>保护我们的权利、财产和安全，以及我们的用户或公众的权利、财产和安全</li>
                <li>与我们的子公司、关联公司或业务合作伙伴共享，以提供更好的服务</li>
                <li>在公司资产转让、合并、收购或破产清算过程中，如涉及到个人信息转让，我们会要求新的持有您个人信息的公司或组织继续受此隐私政策的约束</li>
              </ul>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">4. 信息安全</h2>
              <p>我们采取多重措施来保护您的个人信息安全：</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>使用加密技术保护数据传输和存储</li>
                <li>实施严格的访问控制措施，确保只有授权人员才能访问个人信息</li>
                <li>定期进行安全审计和漏洞扫描</li>
                <li>提供员工隐私和安全培训，确保他们了解保护用户隐私的重要性</li>
                <li>在发生数据泄露时，我们会及时通知受影响的用户并采取适当的补救措施</li>
              </ul>
              <p className="mt-4">尽管我们采取了这些措施，但请注意，没有任何安全系统是绝对安全的。我们会继续努力加强安全措施，以防止未经授权的访问、使用或披露。</p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">5. Cookie使用</h2>
              <p>我们使用Cookie和类似技术来收集使用数据，改善用户体验。这些技术可能包括：</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>会话Cookie：用于维护您的登录状态和购物车内容</li>
                <li>持久Cookie：用于记住您的偏好设置和登录信息</li>
                <li>分析Cookie：用于收集网站使用数据，帮助我们改进服务</li>
                <li>广告Cookie：用于向您展示相关的广告内容</li>
              </ul>
              <p className="mt-4">您可以通过浏览器设置来控制Cookie的使用。但请注意，禁用Cookie可能会影响某些功能的正常使用。</p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">6. 您的权利</h2>
              <p>根据适用的数据保护法律，您对您的个人信息拥有以下权利：</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>访问权：您有权获知我们收集了哪些关于您的信息，并要求获得这些信息的副本</li>
                <li>更正权：如果您认为我们持有的关于您的信息不准确或不完整，您有权要求我们更正或补充这些信息</li>
                <li>删除权：在某些情况下，您有权要求我们删除您的个人信息</li>
                <li>限制处理权：在某些情况下，您有权要求我们限制对您个人信息的处理</li>
                <li>数据可携带权：您有权以结构化、常用和机器可读的格式接收您提供给我们的个人信息，并有权将这些信息传输给其他控制者</li>
                <li>反对权：在某些情况下，您有权反对我们处理您的个人信息</li>
              </ul>
              <p className="mt-4">如果您想行使这些权利，请通过本政策末尾提供的联系方式与我们联系。我们将在合理的时间内响应您的请求。</p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">7. 儿童隐私</h2>
              <p>我们的服务不面向13岁以下的儿童。我们不会故意收集13岁以下儿童的个人信息。如果您是父母或监护人，并且认为您的孩子向我们提供了个人信息，请立即与我们联系，我们将采取措施从我们的系统中删除这些信息。</p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">8. 隐私政策的变更</h2>
              <p>我们可能会不时更新本隐私政策。当我们进行重大更改时，我们将在我们的网站上发布通知，并更新政策顶部的"最后更新"日期。我们鼓励您定期查看本政策，以了解我们如何保护您的信息。</p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">9. 联系我们</h2>
              <p>如果您对本隐私政策有任何问题、意见或请求，请通过以下方式联系我们：</p>
              <p className="mt-2">电子邮件：privacy@gjcjiooporg.com</p>
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

export default PrivacyPolicy

