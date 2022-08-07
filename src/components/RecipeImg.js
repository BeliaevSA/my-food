export const RecipeImg = (props) => {
  // console.log('./images/${props.recipeId}.jpg')
  return (
    <div 
      className={props.className} 
      style={{backgroundImage: `url(./images/${props.recipeId}.jpg)`}} 
    />)
}