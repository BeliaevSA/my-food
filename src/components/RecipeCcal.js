export const RecipeCcal = (props) => {

  const arrRecipeCall = Object.entries(props.callories)
  console.log(arrRecipeCall)
  return (
    <div className="container-callories">
      {/* {arrRecipeCall.map(item => {
        return console.log(item)
      })} */}
      <div>
        <p>{arrRecipeCall[0][1]}</p>
        <p>{arrRecipeCall[0][0]}</p>
      </div>
      <div>
        <p>{arrRecipeCall[1][1]}</p>
        <p>{arrRecipeCall[1][0]}</p>
      </div>
      <div>
        <p>{arrRecipeCall[2][1]}</p>
        <p>{arrRecipeCall[2][0]}</p>
      </div>
      <div>
        <p>{arrRecipeCall[3][1]}</p>
        <p>{arrRecipeCall[3][0]}</p>
      </div>
    </div>
  )
}