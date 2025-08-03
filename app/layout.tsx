import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import { ReduxProvider } from "@/components/providers/redux-provider"
import { AuthWrapper } from "@/components/auth/auth-wrapper"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Prompt Generator - Create Perfect Prompts for Any AI Platform",
  description:
    "Generate optimized prompts for ChatGPT, Claude, Gemini, and more. Boost your AI productivity with our advanced prompt engineering tools.",
  keywords: "AI prompts, ChatGPT prompts, Claude prompts, Gemini prompts, prompt engineering, AI tools",
  authors: [{ name: "AI Prompt Generator Team" }],
  openGraph: {
    title: "AI Prompt Generator - Create Perfect Prompts",
    description:
      "Generate optimized prompts for any AI platform. Boost your productivity with advanced prompt engineering.",
    type: "website",
    url: "https://ai-prompt-generator.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Prompt Generator",
    description: "Create perfect prompts for ChatGPT, Claude, Gemini, and more",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      afterSignInUrl="/"
      afterSignUpUrl="/"
      appearance={{
        elements: {
          formButtonPrimary: "bg-primary hover:bg-primary/90",
          card: "shadow-lg",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <ReduxProvider>
              <AuthWrapper>{children}</AuthWrapper>
            </ReduxProvider>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
