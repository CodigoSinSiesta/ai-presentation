<script>
  import { onMount } from 'svelte';
  import { Sparkles, GitPullRequest, Zap, Users } from 'lucide-svelte';

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<div class="slide slide-reviewers swiper-slide">
  <div class="slide-background"></div>

  <div class="slide-content" class:visible>
    <div class="slide-header">
      <h2 class="title">Augmented Reviewers</h2>
      <p class="subtitle">IA como copiloto de code review</p>
    </div>

    <div class="reviewers-content">
      <div class="tools-showcase">
        <div class="tool-card card-glass">
          <div class="tool-icon">
            <Sparkles size={40} />
          </div>
          <h3>GitHub Copilot</h3>
          <div class="tool-features">
            <span class="feature">Sugerencias inline</span>
            <span class="feature">Detección de vulnerabilidades</span>
            <span class="feature">Generación de tests</span>
          </div>
          <div class="tool-stats">
            <div class="stat">
              <span class="stat-label">Adopción:</span>
              <span class="stat-value">77% Fortune 500</span>
            </div>
          </div>
        </div>

        <div class="tool-card card-glass">
          <div class="tool-icon">
            <GitPullRequest size={40} />
          </div>
          <h3>C-Rabbit (CodeRabbit)</h3>
          <div class="tool-features">
            <span class="feature">Review automático de PRs</span>
            <span class="feature">Sugerencias contextuales</span>
            <span class="feature">Análisis de cambios</span>
          </div>
          <div class="tool-stats">
            <div class="stat">
              <span class="stat-label">Tiempo ahorrado:</span>
              <span class="stat-value">30-50% review time</span>
            </div>
          </div>
        </div>

        <div class="tool-card card-glass">
          <div class="tool-icon">
            <Zap size={40} />
          </div>
          <h3>Kudu Merge</h3>
          <div class="tool-features">
            <span class="feature">Stack PRs automáticos</span>
            <span class="feature">Resolución de conflicts</span>
            <span class="feature">Merge inteligente</span>
          </div>
          <div class="tool-stats">
            <div class="stat">
              <span class="stat-label">Eficiencia:</span>
              <span class="stat-value">5x faster merges</span>
            </div>
          </div>
        </div>
      </div>

      <div class="workflow-section card-glass">
        <h3>🔄 Flujo de Trabajo Augmentado</h3>
        <div class="workflow-diagram">
          <div class="workflow-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Developer crea PR</h4>
              <p>Código + descripción básica</p>
            </div>
          </div>
          <div class="workflow-arrow">→</div>
          <div class="workflow-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>IA hace primera pasada</h4>
              <p>Detecta bugs obvios, style issues, security</p>
            </div>
          </div>
          <div class="workflow-arrow">→</div>
          <div class="workflow-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Developer corrige</h4>
              <p>Aplica sugerencias automáticas</p>
            </div>
          </div>
          <div class="workflow-arrow">→</div>
          <div class="workflow-step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Humano revisa</h4>
              <p>Foco en lógica, arquitectura, edge cases</p>
            </div>
          </div>
        </div>
      </div>

      <div class="comparison-section">
        <div class="comparison-card card-glass">
          <h3>🤖 IA es Buena Para:</h3>
          <ul>
            <li>Detectar bugs sintácticos</li>
            <li>Verificar coding standards</li>
            <li>Encontrar patrones conocidos (SQL injection, XSS)</li>
            <li>Sugerir mejoras de performance obvias</li>
          </ul>
        </div>

        <div class="comparison-card card-glass">
          <h3>👤 Humano es Esencial Para:</h3>
          <ul>
            <li>Evaluar decisiones de arquitectura</li>
            <li>Entender contexto de negocio</li>
            <li>Detectar edge cases no obvios</li>
            <li>Validar que resuelve el problema real</li>
          </ul>
        </div>
      </div>

      <div class="golden-rule card-glass">
        <Users size={36} />
        <p><strong>Clave:</strong> La IA detecta el 70-80% de issues mecánicos. El humano se enfoca en el 20% de decisiones críticas que requieren juicio experto.</p>
      </div>
    </div>
  </div>
</div>

