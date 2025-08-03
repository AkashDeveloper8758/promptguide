"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react"
import { SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs"
import Link from "next/link"

export function CTASection() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-white font-medium">Ready to Transform Your Prompts?</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          Join 50,000+ Users Creating
          <br />
          <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            Perfect Prompts Daily
          </span>
        </h2>

        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Stop wasting time on trial and error. Start generating professional-grade prompts that deliver exceptional
          results from day one.
        </p>

        {/* Feature highlights */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
          <div className="flex items-center space-x-2 text-white/90">
            <Zap className="w-5 h-5 text-yellow-300" />
            <span className="font-medium">Instant Generation</span>
          </div>
          <div className="flex items-center space-x-2 text-white/90">
            <Target className="w-5 h-5 text-green-300" />
            <span className="font-medium">10x Better Results</span>
          </div>
          <div className="flex items-center space-x-2 text-white/90">
            <Sparkles className="w-5 h-5 text-purple-300" />
            <span className="font-medium">AI-Optimized</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <SignedOut>
            <SignUpButton mode="modal">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                Start Free Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                Go to Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </SignedIn>

          <Button
            variant="outline"
            size="lg"
            onClick={scrollToPricing}
            className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 bg-transparent"
          >
            View Pricing
          </Button>
        </div>

        <p className="text-white/70 text-sm mt-6">
          🎉 No credit card required • ⚡ Setup in 30 seconds • 🔒 Cancel anytime
        </p>
      </div>
    </section>
  )
}
