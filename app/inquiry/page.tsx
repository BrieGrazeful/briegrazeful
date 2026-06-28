"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function InquiryPage() {

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
      location: formData.get("location"),
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

    if (response.ok) {
      alert("Inquiry submitted successfully!");
      e.currentTarget.reset(); // Clears all form fields
    } else {
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
          Please allow 24-48 hours for a response
        </p>
      </section>

      {/* FORM */}
      <section className="px-8 md:px-20 pb-28">

          <form
          onSubmit={sendEmail}
          className="max-w-4xl mx-auto border border-[#D8CEC4] rounded-[2rem] bg-white p-8 md:p-12"
          >
            
            <div>

              {/* CONTACT INFO */}
              <div className="mb-14">

                <p className="uppercase tracking-[0.3em] text-sm text-[#8A7B70] mb-8">
                  Contact Information
                </p>

                <div className="space-y-6">

                  <input
                    name="name"
                    placeholder="Full Name"
                    className="w-full border-b border-[#D8CEC4] bg-transparent pb-4 focus:outline-none text-lg"
                    required
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="w-full border-b border-[#D8CEC4] bg-transparent pb-4 focus:outline-none text-lg"
                    required
                  />

                  <input
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full border-b border-[#D8CEC4] bg-transparent pb-4 focus:outline-none text-lg"
                    required
                  />
                </div>
              </div>

              {/* EVENT DETAILS */}
              <div className="mb-14">

                <p className="uppercase tracking-[0.3em] text-sm text-[#8A7B70] mb-8">
                  Event Details
                </p>

                <div className="space-y-6">

<input
  name="eventDate"
  type="text"
  placeholder="Event Date"
  className="w-full border-b border-[#D8CEC4] bg-transparent pb-4 focus:outline-none text-lg"
/>

<div className="flex gap-4 mt-6">

  <input
    name="startTime"
    placeholder="Start Time"
    className="flex-1 border-b border-[#D8CEC4] bg-transparent pb-4 focus:outline-none text-lg"
  />

  <select
    name="startPeriod"
    className="w-24 border-b border-[#D8CEC4] bg-transparent pb-4 focus:outline-none text-lg"
  >
    <option>AM</option>
    <option>PM</option>
  </select>

</div>

<div className="flex gap-4">

  <input
    name="endTime"
    placeholder="End Time"
    className="flex-1 border-b border-[#D8CEC4] bg-transparent pb-4 focus:outline-none text-lg"
  />

  <select
    name="endPeriod"
    className="w-24 border-b border-[#D8CEC4] bg-transparent pb-4 focus:outline-none text-lg"
  >
    <option>AM</option>
    <option>PM</option>
  </select>

</div>
<div>

                  </div>

                  <input
                    name="location"
                    placeholder="Event Location (Venue + City)"
                    className="w-full border-b border-[#D8CEC4] bg-transparent pb-4 focus:outline-none text-lg"
                  />

                  <input
                    name="guestCount"
                    placeholder="Estimated Guest Count"
                    className="w-full border-b border-[#D8CEC4] bg-transparent pb-4 focus:outline-none text-lg"
                  />

                  <select
                    name="budget"
                    className="w-full border-b border-[#D8CEC4] bg-transparent pb-4 focus:outline-none text-lg"
                  >
                    <option>Estimated Budget</option>
                    <option>$500 - $1,000</option>
                    <option>$1,000 - $2,500</option>
                    <option>$2,500 - $5,000</option>
                    <option>$5,000+</option>
                  </select>

                </div>
              </div>

              {/* SERVICES */}
              <div className="mb-14">

                <p className="uppercase tracking-[0.3em] text-sm text-[#8A7B70] mb-8">
                  What services are you interested in?
                </p>

                <div className="grid grid-cols-1 gap-4 text-lg">

                  <label className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      name="services"
                      value="Luxury Charcuterie Bar"
                    />
                    Luxury Charcuterie Bar
                  </label>

                  <label className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      name="services"
                      value="Ice Cream Sundae Bar"
                    />
                    Ice Cream Sundae Bar
                  </label>

                  <label className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      name="services"
                      value="Acai Bowl Bar"
                    />
                    Acai Bowl Bar
                  </label>
                </div>
              </div>

              {/* MESSAGE */}
              <div>

                <p className="uppercase tracking-[0.3em] text-sm text-[#8A7B70] mb-8">
                  Additional Details
                </p>

                <textarea
                  name="message"
                  placeholder="Tell us more about your vision, event aesthetic, or any special details..."
                  rows={6}
                  className="w-full border border-[#D8CEC4] rounded-[1.5rem] p-6 bg-transparent focus:outline-none text-lg resize-none"
                />

                <button
                  type="submit"
                  className="mt-10 bg-[#2A2623] text-white px-10 py-5 rounded-full uppercase tracking-[0.2em] text-sm hover:bg-[#4A433D] transition"
                >
                  Submit Inquiry
                </button>
            </div>
          </div>
        </form>
      </section>

      <Footer />
    </main>
  );
}