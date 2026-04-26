import { useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { usePageSEO } from '../hooks/usePageSEO'
import './Privacy.css'

export default function Privacy() {
  const { t } = useLanguage()
  
  usePageSEO(
    t('privacy.title') || 'Privacy Policy',
    t('privacy.description') || 'Privacy Policy for SOS Robotics Team'
  )
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.fade-in')
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      const elements = document.querySelectorAll('.fade-in')
      elements.forEach((el) => observerRef.current?.unobserve(el))
    }
  }, [])

  return (
    <div className="privacy-page">
      <div className="container">
        <section className="privacy-hero fade-in">
          <h1 className="page-title">{t('privacy.title') || 'Privacy Policy'}</h1>
          <p className="page-subtitle">
            {t('privacy.lastUpdated') || 'Last updated: January 2025'}
          </p>
        </section>

        <section className="privacy-content fade-in">
          <div className="privacy-section">
            <h2>{t('privacy.introduction') || 'Introduction'}</h2>
            <p>
              {t('privacy.introText') || 'SOS Robotics Team ("we", "our", "us", or "the Team") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy ("Policy") explains in detail how we collect, use, process, store, and safeguard your information when you visit our website (the "Service"). By using our Service, you agree to the collection and use of information in accordance with this Policy. This Policy complies with applicable data protection laws, including the General Data Protection Regulation (GDPR) where applicable.'}
            </p>
          </div>

          <div className="privacy-section">
            <h2>{t('privacy.dataCollection') || 'Data We Collect'}</h2>
            <p>
              {t('privacy.dataCollectionText') || 'We collect and process the following categories of personal data:'}
            </p>
            <ul>
              <li>{t('privacy.dataPersonal') || 'Personal identification information: Name, email address, and any other information you voluntarily provide when contacting us through our contact form or other communication channels'}</li>
              <li>{t('privacy.dataUsage') || 'Automatically collected usage data: IP address, browser type and version, device information, operating system, pages visited, time spent on pages, click patterns, referral sources, and other analytics data collected through Google Analytics'}</li>
              <li>{t('privacy.dataCookies') || 'Cookies and tracking technologies: Session cookies, persistent cookies, and similar technologies used to enhance user experience, analyze website traffic, and personalize content'}</li>
              <li>{t('privacy.dataTechnical') || 'Technical data: Log files, error reports, performance metrics, and system diagnostics'}</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>{t('privacy.legalBasis') || 'Legal Basis for Processing'}</h2>
            <p>
              {t('privacy.legalBasisText') || 'We process your personal data based on the following legal grounds:'}
            </p>
            <ul>
              <li>{t('privacy.legalConsent') || 'Consent: When you provide explicit consent for specific processing activities, such as newsletter subscriptions'}</li>
              <li>{t('privacy.legalContract') || 'Contractual necessity: To fulfill our obligations when you contact us or request information'}</li>
              <li>{t('privacy.legalLegitimate') || 'Legitimate interests: For website analytics, security, and service improvement, where such interests do not override your fundamental rights and freedoms'}</li>
              <li>{t('privacy.legalCompliance') || 'Legal compliance: To comply with applicable laws, regulations, and legal obligations'}</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>{t('privacy.dataUse') || 'How We Use Your Data'}</h2>
            <p>
              {t('privacy.dataUseText') || 'We use the collected data for the following purposes:'}
            </p>
            <ul>
              <li>{t('privacy.useCommunication') || 'Communication: Responding to your inquiries, messages, and support requests'}</li>
              <li>{t('privacy.useAnalytics') || 'Analytics and improvement: Analyzing website usage patterns, user behavior, and performance metrics to improve our services, user experience, and website functionality'}</li>
              <li>{t('privacy.useNewsletter') || 'Marketing communications: Sending newsletter updates, competition announcements, and team news (only with your explicit consent)'}</li>
              <li>{t('privacy.useSecurity') || 'Security and fraud prevention: Detecting, preventing, and addressing security threats, fraud, and unauthorized access'}</li>
              <li>{t('privacy.useLegal') || 'Legal compliance: Complying with legal obligations, responding to legal requests, and protecting our legal rights'}</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>{t('privacy.dataRetention') || 'Data Retention'}</h2>
            <p>
              {t('privacy.dataRetentionText') || 'We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Policy, unless a longer retention period is required or permitted by law. Specifically:'}
            </p>
            <ul>
              <li>{t('privacy.retentionContact') || 'Contact form submissions: Retained for up to 3 years after the last communication, unless you request earlier deletion'}</li>
              <li>{t('privacy.retentionAnalytics') || 'Analytics data: Retained in aggregated, anonymized form for up to 26 months as per Google Analytics retention policies'}</li>
              <li>{t('privacy.retentionLegal') || 'Legal requirements: Some data may be retained longer if required by applicable laws, regulations, or legal proceedings'}</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>{t('privacy.dataSharing') || 'Data Sharing and Third-Party Services'}</h2>
            <p>
              {t('privacy.dataSharingText') || 'We do not sell, trade, or rent your personal information to third parties for marketing purposes. We may share your data with the following categories of recipients:'}
            </p>
            <p>{t('privacy.sharingService') || 'Service providers: Trusted third-party service providers who assist us in operating our website and providing services, including:'}</p>
            <ul>
              <li>{t('privacy.sharingGoogle') || 'Google Analytics: For website analytics and usage tracking (subject to Google\'s Privacy Policy)'}</li>
              <li>{t('privacy.sharingFormspree') || 'Formspree: For contact form processing and email delivery (subject to Formspree\'s Privacy Policy)'}</li>
            </ul>
            <p>{t('privacy.sharingLegal') || 'Legal and regulatory authorities: When required by law, court order, or government regulation, or to protect our rights, property, or safety'}</p>
            <p>{t('privacy.sharingBusiness') || 'Business transfers: In the event of a merger, acquisition, or sale of assets, your data may be transferred to the acquiring entity'}</p>
          </div>

          <div className="privacy-section">
            <h2>{t('privacy.dataSecurity') || 'Data Security'}</h2>
            <p>
              {t('privacy.dataSecurityText') || 'We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:'}
            </p>
            <ul>
              <li>{t('privacy.securityEncryption') || 'Encryption: Use of SSL/TLS encryption for data transmission'}</li>
              <li>{t('privacy.securityAccess') || 'Access controls: Restricted access to personal data on a need-to-know basis'}</li>
              <li>{t('privacy.securityMonitoring') || 'Security monitoring: Regular security assessments and monitoring for potential vulnerabilities'}</li>
              <li>{t('privacy.securityUpdates') || 'System updates: Keeping software and systems up to date with security patches'}</li>
              <li>{t('privacy.securityTraining') || 'Staff training: Ensuring team members are trained in data protection best practices'}</li>
            </ul>
            <p>
              {t('privacy.securityNote') || 'However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security.'}
            </p>
          </div>

          <div className="privacy-section">
            <h2>{t('privacy.internationalTransfers') || 'International Data Transfers'}</h2>
            <p>
              {t('privacy.internationalTransfersText') || 'Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your jurisdiction. When we transfer data internationally, we ensure appropriate safeguards are in place, such as:'}
            </p>
            <ul>
              <li>{t('privacy.transferAdequacy') || 'Adequacy decisions: Transfers to countries with adequate data protection laws'}</li>
              <li>{t('privacy.transferSafeguards') || 'Standard contractual clauses: Use of approved contractual clauses for data transfers'}</li>
              <li>{t('privacy.transferConsent') || 'Your consent: Where applicable, we obtain your explicit consent for such transfers'}</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>{t('privacy.cookies') || 'Cookies and Tracking Technologies'}</h2>
            <p>
              {t('privacy.cookiesText') || 'We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. Cookies are small text files stored on your device.'}
            </p>
            <p>{t('privacy.cookiesTypes') || 'Types of cookies we use:'}</p>
            <ul>
              <li>{t('privacy.cookiesEssential') || 'Essential cookies: Required for the website to function properly (cannot be disabled)'}</li>
              <li>{t('privacy.cookiesAnalytics') || 'Analytics cookies: Used to collect information about website usage and performance'}</li>
              <li>{t('privacy.cookiesPreferences') || 'Preference cookies: Remember your settings and preferences for future visits'}</li>
            </ul>
            <p>
              {t('privacy.cookiesControl') || 'You can control and manage cookies through your browser settings. However, disabling certain cookies may affect website functionality.'}
            </p>
          </div>

          <div className="privacy-section">
            <h2>{t('privacy.childrenPrivacy') || 'Children\'s Privacy'}</h2>
            <p>
              {t('privacy.childrenPrivacyText') || 'Our Service is not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we become aware that we have collected personal data from a child under 16, we will take steps to delete such information promptly.'}
            </p>
          </div>

          <div className="privacy-section">
            <h2>{t('privacy.rights') || 'Your Data Protection Rights'}</h2>
            <p>
              {t('privacy.rightsText') || 'Depending on your location, you may have the following rights regarding your personal data:'}
            </p>
            <ul>
              <li>{t('privacy.rightAccess') || 'Right of access: Request copies of your personal data and information about how it is processed'}</li>
              <li>{t('privacy.rightRectification') || 'Right to rectification: Request correction of inaccurate or incomplete data'}</li>
              <li>{t('privacy.rightErasure') || 'Right to erasure ("right to be forgotten"): Request deletion of your personal data under certain circumstances'}</li>
              <li>{t('privacy.rightRestrict') || 'Right to restriction: Request limitation of processing in certain situations'}</li>
              <li>{t('privacy.rightPortability') || 'Right to data portability: Receive your data in a structured, commonly used format'}</li>
              <li>{t('privacy.rightObject') || 'Right to object: Object to processing based on legitimate interests'}</li>
              <li>{t('privacy.rightWithdraw') || 'Right to withdraw consent: Withdraw previously given consent at any time'}</li>
              <li>{t('privacy.rightComplain') || 'Right to lodge a complaint: File a complaint with your local data protection authority'}</li>
            </ul>
            <p>
              {t('privacy.rightsExercise') || 'To exercise any of these rights, please contact us through our contact page. We will respond to your request within 30 days, in accordance with applicable data protection laws.'}
            </p>
          </div>

          <div className="privacy-section">
            <h2>{t('privacy.dataBreach') || 'Data Breach Notification'}</h2>
            <p>
              {t('privacy.dataBreachText') || 'In the unlikely event of a data breach that may affect your personal data, we will:'}
            </p>
            <ul>
              <li>{t('privacy.breachNotify') || 'Notify relevant supervisory authorities within 72 hours, as required by law'}</li>
              <li>{t('privacy.breachInform') || 'Inform affected individuals without undue delay if the breach poses a high risk to their rights and freedoms'}</li>
              <li>{t('privacy.breachRemediate') || 'Take immediate steps to contain and remediate the breach'}</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>{t('privacy.changes') || 'Changes to This Privacy Policy'}</h2>
            <p>
              {t('privacy.changesText') || 'We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or for other operational, legal, or regulatory reasons. We will notify you of any material changes by:'}
            </p>
            <ul>
              <li>{t('privacy.changesNotice') || 'Posting the updated Policy on this page with a new "Last updated" date'}</li>
              <li>{t('privacy.changesEmail') || 'Sending an email notification (if you have provided your email address)'}</li>
              <li>{t('privacy.changesBanner') || 'Displaying a prominent notice on our website'}</li>
            </ul>
            <p>
              {t('privacy.changesContinued') || 'Your continued use of our Service after such changes constitutes acceptance of the updated Policy. We encourage you to review this Policy periodically.'}
            </p>
          </div>

          <div className="privacy-section">
            <h2>{t('privacy.contact') || 'Contact Information'}</h2>
            <p>
              {t('privacy.contactText') || 'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:'}
            </p>
            <ul>
              <li>{t('privacy.contactMethod') || 'Through our contact page on this website'}</li>
              <li>{t('privacy.contactEmail') || 'Via email (if available on our contact page)'}</li>
            </ul>
            <p>
              {t('privacy.contactResponse') || 'We are committed to addressing your privacy concerns and will respond to your inquiries in a timely manner, typically within 30 days.'}
            </p>
          </div>

          <div className="privacy-section">
            <h2>{t('privacy.governingLaw') || 'Governing Law'}</h2>
            <p>
              {t('privacy.governingLawText') || 'This Privacy Policy is governed by and construed in accordance with applicable data protection laws, including but not limited to the General Data Protection Regulation (GDPR) for users in the European Economic Area (EEA), and other applicable local data protection legislation.'}
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

