import { LayoutDashboard, FileText, Settings, LogOut } from 'lucide-react'
import { motion } from 'framer-motion'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'

interface AdminSidebarProps {
  activeCategory: string
  setActiveCategory: (category: string) => void
  handleLogout: () => void
}

export default function AdminSidebar({
  activeCategory,
  setActiveCategory,
  handleLogout
}: AdminSidebarProps) {
  const menuItems = [
    { icon: LayoutDashboard, label: '控制面板', value: 'dashboard' },
    { icon: FileText, label: '内容管理', value: 'content' },
    { icon: Settings, label: '系统设置', value: 'settings' },
  ]

  return (
    <Sidebar className="w-64 border-r border-gray-200 bg-white">
      <SidebarHeader>
        <motion.div 
          className="flex items-center p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xl">
            G
          </div>
          <div className="ml-3">
            <h2 className="font-semibold text-gray-900">管理后台</h2>
            <p className="text-sm text-gray-500">GjcjioopOrg</p>
          </div>
        </motion.div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-2">
            功能菜单
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.value}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => setActiveCategory(item.value)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                        activeCategory === item.value
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center">
                        <item.icon className={`w-5 h-5 mr-3 ${
                          activeCategory === item.value
                            ? 'text-blue-600'
                            : 'text-gray-400'
                        }`} />
                        {item.label}
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <motion.div 
        className="mt-auto p-4 border-t border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <button
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
        >
          <LogOut className="w-5 h-5 mr-3 text-gray-400" />
          退出登录
        </button>
      </motion.div>
    </Sidebar>
  )
}

