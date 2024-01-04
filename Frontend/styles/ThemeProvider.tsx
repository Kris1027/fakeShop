"use client";
import { ThemeProvider as Provider } from "next-themes";
import { useEffect, useState } from "react";

interface ProvidersProp {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ProvidersProp) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>;

  return <Provider attribute="class">{children}</Provider>;
}
