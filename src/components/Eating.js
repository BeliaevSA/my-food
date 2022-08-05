import EatingName from "./EatingName"
import { Link } from 'react-router-dom'
import Recipe from "./Recipe"
import { Button } from "./Button"
import { recipesAll } from "../recipes/recipesAll"



const Eating = (props) => {

  const recipeId = localStorage.getItem(`eating-${props.value}`)
  const recipeShow = recipesAll.filter(recipe => {
    return recipe.id === +recipeId
  })
  const deliteRecipe = () => {
    return props.changeEatingState(localStorage.removeItem(`eating-${props.value}`))
    
  }
  // console.log(recipeShow)
  if(props.eatingState){
    return (
      <div className="recipe">
        <Recipe 
          nameEating={props.name}
          key={recipeShow.id} 
          recipe={recipeShow[0]} 
        />
        <div className="btns" style={{padding: '0 5px'}}>
          <Link to={'/recipes'} onClick={() => localStorage.setItem('eatingValue', props.value)}>
            <Button value={'Заменить'} className={'btn-recipe'}/>
          </Link>
          <Button value={'Удалить'} className={'btn-recipe'} style={{backgroundColor: 'red'}} onclick={deliteRecipe}/>
        </div>
      </div>
    )
  } else {
    return (
      
      <Link to={'/recipes'} className="eating" onClick={() => localStorage.setItem('eatingValue', props.value)}>
        <EatingName name={props.name} value={props.value}/>
      </Link>
    )
  // }
}
}

export default Eating
