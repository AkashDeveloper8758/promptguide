import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Target, Zap, Crown, Lock } from "lucide-react"

export function ViralTemplatesSection() {
  const templates = [
    {
      title: "Viral LinkedIn Post",
      description: "Generate posts that get 10x more engagement and reach thousands of professionals",
      uses: "2.3k uses this month",
      premium: true,
      icon: TrendingUp,
      color: "bg-pink-100 text-pink-600",
      results: "Average 500% more engagement",
    },
    {
      title: "Email Subject Lines",
      description: "Create subject lines with 50%+ open rates that get your emails noticed",
      uses: "1.8k uses this month",
      premium: false,
      icon: Target,
      color: "bg-blue-100 text-blue-600",
      results: "Average 45% open rate",
    },
    {
      title: "YouTube Thumbnails",
      description: "Write click-worthy thumbnail descriptions that boost your video views",
      uses: "3.1k uses this month",
      premium: true,
      icon: Users,
      color: "bg-red-100 text-red-600",
      results: "Average 300% more clicks",
    },
    {
      title: "Sales Copy",
      description: "High-converting sales pages that turn visitors into customers",
      uses: "4.2k uses this month",
      premium: true,
      icon: Zap,
      color: "bg-green-100 text-green-600",
      results: "Average 25% conversion rate",
    },
    {
      title: "Social Media Captions",
      description: "Engaging captions that drive likes, comments, and shares across all platforms",
      uses: "5.7k uses this month",
      premium: false,
      icon: Users,
      color: "bg-purple-100 text-purple-600",
      results: "Average 200% more engagement",
    },
    {
      title: "Blog Post Headlines",
      description: "Attention-grabbing headlines that increase your blog traffic significantly",
      uses: "2.9k uses this month",
      premium: true,
      icon: TrendingUp,
      color: "bg-orange-100 text-orange-600",
      results: "Average 150% more clicks",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Viral Templates That Actually Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pre-built, proven templates used by thousands of creators to generate millions of views and engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {templates.map((template, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow relative">
              {template.premium && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                    <Crown className="w-3 h-3 mr-1" />
                    Premium
                  </Badge>
                </div>
              )}

              <CardHeader>
                <div className={`w-12 h-12 ${template.color} rounded-lg flex items-center justify-center mb-4`}>
                  <template.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{template.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4">{template.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{template.uses}</span>
                    <span className="text-green-600 font-medium">{template.results}</span>
                  </div>
                </div>

                <Button
                  className={`w-full ${
                    template.premium
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                  disabled={template.premium}
                >
                  {template.premium ? (
                    <div className="flex items-center">
                      <Lock className="w-4 h-4 mr-2" />
                      Upgrade to Use
                    </div>
                  ) : (
                    "Use Template"
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-center text-white">
          <Crown className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
          <h3 className="text-3xl font-bold mb-4">Unlock All 50+ Viral Templates</h3>
          <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
            Get access to our complete library of proven templates that have generated over 100M views
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
            Upgrade to Premium
          </Button>
        </div>
      </div>
    </section>
  )
}
