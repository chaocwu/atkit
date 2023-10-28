import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"

export const labels = [
  {
    value: "hands",
    label: "手动",
  },
  {
    value: "auto",
    label: "自动",
  },
  {
    value: "all",
    label: "全量",
  },
]

export const statuses = [
  {
    value: "todo",
    label: "未开始",
    icon: CircleIcon,
  },
  {
    value: "progress",
    label: "执行中",
    icon: StopwatchIcon,
  },
  {
    value: "done",
    label: "已完成",
    icon: CheckCircledIcon,
  }
]

export const priorities = [
  {
    label: "低",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "中",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "高",
    value: "high",
    icon: ArrowUpIcon,
  },
]
