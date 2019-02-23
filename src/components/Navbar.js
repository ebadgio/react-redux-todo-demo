import React from 'react'
import '../styles/App.css'

const Navbar = ({}) => {
  return (
    <div className="nav">
        <div className="nav-inner">

        <h2 className="title" style={{marginBottom: 0}}>React Redux Todo</h2>

       

        <div>
            <i className="fab fa-github icon is-medium fa-2x"></i>
        </div>
      </div>
    </div>
  )
}

export default Navbar
