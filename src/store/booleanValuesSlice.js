import { createSlice } from "@reduxjs/toolkit";

const booleanValuesSlice = createSlice({
  name: 'booleanValues',
  initialState: {
    isFilterButton: false,
    isFilterChacked: {}
  },
  reducers: {
    changeIsFilterButton(state){
      state.isFilterButton = !state.isFilterButton
    },
    addIsFilterChacked(state, action){
      state.isFilterChacked[action.payload.key] = action.payload.value
    },
    removeIsFilterChacked(state){
      state.isFilterChacked = {}
    }
  }
})

export const { changeIsFilterButton, addIsFilterChacked, removeIsFilterChacked } = booleanValuesSlice.actions

export default booleanValuesSlice.reducer