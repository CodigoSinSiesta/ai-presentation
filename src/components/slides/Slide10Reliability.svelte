<script>
  import { onMount } from 'svelte';
  import { TestTube, CheckCircle, XCircle, RefreshCw } from 'lucide-svelte';

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<div class="slide slide-reliability swiper-slide">
  <div class="slide-background"></div>

  <div class="slide-content" class:visible>
    <div class="slide-header">
      <div class="r-badge">R3</div>
      <h2 class="title">Confiabilidad</h2>
      <p class="subtitle">TDD con IA: Genera tests, hazlos pasar, itera</p>
    </div>

    <div class="reliability-content">
      <div class="tdd-workflow card-glass">
        <h3>🔄 Flujo TDD con IA</h3>
        <div class="workflow-steps">
          <div class="workflow-step">
            <div class="step-icon red">
              <XCircle size={32} />
            </div>
            <div class="step-content">
              <h4>1. RED</h4>
              <p>IA genera tests que fallan</p>
            </div>
          </div>
          <div class="workflow-arrow">→</div>
          <div class="workflow-step">
            <div class="step-icon green">
              <CheckCircle size={32} />
            </div>
            <div class="step-content">
              <h4>2. GREEN</h4>
              <p>IA genera código que pasa</p>
            </div>
          </div>
          <div class="workflow-arrow">→</div>
          <div class="workflow-step">
            <div class="step-icon blue">
              <RefreshCw size={32} />
            </div>
            <div class="step-content">
              <h4>3. REFACTOR</h4>
              <p>Humano revisa y mejora</p>
            </div>
          </div>
        </div>
      </div>

      <div class="checklist-grid">
        <div class="checklist-card card-glass">
          <h3>✅ Tests Esenciales</h3>
          <ul>
            <li>Happy path</li>
            <li>Edge cases</li>
            <li>Error handling</li>
            <li>Null/undefined</li>
          </ul>
        </div>

        <div class="checklist-card card-glass">
          <h3>🎯 Cobertura Mínima</h3>
          <div class="coverage-bars">
            <div class="coverage-item">
              <span>Critical paths</span>
              <div class="bar full">100%</div>
            </div>
            <div class="coverage-item">
              <span>Business logic</span>
              <div class="bar high">90%</div>
            </div>
            <div class="coverage-item">
              <span>Overall</span>
              <div class="bar medium">80%</div>
            </div>
          </div>
        </div>

        <div class="checklist-card card-glass">
          <h3>⚠️ Red Flags</h3>
          <ul class="warning-list">
            <li>Tests que siempre pasan</li>
            <li>Sin assertions</li>
            <li>Mocks excesivos</li>
            <li>Tests frágiles</li>
            <li>Sin tests de integración</li>
          </ul>
        </div>

        <div class="checklist-card card-glass">
          <h3>🛠️ Herramientas</h3>
          <div class="tools">
            <span class="tool-badge">Jest / Pytest</span>
            <span class="tool-badge">Coverage.py</span>
            <span class="tool-badge">Mutation Testing</span>
            <span class="tool-badge">Property-based</span>
          </div>
        </div>
      </div>

      <div class="key-insight card-glass">
        <TestTube size={40} />
        <p><strong>Clave:</strong> La IA puede generar tests rápido, pero el humano debe validar que cubren los casos importantes</p>
      </div>
    </div>
  </div>
</div>

<style>
  .slide-reliability {
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
      radial-gradient(circle at 35% 35%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 65% 65%, rgba(96, 165, 250, 0.08) 0%, transparent 50%);
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
     margin-bottom: var(--spacing-md);
   }

   .r-badge {
     display: inline-block;
     padding: var(--spacing-xs) var(--spacing-md);
     background: linear-gradient(135deg, var(--color-accent-bright), var(--color-electric));
     color: var(--color-base-dark);
     font-weight: 900;
     font-family: var(--font-display);
     border-radius: var(--radius-lg);
     margin-bottom: var(--spacing-sm);
     font-size: 1rem;
   }

   .title {
     font-size: clamp(2.5rem, 5vw, 3.5rem);
     font-weight: 800;
     margin-bottom: var(--spacing-sm);
   }

  .subtitle {
    font-size: clamp(1.125rem, 2.5vw, 1.5rem);
    color: var(--color-electric);
    font-weight: 500;
  }

   .tdd-workflow {
     padding: var(--spacing-card);
     margin-bottom: var(--spacing-md);
     text-align: center;
   }

   .tdd-workflow h3 {
     margin-bottom: var(--spacing-sm);
   }

   .workflow-steps {
     display: flex;
     align-items: center;
     justify-content: center;
     gap: var(--spacing-sm);
   }

   .workflow-step {
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: var(--spacing-xs);
   }

  .step-icon {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .step-icon.red {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  }

  .step-icon.green {
    background: rgba(34, 197, 94, 0.1);
    color: #22c55e;
  }

  .step-icon.blue {
    background: rgba(59, 130, 246, 0.1);
    color: var(--color-electric);
  }

  .step-content h4 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
  }

  .step-content p {
    font-size: 0.9rem;
    opacity: 0.85;
  }

  .workflow-arrow {
    font-size: 2rem;
    color: var(--color-electric);
  }

  .checklist-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-grid);
    margin-bottom: var(--spacing-grid);
  }

  .checklist-card {
    padding: var(--spacing-card);
    transition: all var(--transition-base);
  }

  .checklist-card:hover {
    transform: translateY(-6px);
  }

  h3 {
    font-size: 1.375rem;
    font-weight: 700;
    margin-bottom: var(--spacing-grid);
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    padding: var(--spacing-sm) 0 var(--spacing-sm) var(--spacing-lg);
    position: relative;
    font-size: 0.95rem;
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

  .warning-list li::before {
    content: '⚠';
    font-size: 1rem;
  }

  .coverage-bars {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-grid);
  }

  .coverage-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--spacing-grid);
  }

  .coverage-item span {
    font-size: 0.9rem;
    opacity: 0.85;
  }

  .bar {
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-sm);
    font-weight: 700;
    font-family: var(--font-mono);
    font-size: 0.9rem;
  }

  .bar.full {
    background: rgba(34, 197, 94, 0.2);
    color: #22c55e;
  }

  .bar.high {
    background: rgba(59, 130, 246, 0.2);
    color: var(--color-electric);
  }

  .bar.medium {
    background: rgba(251, 146, 60, 0.2);
    color: #fb923c;
  }

  .tools {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-grid);
  }

  .tool-badge {
    font-size: 0.75rem;
    font-weight: 600;
    font-family: var(--font-mono);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--radius-sm);
    background: rgba(59, 130, 246, 0.15);
    border: 1px solid rgba(96, 165, 250, 0.3);
    color: var(--color-electric);
  }

  .key-insight {
    padding: var(--spacing-card);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-grid);
    border: 2px solid var(--color-electric);
  }

  .key-insight p {
    font-size: 1.125rem;
    line-height: 1.6;
  }

  .key-insight strong {
    color: var(--color-electric);
  }

  @media (max-width: 1024px) {
    .checklist-grid {
      grid-template-columns: 1fr;
    }

    .workflow-steps {
      flex-direction: column;
    }

    .workflow-arrow {
      transform: rotate(90deg);
    }
  }

  @media (max-width: 768px) {
    .slide-content {
      padding: var(--spacing-2xl) var(--spacing-lg);
    }

    .checklist-card {
      padding: var(--spacing-card);
    }
  }
</style>
