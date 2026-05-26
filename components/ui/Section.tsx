'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function Section({
  id,
  children,
  className = '',
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative px-6 py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {eyebrow && (
        <span className="text-sm font-medium tracking-widest uppercase text-latte">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-bark">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-cocoa max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
