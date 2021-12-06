import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Header.css'

export const Header = (props) => {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand " style={{ color: "white"}} href="#">Employee Management System</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="navbar__link" to="/employees">Employees</Link>
                        </li>
                        <li className="nav-item" style={{marginLeft: "10px"}}>
                            <Link className="navbar__link" to="/add-employee">Add Employee</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
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
