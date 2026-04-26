# 📚 Teljes Tutorial - SOS Robotics Team Website

Ez a dokumentum mindent tartalmaz, amit tudnod kell az oldal kezeléséhez.

## 📋 Tartalomjegyzék

1. [Alapvető információk](#alapvető-információk)
2. [Képek hozzáadása](#képek-hozzáadása)
3. [Videók beszúrása](#videók-beszúrása)
4. [Logó cseréje](#logó-cseréje)
5. [Tartalom szerkesztése](#tartalom-szerkesztése)
6. [Színek és design](#színek-és-design)
7. [Fordítások módosítása](#fordítások-módosítása)
8. [Kontakt információk frissítése](#kontakt-információk-frissítése)
9. [Új blog poszt hozzáadása](#új-blog-poszt-hozzáadása)
10. [Új csapattag hozzáadása](#új-csapattag-hozzáadása)
11. [Új robot hozzáadása](#új-robot-hozzáadása)
12. [Támogatók hozzáadása](#támogatók-hozzáadása)
13. [Galéria képek hozzáadása](#galéria-képek-hozzáadása)
14. [Build és telepítés](#build-és-telepítés)

---

## 🚀 Alapvető információk

### Projekt struktúra

```
SOSRoboticsTeamWebsite/
├── public/              # Statikus fájlok (képek, logók, ikonok)
│   ├── robots/
│   ├── team/
│   ├── gallery/
│   ├── sponsors/
│   └── logo.png
├── src/
│   ├── data/            # Tartalom adatok
│   │   ├── teamData.ts      # Csapattagok és robotok
│   │   ├── blogData.ts      # Blog posztok
│   │   ├── galleryData.ts   # Galéria képek
│   │   ├── sponsorsData.ts  # Támogatók
│   │   ├── contactData.ts   # Kontakt információk
│   │   └── translations.ts   # Fordítások
│   ├── pages/           # Oldalak
│   └── components/      # Komponensek
└── dist/               # Buildelt fájlok (ezt töltöd fel a szerverre)
```

### Fontos fájlok

- **`src/data/teamData.ts`** - Csapattagok és robotok adatai
- **`src/data/blogData.ts`** - Blog posztok
- **`src/data/galleryData.ts`** - Galéria képek
- **`src/data/sponsorsData.ts`** - Támogatók
- **`src/data/contactData.ts`** - Email, cím, social media linkek
- **`src/data/translations.ts`** - Minden szöveg fordítása (EN, HU, DE)
- **`public/`** - Ide kerülnek a képek, logók

---

## 📸 Képek hozzáadása

### 1. Képek elhelyezése

Minden képet a `public/` mappába kell tenni, szervezd őket almappákba:

```
public/
├── robots/
│   ├── robot1-main.jpg
│   ├── robot1-detail.jpg
│   └── robot2-main.jpg
├── team/
│   ├── member1.jpg
│   ├── member2.jpg
│   └── member3.jpg
├── gallery/
│   ├── competition1.jpg
│   ├── build1.jpg
│   └── team1.jpg
└── sponsors/
    ├── sponsor1-logo.png
    └── sponsor2-logo.png
```

### 2. Robot képek hozzáadása

Nyisd meg: `src/data/teamData.ts`

```typescript
robots: [
  {
    name: 'Robot 1',
    // ... egyéb adatok
    images: [
      { 
        label: 'Fő nézet', 
        type: 'main',
        src: '/robots/robot1-main.jpg'  // ← Itt add meg a kép útvonalát
      },
      { 
        label: 'Kar részlet', 
        type: 'detail',
        src: '/robots/robot1-arm.jpg'
      },
      { 
        label: 'Versenyen', 
        type: 'action',
        src: '/robots/robot1-competition.jpg'
      }
    ]
  }
]
```

**Fontos:**
- Az útvonal mindig `/`-tal kezdődik (pl. `/robots/kep.jpg`)
- A kép a `public/robots/` mappában legyen
- Több kép is lehet egy robotnak

### 3. Csapattag képek hozzáadása

Nyisd meg: `src/data/teamData.ts`

```typescript
members: [
  {
    name: 'Kovács János',
    role: 'Mechanikai vezető',
    bio: 'Rövid bemutatkozás...',
    image: '/team/kovacs-janos.jpg'  // ← Itt add meg a kép útvonalát
  }
]
```

### 4. Galéria képek hozzáadása

Nyisd meg: `src/data/galleryData.ts`

```typescript
export const galleryImages: GalleryImage[] = [
  {
    src: '/gallery/competition1.jpg',  // ← Kép útvonala
    label: 'Első verseny',
    category: 'Competitions'  // Vagy 'Build Process', 'Team'
  },
  {
    src: '/gallery/build1.jpg',
    label: 'Robot építés',
    category: 'Build Process'
  }
]
```

**Kategóriák:**
- `'Competitions'` - Versenyek
- `'Build Process'` - Építési folyamat
- `'Team'` - Csapat

### 5. Támogató logók hozzáadása

Nyisd meg: `src/data/sponsorsData.ts`

```typescript
export const sponsors: Sponsor[] = [
  {
    name: 'Támogató 1',
    tier: 'Platinum',
    description: 'Leírás...',
    logo: '/sponsors/sponsor1-logo.png'  // ← Logó útvonala
  }
]
```

**Tier szintek:**
- `'Platinum'` - Platina
- `'Gold'` - Arany
- `'Silver'` - Ezüst
- `'Bronze'` - Bronz

---

## 🎥 Videók beszúrása

### YouTube videó beszúrása

A videókat a blog posztokban vagy az About oldalon lehet beszúrni.

#### 1. Blog posztban

Nyisd meg: `src/data/blogData.ts`

```typescript
{
  date: '2025-01-15',
  category: 'Competition',
  title: 'Verseny videó',
  excerpt: 'Rövid leírás...',
  content: [
    'Szöveg...',
    // YouTube videó embed kód:
    '<div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
    'További szöveg...'
  ]
}
```

**Hogyan kapod meg a VIDEO_ID-t?**
- YouTube videó URL: `https://www.youtube.com/watch?v=VIDEO_ID`
- Vagy: `https://youtu.be/VIDEO_ID`
- A `VIDEO_ID` az `=` jel utáni rész

#### 2. Video komponens használata (ajánlott)

A `src/components/VideoEmbed.tsx` komponenst használhatod:

```typescript
import VideoEmbed from '../components/VideoEmbed'

// A blog poszt content-ben:
<VideoEmbed 
  url="https://www.youtube.com/watch?v=VIDEO_ID"
  title="Verseny videó"
/>
```

### Vimeo videó beszúrása

```typescript
<VideoEmbed 
  url="https://vimeo.com/VIDEO_ID"
  title="Verseny videó"
/>
```

---

## 🎨 Logó cseréje

### 1. Logó fájl előkészítése

- **Formátum:** PNG vagy SVG (ajánlott)
- **Méret:** Legalább 200x200px (nagyobb is lehet)
- **Háttér:** Átlátszó vagy fehér
- **Név:** `logo.png` vagy `logo.svg`

### 2. Logó elhelyezése

Tedd a logót a `public/` mappába:
```
public/logo.png
```

### 3. Logó aktiválása

Nyisd meg: `src/App.tsx` és keresd meg ezt a részt:

```tsx
<div className="logo-container">
  {/* To add your logo: 
      1. Place logo file in public/ folder (e.g., public/logo.png)
      2. Uncomment the line below and update the filename
      3. Optionally hide the text below if logo contains text
  */}
  {/* <img src="/logo.png" alt="SOS Robotics" className="logo-image" /> */}
  <span className="logo-text">SOS</span>
  <span className="logo-subtitle">Robotics</span>
</div>
```

**Módosítás:**
```tsx
<div className="logo-container">
  <img src="/logo.png" alt="SOS Robotics" className="logo-image" />
  {/* Ha a logó tartalmaz szöveget, kommentezd ki az alábbi sorokat: */}
  {/* <span className="logo-text">SOS</span>
  <span className="logo-subtitle">Robotics</span> */}
</div>
```

### 4. Favicon és app ikonok

Lásd: `FAVICON_GUIDE.md` fájl részletes instrukciókért.

Röviden:
1. Generáld a favicon fájlokat (pl. [realfavicongenerator.net](https://realfavicongenerator.net/))
2. Tedd őket a `public/` mappába:
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`
   - `icon-192.png`
   - `icon-512.png`

---

## ✏️ Tartalom szerkesztése

### Csapattagok szerkesztése

Nyisd meg: `src/data/teamData.ts`

```typescript
members: [
  {
    name: 'Kovács János',           // ← Név
    role: 'Mechanikai vezető',      // ← Szerepkör
    bio: 'Rövid bemutatkozás...',   // ← Rövid leírás
    specialization: 'Mechanikai mérnöki munka',  // ← Opcionális
    contributions: [                // ← Opcionális lista
      'Robot tervezés',
      'CAD modellezés',
      'Prototípus készítés'
    ],
    image: '/team/kovacs-janos.jpg'  // ← Kép
  }
]
```

**Fontos:** A fordítást a `src/data/translations.ts` fájlban kell módosítani!

### Robotok szerkesztése

Nyisd meg: `src/data/teamData.ts`

```typescript
robots: [
  {
    name: 'Robot 1',  // ← Robot neve
    description: 'Rövid leírás...',
    fullDescription: 'Részletes leírás...',
    specs: [
      {
        category: 'Navigation',
        details: [
          'LiDAR-alapú SLAM',
          'IMU integráció',
          'GPS pozicionálás'
        ]
      }
    ],
    features: [
      'Autonóm navigáció',
      'Objektum manipuláció'
    ],
    achievements: [
      'Top 10 navigációs kategóriában'
    ],
    images: [
      { label: 'Fő nézet', type: 'main', src: '/robots/robot1.jpg' }
    ]
  }
]
```

**Fontos:** A fordítást a `src/data/translations.ts` fájlban kell módosítani!

---

## 🎨 Színek és design

### Csapat színek módosítása

Nyisd meg: `src/index.css`

```css
:root {
  /* Csapat színek */
  --color-primary: #0e3455;      /* Sötét kék */
  --color-secondary: #494f54;    /* Sötét szürke */
  --text-primary: #1d1d1f;
  --text-secondary: #86868b;
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f7;
  --accent: #0e3455;
  --accent-secondary: #494f54;
  --border: rgba(0, 0, 0, 0.1);
}
```

**Módosítás:**
- Változtasd meg a `--color-primary` és `--color-secondary` értékeket
- A változtatások automatikusan alkalmazódnak az egész oldalon

---

## 🌐 Fordítások módosítása

**Minden szöveg fordítása:** `src/data/translations.ts`

### Struktúra

```typescript
export const translations = {
  en: {  // Angol
    nav: { home: 'Home', ... },
    home: { title: 'SOS', ... },
    // ...
  },
  hu: {  // Magyar
    nav: { home: 'Kezdőlap', ... },
    home: { title: 'SOS', ... },
    // ...
  },
  de: {  // Német
    nav: { home: 'Startseite', ... },
    home: { title: 'SOS', ... },
    // ...
  }
}
```

### Példa: Navigációs menü módosítása

```typescript
hu: {
  nav: {
    home: 'Kezdőlap',
    about: 'Rólunk',
    robots: 'Robotok',
    team: 'Csapat',
    gallery: 'Galéria',
    blog: 'Blog',
    sponsors: 'Támogatók',
    contact: 'Kapcsolat',
    faq: 'GYIK'
  }
}
```

### Példa: Főoldal szövegek módosítása

```typescript
hu: {
  home: {
    title: 'SOS',
    subtitle: 'Robotics Team',
    description: 'A mentési robotika jövőjét építjük...',
    badge: 'RoboCup Rescue League',
    feature1Title: 'Autonóm Rendszerek',
    feature1Desc: 'Fejlett mesterséges intelligencia...',
    // ...
  }
}
```

**Fontos:** Minden nyelvhez (en, hu, de) ugyanazokat a kulcsokat kell használni!

---

## 📧 Kontakt információk frissítése

Nyisd meg: `src/data/contactData.ts`

```typescript
export const contactInfo = {
  email: 'info@sosrobotics.team',  // ← Email cím
  phone: '+36 20 123 4567',        // ← Telefonszám
  location: 'Budapest, Magyarország',  // ← Helyszín
  
  social: {
    facebook: 'https://facebook.com/sosrobotics',     // ← Facebook
    instagram: 'https://instagram.com/sosrobotics',   // ← Instagram
    github: 'https://github.com/sosrobotics',         // ← GitHub
    youtube: 'https://youtube.com/@sosrobotics',      // ← YouTube
    linkedin: 'https://linkedin.com/company/sosrobotics',  // ← LinkedIn
    twitter: 'https://twitter.com/sosrobotics'        // ← Twitter
  }
}
```

**Módosítás:**
- Változtasd meg a linkeket, vagy töröld ki azokat, amiket nem használtok
- Ha egy social media nincs, hagyd üresen: `facebook: ''`

---

## 📝 Új blog poszt hozzáadása

Nyisd meg: `src/data/blogData.ts`

```typescript
export const blogPosts: BlogPost[] = [
  {
    date: '2025-03-15',  // ← Dátum (YYYY-MM-DD formátum)
    category: 'Competition',  // ← 'Competition' vagy 'Development'
    title: {
      en: 'New Competition Results',
      hu: 'Új verseny eredmények',
      de: 'Neue Wettbewerbsergebnisse'
    },
    excerpt: {
      en: 'Short description...',
      hu: 'Rövid leírás...',
      de: 'Kurze Beschreibung...'
    },
    content: {
      en: [
        'First paragraph...',
        'Second paragraph...',
        'Third paragraph...'
      ],
      hu: [
        'Első bekezdés...',
        'Második bekezdés...',
        'Harmadik bekezdés...'
      ],
      de: [
        'Erster Absatz...',
        'Zweiter Absatz...',
        'Dritter Absatz...'
      ]
    }
  }
]
```

**Fontos:**
- Minden nyelvhez (en, hu, de) add meg a fordítást
- A dátum formátuma: `YYYY-MM-DD`
- A content egy tömb, minden elem egy bekezdés

---

## 👥 Új csapattag hozzáadása

### 1. Adatok hozzáadása

Nyisd meg: `src/data/teamData.ts`

```typescript
members: [
  // ... meglévő tagok
  {
    name: 'Új Tag',
    role: 'Szerepkör',
    bio: 'Bemutatkozás...',
    specialization: 'Szakirány',  // Opcionális
    contributions: ['Hozzájárulás 1', 'Hozzájárulás 2'],  // Opcionális
    image: '/team/uj-tag.jpg'  // Opcionális
  }
]
```

### 2. Fordítások hozzáadása

Nyisd meg: `src/data/translations.ts`

A `data.members` részben add hozzá a fordítást minden nyelvhez:

```typescript
en: {
  data: {
    members: [
      // ... meglévő tagok
      {
        name: 'New Member',
        role: 'Role',
        bio: 'Bio...',
        specialization: 'Specialization',
        contributions: ['Contribution 1', 'Contribution 2']
      }
    ]
  }
},
hu: {
  data: {
    members: [
      // ... meglévő tagok
      {
        name: 'Új Tag',
        role: 'Szerepkör',
        bio: 'Bemutatkozás...',
        specialization: 'Szakirány',
        contributions: ['Hozzájárulás 1', 'Hozzájárulás 2']
      }
    ]
  }
},
de: {
  // ... ugyanaz németül
}
```

---

## 🤖 Új robot hozzáadása

### 1. Adatok hozzáadása

Nyisd meg: `src/data/teamData.ts`

```typescript
robots: [
  // ... meglévő robotok
  {
    name: 'Robot 3',
    description: 'Rövid leírás...',
    fullDescription: 'Részletes leírás...',
    specs: [
      {
        category: 'Navigation',
        details: ['Spec 1', 'Spec 2']
      },
      {
        category: 'Sensors',
        details: ['Sensor 1', 'Sensor 2']
      }
    ],
    features: ['Feature 1', 'Feature 2'],
    achievements: ['Achievement 1'],  // Opcionális
    images: [
      { label: 'Fő nézet', type: 'main', src: '/robots/robot3-main.jpg' }
    ]
  }
]
```

### 2. Fordítások hozzáadása

Nyisd meg: `src/data/translations.ts`

A `data.robots` részben add hozzá a fordítást minden nyelvhez.

---

## 🏢 Támogatók hozzáadása

Nyisd meg: `src/data/sponsorsData.ts`

```typescript
export const sponsors: Sponsor[] = [
  // ... meglévő támogatók
  {
    name: 'Új Támogató',
    tier: 'Gold',  // 'Platinum', 'Gold', 'Silver', 'Bronze'
    description: {
      en: 'Description in English',
      hu: 'Leírás magyarul',
      de: 'Beschreibung auf Deutsch'
    },
    logo: '/sponsors/uj-tamogato-logo.png',
    website: 'https://example.com'  // Opcionális
  }
]
```

---

## 🖼️ Galéria képek hozzáadása

Nyisd meg: `src/data/galleryData.ts`

```typescript
export const galleryImages: GalleryImage[] = [
  // ... meglévő képek
  {
    src: '/gallery/uj-kep.jpg',
    label: 'Kép címe',
    category: 'Competitions'  // 'Competitions', 'Build Process', vagy 'Team'
  }
]
```

**Kategóriák:**
- `'Competitions'` - Versenyek
- `'Build Process'` - Építési folyamat
- `'Team'` - Csapat

---

## 🚀 Build és telepítés

### 1. Fejlesztési mód indítása

```bash
npm install      # Első alkalommal
npm run dev      # Fejlesztési szerver indítása
```

A böngészőben: `http://localhost:5173`

### 2. Production build készítése

```bash
npm run build
```

Ez létrehozza a `dist/` mappát, amit fel kell tölteni a szerverre.

### 3. Telepítés

Lásd: `DEPLOYMENT_GUIDE.md` fájl részletes instrukciókért.

**Röviden:**
1. Futtasd: `npm run build`
2. Töltsd fel a `dist/` mappa tartalmát a szerverre (FTP vagy KeyHelp)
3. Ellenőrizd, hogy a `.htaccess` fájl is fent van

---

## 📊 Google Analytics beállítása

A Google Analytics segítségével követheted az oldal látogatottságát, a felhasználók viselkedését és az eseményeket.

### 1. Google Analytics 4 fiók létrehozása

1. Menj a [Google Analytics](https://analytics.google.com/) oldalra
2. Hozz létre egy új GA4 property-t (vagy használd a meglévőt)
3. Másold ki a **Measurement ID**-t (formátum: `G-XXXXXXXXXX`)

### 2. Environment változó hozzáadása

Hozz létre egy `.env` fájlt a projekt gyökerében:

```bash
# A projekt gyökerében
touch .env
```

Nyisd meg a `.env` fájlt és add hozzá:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Fontos:** 
- Cseréld le a `G-XXXXXXXXXX`-t a saját Measurement ID-dre
- A `.env` fájl NEM kerül fel a git repository-ba (már benne van a `.gitignore`-ban)

### 3. Ellenőrzés

1. Indítsd el a fejlesztési szervert: `npm run dev`
2. Nyisd meg a böngésző Developer Tools-t (F12)
3. Menj a Console fülre
4. Ha minden rendben van, nem fogsz látni figyelmeztető üzenetet
5. Ha nincs beállítva, ezt fogod látni: `Google Analytics: No measurement ID provided`

### 4. Adatok megtekintése

1. Menj a [Google Analytics](https://analytics.google.com/) oldalra
2. Válaszd ki a property-t
3. A **Realtime** részben láthatod az aktív látogatókat
4. A **Reports** részben láthatod a részletes statisztikákat

**Megjegyzés:** Az adatok megjelenése 24-48 órát is igénybe vehet.

---

## 📧 Kapcsolatfelvételi űrlap beállítása

Az oldal Formspree-t használ az űrlapok kezeléséhez. A Formspree egy ingyenes szolgáltatás, amely email-ben küldi el az űrlap adatait.

### 1. Formspree fiók létrehozása

1. Menj a [Formspree](https://formspree.io/) oldalra
2. Regisztrálj egy ingyenes fiókot
3. Hozz létre egy új formot
4. Másold ki a **Form ID**-t (pl. `YOUR_FORMSPREE_ID`)

### 2. Form ID beállítása

Nyisd meg: `src/pages/Contact.tsx`

Keresd meg ezt a sort (kb. 220. sor):

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
```

Cseréld le a `YOUR_FORMSPREE_ID`-t a saját Form ID-dre:

```typescript
const response = await fetch('https://formspree.io/f/abc123xyz', {
```

### 3. Tesztelés

1. Indítsd el a fejlesztési szervert: `npm run dev`
2. Menj a `/contact` oldalra
3. Töltsd ki az űrlapot
4. Küldd el
5. Ellenőrizd az email fiókodat (a Formspree email-t küld)

### 4. Email beállítása

1. Menj a Formspree dashboard-ra
2. Válaszd ki a formot
3. Menj a **Settings** → **Email** részhez
4. Add meg az email címet, ahová az űrlap adatait küldeni szeretnéd

**Alternatív megoldások:**
- **EmailJS**: Ingyenes, de korlátozott küldések száma
- **SendGrid**: Nagyobb mennyiségű email küldéséhez
- **Saját backend**: Ha saját szervered van

---

## 📬 Hírlevél (Newsletter) beállítása

A hírlevél funkció jelenleg szimulált. Valódi működéshez integrálnod kell egy email marketing szolgáltatást.

### Opció 1: Mailchimp (Ajánlott)

#### 1. Mailchimp fiók létrehozása

1. Menj a [Mailchimp](https://mailchimp.com/) oldalra
2. Regisztrálj egy ingyenes fiókot
3. Hozz létre egy **Audience**-t (előfizető lista)
4. Menj az **Audience** → **Settings** → **Audience name and defaults** részhez
5. Másold ki az **Audience ID**-t

#### 2. API Key létrehozása

1. Menj a **Account** → **Extras** → **API keys** részhez
2. Kattints az **Create A Key** gombra
3. Másold ki az API Key-t

#### 3. Integráció

Nyisd meg: `src/components/NewsletterSignup.tsx`

Cseréld le a `handleSubmit` függvényt:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setStatus('loading')

  try {
    // Mailchimp API endpoint
    const MAILCHIMP_API_KEY = 'YOUR_API_KEY'
    const MAILCHIMP_AUDIENCE_ID = 'YOUR_AUDIENCE_ID'
    const MAILCHIMP_SERVER = 'us1' // Vagy más (pl. 'us2', 'eu1')

    const response = await fetch(
      `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${MAILCHIMP_API_KEY}`
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed'
        })
      }
    )

    if (response.ok) {
      setStatus('success')
      setEmail('')
      trackEvent('newsletter_signup', 'engagement', 'success')
      setTimeout(() => setStatus('idle'), 3000)
    } else {
      throw new Error('Subscription failed')
    }
  } catch (error) {
    console.error('Newsletter signup error:', error)
    setStatus('error')
    setTimeout(() => setStatus('idle'), 5000)
  }
}
```

**Fontos:** Az API Key-t NE tedd a kódba! Használj environment változót:

1. Add hozzá a `.env` fájlhoz:
```env
VITE_MAILCHIMP_API_KEY=your_api_key_here
VITE_MAILCHIMP_AUDIENCE_ID=your_audience_id_here
VITE_MAILCHIMP_SERVER=us1
```

2. Használd a kódban:
```typescript
const MAILCHIMP_API_KEY = import.meta.env.VITE_MAILCHIMP_API_KEY
const MAILCHIMP_AUDIENCE_ID = import.meta.env.VITE_MAILCHIMP_AUDIENCE_ID
const MAILCHIMP_SERVER = import.meta.env.VITE_MAILCHIMP_SERVER || 'us1'
```

### Opció 2: ConvertKit

1. Regisztrálj a [ConvertKit](https://convertkit.com/)-en
2. Hozz létre egy formot
3. Másold ki az API Key-t és a Form ID-t
4. Integráld hasonló módon, mint a Mailchimp-nél

### Opció 3: EmailJS (Egyszerűbb, de korlátozott)

1. Regisztrálj az [EmailJS](https://www.emailjs.com/)-en
2. Hozz létre egy email template-et
3. Másold ki a Service ID, Template ID és Public Key értékeket
4. Integráld a `NewsletterSignup.tsx` komponensbe

**Megjegyzés:** Jelenleg a hírlevél funkció csak szimulált (sikeres üzenetet mutat, de nem küld email-t). Valódi működéshez az egyik fenti szolgáltatást kell integrálnod.

---

## 🔧 Gyakori problémák és megoldások

### Képek nem jelennek meg

**Probléma:** A kép nem látszik az oldalon.

**Megoldás:**
1. Ellenőrizd, hogy a kép a `public/` mappában van-e
2. Ellenőrizd az útvonalat: `/kep.jpg` (kezdj `/`-tal!)
3. Ellenőrizd a fájlnév helyesírását (kis/nagybetű érzékeny!)

### Fordítások nem működnek

**Probléma:** A szöveg angolul marad.

**Megoldás:**
1. Ellenőrizd, hogy a `translations.ts` fájlban minden nyelvhez van-e fordítás
2. Ellenőrizd a kulcsokat (pl. `nav.home` minden nyelvnél ugyanaz legyen)
3. Töröld a böngésző cache-t (Ctrl+Shift+R)

### Build hiba

**Probléma:** A build során hibaüzenet jelenik meg.

**Megoldás:**
1. Ellenőrizd a TypeScript hibákat: `npm run build`
2. Ellenőrizd, hogy minden import helyes
3. Ellenőrizd a szintaxis hibákat (hiányzó zárójelek, stb.)

---

## 📞 Segítség

Ha bármilyen problémád van:

1. Ellenőrizd ezt a tutorialt
2. Nézd meg a `README.md` fájlt
3. Ellenőrizd a `DEPLOYMENT_GUIDE.md` fájlt
4. Nézd meg a kód kommentjeit

---

## ✅ Ellenőrző lista új tartalom hozzáadásához

- [ ] Képek a `public/` mappában vannak
- [ ] Kép útvonalak helyesek (`/kep.jpg`)
- [ ] Fordítások minden nyelvhez hozzáadva (EN, HU, DE)
- [ ] Adatok a megfelelő fájlban vannak (`teamData.ts`, `blogData.ts`, stb.)
- [ ] Build sikeres (`npm run build`)
- [ ] Lokálisan tesztelve (`npm run dev`)

---

**Utolsó frissítés:** 2025. január

