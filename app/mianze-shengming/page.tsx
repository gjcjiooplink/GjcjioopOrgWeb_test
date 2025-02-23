"use client"

import React from "react"
import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const Disclaimer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
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
                staggerChildren: 0.1,
              },
            },
          }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white" variants={fadeInUp}>
            免责声明
          </motion.h1>
          <motion.div className="space-y-8 text-gray-700 dark:text-gray-300" variants={fadeInUp}>
            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">信息准确性</h2>
              <p>
                GjcjioopOrg（以下简称 我们{" "}
                ）尽最大努力确保网站上的信息准确和最新。然而，我们不能保证所有信息在任何给定时间都是完全准确、完整或最新的。用户在做出任何决定之前应自行验证信息的准确性。
              </p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">2. 使用风险</h2>
              <p>
                使用我们的网站和服务的风险由用户自行承担。我们提供的信息和服务按"原样"提供，不附带任何明示或暗示的保证。我们不保证网站将不间断、及时、安全或无错误地运行。
              </p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">3. 责任限制</h2>
              <p>
                在法律允许的最大范围内，GjcjioopOrg及其董事、员工、合作伙伴或代理人不对任何直接、间接、附带、特殊、后果性或惩罚性损害负责。这包括但不限于因使用或无法使用我们的网站或服务而导致的利润损失、数据丢失或业务中断。
              </p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">4. 外部链接</h2>
              <p>
                我们的网站可能包含指向第三方网站的链接。这些链接仅为方便用户而提供。我们不控制这些网站的内容，也不对其准确性、合法性或任何其他方面负责。包含这些链接并不意味着我们认可这些网站或与其运营商有任何关联。
              </p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">5. 知识产权</h2>
              <p>
                除非另有说明，网站上的所有内容均为GjcjioopOrg的财产，受版权法和其他知识产权法保护。未经我们明确书面许可，不得复制、分发、修改或以其他方式使用这些内容。
              </p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">6. 用户提交的内容</h2>
              <p>
                用户可能有机会在我们的网站上提交内容。通过提交内容，用户授予我们非独占的、全球性的、永久的、免版税的许可，允许我们使用、复制、修改、公开展示和分发该内容。用户对其提交的内容负全部责任，并保证拥有提交该内容的权利。
              </p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">7. 管辖法律</h2>
              <p>
                本免责声明应受中华人民共和国法律管辖并按其解释。任何因使用我们的网站或服务而引起的争议，均应提交至中华人民共和国有管辖权的法院解决。
              </p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">8. 修改权</h2>
              <p>
                我们保留随时修改本免责声明的权利。修改后的版本将在网站上发布，并在发布时立即生效。我们建议用户定期查看本免责声明，以了解任何变更。
              </p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">9. 联系我们</h2>
              <p>如果您对本免责声明有任何问题或疑虑，请联系我们：</p>
              <p className="mt-2">电子邮件：legal@gjcjiooporg.com</p>
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

export default Disclaimer

