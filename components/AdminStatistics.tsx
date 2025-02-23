'use client'

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const data = [
  { name: '1月', 访问量: 4000, 注册用户: 2400, 活跃用户: 2400 },
  { name: '2月', 访问量: 3000, 注册用户: 1398, 活跃用户: 2210 },
  { name: '3月', 访问量: 2000, 注册用户: 9800, 活跃用户: 2290 },
  { name: '4月', 访问量: 2780, 注册用户: 3908, 活跃用户: 2000 },
  { name: '5月', 访问量: 1890, 注册用户: 4800, 活跃用户: 2181 },
  { name: '6月', 访问量: 2390, 注册用户: 3800, 活跃用户: 2500 },
]

const parallelData = [
  { name: '产品A', 销量: 80, 评分: 90, 满意度: 85, 增长率: 75 },
  { name: '产品B', 销量: 70, 评分: 85, 满意度: 80, 增长率: 80 },
  { name: '产品C', 销量: 90, 评分: 75, 满意度: 90, 增长率: 85 },
  { name: '产品D', 销量: 85, 评分: 80, 满意度: 75, 增长率: 90 },
]

export function AdminStatistics() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">数据统计</h3>
      <Tabs defaultValue="line">
        <TabsList className="mb-4">
          <TabsTrigger value="line">折线图</TabsTrigger>
          <TabsTrigger value="bar">柱状图</TabsTrigger>
          <TabsTrigger value="parallel">并行图</TabsTrigger>
        </TabsList>

        <TabsContent value="line">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="访问量" stroke="#8884d8" />
                <Line type="monotone" dataKey="注册用户" stroke="#82ca9d" />
                <Line type="monotone" dataKey="活跃用户" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>

        <TabsContent value="bar">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="访问量" fill="#8884d8" />
                <Bar dataKey="注册用户" fill="#82ca9d" />
                <Bar dataKey="活跃用户" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>

        <TabsContent value="parallel">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={parallelData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="销量" stroke="#8884d8" />
                <Line type="monotone" dataKey="评分" stroke="#82ca9d" />
                <Line type="monotone" dataKey="满意度" stroke="#ffc658" />
                <Line type="monotone" dataKey="增长率" stroke="#ff7300" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

