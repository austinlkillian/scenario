import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  incomeSources: [{
    id: 'income',
    name: '',
    amount: ''
  }],
  billSources: [{
    id: 'bill',
    name: '',
    amount: ''
  }],
  debtSources: [{
    id: 'payment',
    name: '',
    amount: '',
  }],
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    saveIncomeSources: (state, action) => {
      state.incomeSources = action.payload
    },
    saveBillSources: (state, action) => {
      state.billSources = action.payload
    },
    saveDebtSources: (state, action) => {
      state.debtSources = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { saveIncomeSources, saveBillSources, saveDebtSources } = formSlice.actions

export default formSlice.reducer