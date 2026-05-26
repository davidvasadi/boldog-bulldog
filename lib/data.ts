import {
  Bone,
  Droplets,
  Moon,
  Syringe,
  Smile,
  Footprints,
  Heart,
  Sparkles,
} from 'lucide-react';

export type RoutineTask = {
  id: string;
  label: string;
  icon: typeof Bone;
  time: string;
};

// Napi rutin feladatok — ezeket pipálja a gazdi a dashboardon.
export const ROUTINE_TASKS: RoutineTask[] = [
  { id: 'feed-morning', label: 'Reggeli etetés', icon: Bone, time: '07:00' },
  { id: 'potty-morning', label: 'Reggeli sétáltatás', icon: Footprints, time: '07:30' },
  { id: 'play', label: 'Játék és kötődés', icon: Heart, time: '10:00' },
  { id: 'feed-noon', label: 'Déli etetés', icon: Bone, time: '12:00' },
  { id: 'nap', label: 'Délutáni alvás', icon: Moon, time: '14:00' },
  { id: 'potty-afternoon', label: 'Délutáni pisilés', icon: Droplets, time: '16:00' },
  { id: 'feed-evening', label: 'Esti etetés', icon: Bone, time: '18:30' },
  { id: 'training', label: 'Tréning gyakorlat', icon: Sparkles, time: '19:30' },
  { id: 'sleep', label: 'Esti lefekvés', icon: Moon, time: '21:30' },
];

export type Vaccine = {
  id: string;
  name: string;
  ageWeeks: string;
};

export const VACCINES: Vaccine[] = [
  { id: 'vac-1', name: 'Első kombinált oltás (DHPPi)', ageWeeks: '6–8. hét' },
  { id: 'vac-2', name: 'Második kombinált oltás', ageWeeks: '10–12. hét' },
  { id: 'vac-3', name: 'Veszettség elleni oltás', ageWeeks: '12–16. hét' },
  { id: 'vac-4', name: 'Emlékeztető oltás', ageWeeks: '16. hét' },
  { id: 'vac-5', name: 'Féregtelenítés', ageWeeks: 'Folyamatos' },
  { id: 'vac-6', name: 'Chip és állatorvosi regisztráció', ageWeeks: '12. hét' },
];

export type TimelineStage = {
  weeks: string;
  title: string;
  desc: string;
};

export const GROWTH_TIMELINE: TimelineStage[] = [
  {
    weeks: '0–3. hét',
    title: 'Újszülött szakasz',
    desc: 'A kiskutya teljesen az anyjára van utalva. Meleg, csendes környezet a legfontosabb.',
  },
  {
    weeks: '3–8. hét',
    title: 'Szocializáció kezdete',
    desc: 'Megnyílnak a szemek és fülek. Óvatos ingerek, gyengéd érintés, első ízek.',
  },
  {
    weeks: '8–12. hét',
    title: 'Beköltözés és kötődés',
    desc: 'Új otthon, szobatisztaságra szoktatás, első oltások és nevek tanulása.',
  },
  {
    weeks: '3–6. hónap',
    title: 'Fogváltás és tréning',
    desc: 'Megjelennek a maradandó fogak. Alapparancsok és türelmes következetesség.',
  },
  {
    weeks: '6–12. hónap',
    title: 'Kamaszkor',
    desc: 'Energikus, kíváncsi időszak. A bulldog izomzata és jelleme formálódik.',
  },
  {
    weeks: '1 év+',
    title: 'Felnőtt bulldog',
    desc: 'Kiegyensúlyozott, hűséges társ. Megbízható rutin és rendszeres mozgás.',
  },
];

export type TeethingStage = {
  age: string;
  title: string;
  desc: string;
};

export const TEETHING_TIMELINE: TeethingStage[] = [
  { age: '2–4. hét', title: 'Tejfogak megjelenése', desc: 'Az első apró tejfogak előbújnak.' },
  { age: '5–6. hét', title: 'Teljes tejfogazat', desc: '28 hegyes tejfog — óvatosan a kezekkel!' },
  { age: '12–16. hét', title: 'Fogváltás indul', desc: 'A metszőfogak kezdenek kihullani.' },
  { age: '4–6. hónap', title: 'Intenzív rágás', desc: 'Adj biztonságos rágókát a fájdalom enyhítésére.' },
  { age: '6–7. hónap', title: 'Maradandó fogazat', desc: '42 felnőtt fog, teljes a fogváltás.' },
];

// Napi tippek — index a nap sorszáma szerint forog körbe.
export const TIPS: string[] = [
  'A bulldog érzékeny a melegre — sosem hagyd kint tűző napon vagy zárt autóban.',
  'Az arcredőket naponta töröld át puha, nedves ruhával a gyulladás megelőzésére.',
  'Rövid, gyakori tréningek (5 perc) hatékonyabbak, mint egy hosszú alkalom.',
  'A jutalomfalat akkor hat, ha azonnal a kívánt viselkedés után adod.',
  'A szobatisztaságot étkezés után 10–15 perccel kivitt sétával gyorsíthatod.',
  'A kiskutya napi 18–20 órát is alhat — ez teljesen normális és fontos.',
  'Vezess be fix etetési időpontokat: a kiszámíthatóság megnyugtatja a kutyát.',
  'A harapdálást ne büntesd, hanem tereld rágójátékra.',
  'A pórázos sétát otthon, csendben kezdd el gyakorolni.',
  'A bulldog könnyen túlsúlyos lesz — mérd ki pontosan az adagot.',
];

export function tipOfTheDay(d = new Date()): string {
  const dayOfYear = Math.floor(
    (d.getTime() - new Date(d.getFullYear(), 0, 0).getTime()) / 86400000
  );
  return TIPS[dayOfYear % TIPS.length];
}

export type Feature = {
  icon: typeof Bone;
  title: string;
  desc: string;
};

export const FEATURES: Feature[] = [
  { icon: Bone, title: 'Etetési napló', desc: 'Kövesd a napi adagokat és időpontokat egyetlen érintéssel.' },
  { icon: Droplets, title: 'Szobatisztaság', desc: 'Vezesd a sikeres pisiléseket és lásd a fejlődést.' },
  { icon: Moon, title: 'Alváskövetés', desc: 'Egészséges pihenés — figyeld a napi alvásmennyiséget.' },
  { icon: Syringe, title: 'Oltási checklist', desc: 'Soha ne maradj le egy fontos oltásról sem.' },
  { icon: Sparkles, title: 'Napi tippek', desc: 'Minden napra egy bulldog-specifikus szakértői tanács.' },
  { icon: Smile, title: 'Boldogság szint', desc: 'A kiskutyád közérzete a teljesített rutin alapján.' },
];

// A galéria képei (Unsplash — ingyenes felhasználás).
export const GALLERY: { url: string; alt: string }[] = [
  { url: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=800&q=80', alt: 'Bulldog kölyök' },
  { url: 'https://images.unsplash.com/photo-1597633425046-08f5110420b5?w=800&q=80', alt: 'Pihenő bulldog' },
  { url: 'https://images.unsplash.com/photo-1605897472359-85e4b94d685d?w=800&q=80', alt: 'Játszó kölyök' },
  { url: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&q=80', alt: 'Aranyos kutyus' },
  { url: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&q=80', alt: 'Kíváncsi kölyök' },
  { url: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=800&q=80', alt: 'Boldog kutya' },
];

export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=1400&q=85';
