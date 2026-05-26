// A publikus mappából (pl. /public/foo.png) szolgált fájlokhoz a GitHub Pages
// basePath-et kell elé fűzni production buildnél. Külső (http) URL-ek érintetlenek.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function asset(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${clean}`;
}
