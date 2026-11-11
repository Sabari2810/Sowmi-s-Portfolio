import type { ReactNode } from "react";

// Placeholder illustrations, one per project slug, drawn in the portfolio palette
// (white volumes, red brick, grey sky). To use real renders or photographs instead,
// put them in /public/images and render
// <Image src={`/images/${slug}.jpg`} alt={alt} fill className="object-cover" /> here.

const SKY = "#e4e3e0";
const GROUND = "#cbc9c5";
const WHITE = "#fbfbfa";
const BRICK = "#8c2f24";
const BRICK_D = "#6f241b";
const GLASS = "#d3d6d6";
const DARK = "#1f1f1f";

function Row(p: { x: number; y: number; n: number; w: number; h: number; gap: number; fill: string }) {
  return (
    <>
      {Array.from({ length: p.n }, (_, i) => (
        <rect key={i} x={p.x + i * (p.w + p.gap)} y={p.y} width={p.w} height={p.h} fill={p.fill} />
      ))}
    </>
  );
}

/** A small standing figure with feet at (x, y). */
function Person({ x, y, h = 16 }: { x: number; y: number; h?: number }) {
  return (
    <g fill={DARK}>
      <circle cx={x} cy={y - h * 0.9} r={h * 0.14} />
      <rect x={x - h * 0.12} y={y - h * 0.74} width={h * 0.24} height={h * 0.74} rx={h * 0.1} />
    </g>
  );
}

