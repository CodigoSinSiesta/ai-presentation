<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';

  let slideElement: HTMLElement;

  onMount(() => {
    animateSlideEntrance(slideElement);
  });
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>
  
  <div class="slide-content">
    <div class="slide-header">
      <h2 class="title">
        <span class="highlight">Agentes</span> vs <span class="secondary">Chatbots</span>
      </h2>
      <p class="subtitle">
        De la conversación a la acción
      </p>
    </div>

    <div class="comparison-grid">
      <!-- Chatbot Column -->
      <div class="comparison-column">
        <div class="column-header chatbot-header">
          <div class="icon">💬</div>
          <h3>Chatbot Tradicional</h3>
        </div>
        <div class="feature-card card-glass">
          <h4>🎯 Propósito</h4>
          <p>Responder preguntas y mantener conversaciones</p>
        </div>
        <div class="feature-card card-glass">
          <h4>🔧 Capacidades</h4>
          <ul>
            <li>Procesar texto</li>
            <li>Generar respuestas</li>
            <li>Mantener contexto conversacional</li>
          </ul>
        </div>
        <div class="feature-card card-glass">
          <h4>⚡ Limitaciones</h4>
          <ul>
            <li>Sin acceso a herramientas externas</li>
            <li>No puede ejecutar acciones</li>
            <li>Conocimiento estático</li>
          </ul>
        </div>
        <div class="example-card card-glass">
          <strong>Ejemplo:</strong>
          <p>"¿Cuál es el clima hoy?"</p>
          <p class="response">❌ "No tengo acceso a datos en tiempo real"</p>
        </div>
      </div>

      <!-- Agent Column -->
      <div class="comparison-column">
        <div class="column-header agent-header">
          <div class="icon">🤖</div>
          <h3>Agente IA</h3>
        </div>
        <div class="feature-card card-glass highlight-card">
          <h4>🎯 Propósito</h4>
          <p>Ejecutar tareas y resolver problemas complejos</p>
        </div>
        <div class="feature-card card-glass highlight-card">
          <h4>🔧 Capacidades</h4>
          <ul>
            <li>Todo lo del chatbot, más:</li>
            <li><strong>Usar herramientas (Tools)</strong></li>
            <li><strong>Ejecutar código</strong></li>
            <li><strong>Acceder a APIs y servicios</strong></li>
            <li><strong>Tomar decisiones autónomas</strong></li>
          </ul>
        </div>
        <div class="feature-card card-glass highlight-card">
          <h4>⚡ Ventajas</h4>
          <ul>
            <li>Acceso a información en tiempo real</li>
            <li>Puede realizar acciones concretas</li>
            <li>Extensible vía herramientas</li>
          </ul>
        </div>
        <div class="example-card card-glass highlight-card">
          <strong>Ejemplo:</strong>
          <p>"¿Cuál es el clima hoy?"</p>
          <p class="response">✅ Usa API meteorológica → "25°C, soleado"</p>
        </div>
      </div>
    </div>

    <div class="key-concept card-glass">
      <div class="concept-icon">🔑</div>
      <div class="concept-text">
        <h3>Concepto Clave: Tools (Herramientas)</h3>
        <p>
          Los <strong>tools</strong> son funciones que el agente puede invocar para interactuar con el mundo exterior. 
          Ejemplos: buscar en internet, leer archivos, ejecutar código, consultar bases de datos, enviar emails, etc.
          Sin tools, un modelo de IA es solo un chatbot conversacional.
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  .swiper-slide {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-content);
    overflow-y: auto;
  }

  .slide-background {
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(circle at 25% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 75% 70%, rgba(30, 58, 138, 0.1) 0%, transparent 50%);
    z-index: 1;
  }

  .slide-content {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 1600px;
  }

  .slide-header {
    text-align: center;
    margin-bottom: var(--spacing-xl);
  }

  .title {
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 800;
    margin-bottom: var(--spacing-md);
  }

  .highlight {
    background: linear-gradient(135deg, var(--color-accent-bright), var(--color-electric));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .secondary {
    color: var(--color-neutral-light);
    opacity: 0.7;
  }

  .subtitle {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: var(--color-electric);
    opacity: 0.9;
  }

  .comparison-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-2xl);
    margin-bottom: var(--spacing-2xl);
  }

  .comparison-column {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .column-header {
    text-align: center;
    padding: var(--spacing-lg);
    border-radius: var(--radius-lg);
    margin-bottom: var(--spacing-md);
  }

  .chatbot-header {
    background: rgba(30, 58, 138, 0.2);
  }

  .agent-header {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(96, 165, 250, 0.2));
    border: 2px solid var(--color-accent-bright);
  }

  .icon {
    font-size: 3rem;
    margin-bottom: var(--spacing-sm);
  }

  .column-header h3 {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--color-neutral-light);
  }

  .feature-card {
    padding: var(--spacing-lg);
    transition: transform var(--transition-base);
  }

  .feature-card:hover {
    transform: translateX(4px);
  }

  .highlight-card {
    border-left: 3px solid var(--color-accent-bright);
  }

  .feature-card h4 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-neutral-light);
    margin-bottom: var(--spacing-sm);
  }

  .feature-card p {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--color-neutral-light);
    opacity: 0.9;
  }

  .feature-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .feature-card li {
    font-size: 1rem;
    line-height: 1.8;
    color: var(--color-neutral-light);
    opacity: 0.9;
    padding-left: 1.25rem;
    position: relative;
  }

  .feature-card li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--color-accent-bright);
    font-weight: bold;
  }

  .example-card {
    padding: var(--spacing-lg);
    background: rgba(10, 22, 40, 0.6);
    border: 1px solid rgba(59, 130, 246, 0.3);
  }

  .example-card strong {
    color: var(--color-electric);
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: block;
    margin-bottom: var(--spacing-sm);
  }

  .example-card p {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--color-neutral-light);
    margin: var(--spacing-xs) 0;
  }

  .response {
    font-family: var(--font-mono);
    font-size: 0.9rem;
    padding: var(--spacing-sm);
    background: rgba(30, 58, 138, 0.3);
    border-radius: var(--radius-sm);
    margin-top: var(--spacing-sm);
  }

  .key-concept {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-lg);
    padding: var(--spacing-xl);
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(30, 58, 138, 0.1));
    border: 2px solid var(--color-accent-bright);
  }

  .concept-icon {
    font-size: 3rem;
    flex-shrink: 0;
  }

  .concept-text h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-neutral-light);
    margin-bottom: var(--spacing-sm);
  }

  .concept-text p {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--color-neutral-light);
    opacity: 0.9;
  }

  .concept-text strong {
    color: var(--color-accent-bright);
  }

  @media (max-width: 1024px) {
    .comparison-grid {
      grid-template-columns: 1fr;
      gap: var(--spacing-xl);
    }
  }

  @media (max-width: 768px) {
    .slide-content {
      padding: var(--spacing-lg);
    }

    .key-concept {
      flex-direction: column;
      text-align: center;
    }

    .concept-icon {
      margin: 0 auto;
    }
  }
</style>
