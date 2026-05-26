'use client';

import { useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { CURRICULUM, TOTAL_LESSONS, Week } from './curriculum';

export type Onboarding = {
  done: boolean;
  puppyName: string;
  birthDate: string; // YYYY-MM-DD
};

// Lecke státusz: nincs -> "practicing" (gyakorlom) -> "done" (sikerült) -> nincs
export type LessonStatus = 'done' | 'practicing';
type StatusMap = Record<string, LessonStatus>;

const DEFAULT_ONBOARDING: Onboarding = { done: false, puppyName: '', birthDate: '' };

// A curriculum a kutya 8 hetes korában indul (ekkor kerül általában haza).
const START_AGE_WEEKS = 8;

function addDays(iso: string, days: number): Date {
  const d = new Date(iso + 'T00:00:00');
  d.setDate(d.getDate() + days);
  return d;
}

function fmt(d: Date): string {
  return d.toLocaleDateString('hu-HU', { month: 'short', day: 'numeric' });
}

export type WeekWithDates = Week & {
  startDate: Date | null;
  endDate: Date | null;
  dateRange: string; // pl. "máj. 26. – jún. 1."
  isCurrent: boolean;
  isPast: boolean;
  isFuture: boolean;
  doneCount: number;
  total: number;
};

export function useTraining() {
  const onboarding = useLocalStorage<Onboarding>('bb:onboarding', DEFAULT_ONBOARDING);
  const status = useLocalStorage<StatusMap>('bb:lessonStatus', {});

  const birthDate = onboarding.value.birthDate;

  const setLesson = (id: string, next: LessonStatus | null) => {
    status.setValue((prev) => {
      const copy = { ...prev };
      if (next === null) delete copy[id];
      else copy[id] = next;
      return copy;
    });
  };

  // Háromállapotú váltás egy érintésre: üres -> gyakorlom -> sikerült -> üres
  const cycleLesson = (id: string) => {
    const cur = status.value[id];
    setLesson(id, cur === undefined ? 'practicing' : cur === 'practicing' ? 'done' : null);
  };

  const doneCount = useMemo(
    () => Object.values(status.value).filter((s) => s === 'done').length,
    [status.value]
  );

  const progress = Math.round((doneCount / TOTAL_LESSONS) * 100);

  // A kutya kora hetekben (a curriculum-héthez: kor - 8 + 1)
  const ageDays = useMemo(() => {
    if (!birthDate) return null;
    const diff = Date.now() - new Date(birthDate + 'T00:00:00').getTime();
    return Math.max(0, Math.floor(diff / 86400000));
  }, [birthDate]);

  // Naptári dátumok minden héthez + aktuális hét meghatározása.
  const weeks: WeekWithDates[] = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return CURRICULUM.map((w, idx) => {
      let startDate: Date | null = null;
      let endDate: Date | null = null;
      let dateRange = '';
      if (birthDate) {
        // A blokk N kezdete: (START_AGE_WEEKS + week-1) héttel a születés után.
        const offsetDays = (START_AGE_WEEKS + (w.week - 1)) * 7;
        startDate = addDays(birthDate, offsetDays);
        // A blokk a következő blokk kezdetéig tart (havi blokknál több hét),
        // az utolsónál egy hetet veszünk alapul.
        const next = CURRICULUM[idx + 1];
        const endOffset = next
          ? (START_AGE_WEEKS + (next.week - 1)) * 7 - 1
          : offsetDays + 6;
        endDate = addDays(birthDate, endOffset);
        dateRange = `${fmt(startDate)} – ${fmt(endDate)}`;
      }

      const doneInWeek = w.lessons.filter((l) => status.value[l.id] === 'done').length;
      const isCurrent =
        !!startDate && !!endDate && today >= startDate && today <= endDate;
      const isPast = !!endDate && today > endDate;
      const isFuture = !!startDate && today < startDate;

      return {
        ...w,
        startDate,
        endDate,
        dateRange,
        isCurrent,
        isPast,
        isFuture,
        doneCount: doneInWeek,
        total: w.lessons.length,
      };
    });
  }, [birthDate, status.value]);

  // A kor szerint aktuális blokk: az utolsó olyan hét, aminek a kezdő dátuma
  // már elmúlt (today >= startDate). Fiatalabb kutyánál (a tananyag még el sem
  // kezdődött) az első hét. Idősebbnél a legutolsó releváns blokk.
  const ageBasedWeek = useMemo(() => {
    if (!birthDate) return null;
    const started = weeks.filter((w) => w.startDate && !w.isFuture);
    return started.length ? started[started.length - 1] : weeks[0];
  }, [weeks, birthDate]);

  // "Hol tartok": a kor szerinti aktuális blokktól indulunk. Ha annak minden
  // leckéje kész, ugorjunk a következő befejezetlen hétre — így onnan folytat,
  // ahol a felhasználó tart, akkor is, ha 4 vagy 30 hetes kutyával kezd.
  const focusWeek = useMemo(() => {
    const base = ageBasedWeek ?? weeks[0];
    if (base.doneCount < base.total) return base;
    const laterUnfinished = weeks.find((w) => w.week >= base.week && w.doneCount < w.total);
    const anyUnfinished = weeks.find((w) => w.doneCount < w.total);
    return laterUnfinished ?? anyUnfinished ?? base;
  }, [weeks, ageBasedWeek]);

  return {
    hydrated: onboarding.hydrated && status.hydrated,
    onboarding,
    status: status.value,
    cycleLesson,
    setLesson,
    doneCount,
    totalLessons: TOTAL_LESSONS,
    progress,
    ageDays,
    weeks,
    focusWeek,
  };
}
