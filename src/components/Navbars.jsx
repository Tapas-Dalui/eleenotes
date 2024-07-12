import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbars() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
                    <div className="container">
                        <a href="index.html" className="navbar-brand"><img src="../assets/img/ele_fav.png" className="ele-logo" alt="" /></a>

                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa-solid fa-bars"></i>
                        </button>

                        <div className="navbar-collapse collapse" id="navbarContent">
                            <ul className="navbar-nav ml-lg-4 pt-3 pt-lg-0">
                                <li className="nav-item active">
                                    <NavLink to='/' className="nav-link">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/about' className="nav-link">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/blog' className="nav-link">Blogs</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/contact' className="nav-link">Contact</NavLink>
                                </li>
                            </ul>

                            <div className="ml-auto">
                                <NavLink to='/' className="btn btn-login btn-outline mr-2">Student</NavLink>
                                <NavLink to='/' className="btn btn-outline">Admin</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>

                
            </header>

        </>
    )
}

export default Navbars
