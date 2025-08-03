import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager at TechCorp",
      content:
        "PromptCraft has revolutionized how our team uses AI. Our ChatGPT responses are now 10x more accurate and useful.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Content Creator",
      content:
        "I was struggling with vague AI outputs until I found PromptCraft. Now every prompt delivers exactly what I need.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Marketing Director",
      content:
        "The time savings are incredible. What used to take hours of prompt tweaking now takes seconds with PromptCraft.",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Software Developer",
      content:
        "As a developer, I appreciate how PromptCraft structures prompts for different AI models. It's like having an AI whisperer.",
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      role: "Freelance Writer",
      content: "My clients are amazed at the quality improvement in my AI-assisted content since using PromptCraft.",
      rating: 5,
    },
    {
      name: "Alex Johnson",
      role: "Startup Founder",
      content: "PromptCraft is essential for any business using AI. The ROI is immediate and substantial.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Loved by Thousands of Users</h2>
          <p className="text-gray-600">See what our customers are saying about PromptCraft</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
