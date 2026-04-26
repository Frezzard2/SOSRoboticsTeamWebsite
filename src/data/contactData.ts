// Contact information - Easy to update!

export interface ContactInfo {
  email?: string
  phone?: string
  location?: string
  social: {
    facebook?: string
    instagram?: string
    github?: string
    youtube?: string
    linkedin?: string
    twitter?: string
  }
}

export const contactInfo: ContactInfo = {
  email: 'sos.morse.2024@gmail.com', // Update with your email
  location: 'Nyíregyháza, Hungary', // Uncomment and update with your location
  social: {
    github: 'https://github.com/SOSRoboticsTeamHU'
  }
}

