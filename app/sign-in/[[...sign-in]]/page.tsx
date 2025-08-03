import { SignIn } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your PromptGuide account</p>
        </div>
        <SignIn
          appearance={{
            elements: {
              formButtonPrimary: "bg-blue-500 hover:bg-blue-600 text-sm normal-case",
              card: "shadow-xl border-0",
              headerTitle: "hidden",
              headerSubtitle: "hidden",
            },
          }}
        />
      </div>
    </div>
  )
}
