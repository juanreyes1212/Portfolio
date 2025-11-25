"use client"

import { useEffect } from "react"

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== "production") return

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === "navigation") {
          const navigationEntry = entry as PerformanceNavigationTiming
          console.log("Navigation timing:", {
            domContentLoaded: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
            loadComplete: navigationEntry.loadEventEnd - navigationEntry.loadEventStart,
            firstByte: navigationEntry.responseStart - navigationEntry.requestStart,
          })
        }

        if (entry.entryType === "paint") {
          console.log(`${entry.name}: ${entry.startTime}ms`)
        }

        if (entry.entryType === "largest-contentful-paint") {
          console.log(`LCP: ${entry.startTime}ms`)
        }

        if (entry.entryType === "first-input") {
          const fidEntry = entry as PerformanceEventTiming
          console.log(`FID: ${fidEntry.processingStart - fidEntry.startTime}ms`)
        }

        if (entry.entryType === "layout-shift") {
          const clsEntry = entry as any
          if (!clsEntry.hadRecentInput) {
            console.log(`CLS: ${clsEntry.value}`)
          }
        }
      }
    })

    // Observe different entry types
    try {
      observer.observe({ entryTypes: ["navigation", "paint"] })
      observer.observe({ entryTypes: ["largest-contentful-paint"] })
      observer.observe({ entryTypes: ["first-input"] })
      observer.observe({ entryTypes: ["layout-shift"] })
    } catch (e) {
      // Some browsers might not support all entry types
      console.warn("Performance observer error:", e)
    }

    return () => observer.disconnect()
  }, [])

  return null
}
