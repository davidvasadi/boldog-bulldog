'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { BottomNav, type View } from '@/components/BottomNav';
import { ProfileModal } from '@/components/ProfileModal';
import { TodayView } from '@/components/views/TodayView';
import { CurriculumView } from '@/components/views/CurriculumView';
import { ProgressView } from '@/components/views/ProgressView';
import { TipsView } from '@/components/views/TipsView';

export function AppShell() {
  const [view, setView] = useState<View>('today');
  const [editing, setEditing] = useState(false);
  const openEdit = () => setEditing(true);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <ProfileModal />
      {editing && <ProfileModal forceOpen onClose={() => setEditing(false)} />}
      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
        >
          {view === 'today' && <TodayView onEditProfile={openEdit} />}
          {view === 'curriculum' && <CurriculumView />}
          {view === 'progress' && <ProgressView onEditProfile={openEdit} />}
          {view === 'tips' && <TipsView />}
        </motion.div>
      </AnimatePresence>
      <BottomNav view={view} onChange={setView} />
    </main>
  );
}
