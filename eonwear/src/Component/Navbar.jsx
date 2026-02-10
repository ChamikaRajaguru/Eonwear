import '../Styles/Navbar.css'
import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div style={{ flex: 1, display: 'flex' }}>
          <div className="navbar-logo">
            <a href="#home">EONWEAR</a>
          </div>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="navbar-link">Home</a>
          <a href="#collections" className="navbar-link">Collections</a>
          <a href="#offers" className="navbar-link">Offers</a>
          <a href="#about" className="navbar-link">About</a>
          <a href="#contact" className="navbar-link">Contact</a>
        </div>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <div className="navbar-toggle" onClick={toggleMenu}>
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
