# Security Documentation

## Overview
This document outlines the security measures implemented in the Central Florida Lyric Opera website.

## Security Headers
The application includes the following security headers:
- `X-Content-Type-Options: nosniff` - Prevents MIME type sniffing
- `X-Frame-Options: DENY` - Prevents clickjacking attacks
- `X-XSS-Protection: 1; mode=block` - Enables XSS protection
- `Referrer-Policy: strict-origin-when-cross-origin` - Controls referrer information
- `Content-Security-Policy` - Restricts resource loading

## Environment Variables
Sensitive configuration is stored in environment files:
- `src/environments/environment.ts` - Development configuration
- `src/environments/environment.prod.ts` - Production configuration

## API Keys
EmailJS configuration is stored in environment variables to prevent client-side exposure.

## Error Handling
- Global error handler implemented
- Production logging disabled
- No sensitive information in error messages

## Input Validation
- Angular reactive forms with validation
- Server-side validation recommended for production

## Dependencies
Regular security audits should be performed on:
- Angular framework
- Third-party libraries
- Development dependencies

## Recommendations
1. Implement server-side email handling
2. Add rate limiting for contact forms
3. Regular dependency updates
4. Security monitoring in production
5. HTTPS enforcement
6. Regular security audits





