import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function GalleryPage() {
const images = [
  "/gallery/gallery-01.jpeg",
  "/gallery/gallery-02.jpeg",
  "/gallery/gallery-03.jpeg",
  "/gallery/gallery-04.jpeg",
  "/gallery/gallery-05.jpeg",
  "/gallery/gallery-06.jpeg",
  "/gallery/gallery-07.jpeg",
  "/gallery/gallery-08.jpeg",
  "/gallery/gallery-09.jpeg",
  "/gallery/gallery-10.jpeg",
  "/gallery/gallery-11.jpeg",
  "/gallery/gallery-12.jpeg",
  "/gallery/gallery-13.jpeg",
  "/gallery/gallery-14.jpeg",
  "/gallery/gallery-15.jpeg",
  "/gallery/gallery-16.jpeg",
  "/gallery/gallery-17.jpeg",
  "/gallery/gallery-18.jpeg",
  "/gallery/gallery-19.jpeg",
  "/gallery/gallery-20.jpeg",
  "/gallery/gallery-21.jpeg",
  "/gallery/gallery-22.jpeg",
  "/gallery/gallery-23.jpeg",
  "/gallery/gallery-24.jpeg",
  "/gallery/gallery-25.jpeg",
  "/gallery/gallery-26.jpeg",
  "/gallery/gallery-27.jpeg",
  "/gallery/gallery-28.jpeg",
  "/gallery/gallery-29.jpeg",
  "/gallery/gallery-30.jpeg",
  "/gallery/gallery-31.jpeg",
  "/gallery/gallery-32.jpeg",
  "/gallery/gallery-33.jpeg",
  "/gallery/gallery-34.jpeg",
  "/gallery/gallery-35.jpeg",
  "/gallery/gallery-36.jpeg",
  "/gallery/gallery-37.jpeg",
  "/gallery/gallery-38.jpeg",
  "/gallery/gallery-39.jpeg",
];

  return (
    <main className="bg-white text-[#2A2623] min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="px-8 md:px-20 pt-20 pb-16">

        <p className="uppercase tracking-[0.4em] text-sm text-[#8A7B70] mb-6">
          Our Work
        </p>

        <h1 className="text-5xl md:text-7xl font-serif mb-8">
          Gallery
        </h1>

        <p className="text-xl text-[#5A514B] max-w-3xl leading-relaxed">
          Every event is thoughtfully styled to create memorable
          experiences. Browse a collection of our favorite luxury
          charcuterie, ice cream, and acai bar setups.
        </p>

      </section>

      {/* GALLERY */}
      <section className="px-8 md:px-20 pb-28">

       <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="mb-6 break-inside-avoid overflow-hidden rounded-[2rem]"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full hover:scale-[1.02] transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}