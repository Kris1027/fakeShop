"use client";
// import { Inter } from 'next/font/google';
import "./styles/globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { ThemeProvider, useTheme } from "./contexts/themeContext";

// const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
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
