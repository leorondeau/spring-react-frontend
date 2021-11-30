import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Header.css'

export const Header = (props) => {

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://localhost:3000/" className="navbar-brand">Employee Management App</a></div>
                    <ul className="navbar navbar-expand-md navbar-dark bg-dark">
                        <li className="navbar navbar-expand-md navbar-dark bg-dark">
                            <Link className="navbar__link" to="/employees">Employees</Link>
                        </li>
                        <li className="navbar__item active">
                            <Link className="navbar__link" to="/add-employee">Add Employee</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}



// import React, { Component } from 'react'

// export default class Header extends Component {
//     render() {
//         return (
//             <div>
//                 <header>
//                     <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//                         <div><a href="https://javaguides.net" className="navbar-brand">Employee Management App</a></div>
//                     </nav>
//                 </header>
//             </div>
//         )
//     }
// }
