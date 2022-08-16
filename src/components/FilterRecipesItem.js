import { useDispatch } from "react-redux"
import { addIsFilterChacked } from "../store/booleanValuesSlice"

export const FilterRecipesItem = (props) => {
  const dispatch = useDispatch()

  const fnAddIsFilterChacked = (ev) => {
    const key = ev.target.dataset.value
    const value = ev.target.checked
    dispatch(addIsFilterChacked({key, value}))
  }

  return (
    <label htmlFor={props.value} >
      <input 
        data-value={props.dataValue}
        type='checkbox' 
        id={props.value} 
        onClick={fnAddIsFilterChacked}
      />
      {props.value}
    </label>
  )
}