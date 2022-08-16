import { configureStore } from "@reduxjs/toolkit";
import typeEatingReducer from "./typeEatingSlice"

export const store = configureStore({
  reducer: {
    typeEating: typeEatingReducer,

  }
})
