import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Target, Zap, Users } from "lucide-react"

export function ValuePropositionSection() {
  const capabilities = [
    { name: "Content Creation", icon: Sparkles, color: "text-purple-500" },
    { name: "Code Generation", icon: Zap, color: "text-green-500" },
    { name: "Data Analysis", icon: Target, color: "text-blue-500" },
    { name: "Team Collaboration", icon: Users, color: "text-orange-500" },
  ]

  return (
    <section className="py-32 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-lg font-semibold text-blue-600 mb-4">Why PromptCraft?</p>
        </div>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-20 text-gray-900 leading-tight max-w-6xl mx-auto">
          Give Your AI Models a Clear Blueprint with{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            PromptCraft
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          {/* Left side - Blue gradient card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl">
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                You Can Optimize Anything With AI. From Content Creation to Code Generation, And Even Data Analysis
              </h3>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 shadow-xl hover:shadow-2xl transition-all rounded-xl"
              >
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right side - Capabilities list */}
          <div className="space-y-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="flex items-center space-x-6 p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 group cursor-pointer"
              >
                <div
                  className={`p-4 rounded-2xl bg-gray-100 group-hover:bg-white transition-colors ${capability.color}`}
                >
                  <capability.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {capability.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
