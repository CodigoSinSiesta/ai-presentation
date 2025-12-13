<script>
  import { onMount } from 'svelte';
  import { Copy, GitBranch, TrendingUp, RefreshCw } from 'lucide-svelte';
  import { animateCounter } from '../../utils/animations';

  let churnEl, locEl;
  let visible = false;

  onMount(() => {
    visible = true;

    setTimeout(() => {
      if (churnEl) animateCounter(churnEl, 41, 2);
      if (locEl) animateCounter(locEl, 211, 2);
    }, 300);
  });
</script>

<div class="slide slide-churn swiper-slide">
  <div class="slide-background"></div>

  <div class="slide-content" class:visible>
    <div class="slide-header">
      <h2 class="title">Code Churn y Refactorización</h2>
      <p class="subtitle">El ciclo interminable de cambios</p>
    </div>

    <div class="churn-grid">
      <div class="stat-card card-glass highlight">
        <div class="icon-wrapper primary">
          <GitBranch size={28} strokeWidth={2} />
        </div>
        <div class="stat-value">
          +<span bind:this={churnEl}>0</span>%
        </div>
        <h3>Code Churn</h3>
        <p>Incremento en código que se modifica inmediatamente después de escribirse</p>
      </div>

      <div class="stat-card card-glass highlight">
        <div class="icon-wrapper primary">
          <Copy size={28} strokeWidth={2} />
        </div>
        <div class="stat-value">
          <span bind:this={locEl}>0</span>M
        </div>
        <h3>LOC Copy-Paste</h3>
        <p class="source">Estudio GitClear: líneas de código duplicadas</p>
      </div>

      <div class="problems-card card-glass full-width">
        <h3>¿Por qué ocurre esto?</h3>
        <div class="problems-grid">
          <div class="problem-item">
            <div class="icon-wrapper-small">
              <TrendingUp size={24} strokeWidth={2} />
            </div>
            <div class="problem-content">
              <h4>Menos Refactoring</h4>
              <p>La IA prioriza velocidad sobre calidad estructural</p>
            </div>
          </div>

          <div class="problem-item">
            <div class="icon-wrapper-small">
              <Copy size={24} strokeWidth={2} />
            </div>
            <div class="problem-content">
              <h4>Más Copy-Paste</h4>
              <p>Duplicación de patrones sin abstracciones adecuadas</p>
            </div>
          </div>

          <div class="problem-item">
            <div class="icon-wrapper-small">
              <RefreshCw size={24} strokeWidth={2} />
            </div>
            <div class="problem-content">
              <h4>Ciclos de Reescritura</h4>
              <p>Código generado que no cumple requisitos en primera iteración</p>
            </div>
          </div>
        </div>
      </div>

      <div class="impact-card card-glass full-width">
        <div class="impact-header">
          <h3>Impacto en el Equipo</h3>
        </div>
        <div class="impact-items">
          <div class="impact-item">
            <div class="impact-number">2-3x</div>
            <div class="impact-label">Tiempo en reviews</div>
          </div>
          <div class="divider"></div>
          <div class="impact-item">
            <div class="impact-number">↓ 40%</div>
            <div class="impact-label">Calidad de código</div>
          </div>
          <div class="divider"></div>
          <div class="impact-item">
            <div class="impact-number">↑ 60%</div>
            <div class="impact-label">Deuda técnica</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .slide-churn {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  @media (max-width: 600px) {
    .slide-churn {
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
      radial-gradient(circle at 40% 30%, rgba(239, 68, 68, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 60% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
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

  .churn-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-grid);
  }

  .stat-card {
    padding: var(--spacing-card);
    text-align: center;
    transition: all var(--transition-base);
  }

  .stat-card.highlight:hover {
    transform: translateY(-8px) scale(1.03);
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
    border-radius: var(--radius-lg);
    transition: all var(--transition-base);
  }

  .icon-wrapper.primary {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.2);
  }

  .stat-value {
    font-size: 2.75rem;
    font-weight: 900;
    font-family: var(--font-display);
    background: linear-gradient(135deg, #ef4444, #f87171);
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

  h4 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
  }

  p {
    font-size: 0.95rem;
    opacity: 0.85;
  }

  .source {
    font-size: 0.9rem;
    font-family: var(--font-mono);
    opacity: 0.7;
    margin-top: var(--spacing-sm);
  }

  .problems-card {
    padding: var(--spacing-card);
  }

  .problems-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-grid);
    margin-top: var(--spacing-grid);
  }

  .problem-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .icon-wrapper-small {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    background: rgba(239, 68, 68, 0.08);
    color: #f87171;
    margin-bottom: var(--spacing-sm);
  }

  .problem-content h4 {
    margin-bottom: var(--spacing-sm);
  }

  .problem-content p {
    font-size: 0.95rem;
  }

  .impact-card {
    padding: var(--spacing-card);
    text-align: center;
  }

  .impact-header h3 {
    margin-bottom: var(--spacing-grid);
  }

  .impact-items {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: var(--spacing-grid);
  }

  .impact-item {
    flex: 1;
  }

  .impact-number {
    font-size: 2rem;
    font-weight: 900;
    font-family: var(--font-display);
    color: var(--color-electric);
    margin-bottom: var(--spacing-xs);
  }

  .impact-label {
    font-size: 0.95rem;
    opacity: 0.8;
  }

  .divider {
    width: 2px;
    height: 50px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(96, 165, 250, 0.3),
      transparent
    );
  }

  @media (max-width: 1024px) {
    .problems-grid {
      grid-template-columns: 1fr;
    }

    .churn-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .slide-content {
      padding: var(--spacing-2xl) var(--spacing-lg);
    }

    .impact-items {
      flex-direction: column;
    }

    .divider {
      width: 80px;
      height: 2px;
      background: linear-gradient(
        to right,
        transparent,
        rgba(96, 165, 250, 0.3),
        transparent
      );
    }

    .stat-value {
      font-size: 3rem;
    }

    .impact-number {
      font-size: 2.5rem;
    }
  }
</style>
