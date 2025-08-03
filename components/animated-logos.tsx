"use client"

import { useEffect, useState } from "react"

const aiPlatforms = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "GPT-4",
  "Lovable",
  "Bolt",
  "Vercel",
  "Replit",
  "GitHub Copilot",
  "Cursor",
]

export function AnimatedLogos() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aiPlatforms.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center space-x-8 h-16">
      {aiPlatforms.map((platform, index) => {
        const isActive = index === currentIndex
        const isNext = index === (currentIndex + 1) % aiPlatforms.length
        const isPrev = index === (currentIndex - 1 + aiPlatforms.length) % aiPlatforms.length

        let opacity = "opacity-20"
        let scale = "scale-75"

        if (isActive) {
          opacity = "opacity-100"
          scale = "scale-100"
        } else if (isNext || isPrev) {
          opacity = "opacity-60"
          scale = "scale-90"
        }

        return (
          <div
            key={platform}
            className={`text-2xl font-bold transition-all duration-500 ${opacity} ${scale} transform`}
          >
            {platform}
          </div>
        )
      })}
    </div>
  )
}
