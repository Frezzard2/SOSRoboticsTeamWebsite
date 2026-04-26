// Team data configuration - Easy to update!
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

export interface RobotSpec {
  category: string
  details: TranslatedStringArray
}

export interface RobotImage {
  label: TranslatedText
  type: 'main' | 'detail' | 'action'
  src?: string
}

export interface RobotSimpleSpecs {
  weight?: string
  dimensions?: string
  maxSpeed?: string
  battery?: string
}

export interface RobotData {
  name: TranslatedText
  description: TranslatedText
  fullDescription?: TranslatedText
  specs: RobotSpec[]
  simpleSpecs?: RobotSimpleSpecs
  images: RobotImage[]
  features: TranslatedStringArray
  achievements?: TranslatedStringArray
}

export interface TeamMemberSocial {
  linkedin?: string
  github?: string
  twitter?: string
  email?: string
  website?: string
  instagram?: string
  facebook?: string
}

export interface TeamMemberData {
  name: string // Names usually don't need translation
  role: TranslatedText
  bio: TranslatedText
  specialization?: TranslatedText
  contributions?: TranslatedStringArray
  image?: string
  social?: TeamMemberSocial
}

// Internal data structure with translations
const teamDataInternal = {
  colors: {
    primary: '#0e3455',
    secondary: '#494f54',
    accent: '#0e3455',
    text: '#1d1d1f',
    textMuted: '#86868b'
  },

  members: [
    {
      name: 'Ákos Szánthó',
      role: {
        en: 'Mechanical Engineer & Team Leader',
        hu: 'Gépész Mérnök & Csapatvezető',
        de: 'Maschinenbauingenieur & Teamleiter'
      },
      bio: {
        en: 'Ákos is the team leader and mechanical engineer of SOS Robotics Team. He is responsible for overseeing the team\'s projects and ensuring successful robot designs. Also he handles the mechanical and the electrical aspects of the robots. He ensures that the robots are built to withstand the challenges of rescue scenarios.',
        hu: 'Ákos az SOS Robotics Team csapatvezetője és gépész mérnöke. Felelős a csapat projektek felügyeletéért és a sikeres robot tervezésért. Ő kezeli a robotok mechanikai és elektromos aspektusait is. Biztosítja, hogy a robotok úgy legyenek megépítve, hogy ellenálljanak a mentési helyzetek kihívásainak.',
        de: 'Ákos ist der Teamleiter und Maschinenbauingenieur des SOS Robotics Teams. Er ist verantwortlich für die Überwachung der Teamprojekte und die erfolgreiche Robotergestaltung. Er kümmert sich auch um die mechanischen und elektrischen Aspekte der Roboter. Er stellt sicher, dass die Roboter so gebaut sind, dass sie den Herausforderungen von Rettungsszenarien standhalten.'
      },
      specialization: {
        en: 'Mechanical Engineering & Team Leadership',
        hu: 'Gépészeti Mérnöki & Csapatvezetés',
        de: 'Maschinenbau & Teamführung'
      },
      contributions: {
        en: ['Robot design', 'CAD modeling', 'Prototyping', 'Construction', 'Project management', 'Team coordination'],
        hu: ['Robot tervezés', 'CAD modellezés', 'Prototípus készítés', 'Építés', 'Projektmenedzsment', 'Csapat koordináció'],
        de: ['Roboterdesign', 'CAD-Modellierung', 'Prototyping', 'Konstruktion', 'Projektmanagement', 'Teamkoordination']
      },
      image: '/gallery/1702533ab08d81f2de3c17b84da30876.webp',
      social: {
        instagram: 'https://www.instagram.com/akosszantho/',
        facebook: 'https://www.facebook.com/akos.szantho.7',
        email: 'akosszantho@gmail.com',
      }
    },
    {
      name: 'Zsombor Kukucska',
      role: {
        en: 'Software Developer & Graphic Designer',
        hu: 'Szoftverfejlesztő & Grafikus Tervező',
        de: 'Softwareentwickler & Grafikdesigner'
      },
      bio: {
        en: 'Zsombor is a software developer specializing in autonomous navigation and AI algorithms for rescue robotics. He develops the software that powers our robots. Graphical designer of the team as well, he creates visual content for presentations, social media, and promotional materials. Also he is the spokesperson of the team.',
        hu: 'Zsombor egy szoftverfejlesztő, aki az autonóm navigációra és mesterséges intelligencia algoritmusokra specializálódott a mentési robotikában. Ő fejleszti a robotjainkat működtető szoftvert. A csapat grafikus tervezője is, aki vizuális tartalmakat készít prezentációkhoz, közösségi médiához és promóciós anyagokhoz. Ő a csapat szóvivője is.',
        de: 'Zsombor ist ein Softwareentwickler, der sich auf autonome Navigation und KI-Algorithmen für Rettungsrobotik spezialisiert. Er entwickelt die Software, die unsere Roboter antreibt. Auch Grafikdesigner des Teams, erstellt er visuelle Inhalte für Präsentationen, soziale Medien und Werbematerialien. Er ist auch der Sprecher des Teams.'
      },
      specialization: {
        en: 'Software Development & Graphical Design',
        hu: 'Szoftverfejlesztés & Grafikus Tervezés',
        de: 'Softwareentwicklung & Grafikdesign'
      },
      contributions: {
        en: ['Autonomous navigation', 'Sensor integration', 'Software architecture', 'ROS2', 'Graphic design', 'Media relations'],
        hu: ['Autonóm navigáció', 'Szenzor integráció', 'Szoftver architektúra', 'ROS2', 'Grafikus tervezés', 'Médiakapcsolatok'],
        de: ['Autonome Navigation', 'Sensorintegration', 'Softwarearchitektur', 'ROS2', 'Grafikdesign', 'Medienarbeit']
      },
      image: '/gallery/IMG_3835.webp',
      social: {
        linkedin: 'https://www.linkedin.com/in/zsombor-kukucska-381b19359',
        github: 'https://github.com/Frezzard2',
        email: 'kukucska.zsombor@gmail.com',
        instagram: 'https://www.instagram.com/kukucska_zsombor/',
        facebook: 'https://www.facebook.com/zsombor.kukucska.1/'
      }
    },
    {
      name: 'Kristóf Gere',
      role: {
        en: 'Robot Operator & Tester',
        hu: 'Robot Operátor & Tesztelő',
        de: 'Roboterbediener & Tester'
      },
      bio: {
        en: 'Kristóf is responsible for operating the robots during competitions and testing. He ensures that the robots perform optimally in various scenarios. Guiding the robots through obstacle courses and rescue tasks, he plays a crucial role in the team\'s success. Without his precise control, the robots would not be able to complete their missions effectively. Also he started to learn about both mechanical and software engineering to contribute more to the team in the future.',
        hu: 'Kristóf felelős a robotok működtetéséért versenyek és tesztek során. Biztosítja, hogy a robotok optimálisan működjenek különböző helyzetekben. Az akadálypályákon és mentési feladatokon való irányítással kulcsszerepet játszik a csapat sikerében. Pontos irányítása nélkül a robotok nem lennének képesek hatékonyan teljesíteni küldetéseiket. Emellett elkezdett tanulni mind a gépészeti, mind a szoftvermérnöki területekről, hogy a jövőben többet hozzájárulhasson a csapathoz.',
        de: 'Kristóf ist verantwortlich für den Betrieb der Roboter während Wettbewerben und Tests. Er stellt sicher, dass die Roboter in verschiedenen Szenarien optimal funktionieren. Indem er die Roboter durch Hindernisparcours und Rettungsaufgaben führt, spielt er eine entscheidende Rolle für den Erfolg des Teams. Ohne seine präzise Steuerung könnten die Roboter ihre Missionen nicht effektiv erfüllen. Außerdem hat er begonnen, sowohl über Maschinenbau als auch Softwaretechnik zu lernen, um in Zukunft mehr zum Team beitragen zu können.'
      },
      specialization: {
        en: 'Precision Operation',
        hu: 'Precíziós Működtetés',
        de: 'Präzisionsbetrieb'
      },
      contributions: {
        en: ['Operation', 'Testing', 'Performance Optimization', 'Feedback', 'Mechanical Engineering', 'Software Engineering'],
        hu: ['Működtetés', 'Tesztelés', 'Teljesítmény optimalizálás', 'Visszajelzés', 'Gépészeti mérnökség', 'Szoftvermérnökség'],
        de: ['Betrieb', 'Tests', 'Leistungsoptimierung', 'Feedback', 'Maschinenbau', 'Softwaretechnik']
      },
      image: '/gallery/IMG_7060.webp',
      social: {
        email: 'kristgere8@gmail.com',
        instagram: 'https://www.instagram.com/gkristof7/',
        facebook: 'https://www.facebook.com/profile.php?id=100072137468781'
      }
    },
    {
      name: 'József Juhász',
      role: {
        en: 'Mechanical Engineer & Electrical Engineer',
        hu: 'Gépész Mérnök & Elektrotechniker',
        de: 'Maschinenbauingenieur & Elektrotechniker'
      },
      bio: {
        en: 'József is responsible for the mechanical design of the robots. He ensures that the robots are built to withstand the challenges of rescue scenarios. He also creates CAD models for the robots to help the team with the construction process. He is also responsible for the main electrical system of the robots.',
        hu: 'József felelős a robotok mechanikai tervezéséért. Biztosítja, hogy a robotok úgy legyenek megépítve, hogy ellenálljanak a mentési helyzetek kihívásainak. Ő készíti a robotok CAD modelleit, hogy a csapatnak segítsen a építési folyamatban. Ő is felelős a robotok fő elektromos rendszeréért.',
        de: 'József ist verantwortlich für die mechanische Design der Roboter. Er stellt sicher, dass die Roboter so gebaut sind, dass sie den Herausforderungen von Rettungsszenarien standhalten. Er erstellt auch CAD-Modelle für die Roboter, um dem Team bei der Konstruktion zu helfen. Er ist auch verantwortlich für das Hauptelektrische System der Roboter.'      
      },
      specialization: {
        en: 'Mechanical Engineering & Electrical Engineering',
        hu: 'Gépészeti Mérnökség & Elektrotechnik',
        de: 'Maschinenbau & Elektrotechnik'
      },
      contributions: {
        en: ['Mechanical Design', 'Electrical Engineering', 'CAD Design', 'Construction'],
        hu: ['Mechanikai tervezés', 'Elektrotechnik', 'CAD tervezés', 'Építés'],
        de: ['Maschinenbau', 'Elektrotechnik', 'CAD-Design', 'Konstruktion']
      },
      image: '/gallery/IMG_20250301_102155.webp',
      social: {
        email: '22d_juhaszj@nyirszikszi.hu'
      }
    }
  ] as TeamMemberData[],

  robots: [
    {
      name: {
        en: 'Rescue robot v1',
        hu: 'Menekítő robot v1',
        de: 'Rettungsroboter v1'
      },
      description: {
        en: 'Our first rescue robot designed for navigation and object manipulation in disaster scenarios.',
        hu: 'Első menekítő robotunk, amelyet navigációra és objektum manipulációra terveztünk katasztrófa helyzetekben.',
        de: 'Unser erster Rettungsroboter, entwickelt für Navigation und Objektmanipulation in Katastrophenszenarien.'
      },
      fullDescription: {
        en: 'This robot represents our team\'s first major project in the RoboCup Rescue League. Built with precision engineering, robust mechanical design. The robot is designed to operate in challenging environments, making it ideal for search and rescue operations.',
        hu: 'Ez a robot csapatunk első nagy projektje a RoboCup Rescue League RMRC-ben. Precíziós mérnöki munkával készült, robusztus mechanikai kialakítással. A robot kihívásokkal teli környezetekben való működésre lett tervezve, ideális keresési-mentési műveletekhez.',
        de: 'Dieser Roboter repräsentiert das erste große Projekt unseres Teams in der RoboCup Rescue League. Mit Präzisionsingenieurwesen gebaut, robustes mechanisches Design. Der Roboter ist für den Betrieb in anspruchsvollen Umgebungen konzipiert und ideal für Such- und Rettungseinsätze.'
      },
      simpleSpecs: {
        weight: '3 kg',
        dimensions: '20 × 10 × 8 cm',
        maxSpeed: '2.5 m/s',
        battery: 'ParkSide Battery, 5+ hours'
      },
      specs: [
        {
          category: 'Navigation',
          details: {
            en: ['High-resolution Camera', 'Big wheels for rough terrain', 'Arm visualization'],
            hu: ['Nagy felbontású kamera', 'Nagy kerekek nehéz terepen', 'Kar vizualizáció'],
            de: ['Hochauflösende Kamera', 'Große Räder für raues Gelände', 'Arm-Visualisierung']
          }
        },
        {
          category: 'Manipulation',
          details: {
            en: ['3-DOF robotic arm', '3D printed gripper', 'Payload capacity: 5kg', 'Backward facing wheel for stability'],
            hu: ['3-DOF robotkar', '3D nyomtatott fogó', 'Teherbírás: 5kg', 'Hátrafelé néző kerék a stabilitáshoz'],
            de: ['3-DOF-Roboterarm', '3D-gedruckter Greifer', 'Nutzlast: 5kg', 'Rückwärts gerichtetes Rad für Stabilität']
          }
        },
        {
          category: 'Power & Mobility',
          details: {
            en: ['ParkSide batteries', '4-wheel drive', 'All-terrain capability', 'Runtime: 5+ hours'],
            hu: ['ParkSide akkumulátorok', '4 kerék meghajtás', 'Minden terepen működőképes', 'Futási idő: 5+ óra'],
            de: ['ParkSide-Batterien', '4-Rad-Antrieb', 'Geländegängigkeit', 'Laufzeit: 5+ Stunden']
          }
        }
      ],
      features: {
        en: [
          'Easy navigation in complex environments',
          'Real-time QR code detection',
          'Precise object manipulation',
          'Remote operation capability',
          'Robust construction for durability'
        ],
        hu: [
          'Könnyű navigáció összetett környezetekben',
          'Valós idejű QR kód észlelés',
          'Precíziós objektum manipuláció',
          'Távoli működtetési képesség',
          'Robusztus kialakítás tartóssághoz'
        ],
        de: [
          'Einfache Navigation in komplexen Umgebungen',
          'Echtzeit-QR-Code-Erkennung',
          'Präzise Objektmanipulation',
          'Fernbedienungsfähigkeit',
          'Robuste Konstruktion für Langlebigkeit'
        ]
      },
      achievements: {
        en: [
          'It was the only one of the robots that finished the Sand/Gravel obstacle course successfully',
          'Successfully detected and manipulated objects in test scenarios'
        ],
        hu: [
          'Ez volt az egyetlen robot, amely sikeresen befejezte a Homok/Kavics akadálypályát',
          'Sikeresen észlelt és manipulált objektumokat tesztelési helyzetekben'
        ],
        de: [
          'Es war der einzige Roboter, der den Sand/Kies-Hindernisparcours erfolgreich absolvierte',
          'Erfolgreich Objekte in Testszenarien erkannt und manipuliert'
        ]
      },
      images: [
        { label: { en: 'Main View', hu: 'Fő nézet', de: 'Hauptansicht' }, type: 'main' as const, src: '/gallery/IMG_5215.webp' },
        { label: { en: 'Arm Detail', hu: 'Kar részlet', de: 'Arm-Detail' }, type: 'detail' as const, src: '/gallery/IMG_4379.webp' },
        { label: { en: 'In Action', hu: 'Akcióban', de: 'In Aktion' }, type: 'action' as const, src: '/gallery/IMG_4382.webp' },
        { label: { en: 'Sensor Array', hu: 'Szenzor tömb', de: 'Sensor-Array' }, type: 'detail' as const, src: '/gallery/IMG_4377.webp' },
        { label: { en: 'Competition Shot', hu: 'Verseny felvétel', de: 'Wettbewerbsaufnahme' }, type: 'action' as const, src: '/gallery/IMG_5914.webp' }
      ]
    },
    {
      name: {
        en: 'Autonmous Car',
        hu: 'Autonóm Autó',
        de: 'Autonomes Auto'
      },
      description: {
        en: 'This autonomous car was built to participate in the Word Robot Olympiad in Győr 2025. ',
        hu: 'Ez az autonóm autó a Győr 2025-ös Word Robot Olimpia részvételéhez készült.',
        de: 'Dieses autonome Auto wurde gebaut, um an der Word Robot Olympiad in Győr 2025 teilzunehmen.'
      },
      fullDescription: {
        en: 'The autonomous car is designed to navigate a predefined track while avoiding obstacles and following specific rules set by the competition. It features advanced sensors and a robust control system to ensure precise movement and decision-making on the track.',
        hu: 'Az autonóm autó egy előre meghatározott pályán való navigációra lett tervezve, miközben elkerüli az akadályokat és követi a verseny által meghatározott szabályokat. Fejlett szenzorokkal és robusztus vezérlőrendszerrel rendelkezik, hogy biztosítsa a precíz mozgást és döntéshozatalt a pályán.',
        de: 'Das autonome Auto ist darauf ausgelegt, auf einer vordefinierten Strecke zu navigieren und dabei Hindernissen auszuweichen und den vom Wettbewerb festgelegten Regeln zu folgen. Es verfügt über fortschrittliche Sensoren und ein robustes Steuerungssystem, um präzise Bewegung und Entscheidungsfindung auf der Strecke zu gewährleisten.'
      },
      simpleSpecs: {
        weight: '5 kg',
        dimensions: '65 × 45 × 35 cm',
        maxSpeed: '2.5 m/s',
        battery: 'Extended lithium-ion, 3+ hours'
      },
      specs: [
        {
          category: 'Navigation',
          details: {
            en: ['LIDAR sensor', 'Line-following cameras', 'Algorithmic path planning'],
            hu: ['LIDAR szenzor', 'Vonal követő kamerák', 'Algoritmikus útvonal tervezés'],
            de: ['LIDAR-Sensor', 'Linienfolgekameras', 'Algorithmische Pfadplanung']
          }
        },
        {
          category: 'Sensors',
          details: {
            en: ['YDLIDAR X4', 'HuskyLens'],
            hu: ['YDLIDAR X4', 'HuskyLens'],
            de: ['YDLIDAR X4', 'HuskyLens']
          }
        },
        {
          category: 'Power & Mobility',
          details: {
            en: ['4-wheel drive system', 'One motor with differential', 'Runtime: 3+ hours'],
            hu: ['4 kerék meghajtás', 'Egy motor differenciálművel', 'Futási idő: 3+ óra'],
            de: ['4-Rad-Antriebssystem', 'Ein Motor mit Differential', 'Laufzeit: 3+ Stunden']
          }
        }
      ],
      features: {
        en: [
          'Autonomous navigation on a predefined track',
          'Obstacle detection and avoidance',
          'Line following capability',
          'Real-time decision making'
        ],
        hu: [
          'Autonóm navigáció előre meghatározott pályán',
          'Akadály észlelés és elkerülés',
          'Vonal követési képesség',
          'Valós idejű döntéshozatal'
        ],
        de: [
          'Autonome Navigation auf einer vordefinierten Strecke',
          'Hinderniserkennung und -vermeidung',
          'Linienfolgefähigkeit',
          'Echtzeit-Entscheidungsfindung'
        ]
      },
      images: [
        { label: { en: 'Main View', hu: 'Fő nézet', de: 'Hauptansicht' }, type: 'main' as const, src: '/gallery/C6B7D0D7-5D35-4458-9129-1031D2FFC4B0.webp' },
        { label: { en: 'Arm System', hu: 'Kar rendszer', de: 'Arm-System' }, type: 'detail' as const, src: '/gallery/E6390B8C-48E7-413A-ABBC-1431B8521E6C.webp' }
      ]
    },
    {
      name: {
        en: 'Rescue robot v2',
        hu: 'Menekítő robot v2',
        de: 'Rettungsroboter v2'
      },
      description: {
        en: 'Our 2026 RoboCup Rescue RMRC robot: a compact 4WD platform with 4D LiDAR/IMU odometry, Jetson Orin Nano compute, three cameras, and a leader–follower manipulator for reliable teleoperation and selective autonomy.',
        hu: 'A 2026-os RoboCup Rescue RMRC robotunk: kompakt 4WD platform 4D LiDAR/IMU odometriával, Jetson Orin Nano számítógéppel, három kamerával és leader–follower manipulátorral a megbízható teleoperációhoz és a szelektív autonómiához.',
        de: 'Unser RoboCup Rescue RMRC Roboter 2026: eine kompakte 4WD-Plattform mit 4D-LiDAR/IMU-Odometrie, Jetson Orin Nano Rechenleistung, drei Kameras und einem Leader–Follower-Manipulator für zuverlässige Teleoperation und selektive Autonomie.'
      },
      fullDescription: {
        en: 'This platform is our current-generation rescue robot for the RoboCup Rescue Rapidly Manufactured Robot Challenge (RMRC) 2026. It uses an NVIDIA Jetson Orin Nano (8GB) as the main computer, a Unitree L2 4D LiDAR with integrated IMU for wheel-encoder-free odometry and mapping (Point-LIO), and a wired Ethernet tether with ZeroMQ-based communication for robust multi-camera streaming and SLAM telemetry. Locomotion is provided by four Pololu 37Dx54L 12V gearmotors driven by a Cytron MDD20A motor driver, with PWM generation offloaded to a Raspberry Pico 2W for stable control and electrical isolation. For dexterity tasks we use a TheRobotStudio SO Arm 101 in a leader–follower setup, mounted on a rail so it can be removed for height-restricted arenas. Perception includes YOLO-based HAZMAT and Landolt-C detection and QR decoding, presented to the operator in a PyQt5 “cockpit” GUI with 2D/3D SLAM and three camera views.',
        hu: 'Ez a platform a 2026-os RoboCup Rescue Rapidly Manufactured Robot Challenge (RMRC) jelenlegi generációs mentőrobotunk. Fő számítógépe egy NVIDIA Jetson Orin Nano (8GB), a kerék-enkóder nélküli odometriát és térképezést pedig egy Unitree L2 4D LiDAR integrált IMU-val biztosítja (Point-LIO). A megbízható többkamerás stream és SLAM telemetria érdekében vezetékes Ethernet összeköttetést használunk ZeroMQ-alapú kommunikációval. A mozgást négy Pololu 37Dx54L 12V hajtóműves DC motor biztosítja egy Cytron MDD20A motorvezérlőn keresztül, a PWM jeleket pedig egy Raspberry Pico 2W állítja elő a stabil vezérlés és az elektromos leválasztás érdekében. Az ügyességi feladatokhoz TheRobotStudio SO Arm 101 leader–follower kart használunk, sínre szerelve, így magasságkorlátos pályákhoz leemelhető. A szenzor- és látásrendszer YOLO-alapú HAZMAT és Landolt-C felismerést, valamint QR dekódolást végez; mindez a PyQt5 alapú “cockpit” felületen jelenik meg 2D/3D SLAM és három kamera nézettel.',
        de: 'Diese Plattform ist unser aktueller Rettungsroboter für die RoboCup Rescue Rapidly Manufactured Robot Challenge (RMRC) 2026. Als Hauptrechner dient ein NVIDIA Jetson Orin Nano (8GB); die Odometrie und Kartierung ohne Rad-Encoder übernimmt ein Unitree L2 4D LiDAR mit integrierter IMU (Point-LIO). Für robuste Multi-Kamera-Streams und SLAM-Telemetrie verwenden wir ein kabelgebundenes Ethernet-Tether mit ZeroMQ-basierter Kommunikation. Der Antrieb besteht aus vier Pololu 37Dx54L 12V-Getriebemotoren, angesteuert über einen Cytron MDD20A Motor-Driver; die PWM-Erzeugung ist zur stabilen Regelung und elektrischen Entkopplung auf einen Raspberry Pico 2W ausgelagert. Für Geschicklichkeitsaufgaben nutzen wir einen TheRobotStudio SO Arm 101 im Leader–Follower-Betrieb, auf einer Schiene montiert, sodass er für höhenbegrenzte Arenen abnehmbar ist. Die Wahrnehmung umfasst YOLO-basierte HAZMAT- und Landolt-C-Erkennung sowie QR-Decoding, dargestellt in einer PyQt5-„Cockpit“-GUI mit 2D/3D-SLAM und drei Kameraansichten.'
      },
      simpleSpecs: {
        weight: '≈ 7 kg',
        dimensions: '≈ 50 × 40 × 35 cm',
        maxSpeed: '≈ 1.1 m/s',
        battery: '2× Parkside Performance Li-ion (hot-swappable), ≈150–300 min'
      },
      specs: [
        {
          category: 'Locomotion',
          details: {
            en: [
              '4-wheel drive platform',
              '4× Pololu 37Dx54L gearmotors (50:1, 12V, ~200 RPM)',
              'Cytron MDD20A dual-channel brushed DC motor driver',
              'No wheel encoders (odometry from LiDAR/IMU)'
            ],
            hu: [
              '4 kerék meghajtású platform',
              '4× Pololu 37Dx54L hajtóműves motor (50:1, 12V, ~200 RPM)',
              'Cytron MDD20A kétcsatornás DC motorvezérlő',
              'Nincs kerék-enkóder (odometria LiDAR/IMU alapján)'
            ],
            de: [
              '4-Rad-Antrieb-Plattform',
              '4× Pololu 37Dx54L Getriebemotoren (50:1, 12V, ~200 RPM)',
              'Cytron MDD20A 2-Kanal DC-Motortreiber',
              'Keine Rad-Encoder (Odometrie über LiDAR/IMU)'
            ]
          }
        },
        {
          category: 'Computation & Control',
          details: {
            en: [
              'NVIDIA Jetson Orin Nano (8GB, ~67 TOPS) main computer',
              'Samsung 980 NVMe SSD (500GB) for the system',
              'Raspberry Pico 2W for PWM generation and electrical isolation',
              'Motor commands over USB serial (Jetson → Pico)'
            ],
            hu: [
              'NVIDIA Jetson Orin Nano (8GB, ~67 TOPS) fő számítógép',
              'Samsung 980 NVMe SSD (500GB) rendszer-tárhely',
              'Raspberry Pico 2W PWM generáláshoz és elektromos leválasztáshoz',
              'Motor parancsok USB soros kapcsolaton (Jetson → Pico)'
            ],
            de: [
              'NVIDIA Jetson Orin Nano (8GB, ~67 TOPS) als Hauptrechner',
              'Samsung 980 NVMe SSD (500GB) als Systemlaufwerk',
              'Raspberry Pico 2W für PWM-Erzeugung und elektrische Entkopplung',
              'Motorbefehle über USB-Seriell (Jetson → Pico)'
            ]
          }
        },
        {
          category: 'Sensors & Perception',
          details: {
            en: [
              'Unitree L2 4D LiDAR with integrated IMU',
              'Point-LIO LiDAR–IMU odometry and mapping',
              '3× USB cameras (front + arm + rear)',
              'YOLO-based HAZMAT & Landolt-C detection, QR decoding'
            ],
            hu: [
              'Unitree L2 4D LiDAR integrált IMU-val',
              'Point-LIO LiDAR–IMU odometria és térképezés',
              '3× USB kamera (elöl + kar + hátul)',
              'YOLO-alapú HAZMAT & Landolt-C felismerés, QR dekódolás'
            ],
            de: [
              'Unitree L2 4D LiDAR mit integrierter IMU',
              'Point-LIO LiDAR–IMU-Odometrie und Kartierung',
              '3× USB-Kameras (Front + Arm + Rückseite)',
              'YOLO-basierte HAZMAT- & Landolt-C-Erkennung, QR-Decoding'
            ]
          }
        },
        {
          category: 'Manipulation',
          details: {
            en: [
              'TheRobotStudio SO Arm 101 leader–follower manipulator',
              'Rail-mounted slide-off arm for height-restricted arenas',
              'Arm camera tilted ~45° downward for alignment tasks',
              'Rear 1-DOF support arm to prevent tipping on ramps'
            ],
            hu: [
              'TheRobotStudio SO Arm 101 leader–follower manipulátor',
              'Sínre szerelt, lecsúsztatható kar magasságkorlátos pályákhoz',
              'Karon lévő kamera ~45°-ban lefelé döntve igazítási feladatokhoz',
              'Hátsó 1-DOF támasztó kar a felborulás elkerülésére rámpákon'
            ],
            de: [
              'TheRobotStudio SO Arm 101 Leader–Follower-Manipulator',
              'Schienenmontierter, abnehmbarer Arm für höhenbegrenzte Arenen',
              'Armkamera ca. 45° nach unten geneigt für Align-Aufgaben',
              'Hinterer 1-DOF-Stützarm gegen Kippen auf Rampen'
            ]
          }
        },
        {
          category: 'Power & Communication',
          details: {
            en: [
              '2× Parkside Performance Li-ion packs in parallel (hot-swappable)',
              'Fused power distribution with separate branches for arm, compute, and motors',
              'Wired Ethernet tether for reliable bandwidth and low latency',
              'ZeroMQ over TCP for commands, telemetry, and camera streaming'
            ],
            hu: [
              '2× Parkside Performance Li-ion akku párhuzamosan (hot-swap)',
              'Biztosítékozott tápelosztás külön ágakkal (kar, számítás, motorok)',
              'Vezetékes Ethernet kapcsolat a megbízható sávszélességért és alacsony késleltetésért',
              'ZeroMQ TCP felett parancsokhoz, telemetriához és kamera streamhez'
            ],
            de: [
              '2× Parkside Performance Li-ion Akkus parallel (hot-swapfähig)',
              'Abgesicherte Stromverteilung mit getrennten Zweigen (Arm, Compute, Motoren)',
              'Kabelgebundenes Ethernet-Tether für hohe Zuverlässigkeit und geringe Latenz',
              'ZeroMQ über TCP für Befehle, Telemetrie und Kamera-Streaming'
            ]
          }
        }
      ],
      features: {
        en: [
          'LiDAR/IMU odometry and mapping without wheel encoders',
          'Three-camera cockpit view with optional AI overlays',
          'Leader–follower manipulation for intuitive teleoperation',
          'Wired tether for stable, high-bandwidth communication',
          'Modular design: slide-off arm and hot-swappable batteries'
        ],
        hu: [
          'LiDAR/IMU alapú odometria és térképezés kerék-enkóder nélkül',
          'Háromkamerás “cockpit” nézet opcionális AI overlay-ekkel',
          'Leader–follower manipuláció az intuitív teleoperációhoz',
          'Vezetékes kapcsolat stabil, nagy sávszélességű kommunikációhoz',
          'Moduláris kialakítás: leemelhető kar és hot-swap akkuk'
        ],
        de: [
          'LiDAR/IMU-Odometrie und Kartierung ohne Rad-Encoder',
          'Drei-Kamera-„Cockpit“-Ansicht mit optionalen KI-Overlays',
          'Leader–Follower-Manipulation für intuitive Teleoperation',
          'Kabelgebundene Verbindung für stabile, bandbreitenstarke Kommunikation',
          'Modulares Design: abnehmbarer Arm und hot-swapfähige Akkus'
        ]
      },
      achievements: {
        en: [
          'One bronze medal with this platform concept (Hungarian Youth Robotic Championship)',
          'Validated on an RMRC-like arena with real-time SLAM and vision pipelines'
        ],
        hu: [
          'Egy bronzérem ezzel a platform-koncepcióval (Magyar Ifjúsági Robotbajnokság)',
          'RMRC-szerű pályán validáltuk valós idejű SLAM és látásrendszerrel'
        ],
        de: [
          'Ein Bronzemedaille mit diesem Plattformkonzept (Ungarische Jugend-Robotik-Meisterschaft)',
          'Auf einer RMRC-ähnlichen Arena mit Echtzeit-SLAM und Vision-Pipeline validiert'
        ]
      },
      images: [
        { label: { en: 'Robot in action', hu: 'Robot akcióban', de: 'Robot in Aktion' }, type: 'main' as const, src: '/gallery/IMG_7669.webp' },
        {label: { en: 'Arm System', hu: 'Kar rendszer', de: 'Arm-System' }, type: 'detail' as const, src: '/gallery/IMG_7670.webp' },
        { label: { en: 'CAD Design', hu: 'CAD tervezés', de: 'CAD-Design' }, type: 'detail' as const, src: '/gallery/IMG_7676.webp' },
        { label: { en: 'Robot in action', hu: 'Robot akcióban', de: 'Robot in Aktion' }, type: 'action' as const, src: '/gallery/IMG_20260313_135707.webp' }
      ]
    }
  ] as RobotData[]
}

