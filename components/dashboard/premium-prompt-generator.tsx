"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, Copy, Save, RefreshCw, Share2, Zap, Crown, TrendingUp, Wand2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useGeneratePromptMutation, useGetCurrentUserQuery } from "@/lib/api/promptGuideApi"
import { useAppDispatch } from "@/lib/hooks"
import { updatePromptUsage } from "@/lib/features/user/userSlice"

export function PremiumPromptGenerator() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [selectedModel, setSelectedModel] = useState("chatgpt")
  const [promptQuality, setPromptQuality] = useState(0)
  const { toast } = useToast()
  const dispatch = useAppDispatch()

  const { data: user } = useGetCurrentUserQuery()
  const [generatePrompt, { isLoading }] = useGeneratePromptMutation()

  const handleGenerate = async () => {
    if (!input.trim()) return
    if (!user) return

    if (user.promptsUsedToday >= user.promptsLimit) {
      toast({
        title: "❌ Limit Reached",
        description: "You've reached your daily prompt limit. Upgrade to continue!",
        variant: "destructive",
      })
      return
    }

    try {
      const result = await generatePrompt({
        input,
        model: selectedModel,
        userId: user.id,
      }).unwrap()

      setOutput(result.optimizedPrompt)
      setPromptQuality(result.quality)
      dispatch(updatePromptUsage())

      toast({
        title: "✨ Prompt Generated!",
        description: `Quality Score: ${result.quality}% - Excellent optimization!`,
      })
    } catch (error) {
      toast({
        title: "❌ Error",
        description: "Failed to generate prompt. Please try again.",
        variant: "destructive",
      })
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output)
    toast({
      title: "📋 Copied!",
      description: "Optimized prompt copied to clipboard",
    })
  }

  const canGenerate = user && user.promptsUsedToday < user.promptsLimit

  return (
    <Card className="bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Wand2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">AI Prompt Generator</h2>
              <p className="text-gray-400">Transform basic ideas into powerful AI prompts</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Select value={selectedModel} onValueChange={setSelectedModel}>
              <SelectTrigger className="w-40 bg-white/5 border-white/10 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-white/10">
                <SelectItem value="chatgpt">ChatGPT</SelectItem>
                <SelectItem value="claude">Claude</SelectItem>
                <SelectItem value="gemini">Gemini</SelectItem>
                <SelectItem value="gpt4" className="text-yellow-400">
                  <div className="flex items-center">
                    <Crown className="w-4 h-4 mr-2" />
                    GPT-4 Pro
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Usage Warning */}
        {user && user.promptsUsedToday >= user.promptsLimit - 1 && (
          <div className="mb-6 bg-red-500/10 border border-red-500/20 rounded-xl p-4">
            <div className="flex items-center space-x-2 text-red-400">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="font-medium">
                {user.promptsUsedToday >= user.promptsLimit
                  ? "Daily limit reached! Upgrade to continue."
                  : "Last prompt remaining today!"}
              </span>
            </div>
          </div>
        )}

        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-white font-semibold mb-3">What do you want to create a prompt for?</label>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., Write a marketing email for my SaaS product launch..."
              className="min-h-[120px] bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 resize-none"
            />
          </div>

          <Button
            onClick={handleGenerate}
            disabled={!input.trim() || isLoading || !canGenerate}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center">
                <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                Generating Magic...
              </div>
            ) : !canGenerate ? (
              <div className="flex items-center">
                <Crown className="w-5 h-5 mr-2" />
                Upgrade to Continue
              </div>
            ) : (
              <div className="flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Generate Optimized Prompt
              </div>
            )}
          </Button>
        </div>

        {/* Output Section */}
        {output && (
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <h3 className="text-white font-semibold text-lg">Your Optimized Prompt</h3>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-3 py-1 rounded-full border border-green-500/30">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm font-medium">{promptQuality}% Quality</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyToClipboard}
                  className="bg-white/5 border-white/10 text-white hover:bg-white/10"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
                <Button variant="outline" size="sm" className="bg-white/5 border-white/10 text-white hover:bg-white/10">
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" size="sm" className="bg-white/5 border-white/10 text-white hover:bg-white/10">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Regenerate
                </Button>
                <Button variant="outline" size="sm" className="bg-white/5 border-white/10 text-white hover:bg-white/10">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-white/10">
              <pre className="text-gray-200 whitespace-pre-wrap text-sm leading-relaxed">{output}</pre>
            </div>

            {/* Premium Upsell */}
            {user?.plan === "free" && (
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-4 border border-yellow-500/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Crown className="w-5 h-5 text-yellow-400" />
                    <div>
                      <p className="text-yellow-400 font-semibold">Want even better results?</p>
                      <p className="text-gray-300 text-sm">Upgrade to access GPT-4, Claude 3.5, and viral templates</p>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold">
                    Upgrade Now
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}
