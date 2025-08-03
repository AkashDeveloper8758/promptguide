import { NextResponse } from "next/server"

// Mock user data - in real app this would come from database
const mockUser = {
  id: "user_123",
  email: "user@example.com",
  name: "John Doe",
  plan: "free" as const,
  promptsUsedToday: 3,
  promptsLimit: 5,
  createdAt: "2024-01-01T00:00:00Z",
}

export async function GET() {
  // In a real app, you'd get the user from the session/token
  return NextResponse.json(mockUser)
}
