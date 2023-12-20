"use client";
import "./styles/globals.css";
import { ThemeProvider } from "./contexts/themeContext";

import Header from "./components/Header";
import Footer from "./components/Footer";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
