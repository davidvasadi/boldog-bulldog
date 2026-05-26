'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { PawPrint, X } from 'lucide-react';
import { useTraining } from '@/lib/useTraining';

// Egyetlen modal onboardinghoz ÉS utólagos profil-szerkesztéshez.
// - Onboarding: automatikusan nyílik, ha még nincs kész profil; nem zárható el.
// - Szerkesztés: a `forceOpen`/`onClose` propokkal kívülről vezérelve nyílik.
export function ProfileModal({
  forceOpen = false,
  onClose,
}: {
  forceOpen?: boolean;
  onClose?: () => void;
}) {
  const { hydrated, onboarding } = useTraining();
  const isEditing = forceOpen;
  const show = forceOpen || (hydrated && !onboarding.value.done);

  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');

  // Szerkesztéskor töltsük be a meglévő értékeket.
  useEffect(() => {
    if (forceOpen) {
      setName(onboarding.value.puppyName);
      setBirth(onboarding.value.birthDate);
    }
  }, [forceOpen, onboarding.value.puppyName, onboarding.value.birthDate]);

  const submit = () => {
    if (!birth) return;
    onboarding.setValue({ done: true, puppyName: name.trim() || 'Buksi', birthDate: birth });
    onClose?.();
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-bark/30 p-6 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.92, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.45 }}
            className="glass relative w-full max-w-md rounded-4xl p-8 text-center shadow-soft md:p-10"
          >
            {isEditing && (
              <button
                onClick={onClose}
                aria-label="Bezárás"
                className="absolute right-5 top-5 text-cocoa transition hover:text-bark"
              >
                <X className="h-5 w-5" />
              </button>
            )}

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-bark text-cream">
              <PawPrint className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-semibold text-bark">
              {isEditing ? 'Profil szerkesztése' : 'Üdv a Boldog Bulldognál!'}
            </h2>
            <p className="mt-2 text-cocoa">
              {isEditing
                ? 'Javítsd a nevet vagy a születési dátumot — a tananyag újraszámolódik.'
                : 'Ismerjük meg a kis kedvencedet.'}
            </p>

            <div className="mt-6 space-y-4 text-left">
              <label className="block">
                <span className="text-sm font-medium text-bark">Kiskutya neve</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="pl. Arthur"
                  className="mt-1 w-full rounded-2xl border border-beige bg-white/70 px-4 py-3 outline-none focus:border-latte"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-bark">Születési dátum</span>
                <input
                  type="date"
                  value={birth}
                  max={new Date().toISOString().slice(0, 10)}
                  onChange={(e) => setBirth(e.target.value)}
                  className="mt-1 w-full rounded-2xl border border-beige bg-white/70 px-4 py-3 outline-none focus:border-latte"
                />
                <span className="mt-1 block text-xs text-cocoa">
                  Ez alapján számoljuk ki, melyik héten mit kell tanítani.
                </span>
              </label>
            </div>

            <button
              onClick={submit}
              disabled={!birth}
              className="mt-7 w-full rounded-2xl bg-bark py-3.5 font-medium text-cream transition hover:bg-ink active:scale-[0.98] disabled:opacity-40"
            >
              {isEditing ? 'Mentés' : 'Kezdjük el'}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
