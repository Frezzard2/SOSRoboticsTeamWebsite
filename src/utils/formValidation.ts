// Form validation and sanitization utilities

export interface ValidationError {
  field: string
  message: string
}

export interface FormErrors {
  [key: string]: string
}

/**
 * Sanitizes a string by removing potentially dangerous characters
 * @param input - The input string to sanitize
 * @returns Sanitized string
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') {
    return ''
  }
  
  // Remove null bytes and control characters (except newlines and tabs)
  let sanitized = input.replace(/[\x00-\x08\x0B-\x0C\x0E-\x1F\x7F]/g, '')
  
  // Trim whitespace
  sanitized = sanitized.trim()
  
  // Normalize unicode characters
  sanitized = sanitized.normalize('NFKC')
  
  return sanitized
}

/**
 * Sanitizes HTML content by escaping special characters
 * @param input - The input string to escape
 * @returns Escaped string safe for HTML display
 */
export function escapeHtml(input: string): string {
  if (typeof input !== 'string') {
    return ''
  }
  
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  
  return input.replace(/[&<>"']/g, (m) => map[m] || m)
}

/**
 * Validates and sanitizes email address
 * @param email - Email address to validate
 * @returns Sanitized email or empty string if invalid
 */
export function validateEmail(email: string): boolean {
  const sanitized = sanitizeInput(email)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(sanitized)
}

/**
 * Validates and sanitizes name
 * @param name - Name to validate
 * @returns true if valid
 */
export function validateName(name: string): boolean {
  const sanitized = sanitizeInput(name)
  // Check for only letters, spaces, hyphens, and apostrophes
  const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/
  return sanitized.length >= 2 && sanitized.length <= 100 && nameRegex.test(sanitized)
}

/**
 * Validates and sanitizes subject
 * @param subject - Subject to validate
 * @returns true if valid
 */
export function validateSubject(subject: string): boolean {
  const sanitized = sanitizeInput(subject)
  return sanitized.length >= 3 && sanitized.length <= 200
}

/**
 * Validates and sanitizes message
 * @param message - Message to validate
 * @returns true if valid
 */
export function validateMessage(message: string): boolean {
  const sanitized = sanitizeInput(message)
  return sanitized.length >= 10 && sanitized.length <= 2000
}

/**
 * Validates and sanitizes contact form data
 * @param data - Form data to validate
 * @param t - Translation function
 * @returns Object with sanitized data and validation errors
 */
export function validateContactForm(data: {
  name: string
  email: string
  subject: string
  message: string
}, t: (key: string) => string): FormErrors {
  const errors: FormErrors = {}

  // Sanitize all inputs first
  const sanitizedData = {
    name: sanitizeInput(data.name),
    email: sanitizeInput(data.email),
    subject: sanitizeInput(data.subject),
    message: sanitizeInput(data.message)
  }

  if (!validateName(sanitizedData.name)) {
    errors.name = t('contact.validation.name') || 'Name must be between 2 and 100 characters and contain only letters, spaces, hyphens, and apostrophes'
  }

  if (!validateEmail(sanitizedData.email)) {
    errors.email = t('contact.validation.email') || 'Please enter a valid email address'
  }

  if (!validateSubject(sanitizedData.subject)) {
    errors.subject = t('contact.validation.subject') || 'Subject must be between 3 and 200 characters'
  }

  if (!validateMessage(sanitizedData.message)) {
    errors.message = t('contact.validation.message') || 'Message must be between 10 and 2000 characters'
  }

  return errors
}

/**
 * Sanitizes form data before submission
 * @param data - Form data to sanitize
 * @returns Sanitized form data
 */
export function sanitizeFormData(data: {
  name: string
  email: string
  subject: string
  message: string
}): {
  name: string
  email: string
  subject: string
  message: string
} {
  return {
    name: sanitizeInput(data.name),
    email: sanitizeInput(data.email.toLowerCase()), // Normalize email to lowercase
    subject: sanitizeInput(data.subject),
    message: sanitizeInput(data.message)
  }
}

