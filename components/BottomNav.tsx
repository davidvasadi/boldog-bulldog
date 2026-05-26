'use client';

import { motion } from 'framer-motion';
import { CalendarCheck, GraduationCap, BarChart3, Lightbulb } from 'lucide-react';

export type View = 'today' | 'curriculum' | 'progress' | 'tips';

const ITEMS: { id: View; label: string; icon: typeof CalendarCheck }[] = [
  { id: 'today', label: 'Ma', icon: CalendarCheck },
  { id: 'curriculum', label: 'Tananyag', icon: GraduationCap },
  { id: 'progress', label: 'Haladás', icon: BarChart3 },
  { id: 'tips', label: 'Tippek', icon: Lightbulb },
];

// Lebegő, üveges bottom nav (Schedulio mintára) — minden képernyőméreten.
export function BottomNav({
  view,
  onChange,
}: {
  view: View;
  onChange: (v: View) => void;
}) {
  return (
    <nav className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 glass flex items-center gap-1.5 rounded-2xl px-3 py-2.5 shadow-soft">
      {ITEMS.map(({ id, label, icon: Icon }) => {
        const active = view === id;
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            aria-label={label}
            className="relative flex flex-col items-center"
          >
            <div
              className={`flex h-12 w-14 flex-col items-center justify-center gap-0.5 rounded-xl transition-all duration-300 ${
                active ? 'bg-bark text-cream shadow-md' : 'text-cocoa hover:bg-white/50'
              }`}
            >
              <Icon className={active ? 'h-5 w-5' : 'h-[18px] w-[18px]'} />
              <span className="text-[10px] font-medium leading-none">{label}</span>
            </div>
            {active && (
              <motion.span
                layoutId="navdot"
                className="absolute -bottom-1 h-1 w-1 rounded-full bg-bark"
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}
