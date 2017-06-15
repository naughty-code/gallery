import { ActLink } from './ActLink'

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-links">
        <ActLink className="nav-link" exact to="/"> Home </ActLink>
        <ActLink className="nav-link" to="/about"> About </ActLink>
        <ActLink className="nav-link" to="/topics"> Topics </ActLink>
    </div>
  </nav>
)

export default Navbar;
