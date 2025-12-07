<script>
  import { onMount } from 'svelte';
  import { BarChart3, Clock, Bug, Zap } from 'lucide-svelte';
  import { animateCounter } from '../../utils/animations';

  let prSizeEl, reviewTimeEl, bugsEl;
  let visible = false;

  onMount(() => {
    visible = true;

    // Animate counters after slide appears
    setTimeout(() => {
      if (prSizeEl) animateCounter(prSizeEl, 154, 2);
      if (reviewTimeEl) animateCounter(reviewTimeEl, 91, 2);
      if (bugsEl) animateCounter(bugsEl, 9, 2);
    }, 300);
  });
</script>

<div class="slide slide-metrics swiper-slide">
  <div class="slide-background"></div>

  <div class="slide-content" class:visible>
    <div class="slide-header">
      <h2 class="title">Métricas de Sobrecarga</h2>
      <p class="subtitle">El costo oculto de la generación de código</p>
    </div>

    <div class="metrics-grid">
      <div class="metric-card card-glass">
        <div class="icon-wrapper">
          <BarChart3 size={40} strokeWidth={2} />
        </div>
        <div class="metric-value">
          +<span bind:this={prSizeEl}>0</span>%
        </div>
        <h3>Tamaño de PR</h3>
        <p>Pull requests significativamente más grandes</p>
      </div>

      <div class="metric-card card-glass">
        <div class="icon-wrapper">
          <Clock size={40} strokeWidth={2} />
        </div>
        <div class="metric-value">
          +<span bind:this={reviewTimeEl}>0</span>%
        </div>
        <h3>Tiempo de Review</h3>
        <p>Revisiones de código más lentas y detalladas</p>
      </div>

      <div class="metric-card card-glass">
        <div class="icon-wrapper">
          <Bug size={40} strokeWidth={2} />
        </div>
        <div class="metric-value">
          +<span bind:this={bugsEl}>0</span>%
        </div>
        <h3>Bugs por Dev</h3>
        <p>Incremento en defectos introducidos</p>
      </div>

      <div class="comparison-card card-glass full-width">
        <div class="icon-wrapper-large">
          <Zap size={48} strokeWidth={2} />
        </div>
        <h3>Capacidad Humana vs IA</h3>
        <div class="comparison-bars">
          <div class="bar-group">
            <div class="bar-label">Humano</div>
            <div class="bar human">
              <span class="bar-value">200-400 LOC/h</span>
            </div>
          </div>
          <div class="bar-group">
            <div class="bar-label">IA</div>
            <div class="bar ai">
              <span class="bar-value">1000 LOC/h</span>
            </div>
          </div>
        </div>
        <p class="insight">
          La IA genera 2.5x más rápido, pero la revisión humana se convierte en el cuello de botella
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  .slide-metrics {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .slide-background {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 25% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 70%, rgba(30, 58, 138, 0.15) 0%, transparent 50%);
    z-index: 1;
  }

  .slide-content {
    position: relative;
    z-index: 2;
    max-width: 1400px;
    width: 100%;
    padding: var(--spacing-content);
    opacity: 0;
    transform: scale(0.95);
    transition: all 0.6s ease-out;
  }

  .slide-content.visible {
    opacity: 1;
    transform: scale(1);
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

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-grid);
  }

  .metric-card {
    padding: var(--spacing-card);
    text-align: center;
    transition: all var(--transition-base);
  }

  .metric-card:hover {
    transform: translateY(-8px) scale(1.02);
  }

  .full-width {
    grid-column: 1 / -1;
  }

  .icon-wrapper {
    width: 50px;
    height: 50px;
    margin: 0 auto var(--spacing-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    background: rgba(59, 130, 246, 0.1);
    color: var(--color-electric);
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
  }

  .icon-wrapper-large {
    width: 60px;
    height: 60px;
    margin: 0 auto var(--spacing-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-lg);
    background: rgba(59, 130, 246, 0.15);
    color: var(--color-accent-bright);
    box-shadow: 0 0 25px rgba(59, 130, 246, 0.3);
  }

  .metric-value {
    font-size: 2.5rem;
    font-weight: 900;
    font-family: var(--font-display);
    background: linear-gradient(135deg, var(--color-accent-bright), var(--color-electric));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: var(--spacing-sm);
    line-height: 1;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
  }

  p {
    font-size: 0.9rem;
    opacity: 0.85;
  }

  .comparison-card {
    padding: var(--spacing-card);
    text-align: center;
  }

  .comparison-bars {
    display: flex;
    gap: var(--spacing-grid);
    margin: var(--spacing-grid) 0;
    justify-content: center;
  }

  .bar-group {
    flex: 1;
    max-width: 400px;
  }

  .bar-label {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: var(--spacing-grid);
    color: var(--color-electric);
  }

  .bar {
    height: 60px;
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  .bar.human {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(96, 165, 250, 0.2));
    border: 2px solid var(--color-electric);
    width: 40%;
  }

  .bar.ai {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.5), rgba(96, 165, 250, 0.4));
    border: 2px solid var(--color-accent-bright);
    width: 100%;
    animation: expandBar 1.5s ease-out 0.5s backwards;
  }

  @keyframes expandBar {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  .bar-value {
    font-size: 1.125rem;
    font-weight: 700;
    font-family: var(--font-mono);
    color: var(--color-neutral-light);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .insight {
    margin-top: var(--spacing-grid);
    font-size: 1rem;
    font-style: italic;
    opacity: 0.9;
    color: var(--color-electric);
  }

  @media (max-width: 1024px) {
    .metrics-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .metric-card:nth-child(3) {
      grid-column: 1 / -1;
      max-width: 50%;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    .metrics-grid {
      grid-template-columns: 1fr;
    }

    .metric-card:nth-child(3) {
      max-width: 100%;
    }

    .comparison-bars {
      flex-direction: column;
    }

    .bar.human, .bar.ai {
      width: 100%;
    }

    .bar.human {
      opacity: 0.6;
    }

    .metric-value {
      font-size: 2.5rem;
    }
  }
</style>
