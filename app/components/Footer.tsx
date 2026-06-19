import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-[#D8CEC4] bg-white px-8 md:px-20 py-16">

      <div className="flex flex-col md:flex-row justify-between gap-12">

        {/* BRAND */}
        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-[#8A7B70] mb-4">
            Brie Grazeful
          </p>

          <h2 className="text-4xl md:text-5xl font-serif leading-tight max-w-xl">
            Elevated grazing experiences designed for unforgettable gatherings
          </h2>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-4 uppercase tracking-[0.15em] text-sm">

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

        <a href="/faq" className="hover:opacity-60 transition">
            FAQ
        </a>


        </div>

        {/* SOCIALS */}
        <div className="flex flex-col gap-4 uppercase tracking-[0.15em] text-sm">
          <a href="/inquiry" className="hover:opacity-60 transition">
            Contact Us
          
        </a>
        <a href="/inquiry" className="hover:opacity-60 transition">
            Events@briegrazefulnj.com
        </a>
        <a href="/inquiry" className="hover:opacity-60 transition">
            (732) 414-7547
        </a>

         
            <a
              href="https://www.instagram.com/brie_grazeful/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition"
            >
              <FaInstagram size={24} />
            </a>

            <a
              href="https://www.tiktok.com/@brie_grazeful"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition"
            >
              <FaTiktok size={24} />
            </a>
        </div>
      </div>

      <div className="mt-16 pt-6 border-t border-[#D8CEC4] flex flex-col md:flex-row justify-between gap-4 text-sm text-[#8A7B70]">

        <p>
          © 2026 Brie Grazeful
        </p>

        <p>
          New Jersey Luxury Catering & Events
        </p>
      </div>
    </footer>
  );
}