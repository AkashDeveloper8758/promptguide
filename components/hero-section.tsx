"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Sparkles, Zap, Target, Brain, Wand2, Copy, Check, RefreshCw } from "lucide-react"
import { SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs"
import Link from "next/link"

export function HeroSection() {
  const [inputText, setInputText] = useState("")
  const [generatedPrompt, setGeneratedPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleGenerate = async () => {
    if (!inputText.trim()) return

    setIsGenerating(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const enhanced = `You are an expert ${inputText.toLowerCase()} specialist with 10+ years of experience. Your task is to provide comprehensive, actionable advice that delivers measurable results.

Context: The user is seeking professional guidance on ${inputText.toLowerCase()} and expects detailed, practical solutions.

Requirements:
- Provide step-by-step instructions
- Include specific examples and case studies
- Explain the reasoning behind each recommendation
- Anticipate potential challenges and offer solutions
- Use industry best practices and current trends

Format your response with clear headings, bullet points, and actionable takeaways. Ensure your advice is immediately implementable and results-oriented.`

    setGeneratedPrompt(enhanced)
    setIsGenerating(false)
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generatedPrompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                <Sparkles className="w-3 h-3 mr-1" />
                AI-Powered
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                <Zap className="w-3 h-3 mr-1" />
                Instant Results
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Ideas{" "}
              </span>
              Into Perfect
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                Prompts
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Stop struggling with prompt engineering. Our AI-powered platform transforms your raw ideas into optimized,
              production-ready prompts that deliver exceptional results every time.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
                <Target className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-gray-700">10x Better Results</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
                <Brain className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-medium text-gray-700">AI-Optimized</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
                <Wand2 className="w-4 h-4 text-pink-500" />
                <span className="text-sm font-medium text-gray-700">Instant Generation</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <SignedOut>
                <SignUpButton mode="modal">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Start Generating Prompts
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
                className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 bg-transparent"
              >
                View Pricing
              </Button>
            </div>

            <p className="text-sm text-gray-500">
              ✨ No credit card required • 🚀 Start free forever • 💡 Upgrade anytime
            </p>
          </div>

          {/* Right Column - Interactive Demo */}
          <div className="relative">
            <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Try It Now - Free Demo</h3>
                  <Badge className="bg-green-100 text-green-700">Live Demo</Badge>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What do you want to create a prompt for?
                    </label>
                    <Input
                      placeholder="e.g., social media marketing, content writing, data analysis..."
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <Button
                    onClick={handleGenerate}
                    disabled={!inputText.trim() || isGenerating}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Generating Perfect Prompt...
                      </>
                    ) : (
                      <>
                        <Wand2 className="w-4 h-4 mr-2" />
                        Generate Optimized Prompt
                      </>
                    )}
                  </Button>

                  {generatedPrompt && (
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-medium text-gray-700">Your Optimized Prompt:</label>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={copyToClipboard}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                      <Textarea value={generatedPrompt} readOnly className="w-full h-32 text-sm bg-white" />
                      <p className="text-xs text-gray-500 mt-2">
                        ✨ This is just a preview. Sign up for advanced features and unlimited generations!
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
