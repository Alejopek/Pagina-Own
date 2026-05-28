# 🚀 Portfolio Personal - Alejo Tomas Diaz (React + TypeScript)

![Screenshot](/assets/screenshot.png)

Este es el repositorio de mi portfolio personal migrado a **React 19** y **TypeScript**, manteniendo el diseño minimalista de terminal oscura, el comportamiento responsivo y animaciones fluidas píxel-perfectas en desktop y mobile.

---

## 🛠️ Stack Tecnológico

- **Core**: React 19 (Strict Mode) + TypeScript
- **Build Tool**: Vite (Single Page Application)
- **Styling**: Tailwind CSS v4 (Design tokens declarados con `@theme` CSS)
- **Smooth Scroll**: Lenis (Sincronizado con requestAnimationFrame e integrado con offsets fijos de navegación)
- **Animations**: Framer Motion (Scroll reveals, staggers y fading)
- **SEO & Meta**: React Helmet Async (Dynamic header rendering)
- **Fonts**: Self-hosted a través de `@fontsource` (Space Grotesk + IBM Plex Mono)

---

## 📂 Estructura del Proyecto

```text
.
├── public/                 # Recursos públicos estáticos
│   ├── assets/             # CV, Favicons, og-image, capturas de proyectos
│   └── robots.txt          # SEO crawlers instructions
├── src/
│   ├── main.tsx            # Punto de entrada de React + Dev Easter Egg
│   ├── App.tsx             # Layout global, SEO y envoltura de scroll suave
│   ├── index.css           # Carga de Tailwind CSS v4, fuentes y tokens
│   ├── data/               # Contenido estático modular (editables)
│   │   ├── projects.ts     # Listado de proyectos tipados
│   │   ├── skills.ts       # Habilidades técnicas
│   │   ├── journey.ts      # Hitos de la línea de tiempo
│   │   └── contact.ts      # Canales de comunicación y CV
│   ├── components/
│   │   ├── layout/         # Header, Footer, MobileDrawer y SmoothScroll
│   │   ├── sections/       # Hero, About, Skills, Projects, Journey, Contact
│   │   └── ui/             # Botones, Tags, Cards y animaciones reutilizables
│   ├── hooks/              # useMobileMenu, useNavbarScroll, useActiveSection
│   └── lib/                # cn utility, constants
├── vite.config.ts          # Integraciones de empaquetado Vite + Tailwind v4
├── tsconfig.json           # Reglas de compilación estrictas de TypeScript
└── eslint.config.js        # Estándares de calidad y linter de React
```

---

## ⚡ Comandos de Desarrollo

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión recomendada $\geq 20$).

### 1. Instalar dependencias
```bash
npm install
```

### 2. Iniciar servidor local de desarrollo
```bash
npm run dev
```
El servidor se iniciará en `http://localhost:5173`.

### 3. Compilar para producción (Build)
```bash
npm run build
```
Genera el paquete optimizado dentro de la carpeta `dist/` listo para desplegarse en plataformas como Vercel o Netlify.

### 4. Probar compilación local de producción
```bash
npm run preview
```

---

## 🔒 Despliegue en Vercel

Este proyecto cuenta con un flujo continuo integrado. Al subir tus cambios a tu repositorio de GitHub, Vercel desplegará automáticamente.

- **Vercel Framework Preset**: `Vite`
- **Output Directory**: `dist`
- **Build Command**: `npm run build`

---

## 🐧 Sobre Mí

Soy estudiante de programación técnica en la EPET 20 de Neuquén. Me apasiona el desarrollo Backend, el mantenimiento de infraestructura en **HomeLabs** y la automatización y empaquetado para la comunidad de **Arch Linux (AUR)**.

Hecho con ❤️ por Alejo Tomas Diaz
