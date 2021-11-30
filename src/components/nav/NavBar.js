import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <nav className= "navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar navbar-expand-lg navbar-light bg-light">
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/employees">Employees</Link>
                </li>
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/add-employee">Add Employee</Link>
                </li>
            </ul>
        </nav>
    )
}