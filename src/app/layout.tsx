import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
// import { motion } from "framer-motion"

import { ThemeProvider } from "@/components/theme-provider";
import { FloatingPaths } from "@/components/floating-paths";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dentia Pro - CRM pour dentistes",
  description: "Solution de gestion de cabinet dentaire nouvelle génération",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="fr" 
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
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
      <body className="antialiased bg-white dark:bg-slate-950">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
     

      
       

          <div
            className="relative overflow-hidden transition-shadow duration-300 shadow-lg group "
            >
            {/*  bg-gradient-to-b from-black/10 to-white/10 dark:from-white/10 dark:to-black/10 rounded-2xl backdrop-blur-lg hover:shadow-xl */}
             <div className="absolute inset-0">
        <FloatingPaths position={-1} />
     

      </div>
          {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}