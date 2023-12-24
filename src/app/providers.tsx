"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

interface ProvidersProp {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProp) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>;

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
