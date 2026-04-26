# Security Documentation

This document outlines the security measures implemented in the SOS Robotics Team website.

## Form Security

### Contact Form
- **Service**: We use [Formspree](https://formspree.io/) for form submissions, which provides:
  - ✅ Automatic CSRF protection
  - ✅ Rate limiting (typically 5 submissions per hour per IP)
  - ✅ Spam filtering
  - ✅ Secure data transmission (HTTPS)

### Input Validation & Sanitization
All form inputs are validated and sanitized before submission:

1. **Client-side validation**:
   - Name: 2-100 characters, letters/spaces/hyphens/apostrophes only
   - Email: Valid email format
   - Subject: 3-200 characters
   - Message: 10-2000 characters

2. **Sanitization**:
   - Removes null bytes and control characters
   - Trims whitespace
   - Normalizes unicode characters
   - Escapes HTML special characters
   - Normalizes email to lowercase

3. **Server-side validation**: Formspree performs additional validation on their servers.

## Content Security Policy (CSP)

We implement a strict Content Security Policy to prevent XSS attacks and other injection attacks.

### CSP Directives
- `default-src 'self'`: Only allow resources from same origin by default
- `script-src`: Allows scripts from self, Google Analytics, and inline scripts (needed for Vite)
- `style-src`: Allows styles from self, Google Fonts, and inline styles
- `font-src`: Allows fonts from self and Google Fonts
- `img-src`: Allows images from self, data URIs, and HTTPS sources
- `connect-src`: Allows connections to self, Google Analytics, and Formspree
- `form-action`: Restricts form submissions to self and Formspree
- `object-src 'none'`: Blocks all plugins
- `base-uri 'self'`: Restricts base tag URLs

### Implementation
- CSP is set via HTML meta tag in `index.html`
- CSP is also set via HTTP headers in `.htaccess` (recommended for production)

## Security Headers

The following security headers are configured in `.htaccess`:

1. **Content-Security-Policy**: Prevents XSS and injection attacks
2. **X-Content-Type-Options: nosniff**: Prevents MIME type sniffing
3. **X-Frame-Options: SAMEORIGIN**: Prevents clickjacking
4. **X-XSS-Protection: 1; mode=block**: Enables XSS filtering
5. **Referrer-Policy: strict-origin-when-cross-origin**: Controls referrer information
6. **Permissions-Policy**: Restricts browser features (geolocation, microphone, camera)

## Dependency Security

### Regular Audits
We regularly audit dependencies for security vulnerabilities:

```bash
# Check for vulnerabilities
npm run security:audit

# Fix automatically fixable issues
npm run security:fix

# Check for moderate+ severity issues
npm run security:check

# Check for outdated packages
npm run deps:check

# Update dependencies
npm run deps:update
```

### Current Status
- ✅ All dependencies are up to date
- ✅ No known security vulnerabilities (as of last audit)

## Best Practices

1. **Never commit sensitive data**: 
   - API keys, passwords, and tokens should never be committed to the repository
   - Use environment variables for sensitive configuration

2. **Keep dependencies updated**:
   - Run `npm audit` regularly
   - Update dependencies when security patches are released

3. **Validate all user inputs**:
   - Always validate and sanitize user inputs on both client and server side
   - Never trust user input

4. **Use HTTPS**:
   - All connections should use HTTPS
   - CSP includes `upgrade-insecure-requests` directive

5. **Regular security reviews**:
   - Review security headers periodically
   - Update CSP as needed when adding new services

## Reporting Security Issues

If you discover a security vulnerability, please report it responsibly:
- Do not open a public issue
- Contact the team directly through the contact form
- Provide detailed information about the vulnerability

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [Formspree Security](https://help.formspree.io/hc/en-us/articles/360046222333-Security)

