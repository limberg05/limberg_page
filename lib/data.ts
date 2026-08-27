export const profile = {
  name: 'Juan Limberg Hernández del Río',
  shortName: 'Limberg',
  role: 'Desarrollador Frontend & Full Stack',
  degree: 'Ing. en Tecnologías de la Información y Negocios Digitales',
  degreeNote: 'en proceso de titulación',
  degreeShort: 'Ing. en TI y Negocios Digitales',
  location: 'Mérida, Yucatán, México',
  email: 'hernandezdelriojuan@gmail.com',
  phone: '961 233 0156',
  phoneHref: '+529612330156',
  github: 'https://github.com/limberg05',
  linkedin: 'https://www.linkedin.com/in/limberg-hernandez-del-rio-973453275/',
  cv: '/CV-Juan-Limberg-Hernandez-del-Rio.pdf',
  photo: '/fotoLimberg.jpeg',
  summary:
    'Construyo interfaces web rápidas, accesibles y responsivas con React, Next.js y TypeScript. He trabajado desde plataformas institucionales de alcance nacional hasta aplicaciones enfocadas en accesibilidad e inclusión digital.',
  available: true,
};

export const stats = [
  { value: '2+', label: 'Años de experiencia' },
  { value: '6', label: 'Proyectos profesionales' },
  { value: '9', label: 'Certificaciones' },
  { value: '3', label: 'Idiomas en producción' },
];

export const experience = [
  {
    role: 'Interno de Desarrollo Web',
    company: 'Tren Maya — Sitio Web Oficial',
    org: 'Dirección de Comunicación Social',
    period: 'Feb 2026 — Jun 2026',
    mode: 'trenmaya.gob.mx',
    current: true,
    link: 'https://www.trenmaya.gob.mx',
    highlights: [
      'Modernicé una plataforma institucional migrando código legacy en PHP a una arquitectura Next.js / React con TypeScript.',
      'Implementé internacionalización multi-idioma: español, inglés y francés.',
      'Integré mapas interactivos y desarrollé un chatbot con avatar animado.',
      'Desarrollé secciones dinámicas con itinerarios, tarjetas y filtros.',
      'Optimicé el rendimiento del sitio, mejorando significativamente las métricas de Lighthouse.',
      'Elaboré documentación técnica formal para reportes institucionales.',
    ],
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'Redis',
      'Docker',
    ],
  },
  {
    role: 'Desarrollador de Software',
    company: 'Quick Parking',
    org: 'Aplicación de gestión de estacionamientos',
    period: 'Nov 2025 — Mar 2026',
    mode: 'Remoto',
    highlights: [
      'Desarrollé una aplicación para la gestión y visualización de espacios de estacionamiento en tiempo real.',
      'Implementé la lógica de control de disponibilidad de cajones.',
      'Integré frontend y backend para el consumo y actualización de datos dinámicos.',
      'Diseñé una interfaz clara para visualizar el estado de cada espacio (disponible / ocupado).',
    ],
    stack: ['React', 'JavaScript', 'API REST', 'Arquitectura de proyecto'],
  },
  {
    role: 'Desarrollador de Software',
    company: 'Beyond',
    org: 'Conversión de texto a Braille',
    period: 'Sep 2025 — Nov 2025',
    mode: 'Remoto',
    highlights: [
      'Desarrollé una aplicación web de accesibilidad para convertir texto digital a formato Braille.',
      'Implementé la lógica de transformación respetando estándares de accesibilidad.',
      'Diseñé una interfaz clara e intuitiva para personas con discapacidad visual.',
      'Enfoque central en inclusión digital y buenas prácticas de código.',
    ],
    stack: ['React', 'JavaScript', 'Accesibilidad (a11y)'],
  },
  {
    role: 'Desarrollador Full Stack',
    company: 'Sitio Web Oficial — Diputada Federal',
    org: 'Proyecto institucional',
    period: 'Ene 2025 — Jul 2025',
    mode: 'Remoto',
    highlights: [
      'Diseñé y desarrollé un sitio web funcional con React y Next.js.',
      'Creé componentes reutilizables con Tailwind CSS y shadcn/ui.',
      'Implementé diseño responsivo optimizado para dispositivos móviles.',
      'Integré un formulario de contacto funcional mediante EmailJS.',
      'Enfoque en accesibilidad, usabilidad y experiencia de usuario.',
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'shadcn/ui', 'EmailJS'],
  },
  {
    role: 'Interno de Ingeniero de Software',
    company: 'Earthquakes Web Project',
    org: 'SOSMex',
    period: 'Nov 2024 — Ene 2025',
    mode: 'Remoto',
    link: 'https://github.com/SOSMex/earthquakesWeb',
    highlights: [
      'Desarrollé funcionalidades frontend para una app que muestra sismos en tiempo real.',
      'Implementé componentes de interfaz con tecnologías web modernas.',
      'Trabajé con datos dinámicos y diseño responsivo.',
      'Colaboré en la mejora de funcionalidades y estructura de la aplicación.',
    ],
    stack: ['JavaScript', 'React', 'CSS', 'Datos en tiempo real'],
  },
];

export const education = {
  school: 'Universidad Anáhuac Mayab',
  degree: 'Ingeniería en Tecnologías de la Información y Negocios Digitales',
  period: 'Ago 2022 — Dic 2026',
  location: 'Mérida, Yucatán',
  courses: [
    'Programación',
    'Estructuras de Datos',
    'Bases de Datos',
    'Desarrollo Web',
    'Sistemas Operativos',
  ],
};

