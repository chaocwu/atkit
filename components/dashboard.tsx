"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "采销管理",
    用例数: Math.floor(Math.random() * 100),
  },
  {
    name: "仓库管理",
    用例数: Math.floor(Math.random() * 100),
  },
  {
    name: "结算管理",
    用例数: Math.floor(Math.random() * 100),
  },
  {
    name: "收付管理",
    用例数: Math.floor(Math.random() * 100),
  },
  {
    name: "发票管理",
    用例数: Math.floor(Math.random() * 100),
  },
  {
    name: "项目管理",
    用例数: Math.floor(Math.random() * 100),
  },
  {
    name: "基础数据",
    用例数: Math.floor(Math.random() * 100),
  },
]

export function Dashboard() {
  return (
    <ResponsiveContainer width="100%" className="xl:min-h-[440px] 2xl:min-h-[490px]">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          allowDataOverflow
          dataKey="name"
          fontSize={10}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip />
        <Bar type="monotone" dataKey="用例数" stroke="#adfa1d" fill="#adfa1d" />
      </BarChart>
    </ResponsiveContainer>
  )
}
