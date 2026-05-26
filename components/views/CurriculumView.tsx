'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { CalendarDays, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useTraining } from '@/lib/useTraining';
import { LessonCard } from '@/components/LessonCard';

export function CurriculumView() {
  const t = useTraining();
  const [open, setOpen] = useState<number | null>(t.focusWeek?.week ?? 1);

  if (!t.hydrated) return null;

  return (
    <div className="mx-auto max-w-2xl px-5 pb-32 pt-8">
      <h1 className="text-2xl font-semibold text-bark">Tananyag</h1>
      <p className="mt-1 text-cocoa">
        Teljes éves tréningterv a beköltözéstől a felnőttkorig. A dátumok{' '}
        {t.onboarding.value.puppyName || 'a kutyád'} születése alapján számolódnak, így onnan
        indulsz, ahol most tartotok.
      </p>

      <div className="mt-6 space-y-3">
        {t.weeks.map((w) => {
          const expanded = open === w.week;
          const allDone = w.doneCount === w.total;
          return (
            <motion.div
              layout
              key={w.week}
              className={`overflow-hidden rounded-3xl border shadow-soft ${
                w.isCurrent ? 'border-cocoa bg-cocoa/5' : 'border-beige bg-white/55'
              }`}
            >
              <button
                onClick={() => setOpen(expanded ? null : w.week)}
                className="flex w-full items-center gap-4 p-5 text-left"
              >
                <span
                  className={`flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-2xl text-sm font-semibold ${
                    allDone ? 'bg-bark text-cream' : 'bg-beige text-bark'
                  }`}
                >
                  <span className="text-[10px] font-normal leading-none opacity-70">hét</span>
                  {w.week}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-bark">{w.theme}</h3>
                    {w.isCurrent && (
                      <span className="rounded-full bg-cocoa px-2 py-0.5 text-[10px] font-medium text-cream">
                        MOST
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 flex items-center gap-1.5 text-sm text-cocoa">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {w.dateRange || w.ageLabel} · {w.doneCount}/{w.total} kész
                  </p>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-cocoa transition-transform ${expanded ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-3 px-4 pb-4">
                      <p className="px-1 text-sm text-cocoa">{w.intro}</p>
                      {w.lessons.map((l) => (
                        <LessonCard
                          key={l.id}
                          lesson={l}
                          status={t.status[l.id]}
                          onCycle={() => t.cycleLesson(l.id)}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
