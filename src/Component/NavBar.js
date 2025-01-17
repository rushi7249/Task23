import React from 'react'
import "./NavBar.css"
import { NavLink } from 'react-router-dom'
import icon from "../Image/icon.jpg"

const NavBar = () => {
    return (
        < >
<div className="NavBar"> 
<div className="Logo">
<NavLink to="/Dashboard">
    <img className="img" src={icon} alt="icon" />
    </NavLink>   
</div>
<div className="Nav_list">
<ul className="nav_ul">
    <li className="home_li">
      <NavLink  className={({ isActive }) => (isActive ? "active-class" : "inactive-class")} to="/Home">
          Home
      </NavLink>
    </li>
    <li className="btn_1">
        <NavLink to="./Login">
        <button >Login</button>

        </NavLink>
    </li>
    <li className="btn_2">
        <NavLink to="/Signup">
        <button>Sign Up</button>

        </NavLink>
    </li>
</ul>
</div>
</div>
        </>
    )
}

export default NavBar
