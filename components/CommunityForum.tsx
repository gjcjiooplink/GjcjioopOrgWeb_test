import { MessageCircle, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const handleForumClick = () => {
  window.location.href = 'http://bbs.gjcjioop.com';
};

export default function CommunityForum() {
  return (
    <section id="community" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            与我们交流
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            加入我们的论坛社区，分享想法，获取支持
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <MessageCircle className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2 dark:text-white">活跃的讨论</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              我们的论坛是一个充满活力的社区，您可以在这里讨论各种话题，从技术问题到行业趋势。
            </p>
            <Button 
              className="bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 transform hover:scale-105"
              onClick={handleForumClick}
            >
              浏览论坛
            </Button>
          </div>

          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <Users className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2 dark:text-white">专家支持</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              我们的社区中有经验丰富的专家和开发者，随时准备回答您的问题并提供帮助。
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              加入社区
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

