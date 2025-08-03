import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface PricingState {
  selectedPlan: string | null
  billingCycle: "monthly" | "yearly"
  showPricingModal: boolean
}

const initialState: PricingState = {
  selectedPlan: null,
  billingCycle: "monthly",
  showPricingModal: false,
}

export const pricingSlice = createSlice({
  name: "pricing",
  initialState,
  reducers: {
    selectPlan: (state, action: PayloadAction<string>) => {
      state.selectedPlan = action.payload
    },
    setBillingCycle: (state, action: PayloadAction<"monthly" | "yearly">) => {
      state.billingCycle = action.payload
    },
    togglePricingModal: (state) => {
      state.showPricingModal = !state.showPricingModal
    },
    closePricingModal: (state) => {
      state.showPricingModal = false
    },
  },
})

export const { selectPlan, setBillingCycle, togglePricingModal, closePricingModal } = pricingSlice.actions

export default pricingSlice.reducer
