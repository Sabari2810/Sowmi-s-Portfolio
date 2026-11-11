// Decorative fine-line network, loosely suggesting neural pathways.
// Uses currentColor, so set the colour with a text-* class.

const nodes: [number, number][] = [
  [28, 150], [70, 70], [96, 196], [140, 124], [176, 44], [196, 206],
  [232, 112], [270, 170], [288, 58], [330, 122], [364, 200], [378, 44],
];

const links: [number, number][] = [
  [0, 1], [0, 3], [0, 2], [1, 3], [1, 4], [2, 3], [2, 5], [3, 6], [3, 5], [4, 6],
  [4, 8], [5, 7], [6, 7], [6, 8], [6, 9], [7, 9], [7, 10], [8, 9], [8, 11], [9, 10], [9, 11],
];

export default function Neural({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" aria-hidden className={className} fill="none">
      {links.map(([a, b]) => {
        const [x1, y1] = nodes[a];
        const [x2, y2] = nodes[b];
        // bend each link slightly so the network reads as organic rather than a rigid mesh
        const cx = (x1 + x2) / 2 + (y2 - y1) * 0.16;
        const cy = (y1 + y2) / 2 - (x2 - x1) * 0.16;
        return <path key={`${a}-${b}`} d={`M${x1} ${y1}Q${cx} ${cy} ${x2} ${y2}`} stroke="currentColor" strokeWidth="0.6" />;
      })}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 3.2 : 2.2} fill="currentColor" />
      ))}
    </svg>
  );
}
