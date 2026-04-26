// FAQ Data - Easy to update with your actual FAQs!

export interface FAQItem {
  question: {
    en: string
    hu: string
    de: string
  }
  answer: {
    en: string
    hu: string
    de: string
  }
}

export const faqItems: FAQItem[] = [
  {
    question: {
      en: 'What is the RoboCup Rescue League?',
      hu: 'Mi a RoboCup Rescue League?',
      de: 'Was ist die RoboCup Rescue League?'
    },
    answer: {
      en: 'The RoboCup Rescue League is an international competition where teams build and program robots to navigate disaster scenarios and perform search and rescue operations autonomously. It focuses on developing robots that can operate in complex, unstructured environments similar to real disaster situations.',
      hu: 'A RoboCup Rescue League egy nemzetközi verseny, ahol csapatok robotokat építenek és programoznak, hogy katasztrófa helyzetekben navigáljanak és autonóm módon keresési-mentési műveleteket végezzenek. A verseny célja olyan robotok fejlesztése, amelyek komplex, strukturálatlan környezetekben is működnek, hasonlóan a valós katasztrófa helyzetekhez.',
      de: 'Die RoboCup Rescue League ist ein internationaler Wettbewerb, bei dem Teams Roboter bauen und programmieren, um in Katastrophenszenarien zu navigieren und autonom Such- und Rettungseinsätze durchzuführen. Der Fokus liegt auf der Entwicklung von Robotern, die in komplexen, unstrukturierten Umgebungen ähnlich wie bei echten Katastrophensituationen operieren können.'
    }
  },
  {
    question: {
      en: 'What is the Rapidly Manufactured Robot Challenge?',
      hu: 'Mi a Gyorsan Gyártott Robot Kihívás?',
      de: 'Was ist die Rapidly Manufactured Robot Challenge?'
    },
    answer: {
      en: 'The Rapidly Manufactured Robot Challenge (RMRC) is a competition category within RoboCup Rescue League that emphasizes quick robot development and deployment. Teams must design and build robots using readily available materials and components, demonstrating that effective rescue robots can be created with limited resources and time.',
      hu: 'A Gyorsan Gyártott Robot Kihívás (RMRC) a RoboCup Rescue League egy versenykategóriája, amely a gyors robot fejlesztésre és üzembe helyezésre helyezi a hangsúlyt. A csapatoknak könnyen hozzáférhető anyagokból és alkatrészekből kell robotokat tervezniük és építeniük, bemutatva, hogy hatékony mentési robotok korlátozott erőforrásokkal és idővel is létrehozhatók.',
      de: 'Die Rapidly Manufactured Robot Challenge (RMRC) ist eine Wettbewerbskategorie innerhalb der RoboCup Rescue League, die schnelle Roboterentwicklung und -einsatz betont. Teams müssen Roboter mit leicht verfügbaren Materialien und Komponenten entwerfen und bauen und zeigen, dass effektive Rettungsroboter mit begrenzten Ressourcen und Zeit erstellt werden können.'
    }
  },
  {
    question: {
      en: 'What technologies do you use?',
      hu: 'Milyen technológiákat használtok?',
      de: 'Welche Technologien verwenden Sie?'
    },
    answer: {
      en: 'We use a combination of ROS (Robot Operating System) for robot control and communication, computer vision for object detection and recognition, SLAM (Simultaneous Localization and Mapping) algorithms for navigation, and various sensors including LiDAR, cameras, IMU (Inertial Measurement Unit), and encoders for precise positioning and environmental awareness.',
      hu: 'ROS (Robot Operating System) kombinációját használjuk a robot irányításához és kommunikációhoz, számítógépes látást az objektum detektáláshoz és felismeréshez, SLAM (Simultaneous Localization and Mapping) algoritmusokat a navigációhoz, valamint különféle szenzorokat, beleértve a LiDAR-t, kamerákat, IMU-t (Inertial Measurement Unit) és kódolókat a pontos pozicionáláshoz és környezeti tudatossághoz.',
      de: 'Wir verwenden eine Kombination aus ROS (Robot Operating System) für Robotersteuerung und -kommunikation, Computer Vision für Objekterkennung und -identifikation, SLAM-Algorithmen (Simultaneous Localization and Mapping) für die Navigation sowie verschiedene Sensoren einschließlich LiDAR, Kameras, IMU (Inertial Measurement Unit) und Encoder für präzise Positionierung und Umgebungswahrnehmung.'
    }
  },
  {
    question: {
      en: 'How many team members are in SOS Robotics?',
      hu: 'Hány tagból áll az SOS Robotics csapat?',
      de: 'Wie viele Teammitglieder hat SOS Robotics?'
    },
    answer: {
      en: 'SOS Robotics Team currently consists of four passionate software developer students who work together to design, build, and program rescue robots. We are a small but dedicated team focused on innovation and excellence in rescue robotics.',
      hu: 'Az SOS Robotics Team jelenleg négy szenvedélyes szoftverfejlesztő diákból áll, akik együtt dolgoznak a menekítő robotok tervezésén, építésén és programozásán. Kis, de elkötelezett csapat vagyunk, akik az innovációra és a kiválóságra összpontosítanak a mentési robotikában.',
      de: 'Das SOS Robotics Team besteht derzeit aus vier leidenschaftlichen Softwareentwicklungsstudenten, die zusammenarbeiten, um Rettungsroboter zu entwerfen, zu bauen und zu programmieren. Wir sind ein kleines, aber engagiertes Team, das sich auf Innovation und Exzellenz in der Rettungsrobotik konzentriert.'
    }
  },
  {
    question: {
      en: 'What makes your robots unique?',
      hu: 'Mi teszi egyedivé a robotjaitokat?',
      de: 'Was macht Ihre Roboter einzigartig?'
    },
    answer: {
      en: 'Our robots are designed with a focus on reliability, adaptability, and rapid deployment. We prioritize robust navigation systems that can handle complex, unstructured environments, and we emphasize modular design principles that allow for quick modifications and improvements based on competition feedback and real-world requirements.',
      hu: 'Robotjaink megbízhatóságra, alkalmazkodóképességre és gyors üzembe helyezésre vannak tervezve. A robusztus navigációs rendszereket részesítjük előnyben, amelyek képesek kezelni a komplex, strukturálatlan környezeteket, és hangsúlyozzuk a moduláris tervezési elveket, amelyek lehetővé teszik a gyors módosításokat és fejlesztéseket a verseny visszajelzései és a valós világ követelményei alapján.',
      de: 'Unsere Roboter sind mit Fokus auf Zuverlässigkeit, Anpassungsfähigkeit und schnellem Einsatz konzipiert. Wir priorisieren robuste Navigationssysteme, die komplexe, unstrukturierte Umgebungen bewältigen können, und betonen modulare Designprinzipien, die schnelle Modifikationen und Verbesserungen basierend auf Wettbewerbsfeedback und realen Anforderungen ermöglichen.'
    }
  },
  {
    question: {
      en: 'How can I sponsor the team?',
      hu: 'Hogyan támogathatom a csapatot?',
      de: 'Wie kann ich das Team sponsern?'
    },
    answer: {
      en: 'We appreciate all forms of support! Please visit our sponsors page or contact us directly to discuss sponsorship opportunities. We offer various sponsorship tiers (Platinum, Gold, Silver, Bronze) with different benefits including logo placement, social media recognition, and opportunities for collaboration. Financial support, equipment donations, or technical expertise are all valuable contributions to our mission.',
      hu: 'Mindenféle támogatást értékelünk! Kérjük, látogassa meg támogatóink oldalát, vagy lépjen velünk közvetlenül kapcsolatba a támogatási lehetőségek megbeszéléséhez. Különböző támogatási szinteket kínálunk (Platina, Arany, Ezüst, Bronz) különböző előnyökkel, beleértve a logó elhelyezését, közösségi média elismerést és együttműködési lehetőségeket. A pénzügyi támogatás, felszerelés adományozás vagy műszaki szakértelem mind értékes hozzájárulás a küldetésünkhöz.',
      de: 'Wir schätzen jede Form der Unterstützung! Bitte besuchen Sie unsere Sponsorenseite oder kontaktieren Sie uns direkt, um Sponsoring-Möglichkeiten zu besprechen. Wir bieten verschiedene Sponsoring-Stufen (Platin, Gold, Silber, Bronze) mit unterschiedlichen Vorteilen, einschließlich Logo-Platzierung, Social-Media-Anerkennung und Kooperationsmöglichkeiten. Finanzielle Unterstützung, Gerätespenden oder technisches Fachwissen sind alle wertvolle Beiträge zu unserer Mission.'
    }
  },
  {
    question: {
      en: 'What competitions have you participated in?',
      hu: 'Milyen versenyeken vettetek részt?',
      de: 'An welchen Wettbewerben haben Sie teilgenommen?'
    },
    answer: {
      en: 'We are currently competing in the RoboCup Rescue League\'s Rapidly Manufactured Robot Challenge. Our team is actively working towards participating in the full Rescue League competition. We continuously improve our robots and systems based on competition experience and feedback from the robotics community.',
      hu: 'Jelenleg a RoboCup Rescue League Gyorsan Gyártott Robot Kihívásában versenyzünk. Csapatunk aktívan dolgozik azon, hogy részt vegyen a teljes Rescue League versenyen. Folyamatosan fejlesztjük robotjainkat és rendszereinket a verseny tapasztalatai és a robotika közösség visszajelzései alapján.',
      de: 'Wir nehmen derzeit an der Rapidly Manufactured Robot Challenge der RoboCup Rescue League teil. Unser Team arbeitet aktiv darauf hin, an der vollständigen Rescue League teilzunehmen. Wir verbessern kontinuierlich unsere Roboter und Systeme basierend auf Wettbewerbserfahrungen und Feedback aus der Robotik-Community.'
    }
  },
  {
    question: {
      en: 'Can students join your team?',
      hu: 'Diákok csatlakozhatnak a csapatotokhoz?',
      de: 'Können Studenten Ihrem Team beitreten?'
    },
    answer: {
      en: 'Currently, our team consists of four dedicated members. While we are not actively recruiting at this moment, we are always open to collaboration and knowledge sharing with other students and robotics enthusiasts. If you are interested in learning more about our work or potential future opportunities, please feel free to contact us.',
      hu: 'Jelenleg csapatunk négy elkötelezett tagból áll. Bár jelenleg nem aktívan toborzunk, mindig nyitottak vagyunk az együttműködésre és tudásmegosztásra más diákokkal és robotika rajongókkal. Ha többet szeretnél megtudni munkánkról vagy lehetséges jövőbeli lehetőségekről, kérjük, lépj velünk kapcsolatba.',
      de: 'Derzeit besteht unser Team aus vier engagierten Mitgliedern. Während wir derzeit nicht aktiv rekrutieren, sind wir immer offen für Zusammenarbeit und Wissensaustausch mit anderen Studenten und Robotik-Enthusiasten. Wenn Sie mehr über unsere Arbeit oder mögliche zukünftige Möglichkeiten erfahren möchten, kontaktieren Sie uns bitte.'
    }
  },
  {
    question: {
      en: 'What programming languages and frameworks do you use?',
      hu: 'Milyen programozási nyelveket és keretrendszereket használtok?',
      de: 'Welche Programmiersprachen und Frameworks verwenden Sie?'
    },
    answer: {
      en: 'We primarily use Python and C++ for robot programming, with ROS (Robot Operating System) as our main framework for robot control and communication. We also utilize various libraries for computer vision (OpenCV), machine learning, and sensor data processing. Our software architecture emphasizes modularity and maintainability.',
      hu: 'Elsősorban Python-t és C++-t használunk a robot programozásához, ROS (Robot Operating System) fő keretrendszerként a robot irányításához és kommunikációhoz. Különféle könyvtárakat is használunk a számítógépes látáshoz (OpenCV), gépi tanuláshoz és szenzor adatfeldolgozáshoz. Szoftver architektúránk a modularitásra és karbantarthatóságra helyezi a hangsúlyt.',
      de: 'Wir verwenden hauptsächlich Python und C++ für die Roboterprogrammierung, mit ROS (Robot Operating System) als unserem Hauptframework für Robotersteuerung und -kommunikation. Wir nutzen auch verschiedene Bibliotheken für Computer Vision (OpenCV), maschinelles Lernen und Sensordatenverarbeitung. Unsere Softwarearchitektur betont Modularität und Wartbarkeit.'
    }
  },
  {
    question: {
      en: 'How can I contact the team?',
      hu: 'Hogyan lehetnek kapcsolatba lépni a csapattal?',
      de: 'Wie kann ich das Team kontaktieren?'
    },
    answer: {
      en: 'You can contact us through our contact page on this website, where you can fill out a form with your inquiry. We also welcome direct email communication. We are always happy to hear from potential sponsors, collaborators, students interested in robotics, or anyone with questions about our work.',
      hu: 'Kapcsolatba léphetsz velünk a weboldalunk kapcsolat oldalán keresztül, ahol kitölthetsz egy űrlapot kérdéseddel. Közvetlen e-mail kommunikációt is szívesen fogadunk. Mindig örülnénk, ha kapcsolatba lépnél velünk potenciális támogatók, együttműködési partnerek, robotikában érdeklődő diákok vagy bárki, akinek kérdése van munkánkról.',
      de: 'Sie können uns über unsere Kontaktseite auf dieser Website kontaktieren, wo Sie ein Formular mit Ihrer Anfrage ausfüllen können. Wir begrüßen auch direkte E-Mail-Kommunikation. Wir freuen uns immer, von potenziellen Sponsoren, Kooperationspartnern, an Robotik interessierten Studenten oder jedem mit Fragen zu unserer Arbeit zu hören.'
    }
  },
  {
    question: {
      en: 'What are your future goals?',
      hu: 'Mik a jövőbeli céljaitok?',
      de: 'Was sind Ihre Zukunftsziele?'
    },
    answer: {
      en: 'Our primary goal is to compete in the full RoboCup Rescue League competition. We aim to develop increasingly sophisticated autonomous systems that can effectively operate in real-world disaster scenarios. We also hope to contribute to the broader rescue robotics community through knowledge sharing, open-source contributions, and collaboration with other teams and researchers.',
      hu: 'Elsődleges célunk a RoboCup Rescue League versenyen való részvétel. Célunk, hogy egyre kifinomultabb autonóm rendszereket fejlesszünk, amelyek hatékonyan működnek valós katasztrófa helyzetekben. Azt is reméljük, hogy hozzájárulhatunk a szélesebb mentési robotika közösséghez tudásmegosztással, nyílt forráskódú hozzájárulásokkal és együttműködéssel más csapatokkal és kutatókkal.',
      de: 'Unser Hauptziel ist es, an der vollständigen RoboCup Rescue League teilzunehmen. Wir streben danach, zunehmend ausgefeilte autonome Systeme zu entwickeln, die effektiv in realen Katastrophenszenarien operieren können. Wir hoffen auch, zur breiteren Rettungsrobotik-Community durch Wissensaustausch, Open-Source-Beiträge und Zusammenarbeit mit anderen Teams und Forschern beizutragen.'
    }
  },
  {
    question: {
      en: 'Do you share your code or designs publicly?',
      hu: 'Nyilvánosan osztjátok meg a kódotokat vagy terveiteket?',
      de: 'Teilen Sie Ihren Code oder Ihre Designs öffentlich?'
    },
    answer: {
      en: 'Absolutely! Our team believes in the value of open-source collaboration in robotics. While our primary focus is on competition development, we do share some of our code and designs publicly to contribute to the community. All the shared resources can be found on our GitHub repository, which is linked on our website. We welcome contributions and feedback from the robotics community to help us improve and innovate further.',
      hu: 'Abszolút! Csapatunk hisz a nyílt forráskódú együttműködés értékében a robotikában. Bár elsődleges fókuszunk a versenyfejlesztés, néhány kódunkat és tervünket nyilvánosan is megosztjuk, hogy hozzájáruljunk a közösséghez. Minden megosztott erőforrás megtalálható a GitHub tárházunkban, amely linkelve van a weboldalunkon. Örömmel fogadjuk a hozzájárulásokat és visszajelzéseket a robotika közösségtől, hogy segítsenek nekünk tovább fejleszteni és innoválni.',
      de: 'Absolut! Unser Team glaubt an den Wert der Open-Source-Zusammenarbeit in der Robotik. Während unser Hauptfokus auf der Wettbewerbsentwicklung liegt, teilen wir einige unserer Codes und Designs öffentlich, um zur Gemeinschaft beizutragen. Alle geteilten Ressourcen sind in unserem GitHub-Repository zu finden, das auf unserer Website verlinkt ist. Wir begrüßen Beiträge und Feedback aus der Robotik-Community, um uns zu helfen, weiter zu verbessern und zu innovieren.'
    }
  }
]

