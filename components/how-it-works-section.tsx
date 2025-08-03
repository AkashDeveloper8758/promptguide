import { Button } from "@/components/ui/button"

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Quick Sign-Up",
      description:
        "Sign up with your Google account to access the PromptCraft dashboard. The process is quick and easy, getting you started right away.",
      mockup: (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 max-w-md mx-auto">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">PC</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Sign Into PromptCraft</h3>
            <p className="text-gray-600 mt-2">Welcome back! Please sign in to continue</p>
          </div>
          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold mb-4">
            Continue With Google
          </Button>
          <div className="space-y-3">
            <div className="h-12 bg-gray-100 rounded-lg"></div>
            <div className="h-12 bg-gray-100 rounded-lg"></div>
            <Button className="w-full bg-gray-900 text-white py-3 rounded-xl">Sign In</Button>
          </div>
        </div>
      ),
    },
    {
      number: "02",
      title: "Create New Prompt",
      description:
        "Click 'Create New' and describe your project. Share your idea, core features, and goals. Use AI to refine your draft for better clarity.",
      mockup: (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 max-w-lg mx-auto">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">What Do You Want To Build?</h3>
            <p className="text-gray-600 text-sm">
              Describe your project in detail. The more specific you are, the better we can help you bring your vision
              to life.
            </p>
          </div>
          <div className="space-y-4 mb-6">
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Purpose</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Target Audience</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Key Features</span>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border-2 border-dashed border-gray-300 min-h-24">
              <p className="text-gray-500 text-sm">
                I want to build a modern Ecom platform with NextJS and a Stripe integration...
              </p>
            </div>
          </div>
          <Button className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold">Next Step</Button>
        </div>
      ),
    },
    {
      number: "03",
      title: "Select AI Model",
      description:
        "Choose your target AI platform: ChatGPT, Claude, Gemini, or others. Each model has unique strengths that we optimize for.",
      mockup: (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 max-w-lg mx-auto">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Select AI Model</h3>
            <p className="text-gray-600 text-sm">Select the AI tools you'll use for your project</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-blue-500 bg-blue-50 rounded-xl p-4 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold">GP</span>
              </div>
              <h4 className="font-semibold text-gray-900">ChatGPT</h4>
              <p className="text-xs text-gray-600 mt-1">AI-powered content generation</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 text-center hover:border-gray-300 cursor-pointer">
              <div className="w-12 h-12 bg-orange-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <h4 className="font-semibold text-gray-900">Claude</h4>
              <p className="text-xs text-gray-600 mt-1">Advanced reasoning AI</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: "04",
      title: "Generate Optimized Prompt",
      description:
        "Complete a short, focused questionnaire about your project. This step fills in the gaps and creates a detailed outline for your optimized prompt.",
      mockup: (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 max-w-lg mx-auto">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Complete The Questionnaire</h3>
            <p className="text-gray-600 text-sm">Complete these questions for us to be able to generate your prompt</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                1. What are the main objectives or goals of this project?
              </label>
              <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">Type your answer here...</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                2. Who is your target audience for this project?
              </label>
              <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">Type your answer here...</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: "05",
      title: "Copy & Use Your Prompt",
      description:
        "PromptCraft generates optimized prompts one by one. Edit or refine any part, then copy the completed prompt to use with your AI tool.",
      mockup: (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 max-w-lg mx-auto">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Your Optimized Prompt</h3>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline" className="text-xs bg-transparent">
                Copy
              </Button>
              <Button size="sm" variant="outline" className="text-xs bg-transparent">
                Edit
              </Button>
              <Button size="sm" variant="outline" className="text-xs bg-transparent">
                Save
              </Button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
            <div className="space-y-3 text-sm">
              <div>
                <strong>Prompt:</strong> Create a comprehensive marketing strategy for...
              </div>
              <div>
                <strong>Context:</strong> You are an expert marketing strategist...
              </div>
              <div>
                <strong>Output Goal:</strong> Provide a detailed 5-step marketing plan...
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="how-it-works" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-20">
          <p className="text-lg font-semibold text-blue-600 mb-4">How It Works</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight">
            Built For AI Prompt Optimization
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            PromptCraft makes creating perfect AI prompts easy with a simple, streamlined process that takes you from
            raw idea to optimized prompt in just a few steps.
          </p>
        </div>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="text-8xl font-bold text-blue-100 mb-6">{step.number}</div>
                <h3 className="text-4xl font-bold mb-6 text-gray-900">{step.title}</h3>
                <p className="text-xl text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                    {step.mockup}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
