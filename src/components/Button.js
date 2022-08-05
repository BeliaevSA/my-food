export const Button = (props) => {
  return (
    <button 
      style={props.style}
      className={props.className} 
      onClick={props.onclick}
    >
      {props.value}
    </button>
  )
}

