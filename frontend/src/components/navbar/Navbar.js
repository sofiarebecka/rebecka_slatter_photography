import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav class="nav-container">
        <img class="nav-logo" src="/rebecka_logo.png" alt="rebecka slatter logo"></img>
        <div class="space-between1"></div>
        <a href="/login">About</a>
        <a href="/signup">Work</a>
        <a href="/contact">Contact Me</a>
      </nav>
    </>
  )
}

export default Navbar;