const art: Record<string, ReactNode> = {
  "courtyard-museum": (
    <>
      <rect width="400" height="300" fill={SKY} />
      <rect y="70" width="130" height="150" fill={BRICK} />
      <path d="M40 150v-30a18 18 0 0 1 36 0v30z" fill={BRICK_D} />
      <rect x="140" y="122" width="210" height="88" fill={GLASS} />
      <Row x={180} y={122} n={4} w={1.5} h={88} gap={40} fill="#9a9c9c" />
      <rect x="110" y="110" width="260" height="12" fill={WHITE} />
      <rect x="350" y="122" width="20" height="88" fill={WHITE} />
      <rect x="110" y="210" width="260" height="10" fill={WHITE} />
      <rect y="220" width="400" height="80" fill={GROUND} />
      <path d="M0 238h96v8H0zM0 252h72v8H0z" fill="#b7b5b1" />
      <Person x={200} y={222} />
      <Person x={213} y={223} h={15} />
      <Person x={300} y={240} h={22} />
      <Person x={335} y={228} h={17} />
    </>
  ),
  "weavers-library": (
    <>
      <rect width="400" height="300" fill={SKY} />
      <circle cx="60" cy="150" r="34" fill="#a3a69f" />
      <rect x="58" y="180" width="4" height="50" fill="#7c7f79" />
      <rect x="300" y="110" width="100" height="120" fill={BRICK} />
      <Row x={316} y={130} n={3} w={14} h={20} gap={12} fill={BRICK_D} />
      <Row x={316} y={170} n={3} w={14} h={20} gap={12} fill={BRICK_D} />
      <rect x="120" y="60" width="180" height="170" fill={WHITE} />
      <Row x={140} y={80} n={4} w={28} h={28} gap={12} fill="#2c2c2c" />
      <Row x={140} y={125} n={4} w={28} h={28} gap={12} fill="#2c2c2c" />
      <rect x="180" y="178" width="60" height="52" fill="#2c2c2c" />
      <rect y="230" width="400" height="70" fill={GROUND} />
      <Person x={200} y={232} />
      <Person x={262} y={246} h={22} />
      <Person x={100} y={240} h={18} />
    </>
  ),
  "brick-house": (
    <>
      <rect width="400" height="300" fill={SKY} />
      <polygon points="60,230 60,130 130,70 200,130 200,230" fill={BRICK} />
      <rect x="90" y="150" width="26" height="36" fill={BRICK_D} />
      <rect x="144" y="150" width="26" height="36" fill={BRICK_D} />
      <rect x="118" y="100" width="24" height="24" fill={BRICK_D} />
      <rect x="200" y="150" width="150" height="80" fill={WHITE} />
      <rect x="215" y="165" width="120" height="65" fill={GLASS} />
      <Row x={254} y={165} n={2} w={1.5} h={65} gap={39} fill="#9a9c9c" />
      <rect x="194" y="144" width="162" height="6" fill={DARK} />
      <rect y="230" width="400" height="70" fill={GROUND} />
      <Person x={368} y={236} h={20} />
      <Person x={282} y={231} h={15} />
    </>
  ),
  "terrace-housing": (
    <>
      <rect width="400" height="300" fill={SKY} />
      <rect x="340" y="56" width="40" height="174" fill={BRICK} />
      <rect x="140" y="80" width="200" height="50" fill={WHITE} />
      <rect x="100" y="130" width="240" height="50" fill="#efeeec" />
      <rect x="60" y="180" width="280" height="50" fill={WHITE} />
      <Row x={160} y={94} n={5} w={16} h={22} gap={20} fill="#2c2c2c" />
      <Row x={120} y={144} n={6} w={16} h={22} gap={20} fill="#2c2c2c" />
      <Row x={80} y={194} n={7} w={16} h={24} gap={20} fill="#2c2c2c" />
      <rect x="100" y="126" width="40" height="4" fill={BRICK} />
      <rect x="60" y="176" width="40" height="4" fill={BRICK} />
      <rect y="230" width="400" height="70" fill={GROUND} />
      <Person x={36} y={240} h={20} />
      <Person x={118} y={130} h={12} />
    </>
  ),
  "market-pavilion": (
    <>
      <rect width="400" height="300" fill={SKY} />
      <rect y="120" width="400" height="110" fill={BRICK} />
      <Row x={30} y={150} n={5} w={30} h={44} gap={48} fill={BRICK_D} />
      <rect x="96" y="198" width="44" height="32" fill="#efeeec" />
      <rect x="196" y="198" width="44" height="32" fill="#efeeec" />
      <rect x="290" y="198" width="34" height="32" fill="#efeeec" />
      <Row x={70} y={118} n={6} w={5} h={112} gap={47} fill={WHITE} />
      <rect x="50" y="108" width="300" height="10" fill={WHITE} />
      <rect y="230" width="400" height="70" fill={GROUND} />
      <Person x={160} y={233} />
      <Person x={172} y={234} h={15} />
      <Person x={262} y={244} h={22} />
      <Person x={30} y={238} h={19} />
      <Person x={372} y={240} h={20} />
    </>
  ),
  "studio-interior": (
    <>
      <rect width="400" height="300" fill="#e9e7e3" />
      <rect x="40" y="56" width="120" height="110" fill={WHITE} />
      <path d="M100 56v110M40 111h120" stroke="#c9c7c3" strokeWidth="2" />
      <rect x="250" y="34" width="112" height="196" fill="#6b4630" />
      <Row x={250} y={34} n={12} w={2} h={196} gap={8} fill="#4a2e1f" />
      <path d="M200 0v76" stroke={DARK} strokeWidth="1.5" />
      <circle cx="200" cy="90" r="14" fill={DARK} />
      <rect y="230" width="400" height="70" fill={GROUND} />
      <rect x="70" y="176" width="150" height="30" rx="8" fill={BRICK_D} />
      <rect x="62" y="196" width="166" height="36" rx="8" fill={BRICK} />
      <rect x="76" y="232" width="5" height="10" fill={DARK} />
      <rect x="209" y="232" width="5" height="10" fill={DARK} />
    </>
  ),
};

export default function ProjectArt({
  slug,
  alt,
  className = "",
}: {
  slug: string;
  alt: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={alt}
      className={`block h-full w-full ${className}`}
    >
      {art[slug]}
    </svg>
  );
}
