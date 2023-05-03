import React from 'react'
import img from './download.png'
import '../App.css'
import {Link} from 'react-router-dom'
import { FiSearch } from 'react-icons/fi/index.esm'


function Navbar() {
  return (
    <nav className="navbar">
        <img src={img} alt="Logo" />
        <div className="container">
            <Link to="/tvshows">TV Shows</Link> 
            <Link to="/Orginals">Orginals</Link> 
            <Link to="/Moives"> Moives</Link>
            <Link to="/Series"> Series</Link>
        </div>
        <FiSearch/>
    </nav>
  )
}

export default Navbar