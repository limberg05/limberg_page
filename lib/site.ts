/**
 * URL pública del sitio.
 * En Vercel se resuelve sola; para un dominio propio define
 * NEXT_PUBLIC_SITE_URL en las variables de entorno del proyecto.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000');