<style>
  .slide-reviewers {
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
      radial-gradient(circle at 35% 35%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 65% 65%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
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

   .tools-showcase {
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     gap: var(--spacing-md);
     margin-bottom: var(--spacing-md);
   }

  .tool-card {
    padding: var(--spacing-card);
    text-align: center;
    transition: all var(--transition-base);
    border-top: 3px solid var(--color-electric);
  }

  .tool-card:hover {
    transform: translateY(-8px);
  }

   .tool-icon {
     margin: 0 auto var(--spacing-sm);
     width: 56px;
     height: 56px;
     border-radius: 50%;
     background: rgba(59, 130, 246, 0.1);
     color: var(--color-electric);
     display: flex;
     align-items: center;
     justify-content: center;
   }

   .tool-card h3 {
     font-size: 1.125rem;
     font-weight: 700;
     margin-bottom: var(--spacing-sm);
   }

   .tool-features {
     display: flex;
     flex-direction: column;
     gap: var(--spacing-sm);
     margin-bottom: var(--spacing-sm);
   }

  .feature {
    font-size: 0.85rem;
    padding: var(--spacing-xs) var(--spacing-sm);
    background: rgba(59, 130, 246, 0.1);
    border-radius: var(--radius-sm);
    opacity: 0.9;
  }

  .tool-stats {
    margin-top: auto;
  }

  .stat {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-sm);
    background: rgba(10, 22, 40, 0.6);
    border-radius: var(--radius-sm);
  }

  .stat-label {
    font-size: 0.75rem;
    opacity: 0.7;
  }

  .stat-value {
    font-family: var(--font-mono);
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--color-electric);
  }

  .workflow-section {
    padding: var(--spacing-card);
    margin-bottom: var(--spacing-grid);
  }

  .workflow-section h3 {
    text-align: center;
    margin-bottom: var(--spacing-grid);
  }

  .workflow-diagram {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-grid);
    flex-wrap: wrap;
  }

  .workflow-step {
    display: flex;
    align-items: center;
    gap: var(--spacing-grid);
    padding: var(--spacing-md);
    background: rgba(10, 22, 40, 0.4);
    border-radius: var(--radius-md);
    border-left: 3px solid var(--color-electric);
    min-width: 180px;
  }

  .step-number {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--color-electric), var(--color-accent-bright));
    color: var(--color-base-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-family: var(--font-display);
    flex-shrink: 0;
  }

  .step-content h4 {
    font-size: 0.95rem;
    font-weight: 700;
    margin-bottom: var(--spacing-xs);
  }

  .step-content p {
    font-size: 0.75rem;
    opacity: 0.75;
  }

  .workflow-arrow {
    font-size: 1.5rem;
    color: var(--color-electric);
  }

  .comparison-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-grid);
    margin-bottom: var(--spacing-grid);
  }

  .comparison-card {
    padding: var(--spacing-card);
  }

  .comparison-card h3 {
    margin-bottom: var(--spacing-grid);
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    padding: var(--spacing-sm) 0 var(--spacing-sm) var(--spacing-lg);
    position: relative;
    font-size: 0.9rem;
    opacity: 0.85;
  }

  ul li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--color-electric);
    font-weight: 900;
  }

  .golden-rule {
    padding: var(--spacing-card);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-grid);
    border: 2px solid var(--color-electric);
    background: rgba(59, 130, 246, 0.05);
  }

  .golden-rule :global(svg) {
    color: var(--color-electric);
    flex-shrink: 0;
  }

  .golden-rule p {
    font-size: 1.125rem;
    line-height: 1.6;
  }

  .golden-rule strong {
    color: var(--color-electric);
  }

  @media (max-width: 1024px) {
    .tools-showcase {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--spacing-grid);
    }

    .workflow-diagram {
      flex-direction: column;
    }

    .workflow-arrow {
      transform: rotate(90deg);
      margin: var(--spacing-md) 0;
    }

    .comparison-section {
      grid-template-columns: 1fr;
      gap: var(--spacing-grid);
    }
  }

  @media (max-width: 768px) {
    .tools-showcase {
      grid-template-columns: 1fr;
      gap: var(--spacing-grid);
    }

    .slide-content {
      padding: var(--spacing-content);
    }

    .tool-card, .workflow-section, .comparison-card {
      padding: var(--spacing-card);
    }

    .tool-icon {
      width: 60px;
      height: 60px;
    }

    .tool-card h3 {
      font-size: 1.25rem;
    }

    .workflow-step {
      padding: var(--spacing-md);
    }

    .workflow-step h4 {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .tools-showcase {
      gap: var(--spacing-grid);
    }

    .tool-card {
      padding: var(--spacing-md);
    }

    .workflow-diagram {
      gap: var(--spacing-grid);
    }

    .workflow-step {
      padding: var(--spacing-sm);
      font-size: 0.9rem;
    }
  }
</style>
