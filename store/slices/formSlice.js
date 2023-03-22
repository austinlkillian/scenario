import { createSlice } from '@reduxjs/toolkit'
import { financeFormFinished, formCleanup } from '../../helpers/financialHelpers'

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
  formFinished: false,
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormState: (state, action) => {
      const storage = action.payload
      state.incomeSources = storage.incomeSources
      state.billSources = storage.billSources
      state.debtSources = storage.debtSources
      state.formFinished = financeFormFinished(storage)
    },
    saveIncomeSources: (state, action) => {
      state.incomeSources = formCleanup(action.payload)
      localStorage.setItem('scenarioFinancialData', JSON.stringify(state))
    },
    saveBillSources: (state, action) => {
      state.billSources = formCleanup(action.payload)
      localStorage.setItem('scenarioFinancialData', JSON.stringify(state))
    },
    saveDebtSources: (state, action) => {
      state.debtSources = formCleanup(action.payload)
      localStorage.setItem('scenarioFinancialData', JSON.stringify(state))
    },
  },
})

// Action creators are generated for each case reducer function
export const { setFormState, saveIncomeSources, saveBillSources, saveDebtSources } = formSlice.actions

export default formSlice.reducer