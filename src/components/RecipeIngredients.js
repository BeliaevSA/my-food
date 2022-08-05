
export const RecipeIngredients = (props) => {
    return (
      // <ul className={props.valueButton ? "ingredients-none" : "ingredients"}>
      <ul className={props.className}>
        {props.recipeIngredients.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>
        })}
      </ul>

      
    )
}
