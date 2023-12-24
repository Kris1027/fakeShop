import ThemeSwitcher from "../ThemeSwitcher";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="bg-dark px-4 py-2 text-light">
      <Logo />
      <ThemeSwitcher />
    </header>
  );
}
