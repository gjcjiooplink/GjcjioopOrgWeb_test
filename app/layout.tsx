import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { TooltipProvider } from "@/components/ui/tooltip"
import DevToolsDetector from "@/components/DevToolsDetector"
import WelcomePopup from "@/components/WelcomePopup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GjcjioopOrg",
  description: "欢迎来到GjcjioopOrg - 创新科技解决方案",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={`${inter.className} dark:bg-gray-900 dark:text-white flex flex-col min-h-screen`}>
        <DevToolsDetector />
        <TooltipProvider>
          <WelcomePopup />
          {children}
        </TooltipProvider>
      </body>
    </html>
  )
}
