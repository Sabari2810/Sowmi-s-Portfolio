import type { ReactNode } from "react";

// Placeholder illustrations, one per project slug.
// To use real photographs instead, put them in /public/images and render
// <Image src={`/images/${slug}.jpg`} alt={alt} fill className="object-cover" /> here.

const INK = "#24221f";
const PAPER = "#f3efe8";
const CLAY = "#b5532a";

function Row(p: { x: number; y: number; n: number; w: number; h: number; gap: number; fill: string }) {
  return (
    <>
      {Array.from({ length: p.n }, (_, i) => (
        <rect key={i} x={p.x + i * (p.w + p.gap)} y={p.y} width={p.w} height={p.h} fill={p.fill} />
      ))}
    </>
  );
}

const art: Record<string, ReactNode> = {
  "halden-house": (
    <>
      <rect width="400" height="300" fill="#ddd3c3" />
      <circle cx="310" cy="78" r="30" fill={CLAY} />
      <rect y="228" width="400" height="72" fill={INK} />
      <rect x="96" y="160" width="186" height="68" fill="#93a29d" />
      <Row x={138} y={160} n={3} w={2} h={68} gap={40} fill={INK} />
      <rect x="50" y="200" width="46" height="28" fill="#b9ad9a" />
      <rect x="50" y="144" width="290" height="16" fill={INK} />
      <rect x="282" y="160" width="16" height="68" fill={INK} />
    </>
  ),
  "kiln-court-library": (
    <>
      <rect width="400" height="300" fill="#cfc6b6" />
      <circle cx="70" cy="50" r="14" fill={PAPER} />
      <rect x="40" y="90" width="320" height="150" fill={CLAY} />
      <rect x="40" y="90" width="320" height="10" fill="#8e3f1f" />
      {[65, 135, 205, 275].map((x) => (
        <path key={x} d={`M${x} 240V160a25 25 0 0 1 50 0v80z`} fill={INK} />
      ))}
      <rect y="240" width="400" height="60" fill="#3a3631" />
    </>
  ),
  "terrace-nine": (
    <>
      <rect width="400" height="300" fill="#c3ccc8" />
      <circle cx="80" cy="66" r="22" fill={CLAY} />
      <rect x="140" y="90" width="200" height="46" fill={PAPER} />
      <rect x="100" y="136" width="240" height="46" fill="#e9e2d5" />
      <rect x="60" y="182" width="280" height="50" fill={PAPER} />
      <Row x={160} y={104} n={5} w={16} h={20} gap={20} fill={INK} />
      <Row x={120} y={150} n={6} w={16} h={20} gap={20} fill={INK} />
      <Row x={80} y={198} n={7} w={16} h={22} gap={20} fill={INK} />
      <rect x="100" y="132" width="40" height="4" fill={CLAY} />
      <rect x="60" y="178" width="40" height="4" fill={CLAY} />
      <rect y="232" width="400" height="68" fill={INK} />
    </>
  ),
  "saltworks-pavilion": (
    <>
      <rect width="400" height="300" fill="#e4dccd" />
      <circle cx="200" cy="56" r="18" fill={CLAY} />
      <rect y="220" width="400" height="80" fill="#7f918f" />
      <polygon points="70,222 200,264 330,222" fill={INK} opacity=".25" />
      <polygon points="70,150 200,96 330,150" fill={INK} />
      <Row x={86} y={150} n={8} w={6} h={70} gap={28} fill={INK} />
    </>
  ),
  "orchard-studio": (
    <>
      <rect width="400" height="300" fill="#d6cdbd" />
      <circle cx="346" cy="206" r="20" fill="#5f6b55" />
      <circle cx="30" cy="212" r="15" fill="#5f6b55" />
      <polygon
        points="60,230 60,150 110,110 110,150 160,110 160,150 210,110 210,150 260,110 260,150 310,110 310,230"
        fill={INK}
      />
      <Row x={72} y={172} n={5} w={36} h={38} gap={12} fill="#c9a24a" />
      <rect y="230" width="400" height="70" fill="#5f6b55" />
    </>
  ),
  "north-quay-chapel": (
    <>
      <rect width="400" height="300" fill={INK} />
      <circle cx="312" cy="68" r="16" fill={PAPER} />
      <rect x="110" y="190" width="60" height="50" fill="#cfc6b6" />
      <rect x="230" y="170" width="80" height="70" fill="#bdb3a2" />
      <rect x="170" y="60" width="60" height="180" fill="#e9e2d5" />
      <rect x="197" y="90" width="6" height="90" fill={CLAY} />
      <rect y="240" width="400" height="60" fill="#14130f" />
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
