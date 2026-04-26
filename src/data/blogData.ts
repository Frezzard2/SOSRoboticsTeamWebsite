// Blog posts about competitions - Easy to update!
// All translations are included directly in this file - just modify this one file!

type Language = 'en' | 'hu' | 'de'

interface TranslatedText {
  en: string
  hu: string
  de: string
}

interface TranslatedStringArray {
  en: string[]
  hu: string[]
  de: string[]
}

export interface BlogPostData {
  date: string
  category: string
  title: TranslatedText
  excerpt: TranslatedText
  content?: TranslatedStringArray
}

// Internal data structure with translations
const blogPostsData: BlogPostData[] = [
  {
    date: '2025-01-15',
    category: 'Competition',
    title: {
      en: 'First Competition: Rapidly Manufactured Robot Challenge',
      hu: 'Első Verseny: Gyorsan Gyártott Robot Kihívás',
      de: 'Erster Wettbewerb: Rapidly Manufactured Robot Challenge'
    },
    excerpt: {
      en: 'Our debut in the RoboCup Rescue League\'s Rapidly Manufactured Robot Challenge. A journey of learning, adaptation, and growth.',
      hu: 'Bemutatkozásunk a RoboCup Rescue League Gyorsan Gyártott Robot Kihívásában. Egy tanulás, alkalmazkodás és növekedés útja.',
      de: 'Unser Debüt in der Rapidly Manufactured Robot Challenge der RoboCup Rescue League. Eine Reise des Lernens, der Anpassung und des Wachstums.'
    },
    content: {
      en: [
        'This was our first major competition, and what an experience it was! We arrived with our robot, ready to test months of hard work.',
        'The challenge required our robot to navigate through complex terrain, identify obstacles, and complete rescue missions autonomously. While we faced some technical difficulties, we learned invaluable lessons about robot design and competition strategy.',
        'The highlight was seeing our robot successfully complete several autonomous navigation tasks. The feedback from judges and other teams was incredibly valuable for our future development.'
      ],
      hu: [
        'Ez volt az első nagy versenyünk, és milyen élmény volt! Robotunkkal érkeztünk, készen állva hónapok kemény munkájának tesztelésére.',
        'A kihívás megkövetelte, hogy robotunk komplex terepen navigáljon, akadályokat azonosítson és autonóm módon teljesítse a mentési küldetéseket. Bár néhány technikai nehézséggel szembesültünk, felbecsülhetetlen leckéket tanultunk a robot tervezésről és versenystratégiáról.',
        'A csúcspont az volt, hogy robotunk sikeresen teljesített több autonóm navigációs feladatot. A bírák és más csapatok visszajelzése rendkívül értékes volt a jövőbeli fejlesztésünkhöz.'
      ],
      de: [
        'Dies war unser erster großer Wettbewerb, und was für ein Erlebnis! Wir kamen mit unserem Roboter an, bereit, monatelange harte Arbeit zu testen.',
        'Die Herausforderung erforderte, dass unser Roboter durch komplexes Gelände navigiert, Hindernisse identifiziert und Rettungsmissionen autonom abschließt. Während wir auf einige technische Schwierigkeiten stießen, lernten wir unschätzbare Lektionen über Roboterdesign und Wettbewerbsstrategie.',
        'Der Höhepunkt war, unseren Roboter erfolgreich mehrere autonome Navigationsaufgaben abschließen zu sehen. Das Feedback von Richtern und anderen Teams war unglaublich wertvoll für unsere zukünftige Entwicklung.'
      ]
    }
  },
  {
    date: '2025-02-01',
    category: 'Development',
    title: {
      en: 'Building for the Future: Preparing for Rescue League',
      hu: 'A Jövőért Építés: Felkészülés a Rescue League-re',
      de: 'Für die Zukunft bauen: Vorbereitung auf die Rescue League'
    },
    excerpt: {
      en: 'As we continue competing in the Rapidly Manufactured Robot Challenge, we\'re also preparing for our ultimate goal: the full Rescue League competition.',
      hu: 'Ahogy folytatjuk a versenyzést a Gyorsan Gyártott Robot Kihívásban, felkészülünk végső célunkra: a teljes Rescue League versenyre.',
      de: 'Während wir weiterhin an der Rapidly Manufactured Robot Challenge teilnehmen, bereiten wir uns auch auf unser ultimatives Ziel vor: den vollständigen Rescue League Wettbewerb.'
    },
    content: {
      en: [
        'Our team is constantly iterating and improving our robots. We\'re focusing on enhancing autonomous navigation capabilities, improving sensor integration, and developing more robust mechanical systems.',
        'The transition from Rapidly Manufactured Robot Challenge to the full Rescue League requires significant upgrades in both hardware and software. We\'re working on advanced SLAM algorithms, better obstacle avoidance, and more sophisticated rescue mission planning.',
        'Stay tuned for updates on our progress!'
      ],
      hu: [
        'Csapatunk folyamatosan iterál és javítja robotjainkat. Az autonóm navigációs képességek fejlesztésére, a szenzor integráció javítására és robusztusabb mechanikus rendszerek fejlesztésére összpontosítunk.',
        'Az átmenet a Gyorsan Gyártott Robot Kihívásból a teljes Rescue League-be jelentős frissítéseket igényel mind hardver, mind szoftver terén. Fejlett SLAM algoritmusokon, jobb akadálykerülésen és kifinomultabb mentési küldetés tervezésen dolgozunk.',
        'Maradj velünk a fejleményekért!'
      ],
      de: [
        'Unser Team iteriert und verbessert ständig unsere Roboter. Wir konzentrieren uns auf die Verbesserung der autonomen Navigationsfähigkeiten, die Verbesserung der Sensorintegration und die Entwicklung robusterer mechanischer Systeme.',
        'Der Übergang von der Rapidly Manufactured Robot Challenge zur vollständigen Rescue League erfordert erhebliche Upgrades sowohl in Hardware als auch in Software. Wir arbeiten an fortgeschrittenen SLAM-Algorithmen, besserer Hindernisvermeidung und anspruchsvollerer Rettungsmissionsplanung.',
        'Bleiben Sie dran für Updates zu unserem Fortschritt!'
      ]
    }
  },
  {
    date: '2025-02-20',
    category: 'Competition',
    title: {
      en: 'Latest Competition Update',
      hu: 'Legfrissebb Verseny Frissítés',
      de: 'Neueste Wettbewerbsaktualisierung'
    },
    excerpt: {
      en: 'Recent competition results and lessons learned from our latest event.',
      hu: 'Legutóbbi versenyeredmények és tanulságok a legfrissebb eseményünkről.',
      de: 'Aktuelle Wettbewerbsergebnisse und Lektionen aus unserem neuesten Event.'
    },
    content: {
      en: [
        'We recently participated in another Rapidly Manufactured Robot Challenge event. This time, we came better prepared with improved algorithms and refined hardware.',
        'Our robot demonstrated significant improvements in autonomous navigation and obstacle detection. We\'re proud of the progress we\'ve made and excited about the path forward.',
        'The competition environment is always challenging, but it\'s also where we learn the most. Each event teaches us something new about robot design, competition strategy, and teamwork.'
      ],
      hu: [
        'Nemrég részt vettünk egy másik Gyorsan Gyártott Robot Kihívás eseményen. Ezúttal jobban felkészülten érkeztünk javított algoritmusokkal és finomított hardverrel.',
        'Robotunk jelentős fejlesztéseket mutatott az autonóm navigációban és az akadályfelismerésben. Büszkék vagyunk az elért haladásra és izgatottak vagyunk az előttünk álló útra.',
        'A versenykörnyezet mindig kihívás, de itt tanulunk a legtöbbet. Minden esemény valami újat tanít nekünk a robot tervezésről, versenystratégiáról és csapatmunkáról.'
      ],
      de: [
        'Wir haben kürzlich an einem weiteren Rapidly Manufactured Robot Challenge Event teilgenommen. Diesmal kamen wir besser vorbereitet mit verbesserten Algorithmen und verfeinerten Hardware.',
        'Unser Roboter zeigte erhebliche Verbesserungen bei der autonomen Navigation und Hinderniserkennung. Wir sind stolz auf den Fortschritt, den wir gemacht haben, und begeistert von dem Weg nach vorne.',
        'Die Wettbewerbsumgebung ist immer herausfordernd, aber dort lernen wir auch am meisten. Jedes Event lehrt uns etwas Neues über Roboterdesign, Wettbewerbsstrategie und Teamarbeit.'
      ]
    }
  }
]

// Export interface for components (simplified, language-specific)
export interface BlogPost {
  date: string
  category: string
  title: string
  excerpt: string
  content?: string[]
}

// Function to get blog posts for a specific language
export function getBlogPosts(language: Language = 'en'): BlogPost[] {
  return blogPostsData.map(post => ({
    date: post.date,
    category: post.category,
    title: post.title[language],
    excerpt: post.excerpt[language],
    content: post.content?.[language]
  }))
}

// Export raw data for advanced use cases
export { blogPostsData }

