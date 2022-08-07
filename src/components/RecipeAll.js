import Recipe from "./Recipe"
import { RecipeIngredients } from "./RecipeIngredients"
import { Button } from "./Button"
import { Link } from 'react-router-dom'
import { useState } from "react"

const RecipeAll = (props) => {
  const [valueButton, setValueButton] = useState(true)

  const changeValueButton = (valueButton) => {
    setValueButton(valueButton => !valueButton)
  }

  const recipe = props.recipe

  return (
    <div className="recipe">
      <Recipe 
        key={recipe.id} 
        recipe={recipe} 
        valueButton={valueButton}/>
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
        <Link to={'/'} 
          className="" 
          onClick={() => localStorage.setItem(`eating-${props.eating}`, recipe.id)}
        >
          <Button value='+' className='btn-add-recipe'/>
        </Link>
      </div>
    </div>
  )
}

export default RecipeAll