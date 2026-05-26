// Hetekre bontott tanító tananyag (curriculum). Minden hétnek van több leckéje,
// amit a gazdi külön kipipálhat: "sikerült" vagy "még gyakorlom".
// A leckék id-jét használjuk localStorage kulcsként a státuszhoz.

export type Lesson = {
  id: string;
  title: string;
  goal: string; // mit kell elérni
  how: string; // hogyan gyakorold
};

export type Week = {
  week: number;
  ageLabel: string;
  theme: string;
  intro: string;
  lessons: Lesson[];
};

export const CURRICULUM: Week[] = [
  {
    week: 1,
    ageLabel: '8. hét',
    theme: 'Beilleszkedés és bizalom',
    intro: 'Az első hét a biztonságról szól. Hagyd, hogy a kölyök megismerje az új otthont.',
    lessons: [
      { id: 'w1-name', title: 'A név megtanítása', goal: 'A kutya rád néz, ha kimondod a nevét.', how: 'Mondd ki a nevét, és amikor rád néz, azonnal jutalmazz falattal. Napi 5×.' },
      { id: 'w1-crate', title: 'Pihenőhely elfogadása', goal: 'Nyugodtan befekszik a saját helyére.', how: 'Tegyél falatot a fekhelyére, dicsérd, amikor bemegy. Soha ne büntetésként használd.' },
      { id: 'w1-handling', title: 'Érintés-tűrés', goal: 'Engedi a mancsát, fülét, arcredőit megérinteni.', how: 'Naponta gyengéden érintsd meg ezeket, közben halk dicséret és jutalom.' },
    ],
  },
  {
    week: 2,
    ageLabel: '9. hét',
    theme: 'Szobatisztaság alapok',
    intro: 'Vidd ki rendszeresen: ébredés, étkezés és játék után azonnal.',
    lessons: [
      { id: 'w2-potty-routine', title: 'Fix pisi-helyszín', goal: 'Mindig ugyanoda kísérdd ki dolgát végezni.', how: 'Étkezés után 10–15 perccel vidd ki ugyanarra a helyre, és várj türelmesen.' },
      { id: 'w2-potty-reward', title: 'Azonnali jutalmazás', goal: 'A kültéri pisilést jutalomként éli meg.', how: 'Abban a pillanatban, ahogy elvégezte, lelkesen dicsérd és adj falatot.' },
      { id: 'w2-signal', title: 'Jelzés felismerése', goal: 'Felismered, amikor mennie kell (körözés, szaglászás).', how: 'Figyeld a jeleket, és vidd ki azonnal. Vezess naplót az időpontokról.' },
    ],
  },
  {
    week: 3,
    ageLabel: '10. hét',
    theme: 'Első parancsok — "Ülj"',
    intro: 'Rövid, 5 perces gyakorlatok. A bulldog hamar elfárad, ne erőltesd.',
    lessons: [
      { id: 'w3-sit', title: '"Ülj" parancs', goal: 'Szóra leül.', how: 'Tartsd a falatot az orra fölé, lassan hátra — ahogy leül, mondd "Ülj!" és jutalmazz.' },
      { id: 'w3-eyecontact', title: 'Szemkontaktus', goal: 'Megtartja a tekintetét pár másodpercig.', how: 'Tartsd a falatot a szemed mellé, dicsérd, amikor rád néz.' },
      { id: 'w3-name-recall', title: 'Névre jövés (közelről)', goal: 'A nevére odamegy hozzád.', how: 'Pár lépésről hívd a nevén, jutalmazz, amikor odaér.' },
    ],
  },
  {
    week: 4,
    ageLabel: '11. hét',
    theme: 'Pórázra szoktatás',
    intro: 'Otthon, csendben kezdd. A bulldog nyaka helyett inkább hámot használj.',
    lessons: [
      { id: 'w4-harness', title: 'Hám elfogadása', goal: 'Nyugodtan tűri a hám feladását.', how: 'Tedd fel rövid időre otthon, közben játék és jutalom. Fokozatosan növeld.' },
      { id: 'w4-leash-indoor', title: 'Póráz beltérben', goal: 'Laza pórázon követ a lakásban.', how: 'Pár lépés, jutalom. Ne húzd — csábítsd falattal magad mellé.' },
      { id: 'w4-come', title: '"Gyere" parancs', goal: 'Hívásra elindul feléd.', how: 'Guggolj le, tárt karral hívd vidáman, és ünnepeld, amikor jön.' },
    ],
  },
  {
    week: 5,
    ageLabel: '12. hét',
    theme: 'Szocializáció',
    intro: 'Új hangok, felületek, emberek — mind pozitív élményként. Oltás után kültér is.',
    lessons: [
      { id: 'w5-sounds', title: 'Hangok megszoktatása', goal: 'Nem ijed meg porszívótól, csengőtől.', how: 'Halkan indítsd a hangokat távolról, közben játék/jutalom, fokozatosan közelíts.' },
      { id: 'w5-people', title: 'Új emberek', goal: 'Barátságosan, nyugodtan fogad vendéget.', how: 'Kérd meg a vendéget, hogy nyugodtan, falattal közelítsen, ne tornyosuljon fölé.' },
      { id: 'w5-surfaces', title: 'Különböző felületek', goal: 'Bátran lép fűre, kőre, fémrácsra.', how: 'Vezesd át különböző talajokon, dicsérd a bátorságot.' },
    ],
  },
  {
    week: 6,
    ageLabel: '13. hét',
    theme: '"Marad" és önuralom',
    intro: 'Az önuralom a legértékesebb készség. Türelem és apró lépések.',
    lessons: [
      { id: 'w6-stay', title: '"Marad" parancs', goal: '2–3 másodpercig helyben marad.', how: 'Ülő helyzetből nyitott tenyér + "Marad", 1 mp után jutalom, fokozatosan növeld.' },
      { id: 'w6-wait-food', title: 'Várakozás a tálnál', goal: 'Megvárja az engedélyt az evés előtt.', how: 'Tartsd a tálat, várj 1–2 mp nyugalmat, majd "Lehet!" és leteszed.' },
      { id: 'w6-leave', title: '"Hagyd" parancs', goal: 'Otthagyja, amit nem szabad felvennie.', how: 'Zárt tenyérben falat, "Hagyd", és más kézből jutalmazz, amikor elfordul.' },
    ],
  },
  {
    week: 7,
    ageLabel: '14. hét',
    theme: 'Kültéri séta',
    intro: 'Rövid séták, sok szünet. Bulldognál figyelj a hőségre és a légzésre.',
    lessons: [
      { id: 'w7-walk', title: 'Séta laza pórázon', goal: 'Húzás nélkül sétál melletted kint.', how: 'Megáll, ha húz; indul, ha laza a póráz. Következetesség a kulcs.' },
      { id: 'w7-recall-out', title: 'Visszahívás kint', goal: 'Zavaró ingerek mellett is visszajön.', how: 'Hosszú pórázon gyakorold, magas értékű jutalommal.' },
      { id: 'w7-greet', title: 'Más kutyák köszöntése', goal: 'Nyugodtan köszön más kutyának.', how: 'Rövid, kontrollált találkozók nyugodt kutyákkal, közben dicséret.' },
    ],
  },
  {
    week: 8,
    ageLabel: '15. hét',
    theme: 'Rögzítés és rutin',
    intro: 'Ismételd át az eddigieket. A megszilárdult rutin egy életre szól.',
    lessons: [
      { id: 'w8-review', title: 'Parancsok átismétlése', goal: 'Ülj, marad, gyere, hagyd — mind megy.', how: 'Naponta keverve gyakorold mindet rövid blokkokban.' },
      { id: 'w8-alone', title: 'Egyedüllét rövid ideig', goal: 'Nyugodtan marad pár percig egyedül.', how: 'Kezdd 1 perccel, fokozatosan növeld, dráma nélkül érkezz-távozz.' },
      { id: 'w8-manners', title: 'Jó modor vendégekkel', goal: 'Nem ugrál fel az emberekre.', how: 'Csak ülő helyzetben kap figyelmet; az ugrálást figyelmen kívül hagyd.' },
    ],
  },
];

