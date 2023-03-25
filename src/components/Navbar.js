import React from 'react'
import PropTypes from 'prop-types'
import { Link }  from 'react-router-dom';

export default function Navbar(props) {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      //enable dark mode  in video no. 12
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    {/* <nav className="navbar navbar-expand-lg navbar-light  bg-light"> color change ho jata he =yha light he fir dark kra */}
  
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    {/* <a className="navbar-brand" href="#">{props.title}</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"  href="/">HOME</a>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link"href="/">{props.aboutText}</a> */}
          <Link className="nav-link" to="/about">{props.aboutText}</Link>

        </li>
       </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
         <button className="btn btn-outline-success" type="submit">Search</button> */}
  

         <div className={`form-check form-switch text-${props.mode==='light'?'dark':'lihgt'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox"  id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">ENABLE DARK MODE</label>
          </div>
         </div>
      </div>

    </nav>
    
  )
}

Navbar.prototypes = {
  // with help of this prototype we can set probs property if we set prototype = string so we can only use title = string
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: 'set title here',
  aboutText: 'ABOUT'
};