import Recipe from "./Recipe"
import { RecipeIngredients } from "./RecipeIngredients"
import { Button } from "./Button"
import { Link } from 'react-router-dom'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setIdForShowRecipe } from "../store/showMenuSlice"

const RecipeAll = (props) => {
  const dispatch = useDispatch()
  const fnSetIdForShowRecipe = () => dispatch(setIdForShowRecipe({typeEating: typeEating, id: recipe.id}))

  const typeEating = useSelector(state => state.typeEating.value)

  const [valueButton, setValueButton] = useState(true)
  const changeValueButton = () => {
    setValueButton(valueButton => !valueButton)
  }

  const recipe = props.recipe

  return (
    <div className="recipe">
      <Recipe key={recipe.id} recipe={recipe} />
      <RecipeIngredients 
        recipeIngredients={recipe.ingredients}
        className={valueButton ? "ingredients-none" : "ingredients"}
      />
      <div className="btns">
        <Button 
          style={{backgroundColor : (valueButton ? 'green' : 'red')}}
          onclick={changeValueButton} 
          value={valueButton ? `Показать ингридиенты` : 'Скрыть ингридиенты'} 
          className='btn-recipe'
        />
        <Link to={'/'} onClick={fnSetIdForShowRecipe} >
          <Button value='+' className='btn-add-recipe'/>
        </Link>
      </div>
    </div>
  )
}

export default RecipeAll