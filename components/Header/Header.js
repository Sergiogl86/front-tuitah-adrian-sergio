import Link from "next/link";

const Header = () => (
  <nav className="navbar navbar-dark bg-primary">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link href="/list">
            <a className="nav-link" href="#">LIST</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/create">
            <a className="nav-link" href="#">CREATE</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header;