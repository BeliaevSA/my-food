import { Link } from "react-scroll"

export const HeaderTitle = (props) => {
  return (
      <Link className='header-link' to={props.toName} spy={true} smooth={true} offset={-100} duration={500}>
        {props.title}
      </Link>
  )
}