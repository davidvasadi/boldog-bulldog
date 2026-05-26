'use client';

import { motion } from 'framer-motion';
import { Check, Pencil, RotateCw, Trophy } from 'lucide-react';
import { useTraining } from '@/lib/useTraining';
import { ProgressRing } from '@/components/ui/ProgressRing';
import { GALLERY } from '@/lib/images';

function ageLabel(days: number | null): string {
  if (days === null) return '—';
  if (days < 14) return `${days} napos`;
  if (days < 70) return `${Math.floor(days / 7)} hetes`;
  return `${Math.floor(days / 30)} hónapos`;
}

export function ProgressView({ onEditProfile }: { onEditProfile: () => void }) {
  const t = useTraining();
  if (!t.hydrated) return null;

  const practicing = Object.values(t.status).filter((s) => s === 'practicing').length;

  return (
    <div className="mx-auto max-w-2xl px-5 pb-32 pt-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-bark">Haladás</h1>
          <p className="mt-1 text-cocoa">
            {t.onboarding.value.puppyName || 'A kutyád'} · nézd, milyen messzire jutottatok.
          </p>
        </div>
        <button
          onClick={onEditProfile}
          className="flex items-center gap-1.5 rounded-full bg-white/60 px-3 py-2 text-sm font-medium text-bark transition hover:bg-white"
        >
          <Pencil className="h-4 w-4" /> Profil
        </button>
      </div>

      <div className="glass mt-6 flex flex-col items-center rounded-4xl p-8 shadow-soft">
        <ProgressRing value={t.progress} size={160} stroke={14} sublabel="teljes tréning" />
        <p className="mt-4 text-center text-bark">
          <span className="font-semibold">{t.doneCount}</span> / {t.totalLessons} lecke sikerült
        </p>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="glass rounded-3xl p-4 text-center shadow-soft">
          <Check className="mx-auto h-6 w-6 text-cocoa" />
          <p className="mt-2 text-2xl font-semibold text-bark">{t.doneCount}</p>
          <p className="text-xs text-cocoa">sikerült</p>
        </div>
        <div className="glass rounded-3xl p-4 text-center shadow-soft">
          <RotateCw className="mx-auto h-6 w-6 text-cocoa" />
          <p className="mt-2 text-2xl font-semibold text-bark">{practicing}</p>
          <p className="text-xs text-cocoa">gyakorlás</p>
        </div>
        <div className="glass rounded-3xl p-4 text-center shadow-soft">
          <span className="block text-xl">🐶</span>
          <p className="mt-1 text-base font-semibold text-bark">{ageLabel(t.ageDays)}</p>
          <p className="text-xs text-cocoa">kora</p>
        </div>
      </div>

      {/* Heti haladás-csíkok */}
      <h2 className="mt-8 mb-3 font-semibold text-bark">Heti bontás</h2>
      <div className="space-y-2.5">
        {t.weeks.map((w, i) => {
          const pct = Math.round((w.doneCount / w.total) * 100);
          return (
            <div key={w.week} className="glass rounded-2xl p-3.5 shadow-soft">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-bark">{w.week}. hét — {w.theme}</span>
                <span className="text-cocoa">{w.doneCount}/{w.total}</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-beige">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.05 }}
                  className="h-full rounded-full bg-bark"
                />
              </div>
            </div>
          );
        })}
      </div>

      {t.progress === 100 && (
        <div className="glass-dark mt-8 rounded-4xl p-8 text-center text-cream shadow-soft">
          <Trophy className="mx-auto h-10 w-10" />
          <h3 className="mt-3 text-xl font-semibold">Gratulálunk! 🎉</h3>
          <p className="mt-1 text-cream/80">Végeztetek a teljes alaptréninggel.</p>
        </div>
      )}

      {/* Galéria */}
      <h2 className="mt-8 mb-3 font-semibold text-bark">Galéria</h2>
      <div className="columns-2 gap-3 [&>*]:mb-3">
        {GALLERY.map((img) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={img.url}
            src={img.url}
            alt={img.alt}
            loading="lazy"
            className="w-full rounded-2xl shadow-soft"
          />
        ))}
      </div>
    </div>
  );
}
