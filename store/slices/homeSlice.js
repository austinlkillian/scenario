import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  homeView: 'cashFlowView'
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setHomeView: (state, action) => {
      state.homeView = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setHomeView } = homeSlice.actions

export default homeSlice.reducer