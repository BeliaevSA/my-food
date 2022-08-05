import { Link } from 'react-router-dom'
import { RecipeImg } from './RecipeImg'
import { RecipeHeader } from './RecipeHeader'

const Recipe = (props) => {
  

  const recipe = props.recipe
  return (
    <div>
      <Link to={'/recipeInfo'} onClick={() => localStorage.setItem('recipeShow', recipe.id)}>
        <RecipeImg className={'recipeImg'} recipeId={recipe.id}/>
      </Link>
      {props.nameEating ? <div className="nameEating">{props.nameEating}</div> : null}
      <p className="ccal">{recipe.allCall.ccal} ккал.</p>
      <RecipeHeader recipeName={recipe.name}/>
    </div>
    
  )
}

export default Recipe