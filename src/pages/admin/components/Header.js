import { Link } from "react-router-dom"

export default function Header(props) {
  const { handleLogout } = props

  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/admin/dashboard">Secure Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/signin">Sign In</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Log Out</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
