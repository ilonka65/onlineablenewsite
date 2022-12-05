import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <div className='container header'>
                <div className='row'>
                    <div className='col-md-12'>
                        <img className='header-img' src="/images/toplayer.svg" alt="" />
                        <div className='header-nav'>
                            <img src="/images/logo.svg" alt="" />
                            <div className='drop-item'>
                                <div className="dropdown">
                                    <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                                        Who We Help
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><NavLink className="dropdown-item" to="/dashboard">Link 1</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/dashboard">Link 2</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/dashboard">Link 3</NavLink></li>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                                        What We Do
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><NavLink className="dropdown-item" to="/dashboard">Link 1</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/dashboard">Link 2</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/dashboard">Link 3</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <button className='header-btn'>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Nav