import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-light ">
                <div className="container mt-3">
                    <img className='layer' src="/images/toplayer.svg" alt="" />
                    <img src="/images/logo.svg" alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="mynavbar">
                        <ul className="navbar-nav m-auto">

                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Who We Help</NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/dashboard">Link 1</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/dashboard">Link 2</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/dashboard">Link 3</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">What We Do</NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/dashboard">Link 1</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/dashboard">Link 2</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/dashboard">Link 3</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className='header-btn'>Contact Us</button>
                        </form>
                    </div>
                </div>
            </nav>
    </>
  )
}

export default Navbar