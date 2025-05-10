"use client"

import posthog from "posthog-js"
import { PostHogProvider as PHProvider, usePostHog } from "posthog-js/react"
import { Suspense, useEffect, useRef } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: "/ingest",
      ui_host: "https://us.posthog.com",
      capture_pageview: false, // We capture pageviews manually
      capture_pageleave: true, // Enable pageleave capture
      debug: process.env.NODE_ENV === "development",
    })
  }, [])

  return (
    <PHProvider client={posthog}>
      <SuspendedPostHogPageView />
      {children}
    </PHProvider>
  )
}

function PostHogPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const posthog = usePostHog()
  const lastEventTime = useRef<number>(0)
  const DEBOUNCE_TIME = 1000 // 1 second

  useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname
      const search = searchParams.toString()
      if (search) {
        url += "?" + search
      }
      posthog.capture("$pageview", { "$current_url": url })
    }

    const handleBeforeUnload = () => {
      const now = Date.now()
      if (now - lastEventTime.current > DEBOUNCE_TIME) {
        lastEventTime.current = now
        posthog.capture("$pageleave", { 
          type: "website_exit",
          url: window.location.href,
          timestamp: now
        })
      }
    }

    const handleInternalNavigation = () => {
      const now = Date.now()
      if (now - lastEventTime.current > DEBOUNCE_TIME) {
        lastEventTime.current = now
        posthog.capture("$pageleave", { 
          type: "internal_navigation",
          url: window.location.href,
          timestamp: now
        })
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
      handleInternalNavigation()
    }
  }, [pathname, searchParams, posthog])

  return null
}

function SuspendedPostHogPageView() {
  return (
    <Suspense fallback={null}>
      <PostHogPageView />
    </Suspense>
  )
}