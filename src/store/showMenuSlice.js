import { createSlice } from "@reduxjs/toolkit";

const showMenuSlice = createSlice({
  name: 'showMenu',
  initialState: {
    breakfast: +localStorage.getItem('breakfast') ?? 0,
    snack: +localStorage.getItem('snack') ?? 0,
    lunch: +localStorage.getItem('lunch') ?? 0,
    supper: +localStorage.getItem('supper') ?? 0,
    adding: +localStorage.getItem('adding') ?? 0,
    all: +localStorage.getItem('all') ?? 0
  },
  reducers: {
    setIdForShowRecipe(state, action){
      localStorage.setItem(action.payload.typeEating, action.payload.id)
      state[action.payload.typeEating] = action.payload.id
    },
    deleteIdForShowRecipe(state, action){
      localStorage.removeItem(action.payload.typeEating)
      state[action.payload.typeEating] = 0
    }
  }
})

export const { setIdForShowRecipe, deleteIdForShowRecipe } = showMenuSlice.actions

export default showMenuSlice.reducer