import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  incomeSources: [{
    id: 'income',
    name: 'income',
    label: 'Income',
    value: '',
    edit: false
  }],
  billSources: [{
    id: 'bill',
    name: 'bill',
    label: 'Bill',
    value: ''
  }],
  debtSources: [{
    id: 'payment',
    name: 'payment',
    label: 'Payment',
    value: '',
    edit: false,
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