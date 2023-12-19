import clsx from "clsx";
import { useTheme } from "../contexts/themeContext";
import Logo from "./Logo";
import Navigation from "./Navigation";

import { CiLight } from "react-icons/ci";

export default function Header() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header
      className={clsx(
        "flex w-full items-center justify-between bg-light p-4 text-dark",
        { "dark:bg-dark dark:text-light": darkMode },
      )}
    >
      <div className="flex items-center gap-6">
        <Logo />
        <Navigation />
      </div>
      <div className="cursor-pointer" onClick={toggleDarkMode}>
        <CiLight />
      </div>
    </header>
  );
}
