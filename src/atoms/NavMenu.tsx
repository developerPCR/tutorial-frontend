import { Link } from "react-router-dom";
import { NavMenu } from "../datos/interfaces"

const NavMenu :React.FC<NavMenu> = ({title = "HTML"}) => {
    return(
        <nav className="fixed top-0 z-40  w-full bg-neutral-900/50 p-4 backdrop-blur">
            <ul className="flex gap-4 md:justify-center">
                <li><Link  to={`HTML`} > {title} </Link></li>
                <li><Link  to={`CSS`}> CSS </Link></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Javascript</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">ReactJS</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Backend</a></li>
            </ul>
        </nav>
    )
}

export default NavMenu