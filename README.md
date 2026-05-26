# 🐶 Boldog Bulldog

Kiskutya-nevelési webapp újdonsült bulldog-gazdiknak.
Etetés, szobatisztaság, alvás, oltások, fogzás, napi tippek és haladáskövetés —
minden a böngészőben, backend nélkül.

**Tech:** Next.js (static export) · Tailwind CSS · Framer Motion · localStorage

## Funkciók

- Napi rutin checklist és haladás-százalék
- Etetési napló
- Szobatisztaság / alvás követés a rutinban
- Oltási checklist saját haladás-gyűrűvel
- Fogzási és növekedési idővonal
- A nap tippje (forgó carousel)
- Napi sorozat (streak) rendszer
- Kiskutya korszámláló és boldogság-szint
- Onboarding (név + születési dátum)

Minden adat a böngésző `localStorage`-ában tárolódik. Nincs szerver, nincs adatbázis.

## Helyi futtatás

```bash
npm install
npm run dev
```

Megnyitás: http://localhost:3000

## Build (statikus export)

```bash
npm run build
```

A kész statikus oldal az `out/` mappába kerül.

## Telepítés GitHub Pages-re

A repo tartalmaz egy GitHub Actions workflow-t (`.github/workflows/deploy.yml`),
ami minden `main`-re push után automatikusan buildel és publikál.

**Egyszeri beállítás:**

1. GitHub → a repo **Settings → Pages**
2. **Build and deployment → Source:** válaszd a **GitHub Actions** opciót
3. Push a `main` ágra (vagy az Actions fülön indítsd kézzel: *Run workflow*)

Pár perc múlva itt lesz elérhető:

```
https://davidvasadi.github.io/boldog-bulldog/
```

> A `next.config.js`-ben a `basePath` a `boldog-bulldog` repónévhez van állítva.
> Ha más néven hostolod, írd át a `repo` változót `next.config.js`-ben.
