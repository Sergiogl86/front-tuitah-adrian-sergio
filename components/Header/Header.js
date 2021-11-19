import Link from "next/link";

const Header = () => (
  <nav className="navbar navbar-dark bg-dark">
    <div className="navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item m-2">
          <Link href="/list">
            <a className="nav-link">LIST</a>
          </Link>
        </li>
        <li className="nav-item m-2">
          <Link href="/create">
            <a className="nav-link">CREATE</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