// Az első 8 hét után havi blokkok az 1 éves korig (kb. 4. – 12. hónap).
// Ezeket is hetes egységként tartjuk, hogy a dátumszámítás egységes maradjon:
// minden blokk a hónap első hetére esik, de a téma az egész hónapra szól.
export const MONTHLY: Week[] = [
  {
    week: 13, // ~4 hónapos kor (8 + 5 hét ≈ a 4. hónap eleje után)
    ageLabel: '4. hónap',
    theme: 'Fogváltás és önálló rágás',
    intro: 'Megindul a fogváltás. Biztosíts biztonságos rágókat, és kerüld a kéz-harapdálást.',
    lessons: [
      { id: 'm4-chew', title: 'Helyes rágás', goal: 'A rágóját rágja, nem a kezed vagy a bútort.', how: 'Adj hűtött rágókát; ha a kezed felé kap, tereld azonnal a rágóra.' },
      { id: 'm4-place', title: '"Helyedre" parancs', goal: 'Küldésre a fekhelyére megy.', how: 'Vezesd a helyére falattal, mondd "Helyedre", jutalmazz. Növeld a távolságot.' },
      { id: 'm4-down', title: '"Fekszik" parancs', goal: 'Szóra lefekszik.', how: 'Ülésből a falatot a földre, két mancs közé csábítsd, mondd "Fekszik".' },
    ],
  },
  {
    week: 17,
    ageLabel: '5. hónap',
    theme: 'Önuralom és impulzuskontroll',
    intro: 'Az energikus időszak kezdete. A türelmet és a várakozást gyakoroljátok.',
    lessons: [
      { id: 'm5-wait-door', title: 'Várakozás az ajtónál', goal: 'Nem ront ki a nyitott ajtón.', how: 'Nyisd résnyire; ha indulna, csukd. Csak nyugodt állapotban engedd ki "Lehet"-tel.' },
      { id: 'm5-impulse', title: 'Falat a tenyérben', goal: 'Megvárja az engedélyt a jutalomra.', how: 'Nyitott tenyér falattal; csak akkor kapja, ha nem kapkod és rád néz.' },
      { id: 'm5-settle', title: 'Lenyugvás zajban', goal: 'Vendég/zaj mellett is le tud feküdni.', how: 'Pórázzal magad mellé, nyugodt dicséret, ha lefekszik. Türelem.' },
    ],
  },
  {
    week: 22,
    ageLabel: '6. hónap',
    theme: 'Megbízható visszahívás',
    intro: 'A kamaszkor próbára tesz. A visszahívás most a legfontosabb biztonsági készség.',
    lessons: [
      { id: 'm6-recall-dist', title: 'Visszahívás zavaró ingerrel', goal: 'Más kutya/szag mellett is visszajön.', how: 'Hosszú pórázon, magas értékű jutalommal, fokozatosan nehezítve.' },
      { id: 'm6-heel', title: 'Lábhoz séta', goal: 'Rövid szakaszon melletted, húzás nélkül.', how: 'Falat a comb mellett, pár lépés "Lábhoz", jutalom. Növeld a hosszt.' },
      { id: 'm6-greet-calm', title: 'Nyugodt köszönés', goal: 'Nem ugrál fel érkezőkre.', how: 'Csak ülve kap figyelmet; az ugrálást teljesen ignoráld.' },
    ],
  },
  {
    week: 31,
    ageLabel: '7–8. hónap',
    theme: 'Magabiztosság a világban',
    intro: 'Új helyek, forgalom, más állatok — mind nyugodt, pozitív élményként.',
    lessons: [
      { id: 'm8-city', title: 'Forgalmas hely', goal: 'Nyugodt marad utcán, boltok előtt.', how: 'Rövid, pozitív látogatások; figyeld a hőséget és a légzést.' },
      { id: 'm8-alone-long', title: 'Hosszabb egyedüllét', goal: '20–30 percig nyugodtan egyedül marad.', how: 'Fokozatosan növeld az időt, rágó/kibélelt játék mellett, dráma nélkül.' },
      { id: 'm8-tricks', title: 'Egy trükk (pacsi)', goal: 'Megtanul egy szórakoztató trükköt.', how: 'Érintsd meg a mancsát, "Pacsi", jutalom; fokozatosan kérd előbb.' },
    ],
  },
  {
    week: 44,
    ageLabel: '9–11. hónap',
    theme: 'Felnőtt modor megszilárdítása',
    intro: 'A jellem formálódik. A meglévő parancsokat tedd megbízhatóvá minden helyzetben.',
    lessons: [
      { id: 'm10-proof', title: 'Parancsok minden helyzetben', goal: 'Ülj/marad/gyere kintről, zajban is megy.', how: 'Változtasd a helyszínt és az ingereket, tartsd rövidnek a gyakorlást.' },
      { id: 'm10-leash-pro', title: 'Lazapórázos séta véglegesítése', goal: 'Hosszú sétán sem húz.', how: 'Következetes megállás húzáskor; jutalmazd a laza pórázt.' },
      { id: 'm10-vet', title: 'Állatorvos-barát viselkedés', goal: 'Tűri a vizsgálatot, mancs- és fülnézést.', how: 'Otthon szimuláld a vizsgálatot jutalommal, hogy ne stresszeljen.' },
    ],
  },
  {
    week: 52,
    ageLabel: '12. hónap',
    theme: 'Kiegyensúlyozott felnőtt',
    intro: 'Gratulálunk! A rutin egy életre szól. Tartsátok karban a készségeket.',
    lessons: [
      { id: 'm12-routine', title: 'Heti karbantartó rutin', goal: 'Heti 2–3 rövid ismétlés minden parancsból.', how: 'Játékos formában frissítsd fel a tanultakat, hogy ne kopjanak.' },
      { id: 'm12-exercise', title: 'Megfelelő mozgás', goal: 'Napi mozgás a bulldog korlátaihoz mérve.', how: 'Rövid, gyakori séták; kerüld a hőséget és a túlterhelést.' },
      { id: 'm12-bond', title: 'Kötődés erősítése', goal: 'Erős, bizalmi kapcsolat.', how: 'Közös játék, nyugodt együttlét, következetes szabályok.' },
    ],
  },
];

CURRICULUM.push(...MONTHLY);

export const ALL_LESSONS = CURRICULUM.flatMap((w) => w.lessons);
export const TOTAL_LESSONS = ALL_LESSONS.length;
