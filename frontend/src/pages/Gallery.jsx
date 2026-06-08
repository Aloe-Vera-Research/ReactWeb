import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Images,
  Maximize2,
  Sparkles,
  X,
} from "lucide-react";

import Moment3 from "../assets/images/gallery/Moment3.png";
import Moment8 from "../assets/images/gallery/Moment8.png";
import Moment9 from "../assets/images/gallery/Moment9.png";
import Moment10 from "../assets/images/gallery/Moment10.png";
import Moment11 from "../assets/images/gallery/Moment11.png";
import Moment12 from "../assets/images/gallery/Moment12.png";
import Moment13 from "../assets/images/gallery/Moment13.png";

import Moment21 from "../assets/images/gallery/Moment21.jpg";
import Moment22 from "../assets/images/gallery/Moment22.jpg";
import Moment23 from "../assets/images/gallery/Moment23.jpg";
import Moment24 from "../assets/images/gallery/Moment24.jpg";
import Moment25 from "../assets/images/gallery/Moment25.jpg";
import Moment26 from "../assets/images/gallery/Moment26.jpg";
import Moment27 from "../assets/images/gallery/Moment27.jpg";
import Moment28 from "../assets/images/gallery/Moment28.jpg";
import Moment29 from "../assets/images/gallery/Moment29.jpg";
import Moment30 from "../assets/images/gallery/Moment30.jpg";
import Moment31 from "../assets/images/gallery/Moment31.jpg";
import Moment32 from "../assets/images/gallery/Moment32.jpg";
import Moment33 from "../assets/images/gallery/Moment33.jpg";

const galleryImages = [
  Moment3,
  Moment8,
  Moment9,
  Moment10,
  Moment11,
  Moment12,
  Moment13,
  Moment21,
  Moment22,
  Moment23,
  Moment24,
  Moment25,
  Moment26,
  Moment27,
  Moment28,
  Moment29,
  Moment30,
  Moment31,
  Moment32,
  Moment33,
];

const galleryItems = galleryImages.map((image, index) => ({
  image,
  number: String(index + 1).padStart(2, "0"),
  title: `AloeGreen Project Moment ${index + 1}`,
}));

function getCardClass(index) {
  const patternIndex = index % 10;

  if (patternIndex === 0) {
    return "sm:col-span-2 sm:row-span-2";
  }

  if (patternIndex === 3 || patternIndex === 8) {
    return "lg:col-span-2";
  }

  if (patternIndex === 6) {
    return "lg:row-span-2";
  }

  return "";
}

