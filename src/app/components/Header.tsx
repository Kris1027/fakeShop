import Logo from "./Logo";
import Navigation from "./Navigation";

import { CiLight } from "react-icons/ci";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between bg-light p-4 text-dark">
      <div className="flex items-center gap-6">
        <Logo />
        <Navigation />
      </div>
      <div className="cursor-pointer">
        <CiLight />
      </div>
    </header>
  );
}