// Export interfaces for components (simplified, language-specific)
export interface Robot {
  name: string
  description: string
  fullDescription?: string
  specs: Array<{ category: string; details: string[] }>
  simpleSpecs?: RobotSimpleSpecs
  images: Array<{ label: string; type: 'main' | 'detail' | 'action'; src?: string }>
  features: string[]
  achievements?: string[]
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  specialization?: string
  contributions?: string[]
  image?: string
  social?: TeamMemberSocial
}

// Functions to get data for a specific language
export function getRobots(language: Language = 'en'): Robot[] {
  return teamDataInternal.robots.map(robot => ({
    name: robot.name[language],
    description: robot.description[language],
    fullDescription: robot.fullDescription?.[language],
    simpleSpecs: robot.simpleSpecs,
    specs: robot.specs.map(spec => ({
      category: spec.category,
      details: spec.details[language]
    })),
    features: robot.features[language],
    achievements: robot.achievements?.[language],
    images: robot.images.map(img => ({
      label: img.label[language],
      type: img.type,
      src: img.src
    }))
  }))
}

export function getMembers(language: Language = 'en'): TeamMember[] {
  return teamDataInternal.members.map(member => ({
    name: member.name,
    role: member.role[language],
    bio: member.bio[language],
    specialization: member.specialization?.[language],
    contributions: member.contributions?.[language],
    image: member.image,
    social: member.social
  }))
}

// Export team colors and raw data
export const teamData = {
  colors: teamDataInternal.colors
}

// Export raw data for advanced use cases
export { teamDataInternal }
