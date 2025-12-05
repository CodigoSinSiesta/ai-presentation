<script>
  import { onMount } from 'svelte';
  import { Building2, Shield, TrendingUp, AlertCircle } from 'lucide-svelte';
  import { animateCounter } from '../../utils/animations';

  let visible = false;
  let amazonSavingsEl, amazonDevsEl, ukMigratedEl, ukBugsEl;

  onMount(() => {
    visible = true;
    setTimeout(() => {
      if (amazonSavingsEl) animateCounter(amazonSavingsEl, 260, 2);
      if (amazonDevsEl) animateCounter(amazonDevsEl, 5000, 0);
      if (ukMigratedEl) animateCounter(ukMigratedEl, 30000, 0);
      if (ukBugsEl) animateCounter(ukBugsEl, 0, 0);
    }, 300);
  });
</script>

<div class="slide slide-cases swiper-slide">
  <div class="slide-background"></div>

  <div class="slide-content" class:visible>
    <div class="slide-header">
      <h2 class="title">Casos Reales</h2>
      <p class="subtitle">Organizaciones que adoptaron IA con éxito</p>
    </div>

    <div class="cases-content">
      <div class="case-card card-glass amazon-case">
        <div class="case-header">
          <Building2 size={48} />
          <div>
            <h3>Amazon - CodeWhisperer</h3>
            <span class="case-tag">Migración Java 8 → 17</span>
          </div>
        </div>

        <div class="case-stats">
          <div class="stat-item">
            <div class="stat-number">
              $<span bind:this={amazonSavingsEl}>0</span>M
            </div>
            <p>Ahorro estimado en costos de developer</p>
          </div>
          <div class="stat-item">
            <div class="stat-number">
              <span bind:this={amazonDevsEl}>0</span>+
            </div>
            <p>Developers usando IA internamente</p>
          </div>
        </div>

        <div class="case-details">
          <h4>🎯 Estrategia</h4>
          <ul>
            <li><strong>Scope limitado:</strong> Solo upgrade Java, no refactors</li>
            <li><strong>Validación automática:</strong> Tests + build pasando antes de merge</li>
            <li><strong>Review humano:</strong> Senior devs validan cambios críticos</li>
            <li><strong>Rollout gradual:</strong> 10% → 50% → 100% de servicios</li>
          </ul>
        </div>

        <div class="case-results">
          <div class="result success">
            <span class="result-icon">✅</span>
            <p>79% del código migrado automáticamente</p>
          </div>
          <div class="result success">
            <span class="result-icon">✅</span>
            <p>6 meses vs 2 años estimado manualmente</p>
          </div>
        </div>
      </div>


      <div class="lessons-learned card-glass">
        <h3>📚 Lecciones Aprendidas</h3>
        <div class="lessons-grid">
          <div class="lesson">
            <div class="lesson-icon success">
              <TrendingUp size={28} />
            </div>
            <h4>Qué Funcionó</h4>
            <ul>
              <li>Scope limitado y claro</li>
              <li>Validación automática + review humano</li>
              <li>Rollout gradual con métricas</li>
              <li>Training previo del equipo</li>
            </ul>
          </div>

        </div>
      </div>

      <div class="takeaway card-glass">
        <p><strong>Conclusión:</strong> La IA es poderosa para tareas mecánicas y repetitivas, pero requiere guardrails estrictos, validación automática, y review humano para casos críticos.</p>
      </div>
    </div>
  </div>
</div>

<style>
  .slide-cases {
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
      radial-gradient(circle at 40% 30%, rgba(34, 197, 94, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 60% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
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

  .case-card {
    padding: var(--spacing-2xl);
    margin-bottom: var(--spacing-2xl);
    border-left: 4px solid var(--color-electric);
  }

  .case-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-xl);
  }

  .case-header :global(svg) {
    color: var(--color-electric);
  }

  .case-header h3 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: var(--spacing-xs);
  }

  .case-tag {
    display: inline-block;
    padding: var(--spacing-xs) var(--spacing-sm);
    background: rgba(59, 130, 246, 0.2);
    color: var(--color-electric);
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: var(--radius-sm);
  }

  .case-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-xl);
  }

  .stat-item {
    text-align: center;
    padding: var(--spacing-md);
    background: rgba(10, 22, 40, 0.4);
    border-radius: var(--radius-md);
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: 900;
    font-family: var(--font-display);
    color: var(--color-electric);
    margin-bottom: var(--spacing-sm);
  }

  .stat-number.critical {
    color: #22c55e;
  }

  .stat-item p {
    font-size: 0.85rem;
    opacity: 0.85;
  }

  .case-details {
    margin-bottom: var(--spacing-xl);
  }

  .case-details h4 {
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: var(--spacing-md);
    color: var(--color-electric);
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    padding: var(--spacing-xs) 0 var(--spacing-xs) var(--spacing-lg);
    position: relative;
    font-size: 0.9rem;
    opacity: 0.85;
  }

  ul li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--color-electric);
    font-size: 1.5rem;
    line-height: 0.9;
  }

  ul li strong {
    color: var(--color-electric);
  }

  .case-results {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .result {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-sm);
  }

  .result.success {
    background: rgba(34, 197, 94, 0.1);
    border-left: 3px solid #22c55e;
  }

  .result-icon {
    font-size: 1.25rem;
    flex-shrink: 0;
  }

  .result p {
    font-size: 0.9rem;
    opacity: 0.9;
  }

  .lessons-learned {
    padding: var(--spacing-2xl);
    margin-bottom: var(--spacing-xl);
  }

  .lessons-learned h3 {
    text-align: center;
    margin-bottom: var(--spacing-xl);
  }

  .lessons-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .lesson {
    padding: var(--spacing-lg);
    background: rgba(10, 22, 40, 0.4);
    border-radius: var(--radius-md);
  }

  .lesson-icon {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--spacing-md);
  }

  .lesson-icon.success {
    background: rgba(34, 197, 94, 0.1);
    color: #22c55e;
  }

  .lesson-icon.warning {
    background: rgba(251, 146, 60, 0.1);
    color: #fb923c;
  }

  .lesson h4 {
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: var(--spacing-md);
  }

  .takeaway {
    padding: var(--spacing-xl);
    text-align: center;
    border: 2px solid var(--color-electric);
    background: rgba(59, 130, 246, 0.05);
  }

  .takeaway p {
    font-size: 1.125rem;
    line-height: 1.6;
  }

  .takeaway strong {
    color: var(--color-electric);
  }

  @media (max-width: 1024px) {
    .case-stats, .lessons-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .slide-content {
      padding: var(--spacing-2xl) var(--spacing-lg);
    }

    .case-card, .lessons-learned {
      padding: var(--spacing-xl);
    }

    .stat-number {
      font-size: 2rem;
    }
  }
</style>
