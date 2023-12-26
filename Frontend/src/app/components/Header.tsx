import ThemeSwitcher from "../styles/ThemeSwitcher";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-light px-4 py-2 text-dark dark:bg-dark dark:text-light">
      <Logo />
      <Navigation />
      <ThemeSwitcher />
    </header>
  );
}
