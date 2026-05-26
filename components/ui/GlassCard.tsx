'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function GlassCard({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`glass rounded-3xl shadow-soft p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
