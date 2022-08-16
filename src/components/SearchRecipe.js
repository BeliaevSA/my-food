import { FilterRecipes } from './FilterRicepes'

export const SearchRecipe = (props) => {
  

  const changeStateFilter = (ev) => {
    let newState = {...props.filterRecipes}
    newState[ev.target.dataset.value] = ev.target.checked
    props.setFilterRecipe(newState)
  }

  const handlerClickShow = () => {
    props.useFilterRecipe()
    props.changeValueFilterButton()
  }
  const  handlerClickReset = (ev) => {
    (() => {
      return props.setFilterRecipe({})
    })()
  }
  return (
    <form action=""  className={props.className} onSubmit={(ev) => ev.preventDefault()} >
      <FilterRecipes changeStateFilter={changeStateFilter}/>
      <div className='btns'style={{padding: '0 20px', justifyContent: 'center'}}>
        <input type='submit' className="input_submit" style={{backgroundColor: 'green', color: 'white'}} value='Показать рецепты' onClick={handlerClickShow}/>
        <input type='reset' className="input_submit" value='Сбросить фильтр' onClick={handlerClickReset}/>
      </div>
    </form>
  )
}
// name='searchRecipe'
// () => {props.useFilterRecipe(); props.changeValueFilterButton()}