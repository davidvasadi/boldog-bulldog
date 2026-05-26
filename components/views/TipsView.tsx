'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Lightbulb } from 'lucide-react';
import { useState } from 'react';
import { TIPS, tipOfTheDay, GROWTH_TIMELINE, TEETHING_TIMELINE } from '@/lib/data';

export function TipsView() {
  const todays = tipOfTheDay();
  const start = Math.max(0, TIPS.indexOf(todays));
  const [i, setI] = useState(start);
  const go = (d: number) => setI((p) => (p + d + TIPS.length) % TIPS.length);

  return (
    <div className="mx-auto max-w-2xl px-5 pb-32 pt-8">
      <h1 className="text-2xl font-semibold text-bark">Tippek és idővonal</h1>

      {/* Tipp carousel */}
      <div className="glass mt-5 rounded-4xl p-7 text-center shadow-soft">
        <span className="inline-flex items-center gap-2 text-sm font-medium text-cocoa">
          <Lightbulb className="h-4 w-4" /> A nap tippje
        </span>
        <div className="relative mt-4 min-h-[120px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xl font-medium leading-relaxed text-bark"
            >
              {TIPS[i]}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="mt-4 flex items-center justify-center gap-5">
          <button onClick={() => go(-1)} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-bark active:scale-90" aria-label="Előző">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-1.5">
            {TIPS.map((_, idx) => (
              <span key={idx} className={`h-1.5 rounded-full transition-all ${idx === i ? 'w-5 bg-bark' : 'w-1.5 bg-latte/50'}`} />
            ))}
          </div>
          <button onClick={() => go(1)} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-bark active:scale-90" aria-label="Következő">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Növekedési idővonal */}
      <h2 className="mt-8 mb-3 font-semibold text-bark">Növekedési idővonal</h2>
      <div className="space-y-3">
        {GROWTH_TIMELINE.map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="glass flex gap-4 rounded-3xl p-4 shadow-soft"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bark text-sm text-cream">
              {idx + 1}
            </span>
            <div>
              <span className="text-xs font-medium text-latte">{s.weeks}</span>
              <h3 className="font-semibold text-bark">{s.title}</h3>
              <p className="text-sm text-cocoa">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fogzás */}
      <h2 className="mt-8 mb-3 font-semibold text-bark">Fogzási idővonal</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {TEETHING_TIMELINE.map((t) => (
          <div key={t.title} className="glass rounded-3xl p-4 shadow-soft">
            <span className="text-xs font-medium text-latte">{t.age}</span>
            <h4 className="font-semibold text-bark">{t.title}</h4>
            <p className="text-sm text-cocoa">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
