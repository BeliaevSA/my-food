import breakfast from '../recipes/recipes-breakfast.json'
import snack from '../recipes/recipes-snack.json'
import lunch from '../recipes/recipes-lunch.json'
import supper from '../recipes/recipes-supper.json'
import '../styles/App.css';
import RecipeAll from '../components/RecipeAll'
import { Header } from '../components/Header'
import { SearchRecipe } from '../components/SearchRecipe';
import { useState } from 'react';

function Recipes(props){

  let recipes;
  switch(localStorage.getItem('eatingValue')){
    case 'breakfast':
      recipes = breakfast
      break
    case 'snack':
      recipes = snack
      break
    case 'lunch':
      recipes = lunch
      break
    case 'supper':
      recipes = supper
      break
    default: break
  };

  const [ searchRecipe, changeSearchRecipe ] = useState('')

  console.log(searchRecipe)

  return (
    <div>
      <Header title={'Рецепты'} link={'searchRecipe'}/>
      <SearchRecipe changeSearchRecipe={changeSearchRecipe} searchRecipe={searchRecipe} />
      <div className="recipes" name='recipe'>
        {recipes.filter((recipe) => {
          return recipe.name.toLowerCase().includes(searchRecipe.toLowerCase())
        }

        ).map((recipe, index) => {
          return (
          <RecipeAll key={index} nameEating={props.nameEating} recipe={recipe} eating={localStorage.getItem('eatingValue')} />
          )
        })}
      </div>
    </div>
  )
}

export default Recipes