export const RecipeInstruction = (props) => {
  return (
    <div className={props.className}>
      {props.recipeInstruction.map((ingredient, index) => {
        return <p key={index}>{ingredient}</p>
      })}
    </div>

    
  )
}