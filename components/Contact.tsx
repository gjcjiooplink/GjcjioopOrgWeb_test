import { useState, FormEvent } from 'react'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = encodeURIComponent('来自网站的联系表单')
    const body = encodeURIComponent(`姓名: ${name}\n邮箱: ${email}\n留言: ${message}`)
    window.location.href = `mailto:gjcjioop@163.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          加入 & 联系我们
        </h2>
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">姓名</label>
            <input 
              type="text" 
              id="name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400" 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">邮箱</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400" 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">留言</label>
            <textarea 
              id="message" 
              rows={4} 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400" 
              required
            ></textarea>
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                type="submit" 
                className="w-full bg-blue-500 text-white px-6 py-3 text-lg rounded-md font-semibold hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 btn-hover-effect"
              >
                发送
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>发送您的留言</p>
            </TooltipContent>
          </Tooltip>
        </form>
      </div>
    </section>
  )
}

