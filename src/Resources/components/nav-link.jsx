import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import "../../App.css"
import "../style/navbar-style.css"
const NavLink = ({label, link}) =>{
    const location = useLocation().pathname;
    return (
        <>
        <Link to={link} className={`text-primary ${link == location?"active":""}`}>{label}</Link>
        </>
    )
}
export default NavLink;