import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Navbar = () =>{
    return (
      <div>
        <nav className="navbar navbar-expand-lg  bg-dark text-light" style={{position:"fixed",top:0,width:"100vw",zIndex:10}}>
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/" >NewsMonkey</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon " style={{color:"white"}} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link  text-light" aria-current="page" to="/">Home</Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link text-light" to="/about">About</a>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link text-light" to="/business">Business</Link></li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/entertainment">Entertainment</Link></li>
             
              <li className="nav-item">
                <Link className="nav-link text-light" to="/health">Health</Link></li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/science">Science</Link></li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/sports">Sports</Link></li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/technology">Technology</Link></li>
              </ul>
          </div>
        </div>
      </nav>
      </div>
    )
  
}

export default Navbar
