import NavLink from "./NavLink";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <NavLink href="/products">Products</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}
