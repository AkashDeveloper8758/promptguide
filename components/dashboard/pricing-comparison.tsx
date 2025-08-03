"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X, Crown, Star } from "lucide-react"

export function PricingComparison() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)

  const plans = [
    {
      id: "free",
      name: "Free",
      price: "$0",
      period: "/month",
      badge: null,
      features: [
        { name: "5 prompts per day", included: true },
        { name: "Basic optimization", included: true },
        { name: "ChatGPT access", included: true },
        { name: "Email support", included: true },
        { name: "GPT-4 & Claude 3.5", included: false },
        { name: "Viral templates", included: false },
        { name: "Unlimited prompts", included: false },
        { name: "Advanced analytics", included: false },
      ],
      cta: "Current Plan",
      ctaStyle: "bg-gray-600 text-white cursor-not-allowed",
    },
    {
      id: "premium",
      name: "Premium",
      price: "$19",
      originalPrice: "$39",
      period: "/month",
      badge: "Most Popular",
      features: [
        { name: "Unlimited prompts", included: true },
        { name: "Advanced optimization", included: true },
        { name: "All AI models", included: true },
        { name: "Priority support", included: true },
        { name: "GPT-4 & Claude 3.5", included: true },
        { name: "50+ viral templates", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Team collaboration", included: false },
      ],
      cta: "Upgrade Now",
      ctaStyle: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",
    },
    {
      id: "premium-plus",
      name: "Premium Plus",
      price: "$39",
      originalPrice: "$79",
      period: "/month",
      badge: "Best Value",
      features: [
        { name: "Everything in Premium", included: true },
        { name: "Team collaboration", included: true },
        { name: "Custom templates", included: true },
        { name: "API access", included: true },
        { name: "White-label option", included: true },
        { name: "Dedicated support", included: true },
        { name: "Custom integrations", included: true },
        { name: "Advanced reporting", included: true },
      ],
      cta: "Go Premium Plus",
      ctaStyle:
        "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold",
    },
  ]

  return (
    <Card className="bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
      <div className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white mb-2">Choose Your Plan</h3>
          <p className="text-gray-400 text-sm">Upgrade anytime, cancel anytime</p>
        </div>

        <div className="space-y-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                hoveredPlan === plan.id
                  ? "border-blue-500/50 bg-blue-500/10 scale-105 shadow-lg"
                  : plan.id === "premium"
                    ? "border-blue-500/30 bg-blue-500/5"
                    : "border-white/10 bg-white/5"
              }`}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.badge && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      plan.badge === "Most Popular"
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                        : "bg-gradient-to-r from-yellow-500 to-orange-500 text-black"
                    }`}
                  >
                    {plan.badge === "Most Popular" && <Star className="w-3 h-3 inline mr-1" />}
                    {plan.badge === "Best Value" && <Crown className="w-3 h-3 inline mr-1" />}
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="text-center mb-4">
                <h4 className="text-white font-bold text-lg">{plan.name}</h4>
                <div className="flex items-baseline justify-center mt-2">
                  <span className="text-2xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
                {plan.originalPrice && <p className="text-gray-400 line-through text-sm">{plan.originalPrice}/month</p>}
              </div>

              <div className="space-y-2 mb-4">
                {plan.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${feature.included ? "text-white" : "text-gray-500"}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}

                {hoveredPlan === plan.id && plan.features.length > 4 && (
                  <div className="space-y-2 mt-2 pt-2 border-t border-white/10">
                    {plan.features.slice(4).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        {feature.included ? (
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? "text-white" : "text-gray-500"}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Button className={`w-full py-2 font-semibold transition-all duration-300 ${plan.ctaStyle}`}>
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-xs">All plans include 30-day money-back guarantee</p>
        </div>
      </div>
    </Card>
  )
}
