import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-[#2A2623]">

      <Navbar />

      {/* HERO */}
<section className="relative h-[85vh] overflow-hidden">

  <img
    src="/hero.jpg"
    className="absolute inset-0 w-full h-full object-cover object-center grayscale brightness-[0.55]"
    alt="Brie Grazeful Charcuterie Cart"
  />

  <div className="relative z-10 h-full flex items-end pb-24 px-6 md:px-12">

    {/* CONTENT CONTAINER */}
    <div className="w-full max-w-[1200px] mx-auto">

      {/* TEXT CONTAINER */}
      <div className="max-w-2xl text-white">

        <p className="uppercase tracking-[0.4em] text-sm md:text-lg font-bold mb-6 text-[#EBF2FA]">
          Premium Charcuterie & Grazing Experience
        </p>

        <h1 className="font-serif leading-[0.95] text-5xl md:text-6xl lg:text-7xl">
          Luxury Experiences To
          <br />
          Leave Lasting Impressions
        </h1>

        <p className="mt-8 text-lg md:text-xl leading-relaxed max-w-xl text-[#EAE3DB]">
          Elevated grazing experiences crafted for weddings,
          showers, corporate events, and all memorable celebrations.
        </p>

        <div className="mt-12 flex flex-wrap gap-6">

          <a
            href="/inquiry"
            className="bg-white text-[#2A2623] px-8 py-4 rounded-full uppercase tracking-[0.15em] text-sm hover:bg-[#EAE3DB] transition"
          >
            Book Your Experience
          </a>

          <a
            href="/services"
            className="border border-white px-8 py-4 rounded-full uppercase tracking-[0.15em] text-sm hover:bg-white hover:text-[#2A2623] transition"
          >
            Our Services
          </a>

        </div>

      </div>

    </div>

  </div>

</section>


      {/* SERVICES PREVIEW */}
<section className="px-8 md:px-20 py-28 border-b border-[#D8CEC4] bg-white">

  {/* HEADER */}
  <div className="mb-40">

    <p className="uppercase tracking-[0.4em] text-sm text-[#8A7B70] mb-6">
      Curated Experiences
    </p>

    <h2 className="text-5xl md:text-7xl font-serif leading-none">
      Our Services
    </h2>

  </div>

  {/* SERVICES GRID */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* CHARCUTERIE */}
    <a
      href="/services"
      className="group"
    >
      <div className="overflow-hidden rounded-[2rem]">

        <img
          src="/charcuterie.jpg"
          className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
        />
      </div>

      <div className="mt-6">

        <h3 className="text-3xl font-serif leading-tight">
          Signature Luxury
          <br />
          Charcuterie Bar
        </h3>

      </div>
    </a>

    {/* ICE CREAM */}
    <a
      href="/services"
      className="group"
    >
      <div className="overflow-hidden rounded-[2rem]">

        <img
          src="/icecream.jpg"
          className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
        />
      </div>

      <div className="mt-6">

        <h3 className="text-3xl font-serif leading-tight">
          Ice Cream
          <br />
          Sundae Bar
        </h3>

      </div>
    </a>

    {/* ACAI */}
    <a
      href="/services"
      className="group"
    >
      <div className="overflow-hidden rounded-[2rem]">

        <img
          src="/acai.jpeg"
          className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
        />
      </div>

      <div className="mt-6">

        <h3 className="text-3xl font-serif leading-tight">
          Acai Bowl
          <br />
          Bar
        </h3>

      </div>
    </a>

  </div>

</section>

     

      <Footer />

    </main>
  );
}