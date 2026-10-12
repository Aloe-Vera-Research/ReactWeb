import { Fragment, useEffect, useState } from "react";
import { motion } from "motion/react";

import { layers, modules } from "../data/site";

/* Four-layer pipeline with data packets travelling between the layers. */
function Architecture() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(() => setActive((value) => (value + 1) % layers.length), 2600);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="flex flex-col items-stretch lg:flex-row">
        {layers.map((layer, index) => {
          const Icon = layer.icon;
          const isActive = index === active;

          return (
            <Fragment key={layer.key}>
              <motion.button
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`relative flex-1 rounded-[1.75rem] border p-6 text-left transition-colors duration-500 ${
                  isActive
                    ? "border-ink-900 bg-ink-900 text-paper"
                    : "border-ink-900/15 bg-paper text-ink-900"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.12, duration: 0.7 }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-500 ${
                      isActive ? "bg-gel text-ink-900" : "bg-ink-900/5 text-leaf-dark"
                    }`}
                  >
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className={`font-mono text-xs ${isActive ? "text-gel" : "text-ink-900/40"}`}>
                    LAYER {layer.step}
                  </span>
                </div>

                <h3 className="h-display mt-6 text-2xl">{layer.title}</h3>
                <p className={`mt-1 font-mono text-xs uppercase tracking-[0.14em] ${isActive ? "text-gel" : "text-leaf-dark"}`}>
                  {layer.summary}
                </p>

                <ul className={`mt-5 space-y-2 text-sm leading-6 ${isActive ? "text-paper/75" : "text-ink-900/65"}`}>
                  {layer.items.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className={`mt-2.5 h-1 w-1 shrink-0 rounded-full ${isActive ? "bg-gel" : "bg-leaf"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.button>

              {index < layers.length - 1 ? (
                <div
                  aria-hidden="true"
                  className="flex shrink-0 items-center justify-center lg:w-12"
                  style={{ "--d": `${index * 0.6}s` }}
                >
                  <div className="flow-y h-10 w-px bg-ink-900/20 lg:hidden" style={{ overflow: "visible" }} />
                  <div className="flow-x hidden h-px w-full bg-ink-900/20 lg:block" style={{ overflow: "visible" }} />
                </div>
              ) : null}
            </Fragment>
          );
        })}
      </div>

      {/* Analytical modules that sit inside the processing layer */}
      <motion.div
        className="mt-6 rounded-[1.75rem] border border-dashed border-ink-900/25 p-5 sm:p-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <p className="eyebrow text-ink-900/50">Analytical modules orchestrated by the processing layer</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={module.key}
                className="flex items-center gap-3 rounded-2xl bg-ink-900/5 px-4 py-3"
                animate={{ backgroundColor: active === 2 ? "rgba(197,244,103,0.55)" : "rgba(7,22,14,0.05)" }}
                transition={{ delay: active === 2 ? index * 0.08 : 0, duration: 0.4 }}
              >
                <Icon size={18} aria-hidden="true" className="shrink-0 text-leaf-dark" />
                <span className="text-sm font-semibold leading-5">{module.title}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default Architecture;
