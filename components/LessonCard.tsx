'use client';

import { motion } from 'framer-motion';
import { Check, RotateCw, Target } from 'lucide-react';
import type { Lesson } from '@/lib/curriculum';
import type { LessonStatus } from '@/lib/useTraining';

// Egy lecke kártya. Érintésre vált: üres → gyakorlom → sikerült → üres.
export function LessonCard({
  lesson,
  status,
  onCycle,
}: {
  lesson: Lesson;
  status: LessonStatus | undefined;
  onCycle: () => void;
}) {
  const done = status === 'done';
  const practicing = status === 'practicing';

  return (
    <motion.div
      layout
      className={`rounded-3xl border p-5 shadow-soft transition ${
        done
          ? 'border-cocoa bg-cocoa/10'
          : practicing
            ? 'border-latte bg-latte/15'
            : 'border-beige bg-white/55'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className={`text-lg font-semibold text-bark ${done ? 'line-through opacity-70' : ''}`}>
            {lesson.title}
          </h3>
          <p className="mt-1.5 flex items-start gap-1.5 text-sm text-cocoa">
            <Target className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{lesson.goal}</span>
          </p>
          <p className="mt-2 text-sm leading-relaxed text-bark/70">{lesson.how}</p>
        </div>

        <motion.button
          onClick={onCycle}
          aria-label="Státusz váltása"
          whileTap={{ scale: 0.9 }}
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 transition ${
            done
              ? 'border-bark bg-bark text-cream'
              : practicing
                ? 'border-latte bg-latte/40 text-bark'
                : 'border-latte text-transparent hover:bg-white/60'
          }`}
        >
          {done ? <Check className="h-5 w-5" /> : practicing ? <RotateCw className="h-5 w-5" /> : <Check className="h-5 w-5" />}
        </motion.button>
      </div>

      {status && (
        <span
          className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-medium ${
            done ? 'bg-bark text-cream' : 'bg-latte/40 text-bark'
          }`}
        >
          {done ? '✓ Sikerült' : '↻ Még gyakoroljuk'}
        </span>
      )}
    </motion.div>
  );
}
