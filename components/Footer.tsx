import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const quickLinks = [
    { href: "#products", text: "产品中心" },
    { href: "#services", text: "服务支持" },
    { href: "#api", text: "API文档" },
    { href: "https://status.gjcjioop.com", text: "服务状态", external: true },
    { href: "https://src.gjcjioop.com", text: "响应平台", external: true },
    { href: "https://h5.dingtalk.com/circle/joinCircle.html?corpId=ding9b42e1620902f0ad24f2f5cc6abecb85&token=56c78334848d901e15633d3a2f708c20&groupCode=v1,k1,HdyU4VJ7N1hrjzZWDs67x9q+whx0qcenVRqDRfzVJjc=&from=group&ext=%7B%22channel%22%3A%22QR_GROUP_NORMAL%22%2C%22extension%22%3A%7B%22groupCode%22%3A%22v1%2Ck1%2CHdyU4VJ7N1hrjzZWDs67x9q%2Bwhx0qcenVRqDRfzVJjc%3D%22%2C%22groupFrom%22%3A%22group%22%7D%2C%22inviteId%22%3A105250338%2C%22orgId%22%3A628316621%2C%22shareType%22%3A%22GROUP%22%7D&origin=11", text: "加入我们", external: true }
  ]

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">关于我们</h3>
            <p className="text-gray-400">
              GjcjioopOrg致力于为用户提供优质的软件服务和技术支持。
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">快速链接</h3>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">法律信息</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/routuby-agreement" className="text-gray-400 hover:text-white transition-colors">
                  隐私协议
                </Link>
              </li>
              <li>
                <Link href="/shiyong-tiaokuan" className="text-gray-400 hover:text-white transition-colors">
                  使用条款
                </Link>
              </li>
              <li>
                <Link href="/mianze-shengming" className="text-gray-400 hover:text-white transition-colors">
                  免责声明
                </Link>
              </li>
              <li>
                <Link href="/article-optical" className="text-gray-400 hover:text-white transition-colors">
                  服务政策
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">关注我们</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} GjcjioopOrg. 保留所有权利。
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-gray-400 flex items-center">
                Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> in China
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

