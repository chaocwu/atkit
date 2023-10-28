import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { Bird } from "lucide-react"
import ProjectSwitcher from "./project-switcher"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 xl:gap-6 2xl:gap-6">
      <ProjectSwitcher />
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-semibold transition-colors hover:text-foreground/80 text-foreground/40",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
