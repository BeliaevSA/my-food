import { RecipeHeader } from '../components/RecipeHeader'
import {recipesAll} from '../recipes/recipesAll'
import { RecipeImg } from '../components/RecipeImg'
import { RecipeIngredients } from '../components/RecipeIngredients'
import { RecipeCcal } from '../components/RecipeCcal'
import { RecipeInstruction } from '../components/RecipeInstruction'
import { HeaderTitle } from '../components/HeaderTitle'
import { HeaderButtonBack } from '../components/HeaderButtonBack'
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'
import '../styles/App.css';
// import './styles/recipeInfo.css';


function RecipeInfo (props){
  const recipe = recipesAll.filter(recipe => {
    return recipe.id === +localStorage.getItem('recipeShow')
  })[0]
  return (
    <div className='recipeInfo-body'>
      <header className="header-container" style={{paddingRight: 70}}>
        <div className="header">
          <HeaderButtonBack toPath='/'/>
          <HeaderTitle title={recipe.name} toName='searchRecipe'/>
        </div>
      </header>
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
      {/* <Link to={'/'} 
        className="" 
        onClick={() => localStorage.setItem(`eating-${localStorage.getItem('eatingValue')}`, recipe.id)}
      >
        <Button style={{fontSize: '1.2rem', margin: '0 auto 50px'}} className='btn-recipe' value="Добавить"/>
      </Link> */}
      
    </div>
  )
}

export default RecipeInfo