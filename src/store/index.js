import { configureStore } from "@reduxjs/toolkit"
import typeEatingReducer from "./typeEatingSlice"
import showMenuReducer from "./showMenuSlice"
import booleanValuesReducer from "./booleanValuesSlice"
import valueInputSearchReducer from "./valueInputSearchSlice"

export const store = configureStore({
  reducer: {
    typeEating: typeEatingReducer,
    showMenu: showMenuReducer,
    booleanValues: booleanValuesReducer,
    valueInputSearch: valueInputSearchReducer
  }
})
