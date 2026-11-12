// Decorative fine-line architectural drafting: structural grid axes with grid bubbles, column
// squares, a door swing, a curved wall, stair treads and dimension lines. It is general, not a
// drawing of any one project. Uses currentColor, so set the colour with a text-* class.
//
// The sheet continues well to the left of where it is shown, so on any screen width it is cut off
// by the screen edge instead of ending in a complete drawing.

const xs = [-316, -246, -176, -106, -36, 34, 104, 170]; // vertical axes
const ys = [70, 230, 390, 480]; // horizontal axes
const left = -360;

export default function Drafting({ className = "" }: { className?: string }) {
  return (
    <svg viewBox={`${left} 0 ${200 - left} 520`} aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="0.8">
      {/* structural axes (dash-dot), with a grid bubble at the top of each */}
      {xs.map((x) => (
        <g key={x}>
          <path d={`M${x} 28V506`} strokeDasharray="9 3 1.5 3" opacity="0.6" />
          <circle cx={x} cy="18" r="9" />
        </g>
      ))}
      {ys.map((y) => (
        <path key={y} d={`M${left} ${y}H190`} strokeDasharray="9 3 1.5 3" opacity="0.6" />
      ))}

      {/* columns at the intersections */}
      {xs.flatMap((x) => ys.map((y) => <rect key={`${x}-${y}`} x={x - 3.5} y={y - 3.5} width="7" height="7" />))}

      {/* door swings */}
      <path d="M104 230H34" />
      <path d="M104 230A70 70 0 0 0 34 160" />
      <path d="M34 160V230" />
      <path d="M-106 390H-176" />
      <path d="M-106 390A70 70 0 0 1 -176 320" />
      <path d="M-176 320V390" />

      {/* curved walls: concentric arcs */}
      {[26, 38, 50].map((r) => (
        <path key={r} d={`M170 ${390 - r}A${r} ${r} 0 0 0 ${170 - r} 390`} />
      ))}
      {[26, 38, 50].map((r) => (
        <path key={`b${r}`} d={`M-36 ${230 + r}A${r} ${r} 0 0 1 ${-36 - r} 230`} />
      ))}

      {/* stair treads between two axes */}
      {Array.from({ length: 11 }, (_, i) => (
        <path key={i} d={`M104 ${74 + i * 14}H170`} opacity="0.8" />
      ))}
      <path d="M104 70V226M170 70V226" />
      <path d="M137 216V84M131 92l6-8 6 8" strokeWidth="0.7" />

      {/* plan hatches */}
      {Array.from({ length: 8 }, (_, i) => (
        <path key={i} d={`M34 ${398 + i * 10}l14 -10`} opacity="0.7" />
      ))}
      {Array.from({ length: 7 }, (_, i) => (
        <path key={`h${i}`} d={`M-246 ${78 + i * 10}l14 -10`} opacity="0.7" />
      ))}

      {/* dimension lines */}
      <path d="M12 70V480" opacity="0.8" />
      {ys.map((y) => (
        <path key={y} d={`M8 ${y + 4}l8 -8`} />
      ))}
      <path d={`M${left} 500H190`} opacity="0.6" />
    </svg>
  );
}
