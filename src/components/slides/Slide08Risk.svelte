<script>
  import { onMount } from 'svelte';
  import { Shield, Key, AlertTriangle, Database } from 'lucide-svelte';

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<div class="slide slide-risk swiper-slide">
  <div class="slide-background"></div>

  <div class="slide-content" class:visible>
    <div class="slide-header">
      <div class="r-badge">R1</div>
      <h2 class="title">Riesgo</h2>
      <p class="subtitle">Preguntas críticas de seguridad</p>
    </div>

    <div class="risk-content">
      <div class="questions-section">
        <div class="question-card card-glass">
          <div class="question-icon">
            <Key size={36} strokeWidth={2} />
          </div>
          <h3>¿Expone secretos?</h3>
          <ul class="checklist">
            <li>API keys hardcodeadas</li>
            <li>Passwords en código</li>
            <li>Tokens en repos</li>
          </ul>
        </div>

        <div class="question-card card-glass">
          <div class="question-icon">
            <Shield size={36} strokeWidth={2} />
          </div>
          <h3>¿Escala privilegios?</h3>
          <ul class="checklist">
            <li>Bypass de autenticación</li>
            <li>Acceso no autorizado</li>
            <li>Permisos excesivos</li>
          </ul>
        </div>

        <div class="question-card card-glass">
          <div class="question-icon">
            <Database size={36} strokeWidth={2} />
          </div>
          <h3>¿Valida inputs?</h3>
          <ul class="checklist">
            <li>SQL injection</li>
            <li>XSS vulnerabilities</li>
            <li>Path traversal</li>
          </ul>
        </div>

        <div class="question-card card-glass">
          <div class="question-icon">
            <AlertTriangle size={36} strokeWidth={2} />
          </div>
          <h3>¿Maneja errores?</h3>
          <ul class="checklist">
            <li>Info leaks en errors</li>
            <li>Stack traces expuestos</li>
            <li>Fail-open security</li>
          </ul>
        </div>
      </div>

      <div class="tools-section card-glass">
        <h3>🛠️ Herramientas Recomendadas</h3>
        <div class="tools-grid">
          <div class="tool-item">
            <div class="tool-name">SonarQube</div>
            <p>Análisis estático continuo</p>
          </div>
          <div class="tool-item">
            <div class="tool-name">Snyk</div>
            <p>Escaneo de vulnerabilidades</p>
          </div>
          <div class="tool-item">
            <div class="tool-name">Pre-commit hooks</div>
            <p>Validación antes de commit</p>
          </div>
          <div class="tool-item">
            <div class="tool-name">OWASP ZAP</div>
            <p>Testing de penetración</p>
          </div>
        </div>
      </div>

      <div class="action-box card-glass">
        <p><strong>Regla:</strong> Si la IA toca auth, permisos, o maneja datos sensibles → revisión manual obligatoria</p>
      </div>
    </div>
  </div>
</div>

<style>
  .slide-risk {
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
      radial-gradient(circle at 30% 40%, rgba(239, 68, 68, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
    z-index: 1;
  }

  .slide-content {
    position: relative;
    z-index: 2;
    max-width: 1400px;
    width: 100%;
    padding: var(--spacing-3xl);
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
    margin-bottom: var(--spacing-3xl);
    position: relative;
  }

  .r-badge {
    display: inline-block;
    padding: var(--spacing-sm) var(--spacing-lg);
    background: linear-gradient(135deg, #ef4444, #f87171);
    color: var(--color-base-dark);
    font-weight: 900;
    font-family: var(--font-display);
    border-radius: var(--radius-lg);
    margin-bottom: var(--spacing-md);
    font-size: 1.25rem;
  }

  .title {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    margin-bottom: var(--spacing-md);
    color: #ef4444;
  }

  .subtitle {
    font-size: clamp(1.125rem, 2.5vw, 1.5rem);
    color: #f87171;
    font-weight: 500;
  }

  .questions-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-xl);
    margin-bottom: var(--spacing-2xl);
  }

  .question-card {
    padding: var(--spacing-2xl);
    transition: all var(--transition-base);
    border-left: 4px solid #ef4444;
  }

  .question-card:hover {
    transform: translateX(8px);
    border-left-color: #f87171;
  }

  .question-icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
    margin-bottom: var(--spacing-md);
  }

  h3 {
    font-size: 1.375rem;
    font-weight: 700;
    margin-bottom: var(--spacing-md);
    color: var(--color-neutral-light);
  }

  .checklist {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .checklist li {
    padding: var(--spacing-sm) 0;
    padding-left: var(--spacing-lg);
    position: relative;
    font-size: 0.95rem;
    opacity: 0.85;
  }

  .checklist li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #ef4444;
    font-size: 1.5rem;
    line-height: 0.9;
  }

  .tools-section {
    padding: var(--spacing-2xl);
    margin-bottom: var(--spacing-xl);
    text-align: center;
  }

  .tools-section h3 {
    margin-bottom: var(--spacing-xl);
  }

  .tools-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-lg);
  }

  .tool-item {
    text-align: center;
  }

  .tool-name {
    font-size: 1.125rem;
    font-weight: 700;
    font-family: var(--font-mono);
    color: var(--color-electric);
    margin-bottom: var(--spacing-sm);
    padding: var(--spacing-sm) var(--spacing-md);
    background: rgba(59, 130, 246, 0.1);
    border-radius: var(--radius-md);
  }

  .tool-item p {
    font-size: 0.85rem;
    opacity: 0.75;
  }

  .action-box {
    padding: var(--spacing-xl);
    text-align: center;
    border: 2px solid #ef4444;
    background: rgba(239, 68, 68, 0.05);
  }

  .action-box p {
    font-size: 1.125rem;
    line-height: 1.6;
  }

  .action-box strong {
    color: #ef4444;
  }

  @media (max-width: 1024px) {
    .questions-section {
      grid-template-columns: 1fr;
    }

    .tools-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .slide-content {
      padding: var(--spacing-2xl) var(--spacing-lg);
    }

    .question-card {
      padding: var(--spacing-xl);
    }

    .tools-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