function SectionBadge({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
      <Icon size={17} aria-hidden="true" />
      {children}
    </span>
  );
}

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedItem =
    selectedIndex !== null ? galleryItems[selectedIndex] : null;

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPreviousImage = () => {
    setSelectedIndex((currentIndex) =>
      currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1,
    );
  };

  const showNextImage = () => {
    setSelectedIndex((currentIndex) =>
      currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1,
    );
  };

  useEffect(() => {
    if (selectedIndex === null) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#f7fcf8]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-lime-200/30 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
          <div>
            <SectionBadge icon={ImageIcon}>Project Gallery</SectionBadge>

            <h1 className="mt-7 max-w-3xl text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              Moments from the{" "}
              <span className="text-emerald-700">AloeGreen journey.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Explore moments captured throughout the AloeGreen research and
              development journey, from team collaboration and system
              development to testing, academic activities, and project
              presentations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <Images
                  size={16}
                  className="text-emerald-600"
                  aria-hidden="true"
                />
                {galleryItems.length} Project Moments
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <Camera
                  size={16}
                  className="text-emerald-600"
                  aria-hidden="true"
                />
                Research Memories
              </span>
            </div>

            <button
              type="button"
              onClick={() => setSelectedIndex(0)}
              className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-700/20 transition hover:-translate-y-0.5 hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
            >
              Explore Gallery
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Hero collage */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-emerald-300/30 to-lime-200/30 blur-3xl" />

            <div className="relative grid h-[430px] grid-cols-5 grid-rows-5 gap-3 overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-3 shadow-[0_30px_80px_-25px_rgba(6,78,59,0.28)] backdrop-blur-xl sm:h-[500px] sm:p-4">
              <button
                type="button"
                onClick={() => setSelectedIndex(0)}
                className="group relative col-span-3 row-span-3 overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
                aria-label="Open project moment 1"
              >
                <img
                  src={galleryItems[0].image}
                  alt={galleryItems[0].title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </button>

              <button
                type="button"
                onClick={() => setSelectedIndex(1)}
                className="group relative col-span-2 row-span-2 overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
                aria-label="Open project moment 2"
              >
                <img
                  src={galleryItems[1].image}
                  alt={galleryItems[1].title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </button>

              <button
                type="button"
                onClick={() => setSelectedIndex(2)}
                className="group relative col-span-2 row-span-3 overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
                aria-label="Open project moment 3"
              >
                <img
                  src={galleryItems[2].image}
                  alt={galleryItems[2].title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </button>

              <button
                type="button"
                onClick={() => setSelectedIndex(3)}
                className="group relative col-span-3 row-span-2 overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
                aria-label="Open project moment 4"
              >
                <img
                  src={galleryItems[3].image}
                  alt={galleryItems[3].title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/30 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                    <Sparkles size={13} aria-hidden="true" />
                    AloeGreen Memories
                  </span>
                </div>
              </button>
            </div>

            <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-white bg-white p-3 shadow-xl sm:flex">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Camera size={19} aria-hidden="true" />
              </span>

              <div>
                <p className="text-xs font-bold text-slate-900">
                  Project Journey
                </p>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  Captured through every stage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery introduction */}
      <section className="px-6 pb-4 pt-20 lg:px-8 lg:pt-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SectionBadge icon={Images}>Captured Moments</SectionBadge>

            <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
              Explore the project through images.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-slate-600">
            Select any image to view it in full screen. Use the navigation
            controls or keyboard arrow keys to move between project moments.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="px-6 py-14 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl auto-rows-[250px] grid-cols-1 gap-5 sm:grid-cols-2 sm:auto-rows-[220px] lg:grid-cols-4 lg:auto-rows-[240px]">
          {galleryItems.map((item, index) => (
            <article
              key={item.number}
              className={`group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/10 ${getCardClass(
                index,
              )}`}
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="relative h-full w-full overflow-hidden text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-emerald-300"
                aria-label={`View ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/5 to-transparent opacity-80 transition duration-300 group-hover:opacity-100" />

                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-white/20 bg-slate-950/25 px-3 py-1.5 text-[10px] font-black tracking-[0.15em] text-white backdrop-blur-md">
                    MOMENT {item.number}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between gap-4 p-5 opacity-90 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.13em] text-emerald-200">
                      AloeGreen Gallery
                    </p>

                    <h3 className="mt-1 text-base font-extrabold text-white">
                      Project Moment {item.number}
                    </h3>
                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition group-hover:bg-white group-hover:text-emerald-700">
                    <Maximize2 size={17} aria-hidden="true" />
                  </span>
                </div>
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Gallery statement */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-emerald-700 via-emerald-800 to-slate-950 px-7 py-14 sm:px-12 lg:py-16">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-lime-300/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-100">
                <Sparkles size={17} aria-hidden="true" />
                The AloeGreen Journey
              </span>

              <h2 className="mt-6 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
                Every image represents part of our research experience.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-emerald-50/80">
                These moments reflect the collaboration, learning, development,
                evaluation, and progress involved in building the AloeGreen
                smart agriculture platform.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSelectedIndex(0)}
              className="group inline-flex w-fit items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-emerald-800 transition hover:-translate-y-0.5 hover:bg-emerald-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
            >
              View from Beginning
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Full-screen lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing ${selectedItem.title}`}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-slate-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30 sm:right-7 sm:top-7"
            aria-label="Close image viewer"
          >
            <X size={22} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={showPreviousImage}
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-slate-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30 sm:left-7 sm:h-12 sm:w-12"
            aria-label="View previous image"
          >
            <ChevronLeft size={25} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={showNextImage}
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-slate-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30 sm:right-7 sm:h-12 sm:w-12"
            aria-label="View next image"
          >
            <ChevronRight size={25} aria-hidden="true" />
          </button>

          <div className="flex h-full w-full max-w-7xl flex-col items-center justify-center">
            <div className="relative flex min-h-0 w-full flex-1 items-center justify-center">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-[78vh] max-w-full rounded-2xl object-contain shadow-2xl"
              />
            </div>

            <div className="mt-5 flex w-full max-w-4xl flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-center backdrop-blur-md sm:flex-row sm:text-left">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-300">
                  AloeGreen Gallery
                </p>

                <h2 className="mt-1 font-bold text-white">
                  Project Moment {selectedItem.number}
                </h2>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-slate-300">
                  {selectedIndex + 1} / {galleryItems.length}
                </span>

                <div className="hidden items-center gap-2 text-xs text-slate-400 sm:flex">
                  <ArrowLeft size={14} aria-hidden="true" />
                  Use arrow keys
                  <ArrowRight size={14} aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}