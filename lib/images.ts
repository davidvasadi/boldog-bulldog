// Foltos, kék szemű bulldog-jellegű képek (Unsplash, ingyenes felhasználás).
// Internet szükséges a megjelenítésükhöz.

// Saját, helyi hero kép a public mappából (foltos merle francia bulldog, Arthur).
// A -head változat a kutya fejére van vágva és tükrözve (a fej a jobb oldalon),
// hogy a bal-alsó szöveg ne takarja. Az eredeti teljes kép: arthur-hero.JPG.
// Az asset() helper teszi elé a GitHub Pages basePath-et production buildnél.
export const HERO_LOCAL = '/arthur-hero.JPG';

export const GALLERY: { url: string; alt: string }[] = [
  { url: 'https://images.unsplash.com/photo-1568572933382-74d440642117?w=800&q=80', alt: 'Foltos bulldog kék szemmel' },
  { url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80', alt: 'Foltos kölyök' },
  { url: 'https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?w=800&q=80', alt: 'Kék szemű kutyus' },
  { url: 'https://images.unsplash.com/photo-1530041539828-114de669390e?w=800&q=80', alt: 'Pihenő foltos kutya' },
  { url: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=800&q=80', alt: 'Bulldog portré' },
  { url: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&q=80', alt: 'Kíváncsi kölyök' },
];
