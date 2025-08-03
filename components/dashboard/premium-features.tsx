"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Crown, Target, TrendingUp, Sparkles } from "lucide-react"

export function PremiumFeatures() {
  const features = [
    {
      icon: Crown,
      title: "GPT-4 & Claude 3.5",
      description: "Access to the most advanced AI models",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Sparkles,
      title: "Unlimited Prompts",
      description: "Generate as many prompts as you need",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Target,
      title: "Industry Templates",
      description: "50+ templates for every niche",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Track performance & ROI",
      color: "from-pink-500 to-rose-500",
    },
  ]

  return (
    <Card className="bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl sticky top-8">
      <div className="p-6">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Crown className="w-8 h-8 text-black" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Unlock Premium Power</h3>
          <p className="text-gray-400 text-sm">Join 10,000+ creators getting 10x better results</p>
        </div>

        <div className="space-y-4 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10">
              <div
                className={`w-10 h-10 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center`}
              >
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-semibold text-sm">{feature.title}</h4>
                <p className="text-gray-400 text-xs">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-4 border border-yellow-500/20 mb-6">
          <div className="text-center">
            <p className="text-yellow-400 font-bold text-lg">Limited Time: 50% OFF</p>
            <p className="text-gray-300 text-sm">Upgrade now and save $120/year</p>
          </div>
        </div>

        <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
          Upgrade to Premium
        </Button>

        <p className="text-center text-gray-400 text-xs mt-3">30-day money-back guarantee</p>
      </div>
    </Card>
  )
}
