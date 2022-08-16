import { recipesAll } from '../recipes/recipesAll'
import '../styles/App.css';
import RecipeAll from '../components/RecipeAll'
import { HeaderTitle } from '../components/HeaderTitle'
import { SearchRecipe } from '../components/SearchRecipe';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../components/Button';
import { HeaderButtonBack } from '../components/HeaderButtonBack';

function Recipes(props){

  const typeEating = useSelector(state => state.typeEating.value)

  let recipes, headerTitle
  switch(typeEating){
    case 'breakfast':
      recipes = recipesAll.filter(recipe => recipe.id > 1000 && recipe.id < 2000)
      headerTitle = 'Завтрак'
      break
    case 'snack':
      recipes = recipesAll.filter(recipe => recipe.id > 2000 && recipe.id < 3000)
      headerTitle = 'Перекус'
      break
    case 'lunch':
      recipes = recipesAll.filter(recipe => recipe.id > 3000 && recipe.id < 4000)
      headerTitle = 'Обед'
      break
    case 'supper':
      recipes = recipesAll.filter(recipe => recipe.id > 4000 && recipe.id < 5000)
      headerTitle = 'Ужин'
      break
    case 'adding':
      recipes = recipesAll.filter(recipe => recipe.id > 5000 && recipe.id < 6000)
      headerTitle = 'Дополнительные рецепты'
      break
    default:
      recipes = recipesAll
      headerTitle = 'Все рецепты'
  };

  const [valueFilterButton, setValueFilterButton] = useState(true)

  const changeValueFilterButton = () => {
    setValueFilterButton(valueFilterButton => !valueFilterButton)
  }

  const [ searchRecipe, changeSearchRecipe ] = useState('')
  const [ filterRecipes, setFilterRecipe ] = useState({})
  const [ finishArrFilterRecipes, createFinishArrFilterRecipes] = useState(recipes)

  const useFilterRecipe = (ev) => {
    let finishFilterRecipes = recipes
    const arrFilterRecipes = Object.entries(filterRecipes)
    arrFilterRecipes.forEach((item) => {
      
      if(item[1]){
        finishFilterRecipes = finishFilterRecipes.filter(recipe => {
          return recipe.ingredients.join(' ').includes(item[0])
        })
      }
    })
    createFinishArrFilterRecipes( finishFilterRecipes )
  }
  
  const handleChange = (ev) => {
    ev.preventDefault()
    changeSearchRecipe(ev.target.value)

  }
  return (
    <div>
      <header className="header-container">
        <div className="header">
          <HeaderButtonBack toPath='/'/>
          <HeaderTitle title={headerTitle} toName='searchRecipe'/>
          <Button value='&#128269;' className='header-btns__search' onclick={changeValueFilterButton}/>
        </div>
        <SearchRecipe 
          changeSearchRecipe={changeSearchRecipe} 
          searchRecipe={searchRecipe} 
          className={valueFilterButton ? "search-recipe-none" : "search-recipe"} 
          filterRecipes={filterRecipes} 
          setFilterRecipe={setFilterRecipe}
          useFilterRecipe={useFilterRecipe}
          changeValueFilterButton={changeValueFilterButton}
        />
      </header>
      <div className='searchRecipe-container'>
        <h3 name='searchRecipe'>Поиск рецепта</h3>
        <input type='text' className='input_search' onChange={handleChange} value={props.searchRecipe} autoComplete="off" />
      </div>
      <div className="recipes" name='recipe'>
        
        {finishArrFilterRecipes.filter((recipe) => {
          return recipe.name.toLowerCase().includes(searchRecipe.toLowerCase())
        })
        .map((recipe, index) => {
          return (
          <RecipeAll key={index} nameEating={props.nameEating} recipe={recipe} eating={typeEating} />
          )
        })}
      </div>
    </div>
  )
}

export default Recipes



// function mixRecipes (arr){
  //   for(let i = 1; i < arr.length-1; i++){
  //     let j = Math.floor(Math.random() * i) ;
  //     let t = arr[j];
  //     arr[j] = arr[i-1];
  //     arr[i-1] = t
  //   }
  //   return arr
  // }
  // recipes = mixRecipes(recipes)