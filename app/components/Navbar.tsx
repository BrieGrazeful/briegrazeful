"use client";

import { useState } from "react";

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

return (
<> <nav className="flex items-center justify-between px-6 md:px-8 lg:px-16 py-6">

    {/* LOGO */}
    <a href="/">
      <img
        src="/logoB.jpg"
        alt="Brie Grazeful Logo"
        className="h-16 md:h-20 lg:h-24 w-auto"
      />
    </a>

    {/* DESKTOP LINKS */}
    <div className="hidden md:flex items-center gap-6 lg:gap-10 uppercase tracking-[0.2em] text-sm">

      <a href="/" className="hover:opacity-60 transition">
        Home
      </a>

      <a href="/services" className="hover:opacity-60 transition">
        Services
      </a>

      <a href="/about" className="hover:opacity-60 transition">
        About Us
      </a>

      <a href="/gallery" className="hover:opacity-60 transition">
        Gallery
      </a>

      <a href="/inquiry" className="hover:opacity-60 transition">
        Contact Us
      </a>

      <a href="/faq" className="hover:opacity-60 transition">
        FAQ
      </a>

    </div>

    {/* MOBILE MENU BUTTON */}
    <button
      className="md:hidden text-4xl"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      ☰
    </button>

  </nav>

  {/* MOBILE MENU */}
  {menuOpen && (
    <div className="md:hidden flex flex-col items-center gap-6 py-8 bg-[#F7F3EE] border-t border-[#D8CEC4] uppercase tracking-[0.25em] text-sm">

      <a
        href="/"
        onClick={() => setMenuOpen(false)}
        className="hover:opacity-60 transition"
      >
        Home
      </a>

      <a
        href="/services"
        onClick={() => setMenuOpen(false)}
        className="hover:opacity-60 transition"
      >
        Services
      </a>

      <a
        href="/about"
        onClick={() => setMenuOpen(false)}
        className="hover:opacity-60 transition"
      >
        About Us
      </a>

      <a
        href="/gallery"
        onClick={() => setMenuOpen(false)}
        className="hover:opacity-60 transition"
      >
        Gallery
      </a>

      <a
        href="/inquiry"
        onClick={() => setMenuOpen(false)}
        className="hover:opacity-60 transition"
      >
        Contact Us
      </a>

      <a
        href="/faq"
        onClick={() => setMenuOpen(false)}
        className="hover:opacity-60 transition"
      >
        FAQ
      </a>

    </div>
  )}
</>

);
}
