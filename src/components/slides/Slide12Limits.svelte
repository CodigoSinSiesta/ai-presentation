<script>
  import { onMount } from 'svelte';
  import { Brain, Eye, Clock, TrendingDown } from 'lucide-svelte';
  import { animateCounter } from '../../utils/animations';

  let detectionEl, attentionEl;
  let visible = false;

  onMount(() => {
    visible = true;
    setTimeout(() => {
      if (detectionEl) animateCounter(detectionEl, 70, 2);
      if (attentionEl) animateCounter(attentionEl, 400, 2);
    }, 300);
  });
</script>

<div class="slide slide-limits swiper-slide">
  <div class="slide-background"></div>

  <div class="slide-content" class:visible>
    <div class="slide-header">
      <h2 class="title">Límites Humanos y PRs</h2>
      <p class="subtitle">La capacidad de revisión tiene un techo</p>
    </div>

    <div class="limits-content">
      <div class="stats-row">
        <div class="stat-card card-glass">
          <Eye size={40} />
          <div class="stat-number"><span bind:this={detectionEl}>0</span>%</div>
          <h3>Detección de Bugs</h3>
          <p>Tasa de detección con 200-400 LOC en PR</p>
        </div>

        <div class="stat-card card-glass">
          <Brain size={40} />
          <div class="stat-number"><span bind:this={attentionEl}>0</span> LOC</div>
          <h3>Capacidad Máxima</h3>
          <p>Líneas revisables por hora con atención plena</p>
        </div>

        <div class="stat-card card-glass">
          <Clock size={40} />
          <div class="stat-number">10-60 min</div>
          <h3>Ventana de Atención</h3>
          <p>Tiempo antes de decay significativo en concentración</p>
        </div>
      </div>

      <div class="decay-visualization card-glass">
        <h3>📉 Curva de Atención en Code Review</h3>
        <div class="decay-chart">
          <div class="bar" style="height: 100%; background: #22c55e;"><span>100%</span></div>
          <div class="bar" style="height: 90%; background: #4ade80;"><span>90%</span></div>
          <div class="bar" style="height: 75%; background: #fb923c;"><span>75%</span></div>
          <div class="bar" style="height: 50%; background: #f87171;"><span>50%</span></div>
          <div class="bar" style="height: 30%; background: #ef4444;"><span>30%</span></div>
        </div>
        <div class="time-labels">
          <span>0-10 min</span>
          <span>10-20 min</span>
          <span>20-40 min</span>
          <span>40-60 min</span>
          <span>&gt;60 min</span>
        </div>
      </div>

      <div class="recommendations card-glass">
        <h3>✅ Reglas de Oro para PRs</h3>
        <div class="rules-grid">
          <div class="rule">
            <TrendingDown size={32} />
            <h4>≤ 200 LOC por PR</h4>
            <p>Óptimo para revisión efectiva</p>
          </div>
          <div class="rule">
            <Brain size={32} />
            <h4>1 concepto = 1 PR</h4>
            <p>No mezclar features/refactor/fixes</p>
          </div>
          <div class="rule">
            <Clock size={32} />
            <h4>Review en &lt; 1h</h4>
            <p>Tiempos mayores → split PR</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .slide-limits {
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
      radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 60%, rgba(139, 92, 246, 0.08) 0%, transparent 50%);
    z-index: 1;
  }

  .slide-content {
    position: relative;
    z-index: 2;
    max-width: 1400px;
    width: 100%;
    padding: var(--spacing-3xl);
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
    margin-bottom: var(--spacing-3xl);
  }

  .title {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    margin-bottom: var(--spacing-md);
  }

  .subtitle {
    font-size: clamp(1.125rem, 2.5vw, 1.5rem);
    color: var(--color-electric);
    font-weight: 500;
  }

  .stats-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-xl);
    margin-bottom: var(--spacing-2xl);
  }

  .stat-card {
    padding: var(--spacing-2xl);
    text-align: center;
    transition: all var(--transition-base);
  }

  .stat-card:hover {
    transform: translateY(-8px);
  }

  .stat-card :global(svg) {
    color: var(--color-electric);
    margin-bottom: var(--spacing-md);
  }

  .stat-number {
    font-size: 3rem;
    font-weight: 900;
    font-family: var(--font-display);
    color: var(--color-electric);
    margin-bottom: var(--spacing-md);
  }

  h3 {
    font-size: 1.375rem;
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
  }

  p {
    font-size: 0.95rem;
    opacity: 0.85;
  }

  .decay-visualization {
    padding: var(--spacing-2xl);
    margin-bottom: var(--spacing-2xl);
  }

  .decay-chart {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    height: 200px;
    gap: var(--spacing-md);
    margin: var(--spacing-xl) 0;
  }

  .bar {
    flex: 1;
    border-radius: var(--radius-md) var(--radius-md) 0 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: var(--spacing-sm);
    font-weight: 700;
    font-size: 0.9rem;
    transition: all var(--transition-base);
  }

  .bar span {
    color: var(--color-base-dark);
  }

  .time-labels {
    display: flex;
    justify-content: space-around;
    font-size: 0.85rem;
    opacity: 0.7;
    margin-top: var(--spacing-md);
  }

  .recommendations {
    padding: var(--spacing-2xl);
  }

  .rules-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-xl);
    margin-top: var(--spacing-xl);
  }

  .rule {
    text-align: center;
  }

  .rule :global(svg) {
    color: var(--color-electric);
    margin-bottom: var(--spacing-md);
  }

  .rule h4 {
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
    color: var(--color-electric);
  }

  .rule p {
    font-size: 0.9rem;
  }

  @media (max-width: 1024px) {
    .stats-row, .rules-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .slide-content {
      padding: var(--spacing-2xl) var(--spacing-lg);
    }

    .stat-number {
      font-size: 2.5rem;
    }

    .decay-chart {
      height: 150px;
    }
  }
</style>
