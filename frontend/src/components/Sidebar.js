import React from 'react'
import '../styles/all.css'
import '../styles/components/sidebar.css'
import { Link } from 'react-router-dom' 

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <Link to="/"><span>V</span>anesa</Link>
      </div>
      <div className="nav-toggler">
        <span></span>
      </div>
      <ul className="nav">
        <li><Link to="/home" className="active"><i className="fa fa-home"></i>Home</Link></li>
        <li><Link to="/about"><i className="fa fa-user"></i>About</Link></li>
        <li><Link to="/library"><i className="fa fa-list"></i>Library</Link></li>
        <li><Link to="/portfolio"><i className="fa fa-briefcase"></i>Portfolio</Link></li>
        <li><Link to="/contact"><i className="fa fa-comments"></i>Contact</Link></li>
      </ul>
    </aside>
  )
}

export default Sidebar
