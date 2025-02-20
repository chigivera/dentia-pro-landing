import type { Metadata } from "next"
import "./globals.css"
import { Inter } from 'next/font/google'
import type React from "react"

import { ThemeProvider } from "@/components/theme-provider"
// import { Preloader } from "@/components/preloader"
const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Dentia Pro - CRM pour cabinets dentaires",
  description: "Solution de gestion avancée pour cabinets dentaires : patients, documents, paiements et rendez-vous",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'light';
                document.documentElement.classList.add(theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased bg-blue-50 dark:bg-blue-900">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen overflow-hidden">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}

