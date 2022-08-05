import { RecipeHeader } from '../components/RecipeHeader'
import {recipesAll} from '../recipes/recipesAll'
import { RecipeImg } from '../components/RecipeImg'
import { RecipeIngredients } from '../components/RecipeIngredients'
import { RecipeCcal } from '../components/RecipeCcal'
import { RecipeInstruction } from '../components/RecipeInstruction'
import '../styles/recipes.css';
import '../styles/recipeInfo.css';


function RecipeInfo (props){
  const recipe = recipesAll.filter(recipe => {
    return recipe.id === +localStorage.getItem('recipeShow')
  })[0]
  console.log(recipe.allCall)
  return (
    <div className='recipeInfo'>
      <RecipeHeader recipeName={recipe.name}/>
      <section>
        <RecipeImg recipeId={recipe.id} className={'recipeImg'} />
        <RecipeCcal callories={recipe.allCall} />
      </section>
      {/* <section>
        <RecipeIngredients />
        <RecipeInstruction />
      </section> */}
    </div>
  )
}

export default RecipeInfo