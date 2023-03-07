import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  incomeSources: [],
  billSources: [],
  debtSources: [],
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    saveIncomeSources: (state, action) => {
      console.log('incomes', state.incomeSources)
      console.log('payload', action.payload)
    },
    saveBillSources: (state, action) => {
      console.log('bills', state.billSources)
      console.log('payload', action.payload)
    },
    saveDebtSources: (state, action) => {
      console.log('debts', state.debtSources)
      console.log('payload', action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { saveIncomeSources, saveBillSources, saveDebtSources } = formSlice.actions

export default formSlice.reducer