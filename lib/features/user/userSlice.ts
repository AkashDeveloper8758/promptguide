import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface User {
  id: string
  clerkId: string
  email: string
  name: string
  plan: "free" | "pro" | "enterprise"
  promptsUsedToday: number
  promptsLimit: number
}

interface UserState {
  user: User | null
  isLoading: boolean
}

const initialState: UserState = {
  user: null,
  isLoading: true,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    updatePromptUsage: (state) => {
      if (state.user) {
        state.user.promptsUsedToday += 1
      }
    },
    clearUser: (state) => {
      state.user = null
    },
  },
})

export const { setUser, setLoading, updatePromptUsage, clearUser } = userSlice.actions
export default userSlice.reducer
