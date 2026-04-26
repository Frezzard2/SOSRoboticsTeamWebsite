/**
 * Input sanitization utilities
 * Removes potentially dangerous characters and patterns from user input
 */

/**
 * Sanitizes a string by removing HTML tags and dangerous characters
 * @param input - The input string to sanitize
 * @returns Sanitized string
 */
export function sanitizeString(input: string): string {
  if (typeof input !== 'string') {
    return ''
  }

  // Remove HTML tags
  let sanitized = input.replace(/<[^>]*>/g, '')
  
  // Remove script tags and their content
  sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  
  // Remove javascript: protocol
  sanitized = sanitized.replace(/javascript:/gi, '')
  
  // Remove data: URLs that could be used for XSS
  sanitized = sanitized.replace(/data:text\/html/gi, '')
  
  // Remove event handlers (onclick, onerror, etc.)
  sanitized = sanitized.replace(/on\w+\s*=/gi, '')
  
  // Remove null bytes
  sanitized = sanitized.replace(/\0/g, '')
  
  // Trim whitespace
  sanitized = sanitized.trim()
  
  return sanitized
}

/**
 * Sanitizes an email address
 * @param email - The email address to sanitize
 * @returns Sanitized email address
 */
export function sanitizeEmail(email: string): string {
  if (typeof email !== 'string') {
    return ''
  }

  // Basic email sanitization - remove dangerous characters but keep valid email format
  let sanitized = email.trim().toLowerCase()
  
  // Remove null bytes
  sanitized = sanitized.replace(/\0/g, '')
  
  // Remove HTML tags
  sanitized = sanitized.replace(/<[^>]*>/g, '')
  
  // Remove script tags
  sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  
  // Remove javascript: protocol
  sanitized = sanitized.replace(/javascript:/gi, '')
  
  return sanitized
}

/**
 * Sanitizes a URL
 * @param url - The URL to sanitize
 * @returns Sanitized URL or empty string if invalid
 */
export function sanitizeUrl(url: string): string {
  if (typeof url !== 'string') {
    return ''
  }

  let sanitized = url.trim()
  
  // Remove null bytes
  sanitized = sanitized.replace(/\0/g, '')
  
  // Remove javascript: protocol
  sanitized = sanitized.replace(/javascript:/gi, '')
  
  // Remove data: URLs
  sanitized = sanitized.replace(/data:/gi, '')
  
  // Remove vbscript: protocol
  sanitized = sanitized.replace(/vbscript:/gi, '')
  
  // Only allow http, https, mailto, tel protocols
  if (!/^(https?|mailto|tel):/i.test(sanitized) && sanitized.startsWith('http')) {
    // If it looks like a URL but missing protocol, add https
    sanitized = 'https://' + sanitized
  }
  
  return sanitized
}

/**
 * Validates and sanitizes form data
 * @param data - Form data object
 * @returns Sanitized form data
 */
export function sanitizeFormData<T extends Record<string, string>>(data: T): T {
  const sanitized = { ...data }
  
  for (const key in sanitized) {
    if (typeof sanitized[key] === 'string') {
      if (key.toLowerCase().includes('email')) {
        sanitized[key] = sanitizeEmail(sanitized[key]) as T[Extract<keyof T, string>]
      } else if (key.toLowerCase().includes('url') || key.toLowerCase().includes('website')) {
        sanitized[key] = sanitizeUrl(sanitized[key]) as T[Extract<keyof T, string>]
      } else {
        sanitized[key] = sanitizeString(sanitized[key]) as T[Extract<keyof T, string>]
      }
    }
  }
  
  return sanitized
}

