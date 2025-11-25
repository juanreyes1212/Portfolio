import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ErrorBoundary } from "@/components/error-boundary"
import { PerformanceMonitor } from "@/components/performance-monitor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Juan Reyes - Senior Frontend Developer",
    template: "%s | Juan Reyes",
  },
  description:
    "Senior Frontend Developer with 7+ years of experience building accessible, scalable web applications. Expert in React, Vue.js, and modern frontend technologies.",
  keywords: [
    "Juan Reyes",
    "Frontend Developer",
    "Software Engineer",
    "React.js",
    "Vue.js",
    "Next.js",
    "TypeScript",
    "Web Development",
    "PetSmart",
    "Tempe",
    "Mesa",
    "Phoenix",
    "Arizona",
  ],
  authors: [{ name: "Juan Reyes", url: "https://juanreyes.dev" }],
  creator: "Juan Reyes",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://juanreyes.dev",
    title: "Juan Reyes - Senior Frontend Developer",
    description:
      "Senior Frontend Developer with 7+ years of experience building accessible, scalable web applications.",
    siteName: "Juan Reyes Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Juan Reyes - Senior Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Reyes - Senior Frontend Developer",
    description:
      "Senior Frontend Developer with 7+ years of experience building accessible, scalable web applications.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    // generator: 'v0.dev' //TODO rm if not needing generator content
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#d97706" />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="relative flex min-h-screen flex-col">
              <Navigation />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <ScrollToTop />
            <PerformanceMonitor />
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
