import { Image } from "lucide-react";

const galleryImages = [
  "moment1.png",
  "moment2.png",
  "moment3.png",
  "moment4.png",
  "moment5.png",
  "moment6.png",
  "moment7.png",
  "moment8.jpg",
  "moment9.jpg",
  "moment10.jpg",
  "moment11.jpg",
  "moment12.jpg",
  "moment13.jpg",
  "moment14.jpg",
  "moment15.jpg",
  "moment16.jpg",
  "moment17.jpg",
  "moment18.jpg",
  "moment19.jpg",
  "moment20.jpg",
];

function getCardClass(index) {
  const patternIndex = index % 10;

  if (patternIndex === 0) {
    return "md:col-span-2 md:row-span-2";
  }

  if (patternIndex === 3 || patternIndex === 8) {
    return "md:col-span-2";
  }

  if (patternIndex === 6) {
    return "md:row-span-2";
  }

  return "";
}

export default function Gallery() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            <Image size={18} />
            Project Moments
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Gallery
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            A collection of AloeGreen project moments, including development
            work, research activities, system testing, team collaboration, and
            project presentation memories.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl auto-rows-[240px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <article
              key={image}
              className={`group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${getCardClass(
                index
              )}`}
            >
              <img
                src={`/images/gallery/${image}`}
                alt={`AloeGreen project moment ${index + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}