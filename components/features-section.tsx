import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Target, Sparkles, Users, BarChart3, Shield } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Generate optimized prompts in seconds, not hours. Our AI understands context and delivers results instantly.",
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description:
        "Tailored prompts for specific AI models. Each prompt is optimized for ChatGPT, Claude, or Gemini's unique strengths.",
    },
    {
      icon: Sparkles,
      title: "Smart Enhancement",
      description:
        "Transform vague ideas into structured, professional prompts with proper context and clear objectives.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Share prompts with your team, create templates, and maintain consistency across all your AI interactions.",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track your prompt performance, see what works best, and continuously improve your AI results.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Your data is encrypted and secure. We never store your sensitive information or share it with third parties.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose PromptCraft?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to create perfect AI prompts and get better results from your AI interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
