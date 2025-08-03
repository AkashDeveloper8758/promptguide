"use client"

import { useEffect, useRef } from "react"

const aiPlatforms = [
  {
    name: "bolt",
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" />
      </svg>
    ),
    color: "text-gray-900",
  },
  {
    name: "replit",
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="4" fill="currentColor" />
        <rect x="7" y="7" width="10" height="10" rx="2" fill="white" />
      </svg>
    ),
    color: "text-orange-500",
  },
  {
    name: "Claude",
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          fill="currentColor"
        />
      </svg>
    ),
    color: "text-orange-500",
  },
  {
    name: "GitHub Copilot",
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    color: "text-gray-800",
  },
  {
    name: "lovable",
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="currentColor"
        />
      </svg>
    ),
    color: "text-cyan-500",
  },
  {
    name: "V0",
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L22 20H2L12 2z" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    ),
    color: "text-gray-900",
  },
  {
    name: "ChatGPT",
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    color: "text-green-600",
  },
]

export function InfiniteScrollLogos() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scrollSpeed = 0.8

    const scroll = () => {
      scrollPosition += scrollSpeed
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
    }

    const intervalId = setInterval(scroll, 16)
    return () => clearInterval(intervalId)
  }, [])

  const duplicatedPlatforms = [...aiPlatforms, ...aiPlatforms]

  return (
    <div className="w-full overflow-hidden bg-white py-8 border-y border-gray-100">
      <div
        ref={scrollRef}
        className="flex space-x-20 overflow-hidden"
        style={{ scrollBehavior: "auto", width: "fit-content" }}
      >
        {duplicatedPlatforms.map((platform, index) => (
          <div
            key={`${platform.name}-${index}`}
            className="flex items-center space-x-4 whitespace-nowrap flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity group"
          >
            <div className={`${platform.color} group-hover:scale-110 transition-transform`}>{platform.logo}</div>
            <span className={`text-2xl font-bold ${platform.color}`}>{platform.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
