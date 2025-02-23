import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">403</h1>
        <p className="text-2xl text-gray-600 mb-8">访问被禁止</p>
        <p className="text-xl text-gray-500 mb-8">不支持IP地址直接访问</p>
        <Link 
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          返回首页
        </Link>
      </div>
    </div>
  )
}

