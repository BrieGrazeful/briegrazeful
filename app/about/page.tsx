import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-white text-[#2A2623] min-h-screen">

      <Navbar />



      {/* INTRO */}
     {/* ABOUT US */}
<section className="grid md:grid-cols-2 gap-16 px-8 md:px-20 py-24 border-b border-[#D8CEC4]">

  <div>

    <p className="uppercase tracking-[0.3em] text-sm text-[#8A7B70] mb-6">
      About Us
    </p>

    <h2 className="text-5xl md:text-6xl font-serif leading-none mb-12">
      More than charcuterie
      <br />
      It's an experience
    </h2>

    <div className="space-y-8 text-xl leading-10 text-[#5A514B]">
      <p> </p>

      <p>
        At Brie Grazeful, we believe charcuterie is more than food —
        it is an art form, an unforgettable moment, an experience
        designed to make you feel special.
      </p>

      <p>
        We are New Jersey's premier mobile charcuterie experience,
        bringing luxury grazing, elegance, and white glove service
        to every celebration.
      </p>

      <p>
        We create immersive grazing experiences that are
        aesthetically beautiful as it is delicious, with every
        detail intentionally crafted to elevate your event.
      </p>

    </div>

  </div>

  <div>
    <img
      src="/about1.jpeg"
      className="w-full h-full object-cover rounded-[2rem]"
      style={{ objectPosition: "center 30%" }}    
    />
  </div>

</section>
      {/* STORY */}
      <section className="grid md:grid-cols-2 gap-16 px-8 md:px-20 py-24 border-b border-[#D8CEC4]">

        <div>
          <img
            src="/hero.jpg"
            className="w-full h-full object-cover rounded-[3rem]"
          />
        </div>

        <div>

          <p className="uppercase tracking-[0.3em] text-sm text-[#8A7B70] mb-6">
            How It All Began
          </p>

        <h2 className="text-6xl md:text-6xl font-serif leading-none mb-10">
          A journey of resilience,
          reinvention, and the love
          of gathering
        </h2>

          <div className="space-y-8 text-lg leading-9 text-[#5A514B]">

  <p>
    For many years, my work life moved through a demanding pace - 
    long days, endless screen time, and a momentum that seemed to 
    never ease.. When illness made it impossible to continue
    that lifestyle, everything came to a halt.
  </p>

  <p>
    In that moment of stillness, I realized my life had
    completely changed forever. But giving up wasn't an option.
    I wanted to create something new and meaningful.
  </p>

  <p>
    I reconnected with what had always brought me joy which is
    hosting, creating, and bringing people together.
  </p>

  <p>
    I was the person arriving with a thoughtfully styled
    charcuterie board to gatherings, crafted with intention,
    styled with love, and made to make people feel cared for.
  </p>

  <p>
    Friends and family would light up when they saw it.
    Eventually, I realized if creating these moments brought
    so much joy to others, why not make it my purpose?
  </p>

  <p>
    And so, Brie Grazeful was born. Built from resilience,
    creativity, and a love for celebrating life's special moments.
  </p>

</div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-8 md:px-20 py-24 border-b border-[#D8CEC4]">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border border-[#D8CEC4] rounded-[2rem] p-10">

            <p className="uppercase tracking-[0.3em] text-sm text-[#8A7B70] mb-4">
              Our Passion
            </p>

            <h3 className="text-4xl font-serif mb-6">
              Charcuterie is our love language.
            </h3>

            <p className="text-lg leading-8 text-[#5A514B]">
              We are inspired by the harmony of flavors, textures,
              and colors. Transforming premium ingredients into
              edible works of art. Every board is designed with
              purpose, grace, and a commitment to excellence.
            </p>
          </div>

          <div className="border border-[#D8CEC4] rounded-[2rem] p-10">

            <p className="uppercase tracking-[0.3em] text-sm text-[#8A7B70] mb-4">
              Our Standard
            </p>

            <h3 className="text-4xl font-serif mb-6">
              Excellence in every detail.
            </h3>

          <ul className="space-y-4 text-lg text-[#5A514B]">
            <li>Premier white glove service</li>
            <li>Exceptional presentation</li>
            <li>Meticulous attention to detail</li>
            <li>A seamless, elevated experience</li>
          </ul>
          </div>

          <div className="border border-[#D8CEC4] rounded-[2rem] p-10">

            <p className="uppercase tracking-[0.3em] text-sm text-[#8A7B70] mb-4">
              Our Promise
            </p>

             <h3 className="text-4xl font-serif mb-6">
              Elegance is our foundation
            </h3>

            <p className="text-lg leading-8 text-[#5A514B]">
              We show up polished, prepared, and passionate,
              ensuring every guest experiences the care,
              artistry, and intention behind our craft.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#5A514B]">
              Because your event deserves nothing less than
              grace, elegance, and a premier grazing experience.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-28 px-8 md:px-20">

        <p className="uppercase tracking-[0.4em] text-sm text-[#8A7B70] mb-6">
          LET'S CREATE AN UNFORGETTABLE MOMENT
        </p>

        <h2 className="text-5xl md:text-7xl font-serif leading-none max-w-4xl mx-auto">
          Ready to elevate your next event?
        </h2>

        <a
          href="/inquiry"
          className="inline-block mt-12 bg-[#2A2623] text-white px-10 py-5 rounded-full uppercase tracking-[0.2em] text-sm hover:bg-[#4A433D] transition"
        >
          Book Your Experience
        </a>
      </section>

      <Footer />
    </main>
  );
}