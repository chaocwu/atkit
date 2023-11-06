"use client"
import { Dashboard } from "@/components/dashboard"
import Trending from "@/components/trending"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ListTodo, MonitorCheck, Repeat, Hourglass } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const flaky = [
  {
    invoice: "001",
    paymentStatus: "片状测试是表现出间歇性或偶发性故障的测试",
    totalAmount: "11",
    paymentMethod: "chaocwu",
  },
  {
    invoice: "002",
    paymentStatus: "使用持续集成 （CI） 服务器时，片状测试特别麻烦",
    totalAmount: "8",
    paymentMethod: "chaocwu",
  },
  {
    invoice: "003",
    paymentStatus: "开发人员可能会对测试结果产生不信任",
    totalAmount: "7",
    paymentMethod: "chaocwu",
  },
  {
    invoice: "001",
    paymentStatus: "片状测试是表现出间歇性或偶发性故障的测试",
    totalAmount: "11",
    paymentMethod: "chaocwu",
  },
  {
    invoice: "002",
    paymentStatus: "使用持续集成 （CI） 服务器时，片状测试特别麻烦",
    totalAmount: "8",
    paymentMethod: "chaocwu",
  },
  {
    invoice: "003",
    paymentStatus: "开发人员可能会对测试结果产生不信任",
    totalAmount: "7",
    paymentMethod: "chaocwu",
  },
  {
    invoice: "001",
    paymentStatus: "片状测试是表现出间歇性或偶发性故障的测试",
    totalAmount: "11",
    paymentMethod: "chaocwu",
  },
  {
    invoice: "002",
    paymentStatus: "使用持续集成 （CI） 服务器时，片状测试特别麻烦",
    totalAmount: "8",
    paymentMethod: "chaocwu",
  },
  {
    invoice: "003",
    paymentStatus: "开发人员可能会对测试结果产生不信任",
    totalAmount: "7",
    paymentMethod: "chaocwu",
  },
  {
    invoice: "001",
    paymentStatus: "片状测试是表现出间歇性或偶发性故障的测试",
    totalAmount: "11",
    paymentMethod: "chaocwu",
  },
]

const duration = [
  {
    invoice: "001",
    paymentStatus: "片状测试表明测试依赖于某些未得到适当控制的系统状态",
    totalAmount: "11",
    paymentMethod: "chaocwu",
  },
  {
    invoice: "002",
    paymentStatus: "过于严格的断言可能会导致浮点比较问题以及计时问题",
    totalAmount: "8",
    paymentMethod: "chaocwu",
  },
  {
    invoice: "003",
    paymentStatus: "也许另一个测试无法自行清理并留下数据",
    totalAmount: "7",
    paymentMethod: "chaocwu",
  },
  {
    invoice: "001",
    paymentStatus: "片状测试表明测试依赖于某些未得到适当控制的系统状态",
    totalAmount: "11",
    paymentMethod: "chaocwu",
  },
  {
    invoice: "002",
    paymentStatus: "过于严格的断言可能会导致浮点比较问题以及计时问题",
    totalAmount: "8",
    paymentMethod: "chaocwu",
  },
  {
    invoice: "003",
    paymentStatus: "也许另一个测试无法自行清理并留下数据",
    totalAmount: "7",
    paymentMethod: "chaocwu",
  },
  {
    invoice: "001",
    paymentStatus: "片状测试表明测试依赖于某些未得到适当控制的系统状态",
    totalAmount: "11",
    paymentMethod: "chaocwu",
  },
  {
    invoice: "002",
    paymentStatus: "过于严格的断言可能会导致浮点比较问题以及计时问题",
    totalAmount: "8",
    paymentMethod: "chaocwu",
  },
  {
    invoice: "003",
    paymentStatus: "也许另一个测试无法自行清理并留下数据",
    totalAmount: "7",
    paymentMethod: "chaocwu",
  },
  {
    invoice: "001",
    paymentStatus: "片状测试表明测试依赖于某些未得到适当控制的系统状态",
    totalAmount: "11",
    paymentMethod: "chaocwu",
  }
]



export default function IndexPage() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 pt-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              本次用例覆盖率
            </CardTitle>
            <MonitorCheck className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">80.00%</div>
            <p className="text-xs text-muted-foreground pt-2">
              平均覆盖率: 80.00%
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              本周提交缺陷
            </CardTitle>
            <ListTodo className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4个</div>
            <p className="text-xs text-muted-foreground pt-2">
              累计提交缺陷: 123个
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              本次校验接口数
            </CardTitle>
            <Repeat className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245个</div>
            <p className="text-xs text-muted-foreground pt-2">
              累计校验接口数: 1457个
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              本次任务耗时
            </CardTitle>
            <Hourglass className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15min</div>
            <p className="text-xs text-muted-foreground pt-2">
              平均任务耗时: 12min
            </p>
          </CardContent>
        </Card>
        <Card className="col-span-2">
          <Tabs defaultValue="trending">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0">
              <TabsList>
                <TabsTrigger value="trending">趋势</TabsTrigger>
                <TabsTrigger value="dashboard">分布</TabsTrigger>
              </TabsList>
            </CardHeader>
            <TabsContent value="trending">
              <CardContent className="pb-0">
                <Trending />
              </CardContent>
            </TabsContent>
            <TabsContent value="dashboard">
              <CardContent className="pb-0">
                <Dashboard />
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>
        <Card className="col-span-2">
          <Tabs defaultValue="flaky">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0">
              <TabsList>
                <TabsTrigger value="flaky">片状</TabsTrigger>
                <TabsTrigger value="duration">耗时</TabsTrigger>
              </TabsList>
            </CardHeader>
            <TabsContent value="flaky">
              <CardContent className="pb-0">
                <Table>
                  <TableHeader>
                    {/* <TableRow>
                      <TableHead>序号</TableHead>
                      <TableHead>用例</TableHead>
                      <TableHead>失败</TableHead>
                      <TableHead className="text-right">作者</TableHead>
                    </TableRow> */}
                  </TableHeader>
                  <TableBody>
                    {flaky.map((invoice) => (
                      <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.totalAmount}</TableCell>
                        <TableCell className="text-right">{invoice.paymentMethod}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </TabsContent>
            <TabsContent value="duration">
              <CardContent className="pb-0">
                <Table>
                  {/* <TableHeader>
                    <TableRow>
                      <TableHead>序号</TableHead>
                      <TableHead>用例</TableHead>
                      <TableHead>耗时</TableHead>
                      <TableHead className="text-right">作者</TableHead>
                    </TableRow>
                  </TableHeader> */}
                  <TableBody>
                    {duration.map((duration) => (
                      <TableRow key={duration.invoice}>
                        <TableCell className="font-medium">{duration.invoice}</TableCell>
                        <TableCell>{duration.paymentStatus}</TableCell>
                        <TableCell>{duration.totalAmount}</TableCell>
                        <TableCell className="text-right">{duration.paymentMethod}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}
