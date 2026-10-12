import { useEffect, useState } from "react";
import { motion } from "motion/react";

import { sensors } from "../data/site";

const HISTORY = 24;

function seed() {
  return Object.fromEntries(
    sensors.map((sensor) => [sensor.key, Array.from({ length: HISTORY }, () => sensor.base)]),
  );
}

function step(history) {
  const next = {};
  for (const sensor of sensors) {
    const series = history[sensor.key];
    const last = series[series.length - 1];
    // Random walk that is gently pulled back toward the baseline.
    let value = last + (Math.random() - 0.5) * 2 * sensor.drift + (sensor.base - last) * 0.12;
    if (sensor.min !== undefined) value = Math.max(sensor.min, value);
    next[sensor.key] = [...series.slice(1), value];
  }
  return next;
}

function Sparkline({ series }) {
  const min = Math.min(...series);
  const max = Math.max(...series);
  const range = max - min || 1;
  const points = series
    .map((value, index) => `${(index / (series.length - 1)) * 100},${28 - ((value - min) / range) * 24}`)
    .join(" ");

  return (
    <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="h-8 w-full" aria-hidden="true">
      <polyline
        points={points}
        fill="none"
        stroke="#c5f467"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/* Demonstration feed: values are simulated in the browser, not read from a device. */
function SensorConsole() {
  const [history, setHistory] = useState(seed);

  useEffect(() => {
    const timer = setInterval(() => setHistory(step), 1400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-ink-950/70 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inset-0 animate-ping2 rounded-full bg-gel" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-gel" />
          </span>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-paper/80">
            ESP32 field node · MQTT / TLS
          </p>
        </div>
        <p className="rounded-full border border-sun/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-sun">
          Simulated demo feed
        </p>
      </div>

      <div className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-3 lg:grid-cols-5">
        {sensors.map((sensor, index) => {
          const Icon = sensor.icon;
          const series = history[sensor.key];
          const value = series[series.length - 1];

          return (
            <motion.div
              key={sensor.key}
              className="group bg-ink-900 p-5 transition-colors duration-300 hover:bg-ink-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <div className="flex items-center justify-between text-paper/50">
                <p className="text-xs">{sensor.label}</p>
                <Icon size={15} aria-hidden="true" className="transition-colors group-hover:text-gel" />
              </div>
              <p className="mt-4 font-display text-3xl font-semibold tabular-nums tracking-tight text-paper">
                {value.toLocaleString("en-US", {
                  minimumFractionDigits: sensor.decimals,
                  maximumFractionDigits: sensor.decimals,
                })}
                <span className="ml-1.5 font-mono text-xs font-normal text-paper/45">{sensor.unit}</span>
              </p>
              <div className="mt-3 opacity-70 transition-opacity group-hover:opacity-100">
                <Sparkline series={series} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default SensorConsole;
