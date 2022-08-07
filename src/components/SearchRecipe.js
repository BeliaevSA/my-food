export const SearchRecipe = (props) => {
  const handleChange = (ev) => {
    props.changeSearchRecipe(ev.target.value)
  }
  return (
    <form action="" name='searchRecipe' className="search-recipe" onSubmit={(ev) => ev.preventDefault} >
      <h3>Поиск рецепта</h3>
      <input type='text' name='name' onChange={handleChange} value={props.searchRecipe} autoComplete="off" />
    </form>
  )
}
