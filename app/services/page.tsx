"use client";

import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function ServicesPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <main className="bg-white text-[#2A2623] min-h-screen">
      <Navbar />

   

      {/* INTRO */}
      <section className="px-8 md:px-20 pt-10 pb-20">

        <p className="uppercase tracking-[0.4em] text-sm text-[#8A7B70] mb-6">
          Our Services
        </p>

        <h1 className="text-4xl md:text-7xl font-serif leading-none max-w-5xl">
          Elevated experiences designed for unforgettable celebrations        
        </h1>

        <p className="mt-12 text-xl leading-9 max-w-4xl text-[#5A514B]">
          'Every experience is thoughtfully designed 
          with elevated presentation, and graceful hospitality
        </p>
      </section>

      {/* CHARCUTERIE BAR */}
      <section className="grid md:grid-cols-2 gap-16 px-8 md:px-20 py-20 border-t border-[#D8CEC4]">

        {/* IMAGE */}
        <div>
          <img
            src="/charcuterie.jpg"
            className="w-full h-[750px] object-cover rounded-[2rem]"
          />
        </div>

        {/* CONTENT */}
        <div>

          <p className="uppercase tracking-[0.3em] text-sm text-[#8A7B70] mb-4">
            Signature Experience
          </p>

          <h2 className="text-5xl md:text-7xl font-serif leading-none">
            Luxury
            <br />
            Charcuterie Bar
          </h2>

          <p className="mt-10 text-xl leading-9 text-[#5A514B]">
           A charcuterie bar experience including 15 artisanal selections 
           served on individually styled charcuterie mini boards from a temperature 
           controlled mobile cart by dedicated professional attendees
          </p>

          {/* ACCORDIONS */}
          <div className="mt-16 space-y-6">

            {/* INCLUDED */}
            <div className="border border-[#D8CEC4]">

              <button
                onClick={() => toggleSection("included")}
                className="w-full flex justify-between items-center p-8 text-left"
              >
                <span className="text-2xl">
                  What's Included
                </span>

                <span className="text-5xl">
                  {openSection === "included" ? "−" : "+"}
                </span>
              </button>

              {openSection === "included" && (
                <div className="px-8 pb-8 text-lg leading-10 text-[#5A514B]">

                  <ul className="list-disc pl-6 space-y-3">
                    <li>Temperature controlled charcuterie cart with umbrella</li>

                    <li>Dedicated on-site server</li>

                    <li>
                     15 curated selections including artisanal cheeses, meats, fresh fruits, and accompaniments
                    </li>

                    <li>Complete setup, styling, and breakdown</li>

                    <li>Floral arrangement and decor to 
                      match your event colors and aesthetic</li>

                    <li>Custom menu</li>

                    <li>2 hours of bottomless service</li>

                    <li>To-go boxes and bags available for remaining selections</li>

                  </ul>
                </div>
              )}
            </div>

            {/* PRICING */}
            <div className="border border-[#D8CEC4]">

              <button
                onClick={() => toggleSection("pricing")}
                className="w-full flex justify-between items-center p-8 text-left"
              >
                <span className="text-2xl">
                  Pricing Details
                </span>

                <span className="text-5xl">
                  {openSection === "pricing" ? "−" : "+"}
                </span>
              </button>

              {openSection === "pricing" && (
                <div className="px-8 pb-8 text-lg leading-10 text-[#5A514B]">

                  <li>
                    Minimum 50 guests $35 each guest
                  </li>

                  <li>
                    51 - 100 guests - $32 each guest
                  </li>

                  <li>101 - 150 guests - $29 each guest</li>

                  <li className="mt-4">
                    Final price is customized based on guest count, location, design and 
                    event details 
                  </li>

                  <li className="mt-4">
                    Sales tax is applied to final invoice 
                  </li>

                  <li className="mt-4">
                    Please inquire for a tailored proposal
                  </li>


                </div>
              )}
            </div>

            {/* ENHANCEMENTS */}
            <div className="border border-[#D8CEC4]">

              <button
                onClick={() => toggleSection("enhancements")}
                className="w-full flex justify-between items-center p-8 text-left"
              >
                <span className="text-2xl">
                  Premium Enhancements
                </span>

                <span className="text-5xl">
                  {openSection === "enhancements" ? "−" : "+"}
                </span>
              </button>

              {openSection === "enhancements" && (
                <div className="px-8 pb-8 text-lg leading-10 text-[#5A514B]">

                  <ul className="list-disc pl-6 space-y-3">
                    <li>On-site freshly sliced cheese</li>

                    <li>Cheese curler for delicate flower-like rosettes for an elevated presentation</li>

                    <li>Extra hour of service</li>

                    <li>Extended Travel</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <a
            href="/inquiry"
            className="inline-block mt-12 bg-[#2A2623] text-white px-10 py-5 rounded-full uppercase tracking-[0.2em] text-sm hover:bg-[#4A433D] transition"
          >
            Book This Experience
          </a>
        </div>
      </section>

      {/* ICE CREAM BAR */}
      <section className="grid md:grid-cols-2 gap-16 px-8 md:px-20 py-20 border-t border-[#D8CEC4]">

        {/* CONTENT */}
        <div>

          <p className="uppercase tracking-[0.3em] text-sm text-[#8A7B70] mb-4">
            A Sweet Experience
          </p>

          <h2 className="text-5xl md:text-7xl font-serif leading-none">
            Ice Cream
            <br />
            Sundae Bar
          </h2>

          <p className="mt-10 text-xl leading-9 text-[#5A514B]">
           An ice cream sundae bar designed to 
           add a fun and sweet experience to your event
          </p>

          {/* ACCORDIONS */}
          <div className="mt-16 space-y-6">

            {/* INCLUDED */}
            <div className="border border-[#D8CEC4]">

              <button
                onClick={() => toggleSection("iceIncluded")}
                className="w-full flex justify-between items-center p-8 text-left"
              >
                <span className="text-2xl">
                  What's Included
                </span>

                <span className="text-5xl">
                  {openSection === "iceIncluded" ? "−" : "+"}
                </span>
              </button>

              {openSection === "iceIncluded" && (
                <div className="px-8 pb-8 text-lg leading-10 text-[#5A514B]">

                  <ul className="list-disc pl-6 space-y-3">
                    <li>Temperature controlled ice cream sundae bar with umbrella</li>

                    <li>Dedicated on-site server</li>

                    <li>Up to 2 ice cream flavors</li>

                    <li>Up to 9 toppings</li>

                    <li>3+ drizzles</li>

                    <li>Complete setup, styling, and breakdown</li>

                    <li>Floral arrangement and decor to match your 
                      event colors and aesthetic </li>

                    <li>Custom menu</li>

                    <li>1–2.5 hours of service</li>
                  </ul>
                </div>
              )}
            </div>

            {/* PRICING */}
            <div className="border border-[#D8CEC4]">

              <button
                onClick={() => toggleSection("icePricing")}
                className="w-full flex justify-between items-center p-8 text-left"
              >
                <span className="text-2xl">
                  Pricing Details
                </span>

                <span className="text-5xl">
                  {openSection === "icePricing" ? "−" : "+"}
                </span>
              </button>

              {openSection === "icePricing" && (
                <div className="px-8 pb-8 text-lg leading-10 text-[#5A514B]">

                  <li>Starting at $11/person with a 50 guest minimum</li>

                  <li>Final price is customized based on guest count, location, design and event details</li>

                  <li>Sales tax is applied to final invoice</li>

                  <li>Please inquire for a tailored proposal</li>
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <a
            href="/inquiry"
            className="inline-block mt-12 bg-[#2A2623] text-white px-10 py-5 rounded-full uppercase tracking-[0.2em] text-sm hover:bg-[#4A433D] transition"
          >
            Book Your Sweet Experience
          </a>
        </div>

        {/* IMAGE */}
        <div>
          <img
            src="/icecream.jpeg"
            className="w-full h-[750px] object-cover rounded-[2rem]"
          />
        </div>
      </section>
      {/* ACAI BOWL BAR */}
<section className="grid md:grid-cols-2 gap-16 px-8 md:px-20 py-20 border-t border-[#D8CEC4]">

  {/* IMAGE */}
  <div>
    <img
      src="/acai.jpeg"
      className="w-full h-[750px] object-cover rounded-[2rem]"
    />
  </div>

  {/* CONTENT */}
  <div>

    <p className="uppercase tracking-[0.3em] text-sm text-[#8A7B70] mb-4">
      Wellness Experience
    </p>

    <h2 className="text-5xl md:text-7xl font-serif leading-none">
      Acai Bowl
      <br />
      Bar
    </h2>

    <p className="mt-10 text-xl leading-9 text-[#5A514B]">
     A fresh and elevated wellness experience featuring 
     customizable acai bowls, premium toppings, and elegant 
     presentations perfect for wellness events, corporate events, 
     brunches, and showers
    </p>

    {/* ACCORDIONS */}
    <div className="mt-16 space-y-6">

      {/* INCLUDED */}
      <div className="border border-[#D8CEC4]">

        <button
          onClick={() => toggleSection("acaiIncluded")}
          className="w-full flex justify-between items-center p-8 text-left"
        >
          <span className="text-2xl">
            What's Included
          </span>

          <span className="text-5xl">
            {openSection === "acaiIncluded" ? "−" : "+"}
          </span>
        </button>

        {openSection === "acaiIncluded" && (
          <div className="px-8 pb-8 text-lg leading-10 text-[#5A514B]">

            <ul className="list-disc pl-6 space-y-3">
              <li>Temperature controlled acai bowl bar with umbrella</li>

              <li>Dedicated on-site server</li>

              <li>Acai bowls</li>

              <li>Up to 9 toppings</li>

              <li>3+ drizzles</li>

              <li>Complete setup, styling, and breakdown</li>

              <li>Floral arrangement and decor to match your event colors and aesthetic</li>

              <li>Custom menu</li>
            </ul>
          </div>
        )}
      </div>

      {/* PRICING */}
      <div className="border border-[#D8CEC4]">

        <button
          onClick={() => toggleSection("acaiPricing")}
          className="w-full flex justify-between items-center p-8 text-left"
        >
          <span className="text-2xl">
            Pricing Details
          </span>

          <span className="text-5xl">
            {openSection === "acaiPricing" ? "−" : "+"}
          </span>
        </button>

        {openSection === "acaiPricing" && (
          <div className="px-8 pb-8 text-lg leading-10 text-[#5A514B]">

            <li>Starting at $16/person with a 50 guest minimum</li>

            <li>Final price is customized based on guest count, location, design and event details</li>

            <li>Sales tax is applied to final invoice</li>

            <li>Please inquire for a tailored proposal</li>

          </div>
        )}
      </div>
    </div>

    {/* CTA */}
    <a
      href="/inquiry"
      className="inline-block mt-12 bg-[#2A2623] text-white px-10 py-5 rounded-full uppercase tracking-[0.2em] text-sm hover:bg-[#4A433D] transition"
    >
      Book Your Wellness Experience
    </a>
  </div>
</section>
      <Footer />
    </main>
  );
}
