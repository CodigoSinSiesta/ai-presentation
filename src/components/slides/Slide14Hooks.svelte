<script>
  import { onMount } from 'svelte';
  import { GitCommit, CheckCircle2, XCircle, Shield } from 'lucide-svelte';

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<div class="slide slide-hooks swiper-slide">
  <div class="slide-background"></div>

  <div class="slide-content" class:visible>
    <div class="slide-header">
      <h2 class="title">Pre-commit Hooks</h2>
      <p class="subtitle">Pipeline automático antes de cada commit</p>
    </div>

    <div class="hooks-content">
      <div class="pipeline-visual card-glass">
        <h3>🔄 Pipeline de Validación</h3>
        <div class="pipeline-stages">
          <div class="stage">
            <div class="stage-icon"><CheckCircle2 size={28} /></div>
            <h4>Lint</h4>
            <p>ESLint, Pylint</p>
          </div>
          <div class="arrow">→</div>
          <div class="stage">
            <div class="stage-icon"><CheckCircle2 size={28} /></div>
            <h4>Format</h4>
            <p>Prettier, Black</p>
          </div>
          <div class="arrow">→</div>
          <div class="stage">
            <div class="stage-icon"><Shield size={28} /></div>
            <h4>Security</h4>
            <p>Secrets, vulnerabilities</p>
          </div>
          <div class="arrow">→</div>
          <div class="stage">
            <div class="stage-icon"><CheckCircle2 size={28} /></div>
            <h4>Tests</h4>
            <p>Unit, integration</p>
          </div>
          <div class="arrow">→</div>
          <div class="stage success">
            <div class="stage-icon"><GitCommit size={28} /></div>
            <h4>Commit ✓</h4>
            <p>Código validado</p>
          </div>
        </div>
      </div>

      <div class="husky-section">
        <div class="tool-card card-glass">
          <div class="tool-header">
            <h3>🐕 Husky</h3>
            <span class="badge">Instalación en 5 minutos</span>
          </div>
          <div class="installation">
            <code>npm install --save-dev husky</code>
            <code>npx husky init</code>
            <code>echo "npm test" &gt; .husky/pre-commit</code>
          </div>
        </div>

        <div class="benefits-card card-glass">
          <h3>✅ Beneficios</h3>
          <ul>
            <li>Bloquea commits con fallos</li>
            <li>Detecta secretos antes de push</li>
            <li>Mantiene estándares de código</li>
            <li>Reduce bugs en producción</li>
            <li>Feedback inmediato al desarrollador</li>
          </ul>
        </div>
      </div>

      <div class="example-config card-glass">
        <h3>📝 Ejemplo de Configuración</h3>
        <div class="config-box">
          <div class="config-item">
            <span class="config-label">pre-commit:</span>
            <code>npm run lint && npm run test</code>
          </div>
          <div class="config-item">
            <span class="config-label">pre-push:</span>
            <code>npm run build && npm run e2e</code>
          </div>
          <div class="config-item">
            <span class="config-label">commit-msg:</span>
            <code>npx commitlint --edit $1</code>
          </div>
        </div>
      </div>

      <div class="warning-box card-glass">
        <XCircle size={32} />
        <p><strong>Advertencia:</strong> Hooks lentos (&gt;30s) frustran a developers. Optimiza tests para velocidad.</p>
      </div>
    </div>
  </div>
</div>

<style>
  .slide-hooks {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  @media (max-width: 600px) {
    .slide-hooks {
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
      radial-gradient(circle at 35% 35%, rgba(34, 197, 94, 0.08) 0%, transparent 50%),
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

  .pipeline-visual {
    padding: var(--spacing-card);
    margin-bottom: var(--spacing-grid);
  }

  .pipeline-visual h3 {
    text-align: center;
    margin-bottom: var(--spacing-grid);
  }

  .pipeline-stages {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-grid);
    flex-wrap: wrap;
  }

  .stage {
    text-align: center;
    padding: var(--spacing-sm);
    min-width: 120px;
  }

  .stage-icon {
    width: 56px;
    height: 56px;
    margin: 0 auto var(--spacing-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(34, 197, 94, 0.1);
    color: #22c55e;
  }

  .stage.success .stage-icon {
    background: rgba(59, 130, 246, 0.1);
    color: var(--color-electric);
  }

  .stage h4 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: var(--spacing-xs);
  }

  .stage p {
    font-size: 0.8rem;
    opacity: 0.75;
  }

  .arrow {
    color: var(--color-electric);
    font-size: 1.5rem;
    opacity: 0.6;
  }

  .husky-section {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: var(--spacing-grid);
    margin-bottom: var(--spacing-grid);
  }

  .tool-card, .benefits-card {
    padding: var(--spacing-card);
  }

  .tool-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-grid);
  }

  .tool-header h3 {
    font-size: 1.75rem;
  }

  .badge {
    padding: var(--spacing-xs) var(--spacing-md);
    background: rgba(34, 197, 94, 0.2);
    color: #22c55e;
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: var(--radius-md);
  }

  .installation {
    background: rgba(10, 22, 40, 0.6);
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
    border-left: 3px solid #22c55e;
  }

  .installation code {
    display: block;
    font-family: var(--font-mono);
    font-size: 0.9rem;
    padding: var(--spacing-sm) 0;
    color: #22c55e;
  }

  .benefits-card h3 {
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
    content: '✓';
    position: absolute;
    left: 0;
    color: #22c55e;
    font-weight: 900;
  }

  .example-config {
    padding: var(--spacing-card);
    margin-bottom: var(--spacing-grid);
  }

  .example-config h3 {
    margin-bottom: var(--spacing-grid);
  }

  .config-box {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-grid);
  }

  .config-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-grid);
    background: rgba(10, 22, 40, 0.6);
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
    border-left: 2px solid var(--color-electric);
  }

  .config-label {
    font-family: var(--font-mono);
    font-weight: 700;
    color: var(--color-electric);
    min-width: 120px;
  }

  .config-item code {
    font-family: var(--font-mono);
    font-size: 0.9rem;
    color: var(--color-electric);
  }

  .warning-box {
    padding: var(--spacing-card);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-grid);
    border: 2px solid #fb923c;
    background: rgba(251, 146, 60, 0.05);
  }

  .warning-box :global(svg) {
    color: #fb923c;
    flex-shrink: 0;
  }

  .warning-box p {
    font-size: 1.125rem;
    line-height: 1.6;
  }

  .warning-box strong {
    color: #fb923c;
  }

  @media (max-width: 1024px) {
    .husky-section {
      grid-template-columns: 1fr;
    }

    .pipeline-stages {
      flex-direction: column;
    }

    .arrow {
      transform: rotate(90deg);
    }
  }

  @media (max-width: 768px) {
    .slide-content {
      padding: var(--spacing-2xl) var(--spacing-lg);
    }

    .tool-card, .benefits-card, .example-config {
      padding: var(--spacing-card);
    }
  }
</style>
