"use client"

import type React from "react"
import { useEffect } from "react"
import { useUser } from "@clerk/nextjs"
import { useAppDispatch } from "@/lib/hooks"
import { setUser, setLoading } from "@/lib/features/user/userSlice"

export function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { user, isLoaded } = useUser()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isLoaded) {
      dispatch(setLoading(false))

      if (user) {
        // Map Clerk user to our user format
        const userData = {
          id: user.id,
          clerkId: user.id,
          email: user.emailAddresses[0]?.emailAddress || "",
          name: user.fullName || user.firstName || "User",
          plan: "free" as const,
          promptsUsedToday: 3,
          promptsLimit: 5,
        }

        dispatch(setUser(userData))
      } else {
        dispatch(setUser(null))
      }
    } else {
      dispatch(setLoading(true))
    }
  }, [user, isLoaded, dispatch])

  return <>{children}</>
}
