"use client";
import { useTheme } from "next-themes";
import Button from "../ui/Button";
import { useEffect, useState } from "react";

import { CiDark, CiSun } from "react-icons/ci";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {theme === "dark" && (
        <Button variant="theme" size="xl" onClick={() => setTheme("light")}>
          <CiDark />
        </Button>
      )}
      {theme === "light" && (
        <Button variant="theme" size="xl" onClick={() => setTheme("dark")}>
          <CiSun />
        </Button>
      )}
    </div>
  );
}
