"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Zap, DollarSign, Clock, Award } from "lucide-react"

export function StatsOverview() {
  const stats = [
    {
      label: "Prompts Generated",
      value: "127",
      change: "+23%",
      trend: "up",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Quality Score Avg",
      value: "94%",
      change: "+12%",
      trend: "up",
      icon: Award,
      color: "from-green-500 to-emerald-500",
    },
    {
      label: "Time Saved",
      value: "18.5h",
      change: "+31%",
      trend: "up",
      icon: Clock,
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Cost Savings",
      value: "$2,340",
      change: "+45%",
      trend: "up",
      icon: DollarSign,
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <Card className="bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white">Your Performance</h3>
            <p className="text-gray-400">Track your prompt optimization success</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">This Month</p>
            <p className="text-2xl font-bold text-green-400">+67% Growth</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center space-x-1 text-green-400 text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  <span>{stat.change}</span>
                </div>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Chart Placeholder */}
        <div className="mt-8 bg-white/5 rounded-xl p-6 border border-white/10">
          <h4 className="text-white font-semibold mb-4">Prompt Quality Over Time</h4>
          <div className="h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-end justify-between p-4">
            {[65, 72, 68, 85, 91, 94, 97].map((height, index) => (
              <div
                key={index}
                className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-sm transition-all duration-500 hover:from-blue-400 hover:to-purple-400"
                style={{ height: `${height}%`, width: "12%" }}
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
