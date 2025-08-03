"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, Sparkles, ArrowRight, Zap, Target, Lightbulb } from "lucide-react"
import { SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs"

export function HeroSection() {
  const [topic, setTopic] = useState("")
  const [platform, setPlatform] = useState("")
  const [tone, setTone] = useState("")
  const [generatedPrompt, setGeneratedPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const generatePrompt = async () => {
    if (!topic.trim()) return

    setIsGenerating(true)

    // Simulate API call
    setTimeout(() => {
      const prompts = {
        chatgpt: `Act as an expert ${tone || "professional"} assistant. I need you to help me with ${topic}. Please provide detailed, actionable advice that is practical and easy to implement. Structure your response with clear headings and bullet points where appropriate.`,
        claude: `I'm working on ${topic} and need ${tone || "professional"} guidance. Please analyze this topic comprehensively and provide insights that are both thorough and practical. Include relevant examples and consider potential challenges I might face.`,
        gemini: `Help me understand and work with ${topic}. I'm looking for a ${tone || "professional"} approach that covers the key aspects, practical applications, and actionable next steps. Please be specific and include examples where helpful.`,
        midjourney: `Create a ${tone || "professional"} visual representation of ${topic}, highly detailed, premium quality, trending on artstation, 8k resolution, cinematic lighting`,
        default: `Please provide comprehensive guidance on ${topic} with a ${tone || "professional"} tone. Include practical steps, key considerations, and actionable advice.`,
      }

      setGeneratedPrompt(prompts[platform as keyof typeof prompts] || prompts.default)
      setIsGenerating(false)
    }, 1500)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt)
  }

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Prompt Engineering
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Create Perfect <span className="text-primary">AI Prompts</span> in Seconds
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Generate optimized prompts for ChatGPT, Claude, Gemini, and more. Transform your ideas into powerful AI
                conversations that deliver exactly what you need.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Instant Generation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Platform Optimized</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Expert Crafted</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <SignedOut>
                <SignUpButton mode="modal">
                  <Button size="lg" className="text-lg px-8">
                    Start Generating Prompts
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="/dashboard">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </SignedIn>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" onClick={scrollToPricing}>
                View Pricing
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background" />
                  ))}
                </div>
                <span>10,000+ users</span>
              </div>
              <div>⭐⭐⭐⭐⭐ 4.9/5 rating</div>
            </div>
          </div>

          {/* Right Column - Interactive Demo */}
          <div className="lg:pl-8">
            <Card className="shadow-2xl border-0 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span>Try the Prompt Generator</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">What do you need help with?</label>
                  <Input
                    placeholder="e.g., writing a blog post, analyzing data, creating content..."
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">AI Platform</label>
                    <Select value={platform} onValueChange={setPlatform}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select platform" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="chatgpt">ChatGPT</SelectItem>
                        <SelectItem value="claude">Claude</SelectItem>
                        <SelectItem value="gemini">Gemini</SelectItem>
                        <SelectItem value="midjourney">Midjourney</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tone</label>
                    <Select value={tone} onValueChange={setTone}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select tone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="creative">Creative</SelectItem>
                        <SelectItem value="technical">Technical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button onClick={generatePrompt} disabled={!topic.trim() || isGenerating} className="w-full">
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate Prompt
                    </>
                  )}
                </Button>

                {generatedPrompt && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Generated Prompt</label>
                      <Button variant="ghost" size="sm" onClick={copyToClipboard} className="h-8 px-2">
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                    <Textarea value={generatedPrompt} readOnly className="min-h-[120px] resize-none" />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
