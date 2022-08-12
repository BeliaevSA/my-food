import { Button } from "./Button"
import { Link } from "react-router-dom"

export const HeaderButtonBack = (props) => {
  // console.log(props.toPath)
  return (
    <Link to={props.toPath} className="header-btns__back" >
      <Button value='<'/>
    </Link>
  )
}

