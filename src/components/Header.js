import { Link } from "react-scroll"

export const Header = (props) => {
  return (
    <div className="header">
      <Link className='header-link' to={props.link} spy={true} smooth={true} offset={0} duration={500}>
        {props.title}
      </Link>
    </div>
  )
}