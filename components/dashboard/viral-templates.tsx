"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Crown, Lock, TrendingUp, Users, Zap, Target } from "lucide-react"

export function ViralTemplates() {
  const templates = [
    {
      title: "Viral LinkedIn Post",
      description: "Generate posts that get 10x more engagement",
      uses: "2.3k uses",
      premium: true,
      icon: TrendingUp,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Email Subject Lines",
      description: "50%+ open rate email subjects",
      uses: "1.8k uses",
      premium: false,
      icon: Target,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "YouTube Thumbnails",
      description: "Click-worthy thumbnail descriptions",
      uses: "3.1k uses",
      premium: true,
      icon: Users,
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Sales Copy",
      description: "High-converting sales pages",
      uses: "4.2k uses",
      premium: true,
      icon: Zap,
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <Card className="bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white">Viral Templates</h3>
            <p className="text-gray-400">Pre-built prompts that guarantee results</p>
          </div>
          <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-3 py-1 rounded-full border border-yellow-500/30">
            <Crown className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">Premium Feature</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {templates.map((template, index) => (
            <div
              key={index}
              className={`relative bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group ${
                template.premium ? "hover:border-yellow-500/50" : ""
              }`}
            >
              {template.premium && (
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-1">
                    <Crown className="w-4 h-4 text-black" />
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-4 mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${template.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <template.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-lg">{template.title}</h4>
                  <p className="text-gray-400 text-sm">{template.description}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">{template.uses}</span>
                <Button
                  size="sm"
                  className={
                    template.premium
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  }
                  disabled={template.premium}
                >
                  {template.premium ? (
                    <div className="flex items-center">
                      <Lock className="w-4 h-4 mr-2" />
                      Upgrade to Use
                    </div>
                  ) : (
                    "Use Template"
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Premium CTA */}
        <div className="mt-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/20">
          <div className="text-center">
            <Crown className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h4 className="text-2xl font-bold text-white mb-2">Unlock All Viral Templates</h4>
            <p className="text-gray-300 mb-6">Get access to 50+ proven templates that generate millions of views</p>
            <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold px-8 py-3 text-lg">
              Upgrade to Premium
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
