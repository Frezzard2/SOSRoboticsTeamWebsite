// Footer Logos Data - Logos to display in the footer

export interface FooterLogo {
  src: string // Path to the logo image
  alt: string // Alt text for accessibility
  link?: string // Optional link URL
  name?: string // Optional name for the logo
}

export const footerLogos: FooterLogo[] = [
  {
    src: '/sulilogo.webp',
    alt: 'School Logo',
    link: 'https://www.nyirszikszi.hu',
    name: 'School'
  },
  {
    src: '/robotteplogo.png',
    alt: 'Robottep Logo',
    link: 'https://robottep.hu',
    name: 'Robottep'
  },
  {
    src: '/SOSlogo.png',
    alt: 'SOS Robotics Team Logo',
    link: '/',
    name: 'SOS Robotics'
  }
]

