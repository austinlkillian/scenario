import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  incomeSources: [{
    id: '0',
    name: '0',
    label: 'Income',
    value: '',
    edit: false
  }],
  billSources: [{
    id: '0',
    name: '0',
    label: 'Monthly Bill',
    value: ''
  }],
  debtSources: [{
    id: '0',
    name: '0',
    label: 'Debt Source',
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