import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { setTypeEating } from "../store/typeEatingSlice"
import { deleteIdForShowRecipe } from '../store/showMenuSlice'
import Recipe from "./Recipe"
import { Button } from "./Button"
import { recipesAll } from "../recipes/recipesAll"



const Eating = (props) => {

  const dispatch = useDispatch()

  const fnDeleteIdForShowRecipe = () => dispatch(deleteIdForShowRecipe({typeEating: props.value}))
  const fnSetTypeEating = () => dispatch(setTypeEating({value: props.value}))

  const showMenu = useSelector(state => state.showMenu)

  const recipeId = showMenu[props.value]
  const recipeShow = recipesAll.filter(recipe => {
    return recipe.id === recipeId
  })

  if(props.eatingState){
    return (
      <div className="recipe">
        <Recipe 
          nameEating={props.name}
          key={recipeShow.id} 
          recipe={recipeShow[0]} 
        />
        <div className="btns" style={{padding: '0 5px'}}>
          <Link to={'/recipes'} onClick={fnSetTypeEating}>
            <Button value={'Заменить'} className={'btn-recipe'}/>
          </Link>
          <Button value={'Удалить'} className={'btn-recipe'} style={{backgroundColor: 'red'}} onclick={fnDeleteIdForShowRecipe}/>
        </div>
      </div>
    )
  } else {
    return (
      
      <Link to={'/recipes'} className="eating" onClick={fnSetTypeEating}>
        <h2 className="add-eating">
          Выбрать {props.name}
        </h2>
      </Link>
    )
  // }
}
}

export default Eating
