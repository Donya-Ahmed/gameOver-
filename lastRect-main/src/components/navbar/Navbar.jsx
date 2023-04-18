import React,{ useContext }  from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

import {LoginContext} from '../../context/Context.js'

export default function Navbar() {
 
  let {user} =useContext(LoginContext)
  let{Logout}=useContext(LoginContext)

  return (
    <nav className="navbar navbar-expand-lg bg-dark shadow-lg fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#"><img  src={logo} className='w-100'/><span></span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
      {user?<ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
          <li className="nav-item">
            <Link className="nav-link text-secondary" to="">Home</Link>
          </li>
         
          
        </ul>:''}
       {user? <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
          <li className="nav-item">
            <p className="nav-link border border-info text-info rounded"  onClick={Logout}>LogOut</p>
          </li>
          
        </ul>: <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          
          <li className="nav-item">
            <Link className="nav-link text-secondary" to="">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link border border-info text-info rounded"  to='register'>Jion Free</Link>
          </li>
          
        </ul>}
      </div>
    </div>
  </nav>
  )
}
