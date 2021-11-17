import Link from "next/link";

const Header = () => (
  <div>
    <Link href="/list">
      <a> LIST --</a>
    </Link>
    <Link href="/create">
      <a> CREATE TUIT </a>
    </Link>
  </div>
)

export default Header;