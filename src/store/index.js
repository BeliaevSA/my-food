import { configureStore } from "@reduxjs/toolkit";
import typeEatingReducer from "./typeEatingSlice"
import showMenuReducer from "./showMenuSlice"

export const store = configureStore({
  reducer: {
    typeEating: typeEatingReducer,
    showMenu: showMenuReducer,
    
  }
})
