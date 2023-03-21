import { createSlice } from '@reduxjs/toolkit'
import { financeFormFinished } from '../../helpers/financialHelpers'

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
      state.incomeSources = action.payload
      let totalIncome = 0
      action.payload.forEach(source => {
        totalIncome += Number(source.amount)
      })
      localStorage.setItem('scenarioFinancialData', JSON.stringify(state))
    },
    saveBillSources: (state, action) => {
      state.billSources = action.payload
      let totalBills = 0
      action.payload.forEach(source => {
        totalBills += Number(source.amount)
      })
      localStorage.setItem('scenarioFinancialData', JSON.stringify(state))
    },
    saveDebtSources: (state, action) => {
      state.debtSources = action.payload
      let totalDebt = 0
      action.payload.forEach(source => {
        totalDebt += Number(source.amount)
      })
      localStorage.setItem('scenarioFinancialData', JSON.stringify(state))
    },
  },
})

// Action creators are generated for each case reducer function
export const { setFormState, saveIncomeSources, saveBillSources, saveDebtSources } = formSlice.actions

export default formSlice.reducer