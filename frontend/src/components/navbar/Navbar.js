import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="nav-container">
        <a href="/"><img className="nav-logo" src="/rebecka_logo.png" alt="rebecka slatter logo"></img></a>
        <div className="space-between1"></div>
        <a className="navigation-link" href="/about">About</a>
        <a className="navigation-link" href="/work">Work</a>
        <a className="navigation-link" href="/contacts">Contact</a>
      </nav>
    </>
  )
}

export default Navbar;