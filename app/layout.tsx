import "@/styles/globals.css"
import { Metadata } from "next"
import { Inter, Roboto_Mono } from 'next/font/google'
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`} suppressHydrationWarning>
        <head />
        <body className={cn("min-h-screen bg-background font-sans antialiased")}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1 container mx-auto">{children}</div>
              <Toaster />
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
