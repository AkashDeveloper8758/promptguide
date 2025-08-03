import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Crown, Sparkles, Target, TrendingUp, Users, Zap, ArrowRight } from "lucide-react"

export function PremiumPowerSection() {
  const features = [
    {
      icon: Crown,
      title: "GPT-4 & Claude 3.5 Access",
      description: "Use the most advanced AI models for superior prompt optimization",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Sparkles,
      title: "Unlimited Prompts",
      description: "Generate as many optimized prompts as you need, no daily limits",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Target,
      title: "50+ Industry Templates",
      description: "Pre-built templates for marketing, sales, content, and more",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Track performance, ROI, and optimization success rates",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share prompts, templates, and insights with your team",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Zap,
      title: "Priority Support",
      description: "Get help from our prompt engineering experts within 2 hours",
      color: "bg-orange-100 text-orange-600",
    },
  ]

  const stats = [
    { number: "10,000+", label: "Active Premium Users" },
    { number: "500%", label: "Average ROI Increase" },
    { number: "2.3M", label: "Prompts Generated" },
    { number: "98%", label: "Customer Satisfaction" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold mb-6">
            <Crown className="w-4 h-4 mr-2" />
            Premium Features
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Unlock Premium Power</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of professionals who've transformed their AI workflow with premium features
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-3`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Premium CTA Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>
            <Card className="relative border-0 shadow-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="p-12">
                <div className="text-center">
                  <Crown className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
                  <h3 className="text-3xl font-bold mb-4">Ready to 10x Your Results?</h3>
                  <p className="text-xl opacity-90 mb-8">
                    Join 10,000+ professionals getting better AI results with premium features
                  </p>

                  <div className="bg-white/10 rounded-xl p-6 mb-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">Limited Time</div>
                      <div className="text-2xl font-semibold text-yellow-300">50% OFF First Year</div>
                      <div className="text-sm opacity-75 mt-2">Save $240 - Offer ends soon!</div>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Upgrade to Premium
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-sm opacity-75 mt-4">30-day money-back guarantee</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
