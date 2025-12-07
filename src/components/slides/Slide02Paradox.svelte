<script>
  import { onMount } from 'svelte';
  import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-svelte';

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<div class="slide slide-paradox swiper-slide">
  <div class="slide-background"></div>

  <div class="slide-content" class:visible>
    <div class="slide-header">
      <h2 class="title">La Paradoja del Vibe Coding</h2>
      <p class="subtitle">Alta adopción, baja confianza</p>
    </div>

    <div class="paradox-grid">
      <div class="paradox-card adoption card-glass">
        <div class="icon-wrapper success">
          <TrendingUp size={48} strokeWidth={2} />
        </div>
        <h3>Alta Adopción</h3>
        <p>Los equipos abrazan la IA para acelerar desarrollo</p>
        <div class="metric">85%</div>
        <p class="metric-label">de desarrolladores usan IA</p>
      </div>

      <div class="paradox-card confidence card-glass">
        <div class="icon-wrapper warning">
          <TrendingDown size={48} strokeWidth={2} />
        </div>
        <h3>Baja Confianza</h3>
        <p>Pero dudan de la calidad del código generado</p>
        <div class="metric">68%</div>
        <p class="metric-label">requieren revisión senior</p>
      </div>

      <div class="paradox-card control card-glass full-width">
        <div class="icon-wrapper danger">
          <AlertTriangle size={48} strokeWidth={2} />
        </div>
        <h3>Necesidad de Control</h3>
        <p>Sin procesos adecuados, la velocidad se convierte en deuda técnica</p>
        <div class="control-stats">
          <div class="stat-item">
            <span class="stat-value">3x</span>
            <span class="stat-label">Más revisiones</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">2x</span>
            <span class="stat-label">Más iteraciones</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">4x</span>
            <span class="stat-label">Más refactoring</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .slide-paradox {
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
      radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.08) 0%, transparent 60%),
      radial-gradient(circle at 70% 60%, rgba(30, 58, 138, 0.12) 0%, transparent 60%);
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

  .slide-header {
    text-align: center;
    margin-bottom: var(--spacing-header);
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
    font-size: clamp(1.25rem, 2.5vw, 1.75rem);
    color: var(--color-electric);
    font-weight: 500;
  }

  .paradox-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-grid);
  }

  .paradox-card {
    padding: var(--spacing-card);
    text-align: center;
    transition: all var(--transition-base);
  }

  .paradox-card:hover {
    transform: translateY(-8px);
  }

  .full-width {
    grid-column: 1 / -1;
  }

  .icon-wrapper {
    width: 60px;
    height: 60px;
    margin: 0 auto var(--spacing-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    transition: all var(--transition-base);
  }

  .success {
    background: rgba(34, 197, 94, 0.1);
    color: #22c55e;
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.2);
  }

  .warning {
    background: rgba(251, 146, 60, 0.1);
    color: #fb923c;
    box-shadow: 0 0 20px rgba(251, 146, 60, 0.2);
  }

  .danger {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.2);
  }

  h3 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: var(--spacing-grid);
  }

  p {
    font-size: 1.125rem;
    opacity: 0.9;
    margin-bottom: var(--spacing-grid);
  }

  .metric {
    font-size: 2.5rem;
    font-weight: 900;
    font-family: var(--font-display);
    background: linear-gradient(135deg, var(--color-accent-bright), var(--color-electric));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: var(--spacing-xs);
  }

  .metric-label {
    font-size: 1rem;
    opacity: 0.7;
    margin-bottom: 0;
  }

  .control-stats {
    display: flex;
    justify-content: space-around;
    gap: var(--spacing-grid);
    margin-top: var(--spacing-grid);
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .stat-value {
    font-size: 1.75rem;
    font-weight: 900;
    font-family: var(--font-display);
    color: var(--color-electric);
  }

  .stat-label {
    font-size: 0.85rem;
    opacity: 0.7;
    margin-top: var(--spacing-xs);
  }

  @media (max-width: 1024px) {
    .paradox-grid {
      grid-template-columns: 1fr;
    }

    .full-width {
      grid-column: 1;
    }
  }

  @media (max-width: 768px) {
    .slide-content {
      padding: var(--spacing-2xl) var(--spacing-lg);
    }

    .paradox-card {
      padding: var(--spacing-card);
    }

    .control-stats {
      flex-direction: column;
      gap: var(--spacing-grid);
    }

    .metric {
      font-size: 2.5rem;
    }

    .stat-value {
      font-size: 2rem;
    }
  }
</style>
