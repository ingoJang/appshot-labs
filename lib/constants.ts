/**
 * Site configuration constants
 * Update SITE_URL when deploying to production
 * Uses NEXT_PUBLIC_SITE_URL env var, falls back to production domain
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://appshotlabs.xyz').replace(/\/$/, '');
export const SITE_NAME = 'AppShot Labs';
export const SITE_DESCRIPTION = 'AppShot Labs is a design studio focused on App Store visuals and screenshot systems. We create custom-designed visuals that help apps get chosen, not just noticed.';
export const WHATSAPP_LINK = 'https://wa.me/821075850237';
