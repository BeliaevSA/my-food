import { FilterRecipes } from './FilterRicepes'
import { useDispatch } from 'react-redux/es/exports'
import { changeIsFilterButton } from '../store/booleanValuesSlice'
import { removeIsFilterChacked } from '../store/booleanValuesSlice'

export const SearchRecipe = (props) => {
  const dispatch = useDispatch()
  const fnChangeIsFilterButton = () => dispatch(changeIsFilterButton())
  const fnRemoveIsFilterChacked = () => dispatch(removeIsFilterChacked())

  const handlerClickShow = () => {
    props.useFilterRecipe()
    fnChangeIsFilterButton()
  }
  return (
    <form action=""  className={props.className} onSubmit={(ev) => ev.preventDefault()} >
      <FilterRecipes />
      <div className='btns'style={{padding: '0 20px', justifyContent: 'center'}}>
        <input type='submit' className="input_submit" style={{backgroundColor: 'green', color: 'white'}} value='Показать рецепты' onClick={handlerClickShow}/>
        <input type='reset' className="input_submit" value='Сбросить фильтр' onClick={fnRemoveIsFilterChacked}/>
      </div>
    </form>
  )
}