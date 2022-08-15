import { FilterRecipesItem } from './FilterRecipesItem'

export const FilterRecipes = (props) => {
  function changeValue (ev){
    console.log(ev)
    
  }
  return (
    <div className="filter-recipes">
      <FilterRecipesItem id='filter1' value='Творог' dataValue='Творог' onclick={props.changeStateFilter} />
      <FilterRecipesItem id='filter2' value='Мягкий творог' dataValue='Мягкий творог' onclick={props.changeStateFilter} />
      <FilterRecipesItem id='filter3' value='Греческий йогурт' dataValue='Греческий йогурт' onclick={props.changeStateFilter} />
      <FilterRecipesItem id='filter4' value='Творожный сыр' dataValue='Творожный сыр' onclick={props.changeStateFilter} />
      <FilterRecipesItem id='filter5' value='Индейка' dataValue='индейки' onclick={props.changeStateFilter}/>
      <FilterRecipesItem id='filter6' value='Курица' dataValue='Курин' onclick={props.changeStateFilter}/>
      <FilterRecipesItem id='filter7' value='Сыр' dataValue='Сыр' onclick={props.changeStateFilter}/>
      <FilterRecipesItem id='filter8' value='Шампиньоны' dataValue='Шампиньоны' onclick={props.changeStateFilter}/>

    </div>
  )
}