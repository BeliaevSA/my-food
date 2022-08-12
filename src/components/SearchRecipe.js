import { FilterRecipes } from './FilterRicepes'

export const SearchRecipe = (props) => {
  
  // const handleChange = (ev) => {
  //   ev.preventDefault()
  //   props.changeSearchRecipe(ev.target.value)
  // }

  const changeStateFilter = (ev) => {
    let newState = {...props.filterRecipes}
    newState[ev.target.dataset.value] = ev.target.checked
    props.setFilterRecipe(newState)
  }
  // console.log(props.filterRecipes)

  return (
    <form action="" name='searchRecipe' className={props.className} onSubmit={(ev) => ev.preventDefault} >
      {/* <h3>Поиск рецепта</h3>
      <input type='text' className='input_search' onChange={handleChange} value={props.searchRecipe} autoComplete="off" /> */}
      <FilterRecipes changeStateFilter={changeStateFilter}/>
      <input type='submit' className="input_submit" value='Показать' onClick={props.useFilterRecipe}/>
    </form>
  )
}
