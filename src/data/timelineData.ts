// Timeline Data - Easy to update with your actual timeline events!

export interface TimelineEvent {
  date: string
  title: {
    en: string
    hu: string
    de: string
  }
  description: {
    en: string
    hu: string
    de: string
  }
  type: 'milestone' | 'competition' | 'achievement'
}

export const timelineEvents: TimelineEvent[] = [
  {
    date: '2023-09',
    title: {
      en: 'Team Formation',
      hu: 'Csapat Alapítás',
      de: 'Team-Gründung'
    },
    description: {
      en: 'SOS Robotics Team was formed with a vision to compete in RoboCup Rescue League.',
      hu: 'Megalakítottuk az SOS Robotics Csapatot azzal a céllal, hogy részt vegyünk a RoboCup Rescue League-ben.',
      de: 'SOS Robotics Team wurde mit der Vision gegründet, an der RoboCup Rescue League teilzunehmen.'
    },
    type: 'milestone'
  },
  {
    date: '2024-07',
    title: {
      en: 'First Robot Prototype',
      hu: 'Első Robot Prototípus',
      de: 'Erster Roboter-Prototyp'
    },
    description: {
      en: 'Completed our first robot prototype with basic navigation and manipulation capabilities.',
      hu: 'Befejeztük első robot prototípusunkat alapvető navigációs és manipulációs képességekkel.',
      de: 'Vollendung unseres ersten Roboter-Prototyps mit grundlegenden Navigations- und Manipulationsfähigkeiten.'
    },
    type: 'milestone'
  },
  {
    date: '2024-09',
    title: {
      en: 'Started the development of the first Rescue Robot',
      hu: 'Elkezdődött az első Mentőrobot fejlesztése',
      de: 'Entwicklung des ersten Rettungsroboters begonnen'
    },
    description: {
      en: 'We started the development of our first Rescue Robot. ',
      hu: 'Elkezdődött az első Mentőrobot fejlesztése.',
      de: 'Entwicklung unseres ersten Rettungsroboters begonnen.'
    },
    type: 'milestone'
  },
  {
    date: '2024-12',
    title: {
      en: 'First Competition Participation',
      hu: 'Első Verseny Részvétel',
      de: 'Erste Wettbewerbsbeteiligung'
    },
    description: {
      en: 'We participated in our first Rapidly Manufactured Robot Challenge competition.',
      hu: 'Részt vettünk első Gyorsan Gyártott Robot Kihívás versenyünkön.',
      de: 'Teilnahme an unserem ersten Rapidly Manufactured Robot Challenge-Wettbewerb.'
    },
    type: 'competition'
  },
  {
    date: '2025-03',
    title: {
      en: 'First International Competition Participation',
      hu: 'Első Nemzetközi Verseny Részvétel',
      de: 'Erste Internationale Wettbewerbsbeteiligung'
    },
    description: {
      en: 'We participated in our first international competition. It was a great learning experience.',
      hu: 'Részt vettünk első nemzetközi versenyünkön. Nagyszerű tanulási élmény volt.',
      de: 'Teilnahme an unserem ersten internationalen Wettbewerb. Es war eine großartige Lernerfahrung.'
    },
    type: 'competition'
  },
  {
    date: '2025-09',
    title: {
      en: 'Started to prepare for the World Championship',
      hu: 'Elkezdtünk felkészülni a Világbajnokságra',
      de: 'Beginn der Vorbereitung auf die Weltmeisterschaft'
    },
    description: {
      en: 'We started preparing for the World Championship, with a full new robot design and strategy.',
      hu: 'Elkezdtünk felkészülni a Világbajnokságra, teljesen új robottervezéssel és stratégiával.',
      de: 'Beginn der Vorbereitung auf die Weltmeisterschaft mit einem komplett neuen Roboterdesign und einer Strategie.'
    },
    type: 'milestone'
  },
  {
    date: '2026-01',
    title: {
      en: 'The first prototype of the new Rescue Robot is ready',
      hu: 'Az új Mentőrobot első prototípusa elkészült',
      de: 'Der erste Prototyp des neuen Rettungsroboters ist fertig'
    },
    description: {
      en: 'We started preparing for the World Championship, with a full new robot design and strategy. In this month we finished the first prototype of our new Rescue Robot.',
      hu: 'Elkezdtünk felkészülni a Világbajnokságra, teljesen új robottervezéssel és stratégiával. Ebben a hónapban elkészült az új Mentőrobot első prototípusa.',
      de: 'Beginn der Vorbereitung auf die Weltmeisterschaft mit einem komplett neuen Roboterdesign und einer Strategie. In diesem Monat haben wir den ersten Prototyp unseres neuen Rettungsroboters fertiggestellt.'
    },
    type: 'milestone'
  },
  {
    date: '2026-02',
    title: {
      en: 'The new Rescue Robot is ready for the competitions',
      hu: 'Az új Mentőrobot készen áll a versenyekre',
      de: 'Der neue Rettungsroboter ist für die Wettbewerbe bereit'
    },
    description: {
    en: 'The new Rescue Robot has been designed and built for the compeitions. We are testing every part of the robot to ensure it is ready for the competitions. The autonomous navigation system is not yet implemented.',
    hu: 'Az új Mentőrobotot készítettük a versenyekhez. Minden részt tesztelünk, hogy a versenyekre készen álljon. Az autonóm navigációs rendszer még nincs implementálva.',
    de: 'Der neue Rettungsroboter wurde für die Wettbewerbe entwickelt und gebaut. Wir testen jede Teil des Roboters, um sicherzustellen, dass er für die Wettbewerbe bereit ist. Das autonome Navigationssystem ist noch nicht implementiert.'
    },
    type: 'milestone'
  },
  {
    date: '2026-03',
    title: {
      en: 'We participated in the upcoming competitions',
      hu: 'Részt vettünk a következő versenyeken',
      de: 'Teilnahme an den kommenden Wettbewerben'
    },
    description: {
    en: 'We participated in the upcoming competitions. It was a great experience. We learned a lot from the other teams. We are looking forward to the next competitions. Also we collected a lot of data for the autonomous navigation system. We experienced a lot of issues with the robot, but we are going to implement some fixes for them.',
    hu: 'Részt vettünk a következő versenyeken. Nagyszerű élmény volt. Sokat tanultunk a másik csapatoktól. Következő versenyekre is nagyon izgatottak vagyunk. Emellett sok adatot gyűjtöttünk az autonóm navigációs rendszerhez. Sok problémát tapasztaltunk a roboton, de megoldunk valamennyit.',
    de: 'Teilnahme an den kommenden Wettbewerben. Es war eine großartige Erfahrung. Wir haben viel von den anderen Teams gelernt. Wir sind auf die nächsten Wettbewerbe gespannt. Außerdem haben wir viel Daten für das autonome Navigationssystem gesammelt. Wir haben viele Probleme mit dem Roboten erlebt, aber wir werden einige Lösungen für sie implementieren.'
    },
    type: 'competition'
  },
  {
    date: '2026-04',
    title: {
      en: 'Started to prepare for the World Championship',
      hu: 'Elkezdtünk felkészülni a Világbajnokságra',
      de: 'Beginn der Vorbereitung auf die Weltmeisterschaft'
    },
    description: {
    en: 'We started preparing for the World Championship and started to implement the fixes for the problems we experienced. Also we started to collect data for the autonomous navigation system. We are looking forward to the World Championship.',
    hu: 'Elkezdtünk felkészülni a Világbajnokságra, és megkezdtük a problémák megoldását. Emellett sok adatot gyűjtöttünk az autonóm navigációs rendszerhez. Világbajnokságra is nagyon izgatottak vagyunk.',
    de: 'Beginn der Vorbereitung auf die Weltmeisterschaft und Implementierung der Lösungen für die Probleme, die wir erlebt haben. Außerdem haben wir viel Daten für das autonome Navigationssystem gesammelt. Wir sind auf die Weltmeisterschaft gespannt.'
    },
    type: 'milestone'
  }
]
