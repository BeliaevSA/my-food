export const FilterRecipesItem = (props) => {

  return (
    <label htmlFor={props.id} >
      <input 
        data-value={props.dataValue}
        type='checkbox' 
        id={props.id} 
        onClick={props.onclick}
      />
      {props.value}
    </label>
  )
}