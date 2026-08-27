# Limberg.dev — Portafolio

Portafolio personal de **Juan Limberg Hernández del Río**, desarrollador Frontend & Full Stack.
Sitio 100% frontend construido con Next.js (App Router), TypeScript y Tailwind CSS, desplegado en Vercel.

## Secciones

Una sola página con navegación por anclas y scroll-spy:

| Sección | Ancla |
| --- | --- |
| Inicio / Hero | `#inicio` |
| Sobre mí | `#sobre-mi` |
| Experiencia | `#experiencia` |
| Proyectos | `#proyectos` |
| Habilidades | `#habilidades` |
| Certificaciones | `#certificaciones` |
| Contacto | `#contacto` |

## Características

- Modo claro / oscuro con persistencia en `localStorage` y sin parpadeo al cargar.
- Diseño mobile-first, probado desde 360 px hasta escritorio.
- Animaciones de entrada con `IntersectionObserver` (sin librerías extra) y soporte de `prefers-reduced-motion`.
- Línea de tiempo de experiencia expandible y filtros de proyectos por tecnología.
- Visor de certificados a pantalla completa.
- Formulario de contacto que abre el cliente de correo con el mensaje ya redactado (no requiere backend).
- Descarga directa del CV en PDF.
- SEO: metadatos Open Graph / Twitter, `robots.txt` y `sitemap.xml` generados.

## Contenido

Todo el texto del sitio (experiencia, proyectos, habilidades, certificaciones) vive en un solo archivo:

```
lib/data.ts
```

Para actualizar el portafolio basta con editar ese archivo — los componentes se adaptan solos.

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de producción
npm start       # servir el build
```

## Variables de entorno (opcional)

Al usar un dominio propio, define en Vercel:

```
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

Sin esta variable el sitio usa automáticamente la URL que le asigna Vercel.

## Estructura

```
app/
  layout.tsx          # metadatos, fuentes, script anti-parpadeo del tema
  page.tsx            # composición de todas las secciones
  globals.css         # tokens de color, utilidades y animaciones
  robots.ts           # robots.txt
  sitemap.ts          # sitemap.xml
  pages/              # rutas antiguas → redirigen a las anclas nuevas
components/
  site/               # secciones del portafolio
  ui/                 # primitivas de shadcn/ui
lib/
  data.ts             # contenido del CV
  site.ts             # URL pública del sitio
public/               # foto, certificados y CV en PDF
```
