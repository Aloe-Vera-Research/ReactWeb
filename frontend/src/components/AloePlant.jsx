import { motion } from "motion/react";

/* Blade outline in local space: base at the origin, tip pointing up. */
function blade(length, width, bend) {
  const w = width / 2;
  return [
    `M ${-w} 0`,
    `C ${-w} ${-length * 0.45}, ${bend - w * 0.5} ${-length * 0.82}, ${bend} ${-length}`,
    `C ${bend + w * 0.5} ${-length * 0.82}, ${w} ${-length * 0.45}, ${w} 0`,
    "Z",
  ].join(" ");
}

const leaves = [
  { angle: -62, length: 205, width: 46, bend: -26, fill: "url(#leaf-back)", delay: 0.05 },
  { angle: 62, length: 205, width: 46, bend: 26, fill: "url(#leaf-back)", delay: 0.1 },
  { angle: -40, length: 250, width: 50, bend: -20, fill: "url(#leaf-mid)", delay: 0.2 },
  { angle: 40, length: 250, width: 50, bend: 20, fill: "url(#leaf-mid)", delay: 0.25 },
  { angle: -19, length: 290, width: 52, bend: -12, fill: "url(#leaf-front)", delay: 0.35 },
  { angle: 19, length: 290, width: 52, bend: 12, fill: "url(#leaf-front)", delay: 0.4 },
  { angle: 0, length: 318, width: 50, bend: 0, fill: "url(#leaf-core)", delay: 0.5 },
];

const BASE = { x: 300, y: 470 };

function AloePlant({ className = "" }) {
  return (
    <svg viewBox="0 0 600 560" className={className} role="img" aria-label="Illustration of an Aloe vera plant surrounded by sensor signals">
      <defs>
        <linearGradient id="leaf-back" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#0f3a22" />
          <stop offset="1" stopColor="#1f6a3c" />
        </linearGradient>
        <linearGradient id="leaf-mid" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#14502d" />
          <stop offset="1" stopColor="#3f9e4f" />
        </linearGradient>
        <linearGradient id="leaf-front" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#1c6a38" />
          <stop offset="1" stopColor="#86cf45" />
        </linearGradient>
        <linearGradient id="leaf-core" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#2f8f4e" />
          <stop offset="1" stopColor="#c5f467" />
        </linearGradient>
        <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#c5f467" stopOpacity="0.28" />
          <stop offset="1" stopColor="#c5f467" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="300" cy="300" r="270" fill="url(#glow)" />

      {/* Signal rings */}
      <g className="origin-center animate-spin-slow" style={{ transformOrigin: "300px 300px" }}>
        <circle cx="300" cy="300" r="255" fill="none" stroke="#c5f467" strokeOpacity="0.22" strokeDasharray="2 12" />
        <circle cx="300" cy="45" r="5" fill="#c5f467" />
        <circle cx="555" cy="300" r="3" fill="#c5f467" fillOpacity="0.6" />
      </g>
      <g style={{ transformOrigin: "300px 300px", animation: "spin-slow 90s linear infinite reverse" }}>
        <circle cx="300" cy="300" r="200" fill="none" stroke="#c5f467" strokeOpacity="0.14" strokeDasharray="40 14" />
        <circle cx="100" cy="300" r="4" fill="#f2b45c" />
      </g>

      {/* Soil */}
      <motion.ellipse
        cx={BASE.x}
        cy={BASE.y + 14}
        rx="170"
        ry="20"
        fill="#040d08"
        initial={{ opacity: 0, scaleX: 0.3 }}
        animate={{ opacity: 0.9, scaleX: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Leaves */}
      {leaves.map((leaf) => (
        <g key={leaf.angle} transform={`translate(${BASE.x} ${BASE.y}) rotate(${leaf.angle})`}>
          <g
            className="leaf"
            style={{ "--d": `${leaf.delay}s`, "--sway": `${leaf.angle >= 0 ? 1.4 : -1.4}deg` }}
          >
            <path d={blade(leaf.length, leaf.width, leaf.bend)} fill={leaf.fill} />
            <path
              d={`M 0 -8 Q ${leaf.bend * 0.4} ${-leaf.length * 0.55} ${leaf.bend} ${-leaf.length + 14}`}
              fill="none"
              stroke="#eaffc0"
              strokeOpacity="0.22"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {Array.from({ length: 6 }).map((_, index) => {
              const t = 0.2 + index * 0.12;
              const half = (leaf.width / 2) * (1 - t * 0.75);
              return (
                <g key={index} fill="#eaffc0" fillOpacity="0.5">
                  <circle cx={-half + leaf.bend * t * t} cy={-leaf.length * t} r="1.6" />
                  <circle cx={half + leaf.bend * t * t} cy={-leaf.length * t} r="1.6" />
                </g>
              );
            })}
          </g>
        </g>
      ))}

      {/* Soil probe */}
      <motion.g
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.7, type: "spring", bounce: 0.4 }}
      >
        <rect x="438" y="418" width="8" height="62" rx="3" fill="#d9d4c0" />
        <rect x="424" y="392" width="36" height="30" rx="7" fill="#07160e" stroke="#c5f467" strokeWidth="1.5" />
        <circle cx="442" cy="407" r="4" fill="#c5f467" />
        <circle cx="442" cy="407" r="4" fill="none" stroke="#c5f467" className="animate-ping2" style={{ transformOrigin: "442px 407px" }} />
        <path d="M442 392 C 442 340, 400 330, 372 318" fill="none" stroke="#c5f467" strokeWidth="1.5" className="dash-flow" strokeOpacity="0.7" />
      </motion.g>
    </svg>
  );
}

export default AloePlant;
