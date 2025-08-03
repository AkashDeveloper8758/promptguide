import { NextResponse } from "next/server"

const plans = [
  {
    id: "free",
    name: "Free",
    price: 0,
    period: "/month",
    description: "Perfect for trying out PromptGuide",
    features: [
      { name: "5 prompts per day", included: true },
      { name: "Basic prompt optimization", included: true },
      { name: "All AI models supported", included: true },
      { name: "Email support", included: true },
      { name: "GPT-4 & Claude 3.5 access", included: false },
      { name: "Viral templates", included: false },
      { name: "Advanced analytics", included: false },
      { name: "Team collaboration", included: false },
    ],
    popular: false,
  },
  {
    id: "premium",
    name: "Premium",
    price: 9,
    originalPrice: 29,
    period: "/month",
    description: "Great for regular users",
    features: [
      { name: "50 prompts per day", included: true },
      { name: "Advanced optimization", included: true },
      { name: "GPT-4 & Claude 3.5 access", included: true },
      { name: "Priority support", included: true },
      { name: "Viral templates (50+)", included: true },
      { name: "Prompt history", included: true },
      { name: "Export functionality", included: true },
      { name: "Team collaboration", included: false },
    ],
    popular: true,
  },
  {
    id: "premium-plus",
    name: "Premium Plus",
    price: 29,
    originalPrice: 59,
    period: "/month",
    description: "For power users and teams",
    features: [
      { name: "200 prompts per day", included: true },
      { name: "All Premium features", included: true },
      { name: "Team collaboration", included: true },
      { name: "Custom templates", included: true },
      { name: "API access", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Priority support", included: true },
      { name: "White-label option", included: false },
    ],
    popular: false,
  },
  {
    id: "premium-max",
    name: "Premium Max",
    price: 49,
    originalPrice: 99,
    period: "/month",
    description: "Unlimited everything",
    features: [
      { name: "Unlimited prompts", included: true },
      { name: "All Premium Plus features", included: true },
      { name: "White-label solution", included: true },
      { name: "Custom integrations", included: true },
      { name: "Dedicated support", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Custom training", included: true },
      { name: "SLA guarantee", included: true },
    ],
    popular: false,
  },
]

export async function GET() {
  return NextResponse.json(plans)
}
