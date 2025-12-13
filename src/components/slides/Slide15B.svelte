<script>
  import { onMount } from 'svelte';

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<div class="slide slide-guardrails-techniques swiper-slide">
  <div class="slide-background"></div>

  <div class="slide-content" class:visible>
    <div class="slide-header">
      <h2 class="title">Técnicas Avanzadas</h2>
      <p class="subtitle">Potenciando prompts con Few-Shot y Chain-of-Thought</p>
    </div>

    <div class="techniques-content">
      <div class="techniques-grid">
        <div class="technique-card card-glass">
          <h3>🎯 Few-Shot Learning</h3>
          <div class="technique-body">
            <p class="description">Incluye 2-3 ejemplos de revisiones previas para anclar el comportamiento deseado:</p>
            <div class="example-section">
              <div class="example-item good">
                <span class="example-label">✅ Ejemplo Bueno:</span>
                <code>"Critical: SQL query concatena user input sin sanitizar (línea 67)"</code>
              </div>
              <div class="example-item bad">
                <span class="example-label">❌ Ejemplo Malo:</span>
                <code>"El código podría mejorar"</code>
              </div>
            </div>
            <p class="benefit">Los modelos aprenden patrones del output deseado mejorando precisión 30-40%</p>
          </div>
        </div>

        <div class="technique-card card-glass">
          <h3>🧠 Chain-of-Thought</h3>
          <div class="technique-body">
            <p class="description">Fuerza razonamiento explícito paso a paso:</p>
            <div class="example-section">
              <code class="cot-example">"Antes de listar findings, explica:<br/>1) Qué hace el código<br/>2) Qué podría fallar<br/>3) Por qué es crítico"</code>
            </div>
            <p class="benefit">Reduce hallucinations y mejora hallazgos de seguridad en 25-35%</p>
          </div>
        </div>
      </div>

      <div class="best-practices card-glass">
        <h3>✅ Reglas de Oro</h3>
        <div class="practices-grid">
          <div class="practice-item">
            <span class="practice-icon">🎯</span>
            <div>
              <p><strong>Específico:</strong> "Revisa auth.ts:45-67" > "Revisa el código"</p>
            </div>
          </div>
          <div class="practice-item">
            <span class="practice-icon">📏</span>
            <div>
              <p><strong>Medible:</strong> Pide formato estructurado, no prosa libre</p>
            </div>
          </div>
          <div class="practice-item">
            <span class="practice-icon">🔍</span>
            <div>
              <p><strong>Acotado:</strong> Max 200-400 LOC por prompt</p>
            </div>
          </div>
          <div class="practice-item">
            <span class="practice-icon">🧪</span>
            <div>
              <p><strong>Testeable:</strong> Valida outputs con scripts automáticos</p>
            </div>
          </div>
        </div>
      </div>

      <div class="key-takeaway card-glass">
        <p><strong>Recuerda:</strong> Un prompt bien estructurado con ejemplos + razonamiento explícito = 40-50% mejor precisión que prompts genéricos</p>
      </div>
    </div>
  </div>
</div>

<style>
  .slide-guardrails-techniques {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  @media (max-width: 600px) {
    .slide-guardrails-techniques {
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

  .techniques-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-grid);
  }

  .techniques-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-grid);
  }

  .technique-card {
    padding: var(--spacing-card);
    border-left: 4px solid var(--color-electric);
  }

  .technique-card h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: var(--spacing-grid);
    color: var(--color-electric);
  }

  .technique-body {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-grid);
  }

  .description {
    font-size: 0.95rem;
    opacity: 0.9;
    margin: 0;
  }

  .example-section {
    background: rgba(10, 22, 40, 0.6);
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
    border-left: 2px solid var(--color-electric);
  }

  .example-item {
    margin-bottom: var(--spacing-sm);
  }

  .example-item:last-child {
    margin-bottom: 0;
  }

  .example-label {
    display: block;
    font-family: var(--font-mono);
    font-weight: 700;
    font-size: 0.85rem;
    margin-bottom: var(--spacing-xs);
  }

  .example-item.good .example-label {
    color: #22c55e;
  }

  .example-item.bad .example-label {
    color: #ef4444;
  }

  code {
    display: block;
    font-family: var(--font-mono);
    font-size: 0.8rem;
    padding: var(--spacing-xs);
    background: rgba(10, 22, 40, 0.4);
    border-radius: var(--radius-sm);
    color: #60a5fa;
    opacity: 0.9;
  }

  .cot-example {
    white-space: pre-wrap;
    word-break: break-word;
  }

  .benefit {
    font-size: 0.85rem;
    opacity: 0.8;
    margin: 0;
    padding: var(--spacing-sm);
    background: rgba(34, 197, 94, 0.1);
    border-radius: var(--radius-sm);
    color: #22c55e;
  }

  .best-practices {
    padding: var(--spacing-card);
  }

  .best-practices h3 {
    text-align: center;
    font-size: 1.25rem;
    margin-bottom: var(--spacing-grid);
    color: var(--color-electric);
  }

  .practices-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-grid);
  }

  .practice-item {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-grid);
    padding: var(--spacing-md);
    background: rgba(10, 22, 40, 0.4);
    border-radius: var(--radius-md);
  }

  .practice-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  .practice-item p {
    font-size: 0.9rem;
    opacity: 0.9;
    margin: 0;
  }

  .practice-item strong {
    color: var(--color-electric);
  }

  .key-takeaway {
    padding: var(--spacing-card);
    text-align: center;
    border: 2px solid var(--color-electric);
    background: rgba(59, 130, 246, 0.05);
  }

  .key-takeaway p {
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
  }

  .key-takeaway strong {
    color: var(--color-electric);
  }

  @media (max-width: 1024px) {
    .techniques-grid {
      grid-template-columns: 1fr;
    }

    .practices-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .slide-content {
      padding: var(--spacing-2xl) var(--spacing-lg);
    }

    .technique-card, .best-practices, .key-takeaway {
      padding: var(--spacing-lg);
    }

    .title {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1rem;
    }
  }
</style>
