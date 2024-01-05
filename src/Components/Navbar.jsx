import {useState, useEffect} from 'react'
import {Link, NavLink} from "react-router-dom"
import Logo from "../images/logo.png"
import { links } from "../data"
import { FaBars } from "react-icons/fa6"
import { MdOutlineClose } from "react-icons/md";
import "./Navbar.css"

const Navbar = () => {

    const [isNavShowing, setIsNavShowing] = useState(false)
    useEffect (() => {
        window.scrollTo({top:0, left:0})
    }, [])

  return (
    <nav>
        <div className="container  nav_container">
            <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
                <img src={Logo} alt="Logo"></img>
            </Link>
            <ul className={`nav_links ${isNavShowing ? "show_nav" : "hide_nav"}`}>
                {
                    links.map(({name, path}, index) =>{
                        return(
                            <li key={index} onClick={() => { window.window.scrollTo({top:0, left:0})}}>
                                <NavLink to={path} className={({isActive})=> isActive ? "active_nav" : ""} onClick={() => setIsNavShowing(prev => !prev)}> {name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
                <button className="nav_toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                    {
                        isNavShowing ? <MdOutlineClose/> : <FaBars/>
                    }
                </button>
        </div>
    </nav>
  )
}

export default Navbar

