"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How does PromptCraft improve my AI results?",
      answer:
        "PromptCraft analyzes your input and restructures it with proper context, clear objectives, and specific formatting that AI models understand best. This leads to more accurate, relevant, and useful responses from ChatGPT, Claude, and Gemini.",
    },
    {
      question: "Can I use PromptCraft with any AI model?",
      answer:
        "Yes! PromptCraft is designed to work with all major AI platforms including ChatGPT, Claude, Gemini, GPT-4, and many others. We optimize prompts specifically for each model's strengths and characteristics.",
    },
    {
      question: "What's included in the free plan?",
      answer:
        "The free plan includes 20 prompt optimizations per day, basic prompt enhancement, support for all AI models, and email support. It's perfect for trying out PromptCraft and seeing the difference optimized prompts make.",
    },
    {
      question: "How do prompt limits work?",
      answer:
        "Prompt limits reset every 24 hours. If you reach your daily limit, you can either wait for the reset or upgrade to a higher plan. Premium plans offer 50-200 prompts per day, while Premium Max offers unlimited prompts.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "You can cancel your subscription at any time from your account settings. You'll continue to have access to premium features until the end of your current billing period.",
    },
    {
      question: "Do you offer team plans?",
      answer:
        "Yes! Our Premium Plus and Premium Max plans include team collaboration features. You can share prompts, create team templates, and manage multiple users under one account.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Security is our top priority. All data is encrypted in transit and at rest. We never store your sensitive prompts permanently, and we don't share your data with third parties. Your privacy is guaranteed.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "Most users see immediate improvements in their AI responses. PromptCraft generates optimized prompts in seconds, and you'll notice better, more relevant AI outputs right away.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Everything you need to know about PromptCraft</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-6 bg-white rounded-lg border hover:shadow-md transition-shadow"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </div>
                {openIndex === index && <div className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</div>}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
