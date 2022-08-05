import breakfast from '../recipes/recipes-breakfast.json'
import snack from '../recipes/recipes-snack.json'
import lunch from '../recipes/recipes-lunch.json'
import supper from '../recipes/recipes-supper.json'
import '../styles/recipes.css';
import RecipeAll from '../components/RecipeAll'

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

  return (
    <div className="recipes">
      {recipes.map((recipe, index) => {
        return (
        <RecipeAll key={index} nameEating={props.nameEating} recipe={recipe} eating={localStorage.getItem('eatingValue')} />
        )
      })}
    </div>
  )
}

export default Recipes