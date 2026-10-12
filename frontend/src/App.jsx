import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "motion/react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { ScrollProgress } from "./components/Motion";
import { LeafMark } from "./components/Ui";

import Home from "./pages/Home";
import Domain from "./pages/Domain";
import Milestones from "./pages/Milestones";
import Documents from "./pages/Documents";
import Presentations from "./pages/Presentations";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

/* Brief brand intro shown once per page load. */
function Preloader({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 1500);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950 text-paper"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        initial={{ scale: 0.4, opacity: 0, rotate: -20 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <LeafMark className="h-20 w-20" />
      </motion.div>
      <motion.p
        className="h-display mt-6 text-3xl"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Aloe<span className="accent text-gel">Green</span>
      </motion.p>
      <div className="mt-8 h-px w-40 overflow-hidden bg-white/10">
        <motion.div
          className="h-full origin-left bg-gel"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [entryKey] = useState(location.key);

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col bg-ink-900">
        <ScrollToTop />
        <ScrollProgress />

        <AnimatePresence>
          {loading ? <Preloader key="preloader" onDone={() => setLoading(false)} /> : null}
        </AnimatePresence>

        <Header />

        <main className="flex-1">
          {/* Green curtain that sweeps away on every route change */}
          {location.key !== entryKey ? (
            <motion.div
              key={`curtain-${location.pathname}`}
              aria-hidden="true"
              className="pointer-events-none fixed inset-0 z-[60] origin-top bg-gel"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            />
          ) : null}

          {/* Pages mount once the intro lifts so their entrance animations are seen */}
          {loading ? <div className="min-h-screen" /> : null}

          <motion.div
            key={location.pathname}
            className={loading ? "hidden" : ""}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {loading ? null : (
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/domain" element={<Domain />} />
              <Route path="/milestones" element={<Milestones />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/presentations" element={<Presentations />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
            )}
          </motion.div>
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
