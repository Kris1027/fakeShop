export default function Navigation() {
  return (
    <nav>
      <ul className='flex gap-3'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/products'>Products</a>
        </li>
        <li>
          <a href='/cart'>Cart</a>
        </li>
      </ul>
    </nav>
  );
}
