import React from 'react'
import './App.css'

const App = () => {

  return (
    <>
    <div className="header">
      <a href="/" className="logo">RJ</a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon" />
      </label>
      <ul className="menu">
        <li className="nav-item"><a className="nav-link" href="/home">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
        <li className="nav-item"><a className="nav-link" href="/proyects">Proyects</a></li>
        <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
      </ul>
    </div>
    </>
  )
}

export default App 
