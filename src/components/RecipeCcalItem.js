export const RecipeCcalItem = (props) => {
  let nameCall
  
  switch(props.name){
    case 'ccal' :
      nameCall = 'ккал';
      break;
    case 'protein' :
      nameCall = 'белки';
      break;
    case 'fats' :
      nameCall = 'жиры';
      break;
    case 'carb' :
      nameCall = 'углеводы';
      break;
    default:
      break
  }

  return (
    <div className='callories-item'>
      <h3>{props.call}</h3>
      <p>{nameCall}</p>
    </div>
    )
}