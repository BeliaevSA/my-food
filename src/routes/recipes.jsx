import breakfast from '../recipes/recipes-breakfast.json'
import snack from '../recipes/recipes-snack.json'
import lunch from '../recipes/recipes-lunch.json'
import supper from '../recipes/recipes-supper.json'
import '../styles/App.css';
import RecipeAll from '../components/RecipeAll'
import { HeaderTitle } from '../components/HeaderTitle'
import { SearchRecipe } from '../components/SearchRecipe';
import { useState } from 'react';
import { Button } from '../components/Button';
import { HeaderButtonBack } from '../components/HeaderButtonBack';

function Recipes(props){

  let recipes, headerTitle
  switch(localStorage.getItem('eatingValue')){
    case 'breakfast':
      recipes = breakfast
      headerTitle = 'Завтрак'
      break
    case 'snack':
      recipes = snack
      headerTitle = 'Перекус'
      break
    case 'lunch':
      recipes = lunch
      headerTitle = 'Обед'
      break
    case 'supper':
      recipes = supper
      headerTitle = 'Ужин'
      break
    default: break
  };

  const [valueFilterButton, setValueFilterButton] = useState(false)

  const changeValueFilterButton = () => {
    setValueFilterButton(valueFilterButton => !valueFilterButton)
  }

  const [ searchRecipe, changeSearchRecipe ] = useState('')
  const [ filterRecipes, setFilterRecipe ] = useState({})
  const [ finishArrFilterRecipes, createFinishArrFilterRecipes] = useState(recipes)

  const useFilterRecipe = (ev) => {
    ev.preventDefault()
    let finishFilterRecipes = recipes
    const arrFilterRecipes = Object.entries(filterRecipes)
    arrFilterRecipes.forEach((item) => {
      
      if(item[1]){
        finishFilterRecipes = finishFilterRecipes.filter(recipe => {
          return recipe.ingredients.join(' ').toLowerCase().includes(item[0].toLowerCase())
        })
      }
    })
    createFinishArrFilterRecipes( finishFilterRecipes )
  }
  // console.log( finishArrFilterRecipes )
  // function mixRecipes (arr){
  //   for(let i = 1; i < arr.length-1; i++){
  //     let j = Math.floor(Math.random() * i) ;
  //     let t = arr[j];
  //     arr[j] = arr[i-1];
  //     arr[i-1] = t
  //   }
  //   return arr
  // }
  // recipes = mixRecipes(recipes)
  const handleChange = (ev) => {
    ev.preventDefault()
    changeSearchRecipe(ev.target.value)

  }
  return (
    <div>
      <header className="header">
        <HeaderButtonBack toPath='/'/>
        <HeaderTitle title={headerTitle} toName={valueFilterButton ? 'recipe' : 'searchRecipe' }/>
        <Button value='&#128269;' className='header-btns__search' onclick={changeValueFilterButton}/>
      </header>
      <SearchRecipe 
        changeSearchRecipe={changeSearchRecipe} 
        searchRecipe={searchRecipe} 
        className={valueFilterButton ? "search-recipe-none" : "search-recipe"} 
        filterRecipes={filterRecipes} 
        setFilterRecipe={setFilterRecipe}
        useFilterRecipe={useFilterRecipe}/>
      <h3>Поиск рецепта</h3>
      <input type='text' className='input_search' onChange={handleChange} value={props.searchRecipe} autoComplete="off" />
      <div className="recipes" name='recipe'>
        
        {finishArrFilterRecipes.filter((recipe) => {
          return recipe.name.toLowerCase().includes(searchRecipe.toLowerCase())
        })
        .map((recipe, index) => {
          return (
          <RecipeAll key={index} nameEating={props.nameEating} recipe={recipe} eating={localStorage.getItem('eatingValue')} />
          )
        })}
      </div>
    </div>
  )
}

export default Recipes

// .filter((recipe) => {
//           return recipe.name.toLowerCase().includes(searchRecipe.toLowerCase())
//         })