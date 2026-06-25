import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function GalleryPage() {
  const galleryImages = [
    "/gallery/gallery1.jpg",
    "/gallery/gallery2.jpg",
    "/gallery/gallery3.jpg",
    "/gallery/gallery4.jpg",
    "/gallery/gallery5.jpeg",
    "/gallery/gallery6.jpeg",
  ];

  return (
    <main className="bg-white text-[#2A2623] min-h-screen">

      <Navbar />

      <section className="px-8 md:px-20 py-24">

        <p className="uppercase tracking-[0.3em] text-sm text-[#8A7B70] mb-6">
          Gallery
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[2rem]"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[450px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
          ))}

        </div>

      </section>

      <Footer />

    </main>
  );
}