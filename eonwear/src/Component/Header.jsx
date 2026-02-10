import '../Styles/Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">EONWEAR</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#collections">Collections</a>
          <a href="#offers">Offers</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
