// Gallery images data - Easy to update with your actual images!
// All translations are included directly in this file - just modify this one file!

type Language = 'en' | 'hu' | 'de'

interface TranslatedText {
  en: string
  hu: string
  de: string
}

export interface GalleryImageData {
  label: TranslatedText
  category: 'Competitions' | 'Build Process' | 'Team' | 'Robots'
  src?: string
}

// Internal data structure with translations
const galleryImagesData: GalleryImageData[] = [
  { label: { en: 'After competition', hu: 'Verseny után', de: 'Nach dem Wettbewerb' }, category: 'Team', src: '/gallery/20250314_193539.webp' },
  { label: { en: 'The map in finals', hu: 'A térkép a döntőben', de: 'Die Karte im Finale' }, category: 'Competitions', src: '/gallery/20250315_110037.webp' },
  { label: { en: 'Robot in action', hu: 'Robot akcióban', de: 'Roboter in Aktion' }, category: 'Competitions', src: '/gallery/20250315_123133_02.webp' },
  { label: { en: 'Team photo with our instructor', hu: 'Csapatfotó oktatónkkal', de: 'Teamfoto mit unserem Ausbilder' }, category: 'Team', src: '/gallery/20250315_145537.webp' },
  { label: { en: 'Cooperating with other teams', hu: 'Együttműködés más csapatokkal', de: 'Zusammenarbeit mit anderen Teams' }, category: 'Competitions', src: '/gallery/20250316_111139.webp' },
  { label: { en: 'Team photo with our instructors', hu: 'Csapatfotó oktatóinkkal', de: 'Teamfoto mit unseren Ausbildern' }, category: 'Team', src: '/gallery/20250316_121820.webp' },
  { label: { en: 'Big brother from the big league', hu: 'Nagy testvér a nagy ligából', de: 'Großer Bruder aus der großen Liga' }, category: 'Robots', src: '/gallery/IMG_1040.webp' },
  { label: { en: 'Midnight check-up', hu: 'Éjféli ellenőrzés', de: 'Mitternachtskontrolle' }, category: 'Team', src: '/gallery/IMG_1052.webp' },
  { label: { en: 'Helping to build up the arena', hu: 'Segítünk felépíteni az arénát', de: 'Hilfe beim Aufbau der Arena' }, category: 'Build Process', src: '/gallery/IMG_1090.webp' },
  { label: { en: 'Looking around in the arena', hu: 'Körülnézünk az arénában', de: 'Umsehen in der Arena' }, category: 'Team', src: '/gallery/IMG_1136.webp' },
  { label: { en: '@Home League map', hu: '@Home League térkép', de: '@Home League Karte' }, category: 'Competitions', src: '/gallery/IMG_1138.webp' },
  { label: { en: 'MIRK competition map', hu: 'MIRK verseny térkép', de: 'MIRK Wettbewerbskarte' }, category: 'Competitions', src: '/gallery/IMG_1225.webp' },
  { label: { en: 'Nürnberg Messe', hu: 'Nürnberg Messe', de: 'Nürnberg Messe' }, category: 'Competitions', src: '/gallery/IMG_4396.webp' },
  { label: { en: 'Soccer robot', hu: 'Foci robot', de: 'Fußballroboter' }, category: 'Robots', src: '/gallery/IMG_4397.webp' },
  { label: { en: 'Other robots from the RMRC', hu: 'Más robotok az RMRC-ből', de: 'Andere Roboter aus dem RMRC' }, category: 'Robots', src: '/gallery/IMG_4405.webp' },
  { label: { en: 'Winner team in the Super teams challenge', hu: 'Győztes csapat a Super teams kihívásban', de: 'Gewinnerteam in der Super Teams Challenge' }, category: 'Team', src: '/gallery/IMG_4958.webp' },
  { label: { en: 'At Hajdúszoboszló testing track', hu: 'Hajdúszoboszló tesztpályán', de: 'Auf der Teststrecke in Hajdúszoboszló' }, category: 'Team', src: '/gallery/IMG_5230.webp' },
  { label: { en: 'Turning on the robot for testing', hu: 'Robot bekapcsolása teszteléshez', de: 'Roboter einschalten zum Testen' }, category: 'Robots', src: '/gallery/IMG_5231.webp' },
  { label: { en: 'Testing the robot', hu: 'Robot tesztelése', de: 'Roboter testen' }, category: 'Robots', src: '/gallery/IMG_5232.webp' },
  { label: { en: 'Friendly teams photo', hu: 'Barátságos csapatok fotója', de: 'Freundliches Teamfoto' }, category: 'Build Process', src: '/gallery/IMG_5233.webp' },
  { label: { en: 'Robot close-up', hu: 'Robot közeli felvétel', de: 'Roboter-Nahaufnahme' }, category: 'Robots', src: '/gallery/IMG_5914.webp' },
  { label: { en: 'Everyone loves snacks', hu: 'Mindenki szereti a nassolnivalókat', de: 'Jeder liebt Snacks' }, category: 'Robots', src: '/gallery/IMG_5928.webp' },
  { label: { en: 'Another big robot from the Rescue League', hu: 'Egy másik nagy robot a Rescue League-ből', de: 'Ein weiterer großer Roboter aus der Rescue League' }, category: 'Robots', src: '/gallery/IMG_5929.webp' },
  { label: { en: 'Arriving to the Competition Hall', hu: 'Érkezés a versenycsarnokba', de: 'Ankunft in der Wettbewerbshalle' }, category: 'Team', src: '/gallery/IMG_20250313_150732.webp' },
  { label: { en: 'Well deserved meal after testing', hu: 'Jól megérdemelt étkezés tesztelés után', de: 'Wohlverdiente Mahlzeit nach dem Testen' }, category: 'Team', src: '/gallery/IMG_20250313_202637.webp' },
  { label: { en: '@Soccer League', hu: '@Soccer League', de: '@Soccer League' }, category: 'Competitions', src: '/gallery/IMG_20250314_083938.webp' },
  { label: { en: 'Rescue League map', hu: 'Rescue League térkép', de: 'Rescue League Karte' }, category: 'Competitions', src: '/gallery/IMG_20250314_084059.webp'},
  { label: { en: 'Packing up after a long day', hu: 'Összecsomagolás egy hosszú nap után', de: 'Einpacken nach einem langen Tag' }, category: 'Team', src: '/gallery/IMG_20250314_084134.webp' },
  { label: { en: 'Tracks', hu: 'Pályák', de: 'Strecken' }, category: 'Competitions', src: '/gallery/IMG_20250314_084359.webp' },
  { label: { en: 'Running on track', hu: 'Futás a pályán', de: 'Laufen auf der Strecke' }, category: 'Robots', src: '/gallery/IMG_20250314_113031.webp' },
  { label: { en: 'Robot in action', hu: 'Robot akcióban', de: 'Roboter in Aktion' }, category: 'Robots', src: '/gallery/IMG_20250314_115034.webp' },
  { label: { en: 'The mainstage of the competition', hu: 'A verseny főszínpada', de: 'Die Hauptbühne des Wettbewerbs' }, category: 'Competitions', src: '/gallery/IMG_20250316_114731.webp' },
  { label: { en: 'Award ceremony', hu: 'Díjátadó', de: 'Preisverleihung' }, category: 'Competitions', src: '/gallery/IMG_20250316_155035.webp' },
  { label: { en: 'Cooking with the Robottép teams', hu: 'Főzés a Robottép csapatokkal', de: 'Kochen mit den Robottép-Teams' }, category: 'Team', src: '/gallery/4abf7a8b337538faa49def234a9f29f4.webp' },
  { label: { en: 'Everyone has a helping hand', hu: 'Mindenkinek van segítő keze', de: 'Jeder hat eine helfende Hand' }, category: 'Team', src: '/gallery/9f0eeaa6bac3704e35add57c13238532.webp' },
  { label: { en: 'Talking through the tactics', hu: 'Taktikák beszélgetése', de: 'Taktiken besprechen' }, category: 'Team', src: '/gallery/IMG_20260311_092236.webp' },
  {label: { en: 'RobotTÉP group photo', hu: 'RobotTÉP csoportfénykép', de: 'RobotTÉP Gruppenfoto' }, category: 'Team', src: '/gallery/20260310_141508.webp' },
  {label: { en: 'RoboCup German Open big event', hu: 'RoboCup Német Nyílt Nagy Esemény', de: 'RoboCup Deutscher Offener Großer Veranstaltung' }, category: 'Robots', src: '/gallery/DSC_0269.webp' },
  {label: { en: 'Focusing on the show in Eger at the Robotech Challenge day event', hu: 'Fókuszálás az Egeri műsorra a Robotech Challenge nap során', de: 'Fokus auf die Show in Eger beim Robotech Challenge Tag' }, category: 'Team', src: '/gallery/DSC_0391.webp' },
  {label: { en: 'Team meeting', hu: 'Csapat találkozó', de: 'Team-Treffen' }, category: 'Team', src: '/gallery/IMG_20260311_092413.webp' },
  {label: { en: 'Testing the robot', hu: 'Robot tesztelése', de: 'Roboter testen' }, category: 'Robots', src: '/gallery/IMG_20260311_100455.webp' },
  {label: { en: 'Testing the robot', hu: 'Robot tesztelése', de: 'Roboter testen' }, category: 'Robots', src: '/gallery/IMG_20260312_095353.webp' },
  {label: { en: 'Having dinner after a long day', hu: 'Hosszú nap után vacsora', de: 'Abendessen nach einem langen Tag' }, category: 'Team', src: '/gallery/IMG_20260312_195327.webp' },
  {label: { en: 'Robot in action during the Team challenge', hu: 'Robot akcióban a Csapat kihívás során', de: 'Roboter in Aktion während der Team-Herausforderung' }, category: 'Robots', src: '/gallery/IMG_20260313_135707.webp' },
  {label: { en: 'Robot helping other robots', hu: 'Robot segít más robotoknak', de: 'Roboter hilft anderen Robotern' }, category: 'Robots', src: '/gallery/IMG_20260313_135715.webp' },
  {label: { en: 'Team photo with our instructors', hu: 'Csapatfotó oktatóinkkal', de: 'Teamfoto mit unseren Ausbildern' }, category: 'Team', src: '/gallery/IMG_20260314_132841.webp' },
  {label: { en: 'Group photo with the two teams and our robots', hu: 'Csoportfotó a két csapat és a robotunkkal', de: 'Gruppenfoto mit den beiden Teams und unseren Robotern' }, category: 'Team', src: '/gallery/IMG_3546.webp' },
  {label: { en: 'Robot in action', hu: 'Robot akcióban', de: 'Roboter in Aktion' }, category: 'Robots', src: '/gallery/Unknown.webp' },

]

// Export interface for components (simplified, language-specific)
export interface GalleryImage {
  label: string
  category: 'Competitions' | 'Build Process' | 'Team' | 'Robots'
  src?: string
}

// Function to get gallery images for a specific language
export function getGalleryImages(language: Language = 'en'): GalleryImage[] {
  return galleryImagesData.map(image => ({
    label: image.label[language],
    category: image.category,
    src: image.src
  }))
}

// Export raw data for advanced use cases
export { galleryImagesData }
