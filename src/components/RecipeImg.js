export const RecipeImg = (props) => {
  return (
    <div 
      className={props.className} 
      style={{backgroundImage: `url(./images/${props.recipeId}.jpg)`}} 
    />)
}