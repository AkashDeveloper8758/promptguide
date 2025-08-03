import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface User {
  id: string
  email: string
  name: string
  plan: "free" | "premium" | "premium-plus" | "premium-max"
  promptsUsedToday: number
  promptsLimit: number
  createdAt: string
}

export interface Prompt {
  id: string
  userId: string
  input: string
  output: string
  model: string
  quality: number
  createdAt: string
}

export interface Plan {
  id: string
  name: string
  price: number
  originalPrice?: number
  period: string
  description: string
  features: Array<{
    name: string
    included: boolean
  }>
  popular?: boolean
}

export interface GeneratePromptRequest {
  input: string
  model: string
  userId: string
}

export interface GeneratePromptResponse {
  optimizedPrompt: string
  originalInput: string
  targetModel: string
  quality: number
  promptId: string
}

// Define a service using a base URL and expected endpoints
export const promptGuideApi = createApi({
  reducerPath: "promptGuideApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
    prepareHeaders: (headers, { getState }) => {
      // Add auth token if available
      // const token = (getState() as RootState).auth.token
      // if (token) {
      //   headers.set('authorization', `Bearer ${token}`)
      // }
      return headers
    },
  }),
  tagTypes: ["User", "Prompt", "Plan"],
  endpoints: (builder) => ({
    // User endpoints
    getCurrentUser: builder.query<User, void>({
      query: () => "user/me",
      providesTags: ["User"],
    }),
    updateUserPlan: builder.mutation<User, { planId: string }>({
      query: ({ planId }) => ({
        url: "user/plan",
        method: "PUT",
        body: { planId },
      }),
      invalidatesTags: ["User"],
    }),

    // Prompt endpoints
    generatePrompt: builder.mutation<GeneratePromptResponse, GeneratePromptRequest>({
      query: (body) => ({
        url: "prompts/generate",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"], // Invalidate user to update prompt count
    }),
    getUserPrompts: builder.query<Prompt[], { userId: string; limit?: number }>({
      query: ({ userId, limit = 10 }) => `prompts/user/${userId}?limit=${limit}`,
      providesTags: ["Prompt"],
    }),

    // Plan endpoints
    getPlans: builder.query<Plan[], void>({
      query: () => "plans",
      providesTags: ["Plan"],
    }),
    getPlan: builder.query<Plan, string>({
      query: (id) => `plans/${id}`,
      providesTags: ["Plan"],
    }),

    // Analytics endpoints
    getUserStats: builder.query<
      {
        promptsGenerated: number
        qualityAverage: number
        timeSaved: number
        costSavings: number
      },
      string
    >({
      query: (userId) => `analytics/user/${userId}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCurrentUserQuery,
  useUpdateUserPlanMutation,
  useGeneratePromptMutation,
  useGetUserPromptsQuery,
  useGetPlansQuery,
  useGetPlanQuery,
  useGetUserStatsQuery,
} = promptGuideApi
