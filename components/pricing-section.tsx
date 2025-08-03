"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { selectPlan } from "@/lib/features/pricing/pricingSlice"
import { useGetPlansQuery } from "@/lib/api/promptGuideApi"

export function PricingSection() {
  const dispatch = useAppDispatch()
  const selectedPlan = useAppSelector((state) => state.pricing.selectedPlan)
  const { data: plans = [], isLoading } = useGetPlansQuery()

  const handlePlanSelect = (planId: string) => {
    dispatch(selectPlan(planId))
  }

  const getButtonText = (planId: string, planName: string) => {
    if (selectedPlan === planId) {
      return "Selected ✓"
    }
    if (planId === "free") {
      return "Get Started Free"
    }
    if (planId === "premium") {
      return "Upgrade to Premium Now"
    }
    return `Go ${planName}`
  }

  const getButtonStyle = (planId: string, popular: boolean) => {
    if (selectedPlan === planId) {
      return "bg-green-500 hover:bg-green-600 text-white"
    }
    if (popular) {
      return "bg-blue-500 hover:bg-blue-600 text-white"
    }
    return "bg-gray-900 hover:bg-gray-800 text-white"
  }

  const getCardStyle = (planId: string, popular: boolean) => {
    if (selectedPlan === planId) {
      return "border-2 border-green-500 shadow-xl hover:shadow-2xl bg-green-50"
    }
    if (popular) {
      return "border-2 border-blue-500 shadow-xl hover:shadow-2xl"
    }
    return "border-gray-200 hover:shadow-lg"
  }

  if (isLoading) {
    return (
      <section id="pricing" className="py-24 bg-white">
        <div className="container">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading pricing plans...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-gray-900">Flexible Pricing Plans to Match Your Needs</h2>
          <p className="text-xl text-gray-600">Choose the perfect plan for your prompt optimization needs</p>
          {selectedPlan && (
            <div className="mt-4 inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <Check className="w-4 h-4 mr-2" />
              Plan selected: {plans.find((p) => p.id === selectedPlan)?.name}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative transition-all duration-300 cursor-pointer ${getCardStyle(plan.id, plan.popular || false)}`}
              onClick={() => handlePlanSelect(plan.id)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Best Value
                  </span>
                </div>
              )}

              {selectedPlan === plan.id && (
                <div className="absolute -top-4 right-4 z-10">
                  <div className="bg-green-500 text-white p-2 rounded-full shadow-lg">
                    <Check className="w-4 h-4" />
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <div className="mt-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-2 text-lg">{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <div className="mt-2">
                      <span className="text-xl text-gray-400 line-through">${plan.originalPrice}/month</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-600 mt-4 text-base">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0 px-6 pb-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-base">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                      )}
                      <span className={`${feature.included ? "text-gray-700" : "text-gray-400"}`}>{feature.name}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-3 text-base font-semibold ${getButtonStyle(plan.id, plan.popular || false)} shadow-lg hover:shadow-xl transition-all`}
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePlanSelect(plan.id)
                  }}
                >
                  {getButtonText(plan.id, plan.name)}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedPlan && (
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 max-w-2xl mx-auto border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to get started?</h3>
              <p className="text-gray-600 mb-6">
                You've selected the <strong>{plans.find((p) => p.id === selectedPlan)?.name}</strong> plan. Click below
                to continue with your subscription.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-3 font-semibold"
              >
                Continue with {plans.find((p) => p.id === selectedPlan)?.name}
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
