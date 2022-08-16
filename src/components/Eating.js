import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { setTypeEating } from "../store/typeEatingSlice"
import Recipe from "./Recipe"
import { Button } from "./Button"
import { recipesAll } from "../recipes/recipesAll"



const Eating = (props) => {

  const dispatch = useDispatch()

  const recipeId = localStorage.getItem(`eating-${props.value}`)
  const recipeShow = recipesAll.filter(recipe => {
    return recipe.id === +recipeId
  })
  const deliteRecipe = () => {
    return props.changeEatingState(localStorage.removeItem(`eating-${props.value}`))
    
  }
  if(props.eatingState){
    return (
      <div className="recipe">
        <Recipe 
          nameEating={props.name}
          key={recipeShow.id} 
          recipe={recipeShow[0]} 
        />
        <div className="btns" style={{padding: '0 5px'}}>
          <Link to={'/recipes'} onClick={() => dispatch(setTypeEating({value: props.value}))}>
            <Button value={'Заменить'} className={'btn-recipe'}/>
          </Link>
          <Button value={'Удалить'} className={'btn-recipe'} style={{backgroundColor: 'red'}} onclick={deliteRecipe}/>
        </div>
      </div>
    )
  } else {
    return (
      
      <Link to={'/recipes'} className="eating" onClick={() => dispatch(setTypeEating({value: props.value}))}>
        <h2 className="add-eating">
          Выбрать {props.name}
        </h2>
      </Link>
    )
  // }
}
}

export default Eating
