const nodes = [
  [8, 18],
  [16, 42],
  [24, 12],
  [32, 58],
  [41, 28],
  [48, 72],
  [56, 16],
  [63, 46],
  [71, 68],
  [78, 22],
  [86, 54],
  [12, 78],
  [28, 88],
  [52, 8],
  [68, 36],
  [92, 40],
  [94, 78],
  [4, 52],
  [36, 8],
  [44, 92],
];

const links: [number, number][] = [
  [0, 2],
  [0, 4],
  [1, 3],
  [1, 7],
  [2, 6],
  [3, 5],
  [4, 7],
  [4, 9],
  [5, 8],
  [6, 9],
  [7, 10],
  [8, 10],
  [9, 15],
  [11, 1],
  [12, 5],
  [13, 6],
  [14, 7],
  [15, 16],
  [17, 0],
  [18, 2],
  [19, 8],
];

export function SignalField({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {links.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          className="signal-link"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r="0.55"
          className="signal-node"
          style={{ animationDelay: `${i * 0.18}s` }}
        />
      ))}
    </svg>
  );
}
