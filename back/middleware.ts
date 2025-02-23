import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 检查字符串是否为 IP 地址
function isIPAddress(host: string) {
  const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/
  const ipv6Pattern = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/
  return ipv4Pattern.test(host) || ipv6Pattern.test(host)
}

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')
  const referer = request.headers.get('referer')

  if (host && isIPAddress(host) && !referer) {
    return new NextResponse(
      JSON.stringify({ message: '不支持IP地址直接访问' }),
      {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}

