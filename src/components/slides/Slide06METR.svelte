<script>
  import { onMount } from 'svelte';
  import { TrendingDown, TrendingUp, Brain, Zap } from 'lucide-svelte';
  import { animateCounter } from '../../utils/animations';

  let slowerEl, fasterEl;
  let visible = false;

  onMount(() => {
    visible = true;

    setTimeout(() => {
      if (slowerEl) animateCounter(slowerEl, 19, 2);
      if (fasterEl) animateCounter(fasterEl, 20, 2);
    }, 300);
  });
</script>

<div class="slide slide-metr swiper-slide">
  <div class="slide-background"></div>

  <div class="slide-content" class:visible>
    <div class="slide-header">
      <h2 class="title">Estudio METR 2025</h2>
      <p class="subtitle">Percepción vs Realidad Objetiva</p>
    </div>

    <div class="metr-grid">
      <div class="comparison-section">
        <div class="reality-card card-glass">
          <div class="card-header negative">
            <div class="icon-wrapper">
              <TrendingDown size={28} strokeWidth={2.5} />
            </div>
            <h3>Realidad Objetiva</h3>
          </div>
          <div class="metric-large negative-metric">
            <span bind:this={slowerEl}>0</span>%
            <span class="metric-label">más lentos</span>
          </div>
          <p class="description">
            Desarrolladores seniors son objetivamente <strong>19% más lentos</strong> cuando usan IA
            para tareas complejas de software engineering
          </p>
          <div class="icon-large">
            <Brain size={48} strokeWidth={1.5} />
          </div>
        </div>

        <div class="vs-divider">
          <div class="vs-circle">VS</div>
          <div class="vs-line"></div>
        </div>

        <div class="perception-card card-glass">
          <div class="card-header positive">
            <div class="icon-wrapper">
              <TrendingUp size={28} strokeWidth={2.5} />
            </div>
            <h3>Percepción Subjetiva</h3>
          </div>
          <div class="metric-large positive-metric">
            <span bind:this={fasterEl}>0</span>%
            <span class="metric-label">más rápidos</span>
          </div>
          <p class="description">
            Los mismos desarrolladores <em>perciben</em> que van <strong>20% más rápido</strong>
            con asistencia de IA
          </p>
          <div class="icon-large">
            <Zap size={48} strokeWidth={1.5} />
          </div>
        </div>
      </div>

      <div class="insights-card card-glass full-width">
        <h3>¿Por qué esta desconexión?</h3>
        <div class="insights-grid">
          <div class="insight-item">
            <div class="insight-number">1</div>
            <div class="insight-content">
              <h4>Sesgo de velocidad</h4>
              <p>La IA genera código rápido, pero revisar y corregir toma más tiempo</p>
            </div>
          </div>

          <div class="insight-item">
            <div class="insight-number">2</div>
            <div class="insight-content">
              <h4>Falsa productividad</h4>
              <p>Más LOC no significa mejor código ni mayor valor de negocio</p>
            </div>
          </div>

          <div class="insight-item">
            <div class="insight-number">3</div>
            <div class="insight-content">
              <h4>Deuda oculta</h4>
              <p>Los costos de mantenimiento aparecen semanas después</p>
            </div>
          </div>
        </div>
      </div>

      <div class="conclusion-card card-glass full-width">
        <div class="conclusion-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 9v4"></path>
            <path d="M12 17h.01"></path>
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        </div>
        <p class="conclusion-text">
          <strong>La sensación de ir rápido no garantiza ir bien.</strong>
          Necesitamos métricas objetivas y procesos robustos.
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  .slide-metr {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  @media (max-width: 600px) {
    .slide-metr {
      height: 100vh;
      min-height: 100vh;
      overflow: visible;
      overflow-y: auto;
      align-items: flex-start;
      padding-top: var(--spacing-lg);
      padding-bottom: var(--spacing-lg);
    }
  }

  .slide-background {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 25% 35%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 65%, rgba(139, 92, 246, 0.08) 0%, transparent 50%);
    z-index: 1;
  }

  .slide-content {
    position: relative;
    z-index: 2;
    max-width: 1400px;
    width: 100%;
    padding: var(--spacing-content);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease-out;
  }

  .slide-content.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .slide-header {
    text-align: center;
    margin-bottom: var(--spacing-header);
  }

  .title {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    margin-bottom: var(--spacing-grid);
  }

  .subtitle {
    font-size: clamp(1.125rem, 2.5vw, 1.5rem);
    color: var(--color-electric);
    font-weight: 500;
  }

   .metr-grid {
     display: grid;
     grid-template-columns: 1fr;
     gap: var(--spacing-sm);
   }

   .comparison-section {
     display: grid;
     grid-template-columns: 1fr auto 1fr;
     gap: var(--spacing-sm);
     align-items: stretch;
   }

  .reality-card, .perception-card {
    padding: var(--spacing-card);
    text-align: center;
    transition: all var(--transition-base);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .reality-card:hover, .perception-card:hover {
    transform: translateY(-8px) scale(1.02);
  }

   .card-header {
     margin-bottom: var(--spacing-xs);
   }

  .card-header.negative {
    color: #ef4444;
  }

  .card-header.positive {
    color: #22c55e;
  }

   .icon-wrapper {
     width: 48px;
     height: 48px;
     margin: 0 auto var(--spacing-sm);
     display: flex;
     align-items: center;
     justify-content: center;
     border-radius: var(--radius-lg);
     background: rgba(59, 130, 246, 0.1);
   }

  .card-header.negative .icon-wrapper {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.2);
  }

  .card-header.positive .icon-wrapper {
    background: rgba(34, 197, 94, 0.1);
    color: #22c55e;
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.2);
  }

   h3 {
     font-size: 1rem;
     font-weight: 700;
     margin-bottom: var(--spacing-xs);
   }

   .metric-large {
     font-size: 3rem;
     font-weight: 900;
     font-family: var(--font-display);
     line-height: 1;
     margin: var(--spacing-sm) 0;
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: var(--spacing-xs);
   }

  .negative-metric {
    color: #ef4444;
  }

  .positive-metric {
    color: #22c55e;
  }

   .metric-label {
     font-size: 1rem;
     font-weight: 600;
     font-family: var(--font-body);
     opacity: 0.8;
   }

   .description {
     font-size: 0.9rem;
     line-height: 1.4;
     opacity: 0.9;
     margin-bottom: var(--spacing-sm);
   }

  .description strong {
    color: var(--color-electric);
  }

  .description em {
    font-style: italic;
    opacity: 0.8;
  }

  .icon-large {
    opacity: 0.15;
    color: var(--color-electric);
  }

   .vs-divider {
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: var(--spacing-sm);
     justify-content: center;
   }

   .vs-circle {
     width: 48px;
     height: 48px;
     border-radius: 50%;
     background: linear-gradient(135deg, var(--color-accent-bright), var(--color-electric));
     display: flex;
     align-items: center;
     justify-content: center;
     font-size: 1rem;
     font-weight: 900;
     color: var(--color-base-dark);
     box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
   }

   .vs-line {
     width: 2px;
     height: 80px;
     background: linear-gradient(
       to bottom,
       transparent,
       rgba(96, 165, 250, 0.5),
       transparent
     );
   }

  .full-width {
    grid-column: 1 / -1;
  }

   .insights-card {
     padding: var(--spacing-card);
     text-align: center;
   }

   .insights-grid {
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     gap: var(--spacing-sm);
     margin-top: var(--spacing-sm);
   }

  .insight-item {
    display: flex;
    gap: var(--spacing-grid);
    text-align: left;
  }

  .insight-number {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    border-radius: var(--radius-md);
    background: linear-gradient(135deg, var(--color-accent-bright), var(--color-electric));
    color: var(--color-base-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 900;
    font-family: var(--font-display);
  }

  .insight-content h4 {
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
  }

  .insight-content p {
    font-size: 0.95rem;
    opacity: 0.85;
  }

   .conclusion-card {
     padding: var(--spacing-card);
     text-align: center;
     display: flex;
     align-items: center;
     justify-content: center;
     gap: var(--spacing-sm);
     border: 2px solid var(--color-accent-bright);
   }

  .conclusion-icon {
    color: var(--color-electric);
  }

   .conclusion-text {
     font-size: 1.125rem;
     line-height: 1.5;
     max-width: 800px;
   }

  .conclusion-text strong {
    color: var(--color-electric);
  }

  @media (max-width: 1024px) {
    .comparison-section {
      grid-template-columns: 1fr;
      gap: var(--spacing-grid);
    }

    .vs-divider {
      flex-direction: row;
      margin: var(--spacing-lg) 0;
    }

    .vs-line {
      width: 200px;
      height: 2px;
      background: linear-gradient(
        to right,
        transparent,
        rgba(96, 165, 250, 0.5),
        transparent
      );
    }

    .insights-grid {
      grid-template-columns: 1fr;
      gap: var(--spacing-grid);
    }
  }

  @media (max-width: 768px) {
    .slide-content {
      padding: var(--spacing-content);
    }

    .metric-large {
      font-size: clamp(2rem, 4vw, 3rem);
    }

    .reality-card, .perception-card {
      padding: var(--spacing-card);
    }

    .conclusion-card {
      flex-direction: column;
      gap: var(--spacing-grid);
      padding: var(--spacing-card);
    }

    .conclusion-text {
      font-size: 1rem;
    }

    .insight-item {
      padding: var(--spacing-md);
    }

    .insight-number {
      width: 40px;
      height: 40px;
      font-size: 1.25rem;
    }
  }

  @media (max-width: 600px) {
    .comparison-section {
      gap: var(--spacing-grid);
    }

    .vs-divider {
      margin: var(--spacing-md) 0;
    }

    .vs-line {
      width: 100px;
    }

    .insights-grid {
      gap: var(--spacing-grid);
    }
  }
</style>
