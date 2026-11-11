// Placeholder technical drawings (plan, axonometric, site maps).
// Replace with exported drawings by swapping these for <img src="/images/plan.png" … />.

const INK = "#141414";
const RED = "#7d0a0a";

/** Ground-floor plan. */
export function FloorPlan({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 244" role="img" aria-label="Floor plan drawing" className={className}>
      <g fill="none" stroke={INK}>
        <path strokeWidth="5" d="M20 20h200v200H20zM20 120h70M110 120h110M120 20v60M120 100v20M150 120v40M150 180v40" />
        <path strokeWidth="1" d="M90 120a20 20 0 0 1 20 20M120 80a20 20 0 0 0 20 20M150 160a20 20 0 0 0 20 20" />
        <g strokeWidth="1">
          <rect x="32" y="34" width="46" height="60" />
          <path d="M32 46h46" />
          <rect x="140" y="32" width="66" height="26" />
          <circle cx="173" cy="84" r="14" />
          <rect x="34" y="150" width="50" height="22" rx="4" />
          <rect x="44" y="184" width="30" height="18" />
          <rect x="166" y="132" width="42" height="18" />
          <rect x="182" y="186" width="26" height="24" />
          <circle cx="195" cy="198" r="6" />
        </g>
        <path strokeWidth=".75" d="M20 234h200M20 230v8M120 230v8M220 230v8" />
      </g>
    </svg>
  );
}

/** Wireframe axonometric of a gabled hall. Uses currentColor so it works on any background. */
export function Axon({ className = "" }: { className?: string }) {
  const W = 6, D = 4, H = 3, R = 1.3;
  const pt = (x: number, y: number, z: number) =>
    `${(108 + (x - y) * 17.3).toFixed(1)} ${(162 + (x + y) * 10 - z * 22).toFixed(1)}`;
  const seg = (a: number[], b: number[]) => `M${pt(a[0], a[1], a[2])}L${pt(b[0], b[1], b[2])}`;
  const d: string[] = [];
  for (let i = 0; i <= W; i++) {
    d.push(seg([i, 0, 0], [i, D, 0]), seg([i, 0, H], [i, D, H]));
    d.push(seg([i, 0, 0], [i, 0, H]), seg([i, D, 0], [i, D, H]));
    d.push(seg([i, 0, H], [i, D / 2, H + R]), seg([i, D, H], [i, D / 2, H + R]));
  }
  for (let j = 0; j <= D; j++) {
    d.push(seg([0, j, 0], [W, j, 0]));
    d.push(seg([0, j, 0], [0, j, H]), seg([W, j, 0], [W, j, H]));
  }
  d.push(seg([0, 0, H], [W, 0, H]), seg([0, D, H], [W, D, H]), seg([0, D / 2, H + R], [W, D / 2, H + R]));
  d.push(seg([0, 0, H / 2], [W, 0, H / 2]), seg([0, D, H / 2], [W, D, H / 2]));
  return (
    <svg viewBox="30 50 200 200" role="img" aria-label="Axonometric structural drawing" className={className}>
      <path d={d.join("")} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

/** Figure-ground site map; each phase adds a layer of analysis. */
export function SiteMap({ phase, className = "" }: { phase: 1 | 2 | 3; className?: string }) {
  const blocks: [number, number, number, number][] = [];
  const cols = [8, 46, 90, 128, 166];
  const rows = [8, 44, 86, 124, 162];
  cols.forEach((x, i) =>
    rows.forEach((y, j) => {
      if ((i + j) % 5 === 4) return;
      blocks.push([x, y, i === 1 ? 36 : 30, j === 1 ? 34 : 30]);
    })
  );
  const hot = (x: number, y: number) => Math.hypot(x + 15 - 118, y + 15 - 92) < 46;
  return (
    <svg viewBox="0 0 204 200" role="img" aria-label={`Site analysis map, phase ${phase}`} className={className}>
      {blocks.map(([x, y, w, h]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} fill={hot(x, y) ? RED : "#c6c4c0"} opacity={hot(x, y) ? 0.85 : 1} />
      ))}
      <circle cx="118" cy="92" r="52" fill={RED} opacity="0.14" />
      <circle cx="118" cy="92" r="52" fill="none" stroke={RED} strokeWidth="1.2" />
      {phase === 1 && <circle cx="40" cy="160" r="26" fill="none" stroke={RED} strokeWidth="1.2" />}
      {phase === 2 && (
        <g stroke={INK} strokeWidth="2.5" fill={INK}>
          <path d="M40 30L150 150" fill="none" />
          <path d="M156 157l-11-3 7-7z" />
        </g>
      )}
      {phase === 3 && (
        <g stroke={INK} strokeWidth="2.5" fill={INK}>
          <path d="M124 60v124" fill="none" />
          <path d="M124 194l-5-10h10z" />
        </g>
      )}
    </svg>
  );
}
