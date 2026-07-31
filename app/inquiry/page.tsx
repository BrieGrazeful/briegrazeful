"use client";

import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function InquiryPage() {

  const router = useRouter();

const sendEmail = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),

    eventDate: formData.get("eventDate"),

    startTime: formData.get("startTime"),
    startPeriod: formData.get("startPeriod"),

    endTime: formData.get("endTime"),
    endPeriod: formData.get("endPeriod"),

    location: formData.get("location"),

    eventSetting: formData.get("eventSetting"),

    eventType: formData.get("eventType"),

    guestCount: formData.get("guestCount"),

    budget: formData.get("budget"),

    message: formData.get("message"),

    services: formData.getAll("services"),
  };

const response = await fetch("/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});

console.log("Status:", response.status);

if (response.ok) {
  router.push("/thank-you");
} else {
  const error = await response.text();
  console.error(error);
  alert("Something went wrong.");
}
};

  return (
    <main className="bg-white text-[#2A2623] min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="px-8 md:px-20 pt-16 pb-20">

        <p className="uppercase tracking-[0.4em] text-sm text-[#8A7B70] mb-6">
          Book Your Experience
        </p>

        <h1 className="text-5xl md:text-7xl font-serif leading-none max-w-5xl">
          Let’s create an unforgettable experience
        </h1>

        <p className="mt-10 text-2xl leading-9 max-w-3xl text-[#5A514B]">
          Tell us about your event and we’ll create a thoughtfully
          curated experience tailored to your vision.
        </p>

        <p className="mt-6 text-base uppercase tracking-[0.2em] text-[#8A7B70]">
          Please allow 2-3 business days for a response
        </p>
      </section>

      {/* FORM */}
      <section className="px-8 md:px-20 pb-28">

          <form
          onSubmit={sendEmail}
          className="max-w-3xl mx-auto border border-[#D8CEC4] rounded-[2rem] bg-white p-8 md:p-12"
          >
            
            <div>

              {/* CONTACT INFO */}
              <div className="mb-14">

                <p className="uppercase tracking-[0.3em] text-sm text-[#8A7B70] mb-8">
                  Contact Information
                </p>
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-lg tracking-wide text-[#5A514B]"
                  >
                    Name <span className="text-[#8B5E3C]"></span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full border border-[#8B5E3C] bg-transparent px-5 py-4 text-lg outline-none focus:border-[#2A2623] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-lg tracking-wide text-[#5A514B]"
                  >
                    Email <span className="text-[#8B5E3C]"></span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-[#8B5E3C] bg-transparent px-5 py-4 text-lg outline-none focus:border-[#2A2623] transition-colors"
                  />
                </div>


                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-lg tracking-wide text-[#5A514B]"
                  >
                    Phone <span className="text-[#8B5E3C]"></span>
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full border border-[#8B5E3C] bg-transparent px-5 py-4 text-lg outline-none focus:border-[#2A2623] transition-colors"
                  />
                </div>

                </div>

              {/* EVENT DETAILS */}
              <div className="mb-14">

                <p className="uppercase tracking-[0.3em] text-sm text-[#8A7B70] mb-8">
                  Event Details
                </p>

                <div className="space-y-6">

                <div className="space-y-2">
                 <label
                    htmlFor="eventDate"
                    className="block text-lg tracking-wide text-[#5A514B] mb-2"
                  >
                    Event Date
                  </label>

                  <input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    className="w-full border border-[#8B5E3C] bg-transparent px-5 py-4 text-lg outline-none focus:border-[#2A2623] transition-colors"
                    required
                  />
                </div>

                <div className="mt-6">
                    <label
                      htmlFor="startTime"
                      className="block text-lg tracking-wide text-[#5A514B] mb-2"
                    >
                      Start Time
                    </label>

                    <div className="flex gap-4">
                      <input
                        id="startTime"
                        name="startTime"
                        type="text"
                        className="flex-1 border border-[#8B5E3C] bg-transparent px-5 py-4 text-lg outline-none focus:border-[#2A2623] transition-colors"
                        required                      
                      />

                      <select
                        name="startPeriod"
                        className="w-24 border border-[#8B5E3C] bg-transparent px-4 py-4 text-lg outline-none focus:border-[#2A2623] transition-colors"
                      >
                        <option>AM</option>
                        <option>PM</option>
                      </select>
                    </div>
                  </div>


                <div className="mt-6">
                    <label
                      htmlFor="endTime"
                      className="block text-lg tracking-wide text-[#5A514B] mb-2"
                    >
                      End Time
                    </label>

                    <div className="flex gap-4">
                      <input
                        id="endTime"
                        name="endTime"
                        type="text"
                        className="flex-1 border border-[#8B5E3C] bg-transparent px-5 py-4 text-lg outline-none focus:border-[#2A2623] transition-colors"
                        required
                      />

                      <select
                        name="endPeriod"
                        className="w-24 border border-[#8B5E3C] bg-transparent px-4 py-4 text-lg outline-none focus:border-[#2A2623] transition-colors"
                      >
                        <option>AM</option>
                        <option>PM</option>
                      </select>
                    </div>
                  </div>

                <div className="space-y-2">
                  <label
                    htmlFor="location"
                    className="block text-lg tracking-wide text-[#5A514B]"
                  >
                    Event Location (Venue + City)
                  </label>

                  <input
                    id="location"
                    name="location"
                    className="w-full border border-[#8B5E3C] bg-transparent px-5 py-4 text-lg outline-none focus:border-[#2A2623] transition-colors"
                    required
                  />
                </div>

                <div className="mt-10 mb-14">

                <p className="uppercase tracking-[0.3em] text-sm text-[#8A7B70] mb-8">
                  Indoor or Outdoor Event?
                </p>

                <div className="grid grid-cols-1 gap-4 text-lg">

                  <label className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="eventSetting"
                      value="Indoor"
                      required
                    />
                    Indoor
                  </label>

                  <label className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="eventSetting"
                      value="Outdoor"
                    />
                    Outdoor
                  </label>

                </div>

              </div>

              <div className="space-y-2">
                <label
                  htmlFor="eventType"
                  className="block text-lg tracking-wide text-[#5A514B]"
                >
                  Event Type
                </label>

                <input
                  id="eventType"
                  name="eventType"
                  className="w-full border border-[#8B5E3C] bg-transparent px-5 py-4 text-lg outline-none focus:border-[#2A2623] transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="guestCount"
                  className="block text-lg tracking-wide text-[#5A514B]"
                >
                  Estimated Guest Count
                </label>

                <input
                  id="guestCount"
                  name="guestCount"
                  className="w-full border border-[#8B5E3C] bg-transparent px-5 py-4 text-lg outline-none focus:border-[#2A2623] transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="budget"
                  className="block text-lg tracking-wide text-[#5A514B]"
                >
                  Estimated Budget
                </label>

                <input
                  id="budget"
                  name="budget"
                  className="w-full border border-[#8B5E3C] bg-transparent px-5 py-4 text-lg outline-none focus:border-[#2A2623] transition-colors"
                  required
                />
              </div>

                </div>
              </div>

              {/* SERVICES */}
              <div className="mb-14">

                <p className="uppercase tracking-[0.3em] text-sm text-[#8A7B70] mb-8">
                  What service are you interested in?
                </p>

                <div className="grid grid-cols-1 gap-4 text-lg">

                  <label className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="services"
                      value="Luxury Charcuterie Bar"
                      required
                    />
                    Luxury Charcuterie Bar
                  </label>

                  <label className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="services"
                      value="Ice Cream Sundae Bar"
                    />
                    Ice Cream Sundae Bar
                  </label>

                  <label className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="services"
                      value="Acai Bowl Bar"
                    />
                    Acai Bowl Bar
                  </label>
                </div>
              </div>

              {/* MESSAGE */}
             <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-lg tracking-wide text-[#5A514B]"
                >
                  Tell us about your event
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full border border-[#8B5E3C] bg-transparent px-5 py-4 text-lg outline-none resize-none focus:border-[#2A2623] transition-colors"
                />
              </div>

                <button
                  type="submit"
                  className="mt-10 bg-[#2A2623] text-white px-10 py-5 rounded-full uppercase tracking-[0.2em] text-sm hover:bg-[#4A433D] transition"
                >
                  Submit Inquiry
                </button>
            </div>
        </form>
      </section>

      <Footer />
    </main>
  );
}