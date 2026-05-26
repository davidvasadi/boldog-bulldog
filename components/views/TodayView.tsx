'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Flame, Pencil, Sparkles } from 'lucide-react';
import { useTraining } from '@/lib/useTraining';
import { LessonCard } from '@/components/LessonCard';
import { ProgressRing } from '@/components/ui/ProgressRing';
import { tipOfTheDay } from '@/lib/data';
import { HERO_LOCAL } from '@/lib/images';
import { asset } from '@/lib/asset';

export function TodayView({ onEditProfile }: { onEditProfile: () => void }) {
  const t = useTraining();
  const name = t.onboarding.value.puppyName || 'a kiskutyád';
  const week = t.focusWeek;

  if (!t.hydrated) return null;

  return (
    <div className="mx-auto max-w-2xl px-5 pb-32 pt-8">
      {/* Üdvözlő fejléc */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-4xl shadow-soft"
      >
        {/* A hero kép már a kutya fejére van vágva és tükrözve (a public mappában),
            így a fej a jobb oldalon van — a bal-alsó szöveg nem takarja. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(HERO_LOCAL)}
          alt="Foltos bulldog kék szemmel"
          className="h-64 w-full -scale-x-100 object-cover"
          style={{ objectPosition: '30% 22%' }}
        />
        {/* Takarás bal-alulról, hogy a szöveg olvasható legyen. */}
        <div className="absolute inset-0 bg-gradient-to-tr from-bark/85 via-bark/25 to-transparent" />
        <button
          onClick={onEditProfile}
          aria-label="Profil szerkesztése"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/30 text-cream backdrop-blur transition hover:bg-white/50"
        >
          <Pencil className="h-4 w-4" />
        </button>
        <div className="absolute bottom-0 p-6 text-cream">
          <p className="text-sm opacity-80">Szia! Mai teendők</p>
          <h1 className="text-2xl font-semibold">{name} edzésnaplója</h1>
        </div>
      </motion.div>

      {/* Aktuális hét kártya */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass mt-6 flex items-center gap-5 rounded-3xl p-5 shadow-soft"
      >
        <ProgressRing
          value={Math.round((week.doneCount / week.total) * 100)}
          size={92}
          stroke={9}
          label={`${week.doneCount}/${week.total}`}
        />
        <div className="flex-1">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-bark/10 px-3 py-1 text-xs font-medium text-bark">
            <Flame className="h-3.5 w-3.5" /> {week.week}. hét · {week.ageLabel}
          </span>
          <h2 className="mt-2 text-lg font-semibold text-bark">{week.theme}</h2>
          {week.dateRange && (
            <p className="mt-1 flex items-center gap-1.5 text-sm text-cocoa">
              <CalendarDays className="h-4 w-4" /> {week.dateRange}
            </p>
          )}
        </div>
      </motion.div>

      <p className="mt-4 px-1 text-cocoa">{week.intro}</p>

      {/* A hét leckéi */}
      <div className="mt-5 space-y-4">
        {week.lessons.map((l) => (
          <LessonCard key={l.id} lesson={l} status={t.status[l.id]} onCycle={() => t.cycleLesson(l.id)} />
        ))}
      </div>

      {/* Mai tipp */}
      <div className="glass mt-6 rounded-3xl p-5 shadow-soft">
        <p className="flex items-center gap-2 text-sm font-medium text-cocoa">
          <Sparkles className="h-4 w-4" /> A nap tippje
        </p>
        <p className="mt-2 text-bark">{tipOfTheDay()}</p>
      </div>
    </div>
  );
}
