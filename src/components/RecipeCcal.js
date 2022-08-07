import { RecipeCcalItem } from "./RecipeCcalItem"

export const RecipeCcal = (props) => {

  const arrRecipeCall = Object.entries(props.callories)
  // console.log(arrRecipeCall)
  return (
    <div className="container-callories">
      {arrRecipeCall.map(item => {
        return <RecipeCcalItem key={item[0]} call={item[1]} name={item[0]} />
      })}      
    </div>
  )
}