import { AuthWrapper } from "@/components/auth/auth-wrapper"
import { PremiumPromptGenerator } from "@/components/dashboard/premium-prompt-generator"
import { StatsOverview } from "@/components/dashboard/stats-overview"
import { PremiumFeatures } from "@/components/dashboard/premium-features"
import { ViralTemplates } from "@/components/dashboard/viral-templates"
import { PricingComparison } from "@/components/dashboard/pricing-comparison"

export default function DashboardPage() {
  return (
    <AuthWrapper>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background */}
        <div className="fixed inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('/images/ai-background.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`,
            }}
          />
        </div>

        <div className="relative z-10">
          {/* Header */}
          <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-white">PromptGuide</h1>
                    <p className="text-xs text-gray-400">Get Better Prompts, Faster</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 px-3 py-1 rounded-full border border-red-500/30">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                    <span className="text-red-400 text-sm font-medium">5 prompts left today</span>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                    Upgrade to Pro
                  </button>
                </div>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="xl:col-span-2 space-y-8">
                <PremiumPromptGenerator />
                <StatsOverview />
                <ViralTemplates />
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <PremiumFeatures />
                <PricingComparison />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthWrapper>
  )
}
