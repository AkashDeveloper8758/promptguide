"use client"

import type React from "react"

import { useState } from "react"
import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreedToTerms) return

    setIsLoading(true)

    // Simulate sign up
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirect to dashboard or home
    window.location.href = "/"
  }

  const passwordsMatch = formData.password === formData.confirmPassword
  const isFormValid =
    formData.firstName && formData.lastName && formData.email && formData.password && passwordsMatch && agreedToTerms

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Get Started Free</h1>
          <p className="text-gray-600">Create your PromptGuide account and start optimizing</p>
        </div>
        <SignUp
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
