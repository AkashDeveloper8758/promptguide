import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { promptGuideApi } from "./api/promptGuideApi"
import pricingReducer from "./features/pricing/pricingSlice"
import userReducer from "./features/user/userSlice"

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [promptGuideApi.reducerPath]: promptGuideApi.reducer,
    pricing: pricingReducer,
    user: userReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(promptGuideApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
