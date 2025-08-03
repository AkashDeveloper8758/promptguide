import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { ReduxProvider } from "@/components/providers/redux-provider"
import { ClerkProvider } from "@clerk/nextjs"
import { AuthWrapper } from "@/components/auth/auth-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PromptGuide - AI Prompt Generator",
  description: "Transform your raw ideas into optimized, production-ready prompts for any AI model.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider signInUrl="/sign-in" signUpUrl="/sign-up" afterSignInUrl="/" afterSignUpUrl="/">
      <html lang="en">
        <body className={inter.className}>
          <ReduxProvider>
            <AuthWrapper>{children}</AuthWrapper>
            <Toaster />
          </ReduxProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
