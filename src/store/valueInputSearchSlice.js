import { createSlice } from "@reduxjs/toolkit";

const valueInputSearchSlice = createSlice({
  name: 'valueInputSearch',
  initialState: {
    value: ''
  },
  reducers: {
    changeValueInputSearch(state, action){
      state.value = action.payload.value
    }
  }
})

export const { changeValueInputSearch } = valueInputSearchSlice.actions

export default valueInputSearchSlice.reducer