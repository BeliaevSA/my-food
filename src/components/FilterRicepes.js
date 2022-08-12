import { FilterRecipesItem } from './FilterRecipesItem'

export const FilterRecipes = (props) => {
  function changeValue (ev){
    console.log(ev)
    
  }
  return (
    <div className="filter-recipes">
      <FilterRecipesItem id='filter1' value='Творог' dataValue='творог' onclick={props.changeStateFilter} />
      <FilterRecipesItem id='filter2' value='Индейка' dataValue='индей' onclick={props.changeStateFilter}/>
      <FilterRecipesItem id='filter3' value='Курица' dataValue='кури' onclick={props.changeStateFilter}/>
      <FilterRecipesItem id='filter4' value='Сыр' dataValue='сыр' onclick={props.changeStateFilter}/>
      <FilterRecipesItem id='filter5' value='Шампиньоны' dataValue='шампиньоны' onclick={props.changeStateFilter}/>

    </div>
  )
}