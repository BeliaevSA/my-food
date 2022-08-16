import { FilterRecipesItem } from './FilterRecipesItem'

export const FilterRecipes = (props) => {
  
  return (
    <div className="filter-recipes">
      <FilterRecipesItem value='Творог' dataValue='Творог' />
      <FilterRecipesItem value='Мягкий творог' dataValue='Мягкий творог' />
      <FilterRecipesItem value='Греческий йогурт' dataValue='Греческий йогурт' />
      <FilterRecipesItem value='Творожный сыр' dataValue='Творожный сыр' />
      <FilterRecipesItem value='Индейка' dataValue='индейки' />
      <FilterRecipesItem value='Курица' dataValue='Курин' />
      <FilterRecipesItem value='Сыр' dataValue='Сыр' />
      <FilterRecipesItem value='Шампиньоны' dataValue='Шампиньоны' />
    </div>
  )
}