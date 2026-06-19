"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (section: string) => {
    setOpen(open === section ? null : section);
  };

  return (
    <main className="bg-white text-[#2A2623] min-h-screen">
        <Navbar />

      {/* HERO */}
      <section className="px-8 md:px-20 py-24 border-b border-[#D8CEC4]">

        <p className="uppercase tracking-[0.4em] text-sm text-[#8A7B70] mb-6">
          Frequently Asked Questions
        </p>

        <p className="mt-10 text-4xl leading-9 max-w-4xl text-[#5A514B]">
          We want every experience to feel seamless, elevated, and stress-free.
          Below are answers to our most commonly asked questions.
        </p>

      </section>

      {/* FAQ SECTION */}
      <section className="px-8 md:px-20 py-24 max-w-5xl mx-auto space-y-6">

        {/* SERVICE AREA */}
        <div className="border border-[#D8CEC4]">
          <button
            onClick={() => toggle("service")}
            className="w-full flex justify-between items-center p-8 text-left"
          >
            <span className="text-2xl">
              What areas do you serve?
            </span>

            <span className="text-5xl">
              {open === "service" ? "−" : "+"}
            </span>
          </button>

          {open === "service" && (
            <div className="px-8 pb-8 text-lg leading-9 text-[#5A514B]">
              <p>
                Brie Grazeful proudly serves all of New Jersey.
              </p>

              <p className="mt-4">
                Our services include a 20-mile service radius from
                South Amboy, New Jersey. Events outside this radius
                may incur additional travel fees.
              </p>
            </div>
          )}
        </div>

        {/* EVENTS */}
        <div className="border border-[#D8CEC4]">
          <button
            onClick={() => toggle("events")}
            className="w-full flex justify-between items-center p-8 text-left"
          >
            <span className="text-2xl">
              What kind of events do you cater?
            </span>

            <span className="text-5xl">
              {open === "events" ? "−" : "+"}
            </span>
          </button>

          {open === "events" && (
            <div className="px-8 pb-8 text-lg leading-9 text-[#5A514B]">
              <ul className="list-disc pl-6 space-y-2">
                <li>Weddings & Engagements</li>
                <li>Bridal Showers</li>
                <li>Baby Showers</li>
                <li>Birthday Celebrations</li>
                <li>Corporate Events</li>
                <li>Holiday Events</li>
                <li>Fitness & Wellness Events</li>
                <li>Intimate Gatherings & Private Celebrations</li>
              </ul>
            </div>
          )}
        </div>

        {/* LICENSED */}
        <div className="border border-[#D8CEC4]">
          <button
            onClick={() => toggle("licensed")}
            className="w-full flex justify-between items-center p-8 text-left"
          >
            <span className="text-2xl">
              Are you licensed and insured?
            </span>

            <span className="text-5xl">
              {open === "licensed" ? "−" : "+"}
            </span>
          </button>

          {open === "licensed" && (
            <div className="px-8 pb-8 text-lg leading-9 text-[#5A514B]">
              <p>
                Brie Grazeful LLC is licensed and fully insured.
                We adhere to all local and federal food safety
                regulations and hold a ServSafe Food Protection
                Manager Certification.
              </p>

              <p className="mt-4">
                We partner with a fully insured certified commercial kitchen.
              </p>

              <p className="mt-4">
                Certificate of Insurance is available upon request.
              </p>
            </div>
          )}
        </div>

        {/* ALLERGIES */}
        <div className="border border-[#D8CEC4]">
          <button
            onClick={() => toggle("allergies")}
            className="w-full flex justify-between items-center p-8 text-left"
          >
            <span className="text-2xl">
              Do you offer allergy, dietary, and lifestyle accommodations?
            </span>

            <span className="text-5xl">
              {open === "allergies" ? "−" : "+"}
            </span>
          </button>

          {open === "allergies" && (
            <div className="px-8 pb-8 text-lg leading-9 text-[#5A514B]">
              <p>
                Yes. We offer nut-free, gluten-free, and vegetarian
                options upon request.
              </p>

              <p className="mt-4">
                Please let us know about any dietary restrictions
                and allergies when booking.
              </p>

              <p className="mt-6 italic">
             <span
                style={{
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                  textDecorationThickness: "2px",
                }}
              >
                Food Allergy Notice:
              </span>
              While we carefully source ingredients and make reasonable efforts
              to create a safe experience, we cannot guarantee a completely
              allergen-free environment. We work out of a commercial kitchen,
              so cross-contamination is possible.
            </p>
            </div>
          )}
        </div>

        {/* BOOKING */}
        <div className="border border-[#D8CEC4]">
          <button
            onClick={() => toggle("booking")}
            className="w-full flex justify-between items-center p-8 text-left"
          >
            <span className="text-2xl">
              What is required to book?
            </span>

            <span className="text-5xl">
              {open === "booking" ? "−" : "+"}
            </span>
          </button>

          {open === "booking" && (
            <div className="px-8 pb-8 text-lg leading-9 text-[#5A514B]">
              <ul className="list-disc pl-6 space-y-3">
                <li>Events must be booked at least 5 weeks in advance.</li>

                <li>
                  A signed service agreement and 50% deposit are required
                  to reserve your event date.
                </li>

                <li>
                  The remaining balance, final guest count, and menu
                  selections are due two weeks prior to the event.
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* REFUND */}
        <div className="border border-[#D8CEC4]">
          <button
            onClick={() => toggle("refund")}
            className="w-full flex justify-between items-center p-8 text-left"
          >
            <span className="text-2xl">
              What is your refund and cancellation policy?
            </span>

            <span className="text-5xl">
              {open === "refund" ? "−" : "+"}
            </span>
          </button>

          {open === "refund" && (
            <div className="px-8 pb-8 text-lg leading-9 text-[#5A514B]">
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  Cancellations made at least 30 days before the event
                  will receive a deposit refund.
                </li>

                <li>
                  Cancellations made less than 30 days before the event
                  will forfeit the deposit.
                </li>

                <li>
                  No refunds are issued after the final balance has been paid.
                </li>
              </ul>
            </div>
          )}
        </div>

      </section>

      <Footer />
    </main>
  );
}