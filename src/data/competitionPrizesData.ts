// Competition Prizes Data - Easy to update with your actual competition results!

export interface CompetitionPrize {
  competition: {
    en: string
    hu: string
    de: string
  }
  year: number
  location: {
    en: string
    hu: string
    de: string
  }
  place: number
  category?: {
    en: string
    hu: string
    de: string
  }
  description?: {
    en: string
    hu: string
    de: string
  }
  icon?: string
  image?: string
}

export const competitionPrizes: CompetitionPrize[] = [
  {
    competition: {
      en: 'DKC Advanced Robotics Competition',
      hu: 'DKC Advanced Robotika Verseny',
      de: 'DKC Advanced Robotik Wettbewerb'
    },
    year: 2025,
    location: {
      en: 'Nyíregyháza, Hungary',
      hu: 'Nyíregyháza, Magyarország',
      de: 'Nyíregyháza, Ungarn'
    },
    place: 3,
    category: {
      en: 'Rapidly Manufactured Robot Challenge',
      hu: 'Gyorsépítésű Robot Kihívás',
      de: 'Rapidly Manufactured Robot Challenge'
    },
    description: {
      en: 'Achieved 3rd place. It was our first competition and we have learned a lot. From this experience, we were motivated to improve further. And this motivation led us to many more successes later on. We are looking forward to the next competition!',
      hu: '3. helyezést értünk el. Ez volt az első versenyünk. Sokat tanultunk belőle. Ebből az élményből motivációt merítettünk a további fejlődéshez. És ez a motiváció vezetett minket sok további sikerhez később. Következő versenyünkre is nagyon izgatottak vagyunk!',
      de: '3. Platz erreicht. Es war unser erster Wettbewerb und wir haben viel gelernt. Aus dieser Erfahrung wurden wir motiviert, uns weiter zu verbessern. Und diese Motivation führte uns später zu vielen weiteren Erfolgen. Wir sind auf den nächsten Wettbewerb gespannt!'
    },
    icon: '🥉',
    image: '/gallery/55-thumb.webp'
  },
  {
    competition: {
      en: 'RoboCup German Open',
      hu: 'RoboCup German Open',
      de: 'RoboCup German Open'
    },
    year: 2025,
    location: {
      en: 'Nürnberg, Germany',
      hu: 'Nürnberg, Németország',
      de: 'Nürnberg, Deutschland'
    },
    place: 3,
    category: {
      en: 'Rescue League - Rapidly Manufactured Robot Challenge',
      hu: 'Mentési Liga - Gyorsépítésű Robot Kihívás',
      de: 'Rescue League - Rapidly Manufactured Robot Challenge'
    },
    description: {
      en: 'Won 3rd place in the Rescue League - Rapidly Manufactured Robot Challenge. Our first international competition! We are very proud of this achievement, but we are not stopping here.',
      hu: '3. helyezést értünk el a Mentési Liga - Gyorsépítésű Robot Kihívásban. Első nemzetközi versenyünk! Nagyon büszkék vagyunk erre az eredményre, de nem állunk meg itt.',
      de: '3. Platz in der Rescue League - Rapidly Manufactured Robot Challenge gewonnen. Unser erster internationaler Wettbewerb! Wir sind sehr stolz auf diese Leistung, aber wir hören hier nicht auf.'
    },
    icon: '🥉',
    image: '/gallery/IMG_4962-thumb.webp'
  },
  {
    competition: {
      en: 'Hungarian Youth Robotics Cup',
      hu: 'Magyar Ifjúsági Robotika Kupa',
      de: 'Ungarische Jugend-Robotikmeisterschaft'
    },
    year: 2025,
    location: {
      en: 'Nyíregyháza, Hungary',
      hu: 'Nyíregyháza, Magyarország',
      de: 'Nyíregyháza, Ungarn'
    },
    place: 3,
    category: {
      en: 'Rescue League - Rapidly Manufactured Robot Challenge',
      hu: 'Mentési Liga - Gyorsépítésű Robot Kihívás',
      de: 'Rescue League - Rapidly Manufactured Robot Challenge'
    },
    description: {
      en: 'Won 3rd place in the Rescue League - Rapidly Manufactured Robot Challenge. We were thrilled to achieve a podium position in this national competition. Also this place was a little fallback from our international success earlier that year. We were a little too confident, but we learned from it and came back stronger.',
      hu: '3. helyezést értünk el a Mentési Liga - Gyorsépítésű Robot Kihívásban. Nagyon örültünk, hogy dobogós helyezést értünk el ezen a hazai versenyen. Ez a helyezés egy kis visszaesés volt a nemzetközi sikerünkhöz képest az év elején. Kicsit túl magabiztosak voltunk, de tanultunk belőle és erősebben tértünk vissza.',
      de: '3. Platz in der Rescue League - Rapidly Manufactured Robot Challenge gewonnen. Wir waren begeistert, eine Podiumsplatzierung in diesem nationalen Wettbewerb zu erreichen. Diese Platzierung war auch ein kleiner Rückschlag im Vergleich zu unserem internationalen Erfolg Anfang des Jahres. Wir waren etwas zu selbstbewusst, aber wir haben daraus gelernt und sind stärker zurückgekommen.'
    },
    icon: '🥉',
    image: '/gallery/487886204_1190433356201882_1641464392172975035_n-thumb.webp'
  },
  {
    competition: {
      en: 'Hungarian Youth Robotics Cup',
      hu: 'Magyar Ifjúsági Robotika Kupa',
      de: 'Ungarische Jugend-Robotikmeisterschaft'
    },
    year: 2026,
    location: {
      en: 'Nyíregyháza, Hungary',
      hu: 'Nyíregyháza, Magyarország',
      de: 'Nyíregyháza, Ungarn'
    },
    place: 3,
    category: {
      en: 'Rescue League - Rapidly Manufactured Robot Challenge',
      hu: 'Mentési Liga - Gyorsépítésű Robot Kihívás',
      de: 'Rescue League - Rapidly Manufactured Robot Challenge'
    },
    description: {
      en: 'Achieved 3rd place again. This competition was also a good opportunity for the last mistakes to come out completely and after that we can prepare for the world championship with full force.',
      hu: 'Idén is egy 3. helyzést sikerült elérni. Egyben ez a verseny megfelelő volt arra hogy az utolsó hibák teljes mértékben kijöjjenek és ezekután teljes gőzerővel tudjunk készülni a világbajnokságra.',
      de: 'Auch dieses Jahr konnten wir den 3. Platz erreichen. Dieser Wettbewerb war auch eine gute Gelegenheit, um die letzten Fehler vollständig zu erkennen, und danach konnten wir mit voller Kraft auf die Weltmeisterschaft vorbereiten.'
    },
    icon: '🥉',
    image: '/gallery/653708183_1467943308450884_9067748697986024135_n-thumb.webp'
  }
]

