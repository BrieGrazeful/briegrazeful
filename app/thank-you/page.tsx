import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ThankYouPage() {
  return (
    <main className="bg-white text-[#2A2623] min-h-screen">
      <Navbar />

      <section className="max-w-3xl mx-auto px-8 py-32 text-center">
        <p className="uppercase tracking-[0.3em] text-sm text-[#8A7B70] mb-6">
          Thank You
        </p>

        <h1 className="text-5xl md:text-7xl font-serif mb-8">
          Your Inquiry Has Been Received
        </h1>

        <p className="text-xl text-[#5A514B] leading-relaxed mb-12">
          Thank you for contacting Brie Grazeful! We've received your inquiry
          and will review the details shortly. A member of our team will be in
          touch within 2-3 business days.
        </p>

        <a
          href="/"
          className="inline-block bg-[#2A2623] text-white px-10 py-5 rounded-full uppercase tracking-[0.2em] text-sm hover:bg-[#4A433D] transition"
        >
          Return Home
        </a>
      </section>

      <Footer />
    </main>
  );
}