import { RecipeHeader } from '../components/RecipeHeader'
import {recipesAll} from '../recipes/recipesAll'
import { RecipeImg } from '../components/RecipeImg'
import { RecipeIngredients } from '../components/RecipeIngredients'
import { RecipeCcal } from '../components/RecipeCcal'
import { RecipeInstruction } from '../components/RecipeInstruction'
import { Header } from '../components/Header'
import '../styles/App.css';
// import './styles/recipeInfo.css';


function RecipeInfo (props){
  const recipe = recipesAll.filter(recipe => {
    return recipe.id === +localStorage.getItem('recipeShow')
  })[0]
  return (
    <div>
      <Header title={recipe.name} link={'recipeInfo'}/>
      <div className='recipeInfo' name='recipeInfo'>
        <section className='recipeInfo_container'>
          <img 
            src={`./images/${recipe.id}.jpg`} 
            alt={recipe.name} 
            width='100%' 
            className='recipeInfo__img'
          />
          <RecipeCcal callories={recipe.allCall} />
        </section>
        <section className='recipeInfo_container'>
          <div className='recipeInfo__ingredients'>
            <h3>Ингридиенты</h3>
            <RecipeIngredients recipeIngredients={recipe.ingredients} className='ingredients-list'/>
          </div>
          <div className='recipeInfo__instruction'>
            <h3>Способ приготовления</h3>
            <RecipeInstruction recipeInstruction={recipe.cookingMethod} className='instruction-item'/>
          </div>
        </section>
      </div>
    </div>
  )
}

export default RecipeInfo