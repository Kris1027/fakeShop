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
        <Button
          icon={<CiDark />}
          variant="theme"
          size="xl"
          onClick={() => setTheme("light")}
        />
      )}
      {theme === "light" && (
        <Button
          icon={<CiSun />}
          variant="theme"
          size="xl"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}
