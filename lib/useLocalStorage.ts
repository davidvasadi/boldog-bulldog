'use client';

import { useCallback, useEffect, useState } from 'react';

// SSR/statikus export-biztos localStorage hook. A kezdőértéket használja
// szerver- és első kliensrenderkor, majd hidratálás után olvas a tárolóból,
// így nincs hidratálási eltérés.
export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw !== null) setValue(JSON.parse(raw) as T);
    } catch {
      /* sérült adat — kezdőértéket tartjuk */
    }
    setHydrated(true);
  }, [key]);

  const update = useCallback(
    (next: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const resolved =
          typeof next === 'function' ? (next as (p: T) => T)(prev) : next;
        try {
          window.localStorage.setItem(key, JSON.stringify(resolved));
        } catch {
          /* tele a tároló vagy privát mód — figyelmen kívül hagyjuk */
        }
        return resolved;
      });
    },
    [key]
  );

  return { value, setValue: update, hydrated } as const;
}

// Mai dátum kulcsként (YYYY-MM-DD), helyi idő szerint.
export function todayKey(d = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
    d.getDate()
  ).padStart(2, '0')}`;
}
