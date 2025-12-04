# Plan del Proyecto: Presentación sobre Riesgos de la IA con Astro

## Objetivo
Crear una presentación web horizontal estilo slides en Astro sobre los **Riesgos de la Inteligencia Artificial** con diseño impactante y animaciones profesionales.

## Estructura del Proyecto

```
src/
├── components/
│   ├── slides/
│   │   ├── Slide01Hero.astro           # Portada impactante
│   │   ├── Slide02Technical.svelte     # Riesgos técnicos
│   │   ├── Slide03Ethics.astro         # Riesgos éticos
│   │   ├── Slide04Social.svelte        # Riesgos sociales
│   │   └── Slide05CTA.astro            # Llamado a la acción
│   ├── Navigation.svelte                # Controles y navegación
│   ├── ProgressBar.svelte              # Indicador de progreso
│   ├── ui/
│   │   ├── Card.astro                  # Componente tarjeta glassmorphic
│   │   └── Button.astro                # Botones con estilos cohesivos
│   └── effects/
│       ├── AnimatedGrid.svelte         # Grid animado para Slide 1
│       ├── NeuralNetwork.svelte        # Red neuronal para Slide 2
│       └── WaveAnimation.svelte        # Ondas para Slide 4
├── layouts/
│   └── PresentationLayout.astro         # Layout principal
├── pages/
│   └── index.astro                      # Página única con todas las slides
└── styles/
    ├── global.css                       # Variables CSS, base styles
    └── animations.css                   # Animaciones GSAP y keyframes
```

## Paleta de Colores Obligatoria

```css
--color-base-dark: #0A1628;           /* Azul marino profundo */
--color-primary-cobalt: #1E3A8A;      /* Azul cobalto */
--color-accent-bright: #3B82F6;       /* Azul brillante */
--color-electric: #60A5FA;            /* Azul eléctrico */
--color-neutral-light: #FAF9F6;       /* Blanco hueso */
--color-shadow: rgba(10, 22, 40, 0.8);
```

## Tipografía Requerida

- **Headers (4-6rem)**: Space Grotesk 800-900
- **Subheaders (2-3rem)**: Bricolage Grotesque 600-700
- **Body (1-1.2rem)**: IBM Plex Sans 400-500
- **Monospace**: JetBrains Mono 500

Cargar desde Google Fonts

## Estructura de 5 Slides

### 1. Portada Impactante (`Slide01Hero.astro`)
- Título: "Los Riesgos Ocultos de la IA"
- Subtítulo inquietante
- Background: Grid animado + partículas dispersas
- CTA sutil: "Explorar los riesgos →"

### 2. Riesgos Técnicos (`Slide02Technical.svelte`)
- Visual: Circuitos rotos, bugs
- 3-4 puntos clave con micro-animaciones
- Estadística impactante en grande
- Background: Neural network roto

### 3. Riesgos Éticos (`Slide03Ethics.astro`)
- Visual: Ojo vigilante, balanza desequilibrada
- Timeline/flow de consecuencias
- Quote destacado de experto
- Background: Gradiente con spotlight effects

### 4. Riesgos Sociales (`Slide04Social.svelte`)
- Gráfico interactivo (GSAP-animated)
- Comparativas antes/después
- Iconografía human-centered
- Background: Silhuetas/crowd overlay

### 5. Llamado a la Acción (`Slide05CTA.astro`)
- Mensaje conclusivo poderoso
- 3 takeaways en cards glassmorphic
- CTAs: Compartir, Más info, Descargar
- Background: Gradiente esperanzador

## Características Técnicas Implementadas

### Sistema de Navegación
- **Librería**: Swiper.js (touch gestures, keyboard, mousewheel)
- **Hash Routing**: #/riesgo-1, #/riesgo-2, etc.
- **Controles**: Flechas teclado, botones prev/next, dots de navegación
- **Transiciones**: Fade cruzado + scale (600-800ms)

### Animaciones con GSAP
- Page load: Fade in + slide up (staggered 100ms)
- Slide transitions: Fade + scale effect
- Hover states: Scale 1.03 + shadow lift
- Text reveals: Clip-path/opacity con delays
- Stats: CountUp animation en viewport
- Backgrounds: Parallax con movimiento

### Elementos de Diseño
- **Cards**: Glassmorphism blur, border sutil, box-shadow coloreada
- **Botones**: Glow effects, transiciones 300ms
- **Iconografía**: Lucide icons 2-3rem, color accent con glow
- **Espaciado**: Generoso, white space consciente

## Tecnologías Stack

```json
{
  "framework": "Astro 4.x",
  "integrations": ["@astrojs/svelte", "@astrojs/tailwind"],
  "styling": ["Tailwind CSS", "Custom CSS", "CSS Variables"],
  "animations": "GSAP",
  "navigation": "Swiper.js",
  "icons": "Lucide Icons",
  "fonts": "Google Fonts"
}
```

## Pasos de Implementación

1. ✅ Plan y decisiones arquitectónicas
2. ⏳ Instalar dependencias (Svelte, Tailwind, Swiper, GSAP)
3. ⏳ Configurar Astro, Tailwind, Google Fonts
4. ⏳ Crear sistema de diseño (global styles, CSS variables)
5. ⏳ Build layout y sistema de navegación
6. ⏳ Crear Slide 1 - Portada
7. ⏳ Crear Slide 2 - Riesgos Técnicos
8. ⏳ Crear Slide 3 - Riesgos Éticos
9. ⏳ Crear Slide 4 - Riesgos Sociales
10. ⏳ Crear Slide 5 - CTA
11. ⏳ Implementar animaciones GSAP
12. ⏳ Responsive design y optimización
13. ⏳ Testing y refinamiento final

## Principios de Diseño

✓ Alto contraste visual en cada elemento
✓ Jerarquía tipográfica extrema
✓ Motion con propósito narrativo
✓ Espaciado generoso (white space)
✓ Un solo foco de atención por slide
✓ Cohesión temática en las 5 slides
✓ Responsive mobile → 4K

## ¿Por qué esta arquitectura?

- **Astro + Svelte**: Performance + interactividad granular
- **Swiper.js**: Navegación profesional con touch/keyboard
- **GSAP**: Animaciones de clase mundial sin comprometer performance
- **Tailwind + CSS Variables**: Sistema de diseño cohesivo y mantenible
- **Paleta monótona azul**: Impacto visual distintivo sin ser genérico

## Comandos de Desarrollo

```bash
pnpm install
pnpm run dev      # http://localhost:4321
pnpm run build
pnpm run preview
```

## Resultado Final

Una presentación web memorable, impactante y profesional que comunica efectivamente los riesgos de la IA con estética moderna y animaciones significativas.
