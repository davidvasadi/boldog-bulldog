'use client';

import { motion } from 'framer-motion';

// Apple Fitness-stílusú körgyűrű animált kitöltéssel.
export function ProgressRing({
  value,
  size = 140,
  stroke = 12,
  color = '#8A6F52',
  trackColor = 'rgba(201,183,156,0.3)',
  label,
  sublabel,
}: {
  value: number; // 0–100
  size?: number;
  stroke?: number;
  color?: string;
  trackColor?: string;
  label?: string;
  sublabel?: string;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (Math.min(100, Math.max(0, value)) / 100) * c;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={trackColor} strokeWidth={stroke} />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-semibold text-bark">{label ?? `${value}%`}</span>
        {sublabel && <span className="text-xs text-cocoa mt-0.5">{sublabel}</span>}
      </div>
    </div>
  );
}
