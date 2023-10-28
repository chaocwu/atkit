export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "ATKit 自动化测试小助手",
  description: "Automation Tools.",
  mainNav: [
    {
      title: "执行看板",
      href: "/",
    },
    {
      title: "任务管理",
      href: "/task",
    },
    {
      title: "脚本模板",
      href: "/template",
    },
    {
      title: "接口更新",
      href: "/task",
    },
  ],
  links: {
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
