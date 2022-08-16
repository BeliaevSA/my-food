import { createSlice }  from "@reduxjs/toolkit";

const typeEatingSlice = createSlice({
  name: 'typeEating',
  initialState: {
    value: localStorage.getItem('typeEating')??''
  },
  reducers: {
    setTypeEating(state, action){
      localStorage.setItem('typeEating', action.payload.value)
      state.value = action.payload.value
    }
  }
})

export const { setTypeEating } = typeEatingSlice.actions

export default typeEatingSlice.reducer