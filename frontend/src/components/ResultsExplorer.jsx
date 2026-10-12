import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Trophy } from "lucide-react";

import { results } from "../data/site";

function format(value, decimals) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/* Model comparison for each module, straight from the paper's result tables. */
function ResultsExplorer() {
  const [moduleKey, setModuleKey] = useState(results[0].key);
  const [metricKey, setMetricKey] = useState(results[0].metrics[0].key);
  const [hovered, setHovered] = useState(null);

  const module = results.find((item) => item.key === moduleKey);
  const metric = module.metrics.find((item) => item.key === metricKey) ?? module.metrics[0];

  const values = module.rows.map((row) => row[metric.key]);
  const scaleMax = metric.max ?? Math.max(...values) * 1.08;
  const bestValue = metric.higherIsBetter ? Math.max(...values) : Math.min(...values);

  function selectModule(key) {
    setModuleKey(key);
    setMetricKey(results.find((item) => item.key === key).metrics[0].key);
    setHovered(null);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      {/* Module picker */}
      <div role="tablist" aria-label="Module" className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
        {results.map((item) => {
          const selected = item.key === moduleKey;
          return (
            <button
              key={item.key}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => selectModule(item.key)}
              className={`relative shrink-0 rounded-2xl px-5 py-4 text-left transition-colors duration-300 ${
                selected ? "text-paper" : "text-ink-900/70 hover:text-ink-900"
              }`}
            >
              {selected ? (
                <motion.span
                  layoutId="result-tab"
                  className="absolute inset-0 rounded-2xl bg-ink-900"
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                />
              ) : null}
              <span className="relative block text-sm font-semibold">{item.label}</span>
              <span className={`relative mt-1 block font-mono text-[10px] uppercase tracking-[0.16em] ${selected ? "text-gel" : "text-ink-900/40"}`}>
                {item.source}
              </span>
            </button>
          );
        })}
      </div>

      {/* Chart panel */}
      <div className="rounded-[2rem] border border-ink-900/10 bg-white/60 p-6 sm:p-9">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="eyebrow text-ink-900/50">{module.source} · research paper</p>
            <h3 className="h-display mt-2 text-3xl">{module.label}</h3>
          </div>

          <div className="flex rounded-full border border-ink-900/15 p-1" role="group" aria-label="Metric">
            {module.metrics.map((item) => (
              <button
                key={item.key}
                type="button"
                aria-pressed={item.key === metric.key}
                onClick={() => setMetricKey(item.key)}
                className={`rounded-full px-4 py-1.5 font-mono text-xs transition-colors duration-300 ${
                  item.key === metric.key ? "bg-ink-900 text-paper" : "text-ink-900/60 hover:text-ink-900"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-6 font-mono text-xs text-ink-900/50">
          {metric.label} · {metric.higherIsBetter ? "higher is better" : "lower is better"}
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${module.key}-${metric.key}`}
            className="mt-4 space-y-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onMouseLeave={() => setHovered(null)}
          >
            {module.rows.map((row, index) => {
              const value = row[metric.key];
              const isBest = value === bestValue;
              const dimmed = hovered !== null && hovered !== row.name;

              return (
                <div
                  key={row.name}
                  onMouseEnter={() => setHovered(row.name)}
                  className={`grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 rounded-xl px-3 py-3 transition-all duration-300 sm:grid-cols-[170px_1fr_84px] ${
                    dimmed ? "opacity-40" : "opacity-100"
                  } ${hovered === row.name ? "bg-ink-900/5" : ""}`}
                >
                  <p className="flex items-center gap-2 text-sm font-semibold">
                    {row.name}
                    {isBest ? <Trophy size={14} aria-label="Best result" className="text-leaf-dark" /> : null}
                  </p>

                  <p className="text-right font-mono text-sm tabular-nums sm:order-3">
                    {format(value, metric.decimals)}
                  </p>

                  <div className="col-span-2 h-3 sm:order-2 sm:col-span-1">
                    <motion.div
                      className={`h-full rounded-r-[4px] ${isBest ? "bg-leaf-dark" : "bg-ink-900/25"}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.max((value / scaleMax) * 100, 0.6)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 + index * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={module.key}
            className="mt-7 border-t border-ink-900/10 pt-6 leading-7 text-ink-900/70"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {module.summary}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ResultsExplorer;
