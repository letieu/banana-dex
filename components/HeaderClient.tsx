"use client";

import React, { useEffect, useState } from "react";

export default function HeaderClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`transition-all duration-500 ${
        scrolled ? "fixed top-0 left-0 w-full z-50" : "relative"
      }`}
    >
      <nav
        className={`w-full max-w-7xl mx-auto flex items-center justify-between p-4 transition-all duration-200 ${
          scrolled
            ? "bg-white/5 backdrop-blur-md border border-white/10 rounded-b-4xl shadow-lg"
            : "bg-transparent border-none shadow-none"
        }`}
      >
        {children}
      </nav>
    </header>
  );
}
