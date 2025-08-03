"use client"

import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function StatsSection() {
  const achievements = [
    "Perfect Prompt Structure",
    "AI Model Optimization",
    "Context Enhancement",
    "Output Formatting",
    "Performance Tracking",
    "Team Collaboration",
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="mb-20">
          <h2 className="text-5xl font-bold mb-4 text-gray-900 leading-tight">The Results Speak For Themselves</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="text-left">
            <div className="text-7xl font-bold text-gray-900 mb-4">8+</div>
            <div className="text-lg text-gray-600 font-medium">Hrs of optimization saved per project</div>
            {/* Mini Graph */}
            <div className="mt-4 h-16 bg-white rounded-lg p-3 shadow-sm">
              <div className="flex items-end justify-between h-full">
                {[40, 60, 45, 80, 70, 90, 100].map((height, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-t from-blue-400 to-blue-500 rounded-t-sm transition-all duration-500"
                    style={{ height: `${height}%`, width: "10px" }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="text-left">
            <div className="text-7xl font-bold text-gray-900 mb-4">4M+</div>
            <div className="text-lg text-gray-600 font-medium">Tokens saved per project</div>
            {/* Mini Graph */}
            <div className="mt-4 h-16 bg-white rounded-lg p-3 shadow-sm">
              <div className="flex items-end justify-between h-full">
                {[30, 50, 70, 60, 85, 75, 95].map((height, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-t from-green-400 to-green-500 rounded-t-sm transition-all duration-500"
                    style={{ height: `${height}%`, width: "10px" }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="text-left">
            <div className="text-7xl font-bold text-gray-900 mb-4">87%</div>
            <div className="text-lg text-gray-600 font-medium">less AI hallucinations</div>
            {/* Mini Graph */}
            <div className="mt-4 h-16 bg-white rounded-lg p-3 shadow-sm">
              <div className="flex items-end justify-between h-full">
                {[20, 35, 50, 65, 75, 85, 87].map((height, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-t from-purple-400 to-purple-500 rounded-t-sm transition-all duration-500"
                    style={{ height: `${height}%`, width: "10px" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Achievements list */}
          <div>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700 font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Blue gradient card with enhanced graph */}
          <div className="relative">
            {/* Enhanced Background graph */}
            <div className="absolute top-0 right-0 w-80 h-64 opacity-20">
              <svg viewBox="0 0 300 200" className="w-full h-full">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <path d="M20,160 Q60,140 100,120 T180,80 T260,40" stroke="#3B82F6" strokeWidth="4" fill="none" />
                <path d="M20,160 Q60,140 100,120 T180,80 T260,40 L260,200 L20,200 Z" fill="url(#gradient)" />
                {/* Data points */}
                {[
                  { x: 20, y: 160 },
                  { x: 60, y: 140 },
                  { x: 100, y: 120 },
                  { x: 140, y: 100 },
                  { x: 180, y: 80 },
                  { x: 220, y: 60 },
                  { x: 260, y: 40 },
                ].map((point, i) => (
                  <circle
                    key={i}
                    cx={point.x}
                    cy={point.y}
                    r="4"
                    fill="#3B82F6"
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </svg>
            </div>

            <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl p-12 text-white shadow-2xl relative z-10">
              <h3 className="text-4xl font-bold mb-6 leading-tight">
                Allowing You Automate The Creation of Perfect Prompts, Flows, And AI Interactions.
              </h3>
              <Button
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-3 shadow-lg"
              >
                Upgrade to Premium Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
