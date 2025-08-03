"use client"

import type React from "react"

import { useEffect } from "react"
import { useUser } from "@clerk/nextjs"
import { useAppDispatch } from "@/lib/hooks"
import { setUser, clearUser } from "@/lib/features/user/userSlice"

export function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { user, isLoaded } = useUser()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isLoaded) {
      if (user) {
        dispatch(
          setUser({
            id: user.id,
            email: user.emailAddresses[0]?.emailAddress || "",
            name: user.fullName || user.firstName || "User",
            avatar: user.imageUrl || "",
            isAuthenticated: true,
          }),
        )
      } else {
        dispatch(clearUser())
      }
    }
  }, [user, isLoaded, dispatch])

  return <>{children}</>
}
