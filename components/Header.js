import Link from "next/link";

const Header = () => (
  <div>
    <Link href="/list-post">
      <a> LIST -</a>
    </Link>
    <Link href="/create-post">
      <a> CREATE </a>
    </Link>
  </div>
)

export default Header;