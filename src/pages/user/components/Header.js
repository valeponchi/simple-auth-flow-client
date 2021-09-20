import { Link } from "react-router-dom"

export default function Header(props) {
  const { handleLogout } = props

  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/secure">Secure</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Log Out</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
