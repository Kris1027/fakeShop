import ThemeSwitcher from "./styles/ThemeSwitcher";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex justify-between bg-light px-4 py-2 text-dark dark:bg-dark dark:text-light">
      <Logo />
      <ThemeSwitcher />
    </header>
  );
}
