import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { siteUrl } from '@/lib/site';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

const title = 'Juan Limberg Hernández del Río — Desarrollador Frontend & Full Stack';
const description =
  'Portafolio de Juan Limberg Hernández del Río. Desarrollador web especializado en React, Next.js, TypeScript y Tailwind CSS. Proyectos, experiencia y certificaciones.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | Limberg.dev',
  },
  description,
  keywords: [
    'Juan Limberg Hernandez del Rio',
    'desarrollador web',
    'frontend',
    'full stack',
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Mérida',
    'portafolio',
  ],
  authors: [{ name: 'Juan Limberg Hernández del Río' }],
  creator: 'Juan Limberg Hernández del Río',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    title,
    description,
    siteName: 'Limberg.dev',
    images: [{ url: '/fotoLimberg.jpeg', width: 800, height: 800, alt: 'Juan Limberg Hernández del Río' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/fotoLimberg.jpeg'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9fafb' },
    { media: '(prefers-color-scheme: dark)', color: '#101319' },
  ],
  width: 'device-width',
  initialScale: 1,
};

// Evita el parpadeo de tema al cargar (se ejecuta antes de pintar).
const themeScript = `
(function(){
  try {
    var s = localStorage.getItem('theme');
    var d = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (s === 'dark' || (!s && d)) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${mono.variable} font-sans`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
