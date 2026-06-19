export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 md:px-16 py-5">

      {/* LOGO */}
      <a href="/">
        <img
          src="/logoB.jpg"
          alt="Brie Grazeful Logo"
          className="h-32 w-auto"
        />
      </a>

      {/* LINKS */}
    <div className="flex gap-10 items-center text-sm uppercase tracking-[0.18em]">

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
    </nav>
  );
}