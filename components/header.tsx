"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code2, Menu, X, Zap, Star, Users, ArrowRight } from "lucide-react"
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs"
import { useAppSelector } from "@/lib/hooks"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { user, isLoading } = useAppSelector((state) => state.user)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              PromptGuide
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center space-x-1"
            >
              <Zap className="h-4 w-4" />
              <span>Features</span>
            </Link>
            <button
              onClick={scrollToPricing}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center space-x-1"
            >
              <Star className="h-4 w-4" />
              <span>Pricing</span>
            </button>
            <Link
              href="#testimonials"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center space-x-1"
            >
              <Users className="h-4 w-4" />
              <span>Reviews</span>
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard">
                <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
                  Dashboard
                </Button>
              </Link>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "h-10 w-10",
                  },
                }}
              />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-xl border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="#features"
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Zap className="h-5 w-5" />
                <span>Features</span>
              </Link>
              <button
                onClick={scrollToPricing}
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 font-medium py-2 transition-colors w-full text-left"
              >
                <Star className="h-5 w-5" />
                <span>Pricing</span>
              </button>
              <Link
                href="#testimonials"
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Users className="h-5 w-5" />
                <span>Reviews</span>
              </Link>

              <div className="pt-4 border-t border-gray-200 space-y-3">
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button variant="outline" className="w-full justify-center bg-transparent">
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      Get Started Free
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full justify-center bg-transparent">
                      Dashboard
                    </Button>
                  </Link>
                  <div className="flex justify-center pt-2">
                    <UserButton
                      appearance={{
                        elements: {
                          avatarBox: "h-10 w-10",
                        },
                      }}
                    />
                  </div>
                </SignedIn>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
