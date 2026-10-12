import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

import { NextPage, PageHero, Section } from "../components/Ui";
import { gallery, galleryCategories } from "../data/gallery";

function Lightbox({ items, index, onClose, onStep }) {
  const item = items[index];

  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onStep(1);
      if (event.key === "ArrowLeft") onStep(-1);
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onStep]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      className="fixed inset-0 z-[90] flex flex-col bg-ink-950/95 p-4 text-paper backdrop-blur-md sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs tracking-[0.16em] text-paper/60">
          {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-gel hover:text-ink-900"
        >
          <X size={18} aria-hidden="true" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center py-4">
        <AnimatePresence mode="wait">
          <motion.img
            key={item.src}
            src={item.src}
            alt={item.caption}
            className="max-h-full max-w-full rounded-2xl object-contain"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
          />
        </AnimatePresence>

        {[-1, 1].map((direction) => (
          <button
            key={direction}
            type="button"
            aria-label={direction === -1 ? "Previous photo" : "Next photo"}
            onClick={(event) => {
              event.stopPropagation();
              onStep(direction);
            }}
            className={`absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ink-900/80 ring-1 ring-white/20 transition-colors hover:bg-gel hover:text-ink-900 ${
              direction === -1 ? "left-0" : "right-0"
            }`}
          >
            {direction === -1 ? <ChevronLeft size={20} aria-hidden="true" /> : <ChevronRight size={20} aria-hidden="true" />}
          </button>
        ))}
      </div>

      <p className="text-center text-paper/80">
        <span className="mr-3 font-mono text-[10px] uppercase tracking-[0.16em] text-gel">{item.category}</span>
        {item.caption}
      </p>
    </motion.div>
  );
}

function Gallery() {
  const [category, setCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const items = category === "All" ? gallery : gallery.filter((item) => item.category === category);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (direction) => setOpenIndex((value) => (value + direction + items.length) % items.length),
    [items.length],
  );

  return (
    <>
      <PageHero
        index="07"
        eyebrow="Gallery"
        title="Out of the lab, *into the field.*"
        lead="Photographs from the team's visit to an Aloe vera cultivation — meeting growers, walking the rows and putting the app in real hands."
      />

      <Section tone="paper">
        <div className="flex flex-wrap gap-2">
          {galleryCategories.map((name) => {
            const selected = name === category;
            const count = name === "All" ? gallery.length : gallery.filter((item) => item.category === name).length;
            return (
              <button
                key={name}
                type="button"
                aria-pressed={selected}
                onClick={() => setCategory(name)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                  selected ? "text-paper" : "text-ink-900/65 hover:text-ink-900"
                }`}
              >
                {selected ? (
                  <motion.span
                    layoutId="gallery-filter"
                    className="absolute inset-0 rounded-full bg-ink-900"
                    transition={{ type: "spring", stiffness: 340, damping: 30 }}
                  />
                ) : (
                  <span className="absolute inset-0 rounded-full border border-ink-900/15" />
                )}
                <span className="relative">
                  {name}
                  <span className={`ml-2 font-mono text-[10px] ${selected ? "text-gel" : "text-ink-900/40"}`}>{count}</span>
                </span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {items.map((item, index) => (
              <motion.button
                key={item.src}
                type="button"
                layout
                onClick={() => setOpenIndex(index)}
                aria-label={`Open photo: ${item.caption}`}
                className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-[1.5rem] bg-ink-900 text-left"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.4) }}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 translate-y-4 p-5 text-paper opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-gel">{item.category}</span>
                  <span className="mt-1 block text-sm leading-5">{item.caption}</span>
                </span>
                <span className="absolute right-4 top-4 flex h-10 w-10 scale-0 items-center justify-center rounded-full bg-gel text-ink-900 transition-transform duration-500 group-hover:scale-100">
                  <Maximize2 size={16} aria-hidden="true" />
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      <AnimatePresence>
        {openIndex !== null ? (
          <Lightbox items={items} index={openIndex} onClose={close} onStep={step} />
        ) : null}
      </AnimatePresence>

      <NextPage to="/contact" title="Get in touch" />
    </>
  );
}

export default Gallery;
