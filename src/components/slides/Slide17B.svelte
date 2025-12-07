<script>
  import { onMount } from 'svelte';
  import { Shield, AlertCircle } from 'lucide-svelte';
  import { animateCounter } from '../../utils/animations';

  let visible = false;
  let ukMigratedEl, ukBugsEl;

  onMount(() => {
    visible = true;
    setTimeout(() => {
      if (ukMigratedEl) animateCounter(ukMigratedEl, 30000, 0);
      if (ukBugsEl) animateCounter(ukBugsEl, 0, 0);
    }, 300);
  });
</script>

<div class="slide slide-cases-uk swiper-slide">
  <div class="slide-background"></div>

  <div class="slide-content" class:visible>
    <div class="slide-header">
      <h2 class="title">UK Government - Deep Dive</h2>
      <p class="subtitle">Modernización de legacy systems con IA</p>
    </div>

    <div class="cases-content">
      <div class="case-card card-glass uk-case">
        <div class="case-header">
          <Shield size={44} />
          <div>
            <h3>UK Government Digital Service</h3>
            <span class="case-tag">Modernización Legacy Systems</span>
          </div>
        </div>

        <div class="case-stats">
          <div class="stat-item">
            <div class="stat-number">
              <span bind:this={ukMigratedEl}>0</span>
            </div>
            <p>Líneas de código migradas de .NET Framework</p>
          </div>
          <div class="stat-item">
            <div class="stat-number critical">
              <span bind:this={ukBugsEl}>0</span>
            </div>
            <p>Vulnerabilidades críticas introducidas</p>
          </div>
        </div>

        <div class="case-details">
          <h4>🛡️ Guardrails Implementados</h4>
          <ul>
            <li><strong>Pre-commit hooks:</strong> SonarQube + OWASP scan</li>
            <li><strong>Prompt templates:</strong> Contexto de seguridad obligatorio</li>
            <li><strong>Manual review:</strong> 2 seniors + 1 security expert por PR</li>
            <li><strong>Staged rollout:</strong> Canary deploys con monitoreo 24/7</li>
          </ul>
        </div>

        <div class="case-results">
          <div class="result success">
            <span class="result-icon">✅</span>
            <p>40% reducción en tiempo de migración</p>
          </div>
          <div class="result success">
            <span class="result-icon">✅</span>
            <p>100% de tests pasando antes de prod</p>
          </div>
        </div>
      </div>

      <div class="lessons-learned card-glass">
        <h3>📚 Qué NO Funcionó</h3>
        <ul class="lessons-list">
          <li>Confiar 100% en código generado sin review</li>
          <li>Mixing refactor + upgrade en mismo PR</li>
          <li>Deploy a prod sin tests de integración</li>
          <li>Ignorar warnings de herramientas de seguridad</li>
        </ul>
      </div>

      <div class="takeaway card-glass">
        <p><strong>Conclusión:</strong> La IA es poderosa para tareas mecánicas y repetitivas, pero requiere guardrails estrictos, validación automática, y review humano para casos críticos.</p>
      </div>
    </div>
  </div>
</div>

<style>
  .slide-cases-uk {
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
    margin-bottom: var(--spacing-grid);
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

  .cases-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-grid);
  }

  .case-card {
    padding: var(--spacing-card);
    border-left: 4px solid var(--color-electric);
  }

  .case-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-grid);
    margin-bottom: var(--spacing-grid);
  }

  .case-header :global(svg) {
    color: var(--color-electric);
    flex-shrink: 0;
  }

  .case-header h3 {
    font-size: 1.5rem;
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
    gap: var(--spacing-grid);
    margin-bottom: var(--spacing-grid);
  }

  .stat-item {
    text-align: center;
    padding: var(--spacing-md);
    background: rgba(10, 22, 40, 0.4);
    border-radius: var(--radius-md);
  }

  .stat-number {
    font-size: 2.2rem;
    font-weight: 900;
    font-family: var(--font-display);
    color: var(--color-electric);
    margin-bottom: var(--spacing-xs);
  }

  .stat-number.critical {
    color: #22c55e;
  }

  .stat-item p {
    font-size: 0.8rem;
    opacity: 0.85;
  }

  .case-details {
    margin-bottom: var(--spacing-grid);
  }

  .case-details h4 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
    color: var(--color-electric);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul li {
    padding: var(--spacing-xs) 0 var(--spacing-xs) var(--spacing-lg);
    position: relative;
    font-size: 0.85rem;
    opacity: 0.85;
  }

  .case-details ul li::before {
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
    gap: var(--spacing-grid);
  }

  .result {
    display: flex;
    align-items: center;
    gap: var(--spacing-grid);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-sm);
    font-size: 0.85rem;
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
    opacity: 0.9;
    margin: 0;
  }

  .lessons-learned {
    padding: var(--spacing-lg);
  }

  .lessons-learned h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: var(--spacing-grid);
    color: #fb923c;
  }

  .lessons-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-grid);
  }

  .lessons-list li {
    padding: var(--spacing-sm);
    background: rgba(251, 146, 60, 0.1);
    border-left: 2px solid #fb923c;
    border-radius: var(--radius-sm);
    font-size: 0.85rem;
  }

  .lessons-list li::before {
    content: '⚠️';
    position: absolute;
    left: var(--spacing-sm);
  }

  .takeaway {
    padding: var(--spacing-lg);
    text-align: center;
    border: 2px solid var(--color-electric);
    background: rgba(59, 130, 246, 0.05);
  }

  .takeaway p {
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
  }

  .takeaway strong {
    color: var(--color-electric);
  }

  @media (max-width: 1024px) {
    .case-stats {
      grid-template-columns: 1fr;
    }

    .lessons-list {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .slide-content {
      padding: var(--spacing-2xl) var(--spacing-lg);
    }

    .case-card, .lessons-learned, .takeaway {
      padding: var(--spacing-lg);
    }

    .title {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1rem;
    }

    .stat-number {
      font-size: 1.8rem;
    }
  }
</style>