export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'layout',
    skills: [
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'shadcn/ui',
      'Diseño Responsivo',
      'Accesibilidad (a11y)',
    ],
  },
  {
    title: 'Lenguajes & Backend',
    icon: 'terminal',
    skills: [
      'Python',
      'Java',
      'Integración Frontend–Backend',
      'API REST',
      'Desarrollo de Sistemas Web',
    ],
  },
  {
    title: 'Bases de Datos',
    icon: 'database',
    skills: [
      'PostgreSQL',
      'SQL Server',
      'MongoDB',
      'Redis',
      'Modelado de Datos',
    ],
  },
  {
    title: 'Cloud & Datos',
    icon: 'cloud',
    skills: [
      'Google Cloud Platform',
      'BigQuery',
      'Looker',
      'BigQuery ML',
      'Análisis y Visualización de Datos',
    ],
  },
  {
    title: 'Herramientas & DevOps',
    icon: 'wrench',
    skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'Documentación técnica'],
  },
  {
    title: 'Profesionales',
    icon: 'sparkles',
    skills: [
      'Resolución de problemas',
      'Pensamiento analítico',
      'Trabajo en equipo',
      'Organización',
      'Responsabilidad',
    ],
  },
];

export const languages = [
  { name: 'Español', level: 'Nativo', value: 100 },
  { name: 'Inglés', level: 'Avanzado', value: 85 },
];

export const projects = [
  {
    title: 'Tren Maya',
    subtitle: 'Sitio web oficial · trenmaya.gob.mx',
    description:
      'Migración de una plataforma institucional legacy en PHP hacia Next.js y TypeScript, con soporte en 3 idiomas, mapas interactivos, chatbot con avatar animado y mejoras importantes en Lighthouse.',
    tags: ['Next.js', 'TypeScript', 'i18n', 'PostgreSQL', 'Redis', 'Docker'],
    live: 'https://www.trenmaya.gob.mx',
    repo: null,
    image: null,
    featured: true,
    accent: 'emerald',
    emoji: '🚆',
  },
  {
    title: 'PC Fácil',
    subtitle: 'pcfacil.shop',
    description:
      'Aplicación web que encuentra las partes compatibles entre sí para armar tu propia PC y entrega resultados con enlaces directos a productos disponibles en Mercado Libre.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Lógica de compatibilidad'],
    live: 'https://www.pcfacil.shop/',
    repo: null,
    image: '/pcFacil.jpg',
    featured: true,
    accent: 'indigo',
    emoji: '🖥️',
  },
  {
    title: 'Earthquakes Web',
    subtitle: 'SOSMex · Sismos en tiempo real',
    description:
      'Plataforma que muestra los sismos ocurridos en México junto con su magnitud y ubicación. Desarrollé el frontend, los componentes de interfaz y el manejo de datos dinámicos.',
    tags: ['React', 'JavaScript', 'Tiempo real', 'Responsive'],
    live: null,
    repo: 'https://github.com/SOSMex/earthquakesWeb',
    image: '/logo-sosmex.jpg',
    featured: true,
    accent: 'amber',
    emoji: '🌎',
  },
  {
    title: 'Beyond',
    subtitle: 'Texto a Braille',
    description:
      'Aplicación de accesibilidad que convierte texto digital a formato Braille respetando estándares, con una interfaz pensada para personas con discapacidad visual.',
    tags: ['React', 'Accesibilidad', 'Inclusión digital'],
    live: null,
    repo: null,
    image: null,
    featured: false,
    accent: 'violet',
    emoji: '👁️',
  },
  {
    title: 'Quick Parking',
    subtitle: 'Gestión de estacionamientos',
    description:
      'Sistema de visualización y control de cajones de estacionamiento en tiempo real, con integración completa entre frontend y backend para datos dinámicos.',
    tags: ['React', 'API REST', 'Tiempo real'],
    live: null,
    repo: null,
    image: null,
    featured: false,
    accent: 'cyan',
    emoji: '🅿️',
  },
  {
    title: 'Sitio Diputada Federal',
    subtitle: 'Proyecto institucional',
    description:
      'Sitio web full stack con componentes reutilizables, diseño responsivo optimizado para móvil y formulario de contacto funcional mediante EmailJS.',
    tags: ['Next.js', 'Tailwind CSS', 'shadcn/ui', 'EmailJS'],
    live: null,
    repo: null,
    image: null,
    featured: false,
    accent: 'rose',
    emoji: '🏛️',
  },
];

export const certifications = [
  {
    title: 'IA generativa: más allá del chatbot',
    issuer: 'Google Cloud',
    date: 'Abril 2026',
    image: null,
  },
  {
    title: 'SAP Professional Fundamentals',
    issuer: 'SAP',
    date: 'Abril 2025',
    image: null,
  },
  {
    title: 'Introduction to NoSQL Databases',
    issuer: 'IBM',
    date: 'Noviembre 2024',
    image: '/certificado_curso4.jpg',
  },
  {
    title: 'Databases and SQL for Data Science with Python',
    issuer: 'IBM',
    date: 'Abril 2024',
    image: '/certificado_curso1.jpg',
  },
  {
    title: 'Create ML Models with BigQuery ML',
    issuer: 'Google',
    date: 'Mayo 2024',
    image: null,
  },
  {
    title: 'Introduction to Data Analytics on Google Cloud',
    issuer: 'Google',
    date: 'Febrero 2024',
    image: null,
  },
  {
    title: 'CCNAv7: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    image: '/certificado_curso3.jpg',
  },
  {
    title: 'Sistemas operativos y tú: usuario avanzado',
    issuer: 'Google',
    date: '2023',
    image: '/certificado_curso2.jpg',
  },
  {
    title: 'Object Oriented Programming in Java',
    issuer: 'UC San Diego',
    date: 'Abril 2023',
    image: null,
  },
];

export const navLinks = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#certificaciones', label: 'Certificados' },
  { href: '#contacto', label: 'Contacto' },
];
