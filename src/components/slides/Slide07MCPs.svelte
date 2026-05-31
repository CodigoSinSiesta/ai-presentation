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
        <span class="highlight">MCP</span>
      </h2>
      <p class="subtitle">
        Model Context Protocol - El estándar para conectar agentes
      </p>
    </div>

    <div class="main-grid">
      <!-- What is MCP -->
      <div class="concept-section card-glass">
        <div class="section-icon">🔌</div>
        <h3>¿Qué es MCP?</h3>
        <p>
          MCP (Model Context Protocol) es un <strong>protocolo abierto estandarizado</strong> creado por Anthropic 
          que permite a los agentes de IA conectarse con fuentes de datos y herramientas externas de forma segura y consistente.
        </p>
      </div>

      <!-- Problem it solves -->
      <div class="problem-section card-glass">
        <div class="section-icon">⚠️</div>
        <h3>El Problema que Resuelve</h3>
        <p>Antes de MCP:</p>
        <ul>
          <li>Cada agente tenía su propia forma de conectarse a herramientas</li>
          <li>Integraciones personalizadas para cada servicio</li>
          <li>Difícil reutilizar código entre proyectos</li>
          <li>Sin estándares de seguridad comunes</li>
        </ul>
      </div>

      <!-- Architecture diagram -->
      <div class="architecture-section card-glass full-width">
        <h3>Arquitectura MCP</h3>
        <div class="architecture-diagram">
          <div class="arch-layer">
            <div class="arch-box agent-box">
              <strong>🤖 Agente IA</strong>
              <span>Claude, GPT, etc.</span>
            </div>
          </div>
          <div class="arch-arrow">↓ MCP Protocol ↓</div>
          <div class="arch-layer">
            <div class="arch-box server-box">
              <strong>🖥️ MCP Server</strong>
              <span>Expone recursos y herramientas</span>
            </div>
          </div>
          <div class="arch-arrow">↓ Conecta con ↓</div>
          <div class="arch-layer multi-layer">
            <div class="arch-box resource-box">
              <strong>📁 Archivos</strong>
            </div>
            <div class="arch-box resource-box">
              <strong>🗄️ Bases de Datos</strong>
            </div>
            <div class="arch-box resource-box">
              <strong>🌐 APIs</strong>
            </div>
            <div class="arch-box resource-box">
              <strong>🔧 Servicios</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- Use cases -->
      <div class="usecases-section card-glass">
        <div class="section-icon">💡</div>
        <h3>Casos de Uso</h3>
        <div class="usecase-grid">
          <div class="usecase-item">
            <strong>📊 Análisis de Datos</strong>
            <p>Conectar con bases de datos SQL, Excel, CSV</p>
          </div>
          <div class="usecase-item">
            <strong>🔍 Búsqueda</strong>
            <p>Integrar con Google, Wikipedia, documentación</p>
          </div>
          <div class="usecase-item">
            <strong>🛠️ DevOps</strong>
            <p>Gestión de GitHub, Docker, Kubernetes</p>
          </div>
          <div class="usecase-item">
            <strong>📝 Productividad</strong>
            <p>Slack, Email, Notion, Google Workspace</p>
          </div>
        </div>
      </div>

      <!-- Benefits -->
      <div class="benefits-section card-glass">
        <div class="section-icon">✨</div>
        <h3>Beneficios</h3>
        <ul class="benefits-list">
          <li><strong>Estandarización:</strong> Un protocolo para todas las integraciones</li>
          <li><strong>Reutilización:</strong> Escribe una vez, usa en múltiples agentes</li>
          <li><strong>Seguridad:</strong> Control de permisos y autenticación integrados</li>
          <li><strong>Comunidad:</strong> Ecosistema creciente de servidores MCP públicos</li>
          <li><strong>Simplicidad:</strong> Abstracciones claras para desarrolladores</li>
        </ul>
      </div>
    </div>

    <div class="footer-note card-glass">
      <strong>💡 Analogía:</strong> MCP es como USB para agentes de IA. Así como USB estandarizó cómo conectar 
      dispositivos a computadoras, MCP estandariza cómo conectar agentes a herramientas y datos.
    </div>
  </div>
</div>

<style>
  .swiper-slide {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-content);
    overflow-y: auto;
  }

  .slide-background {
    position: fixed;
    inset: 0;
    background: 
      radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 60%),
      radial-gradient(circle at 50% 80%, rgba(30, 58, 138, 0.12) 0%, transparent 60%);
    z-index: 1;
  }

  .slide-content {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 1400px;
    padding: var(--spacing-xl) 0;
  }

  .slide-header {
    text-align: center;
    margin-bottom: var(--spacing-2xl);
  }

  .title {
    font-size: clamp(3rem, 6vw, 5rem);
    font-weight: 900;
    margin-bottom: var(--spacing-md);
  }

  .highlight {
    background: linear-gradient(135deg, var(--color-accent-bright), var(--color-electric));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    font-size: clamp(1rem, 2vw, 1.5rem);
    color: var(--color-electric);
    opacity: 0.9;
  }

  .main-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-xl);
  }

  .full-width {
    grid-column: 1 / -1;
  }

  .card-glass {
    padding: var(--spacing-xl);
    transition: transform var(--transition-base);
  }

  .card-glass:hover {
    transform: translateY(-4px);
  }

  .section-icon {
    font-size: 3rem;
    margin-bottom: var(--spacing-md);
  }

  .concept-section h3,
  .problem-section h3,
  .architecture-section h3,
  .usecases-section h3,
  .benefits-section h3 {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--color-neutral-light);
    margin-bottom: var(--spacing-md);
  }

  .concept-section p,
  .problem-section p {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--color-neutral-light);
    opacity: 0.9;
  }

  .concept-section strong,
  .benefits-list strong {
    color: var(--color-accent-bright);
  }

  .problem-section ul {
    list-style: none;
    padding: 0;
    margin-top: var(--spacing-md);
  }

  .problem-section li {
    font-size: 1rem;
    line-height: 1.8;
    color: var(--color-neutral-light);
    opacity: 0.9;
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: var(--spacing-sm);
  }

  .problem-section li::before {
    content: '❌';
    position: absolute;
    left: 0;
  }

  .architecture-diagram {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    margin-top: var(--spacing-lg);
  }

  .arch-layer {
    display: flex;
    justify-content: center;
    gap: var(--spacing-md);
  }

  .multi-layer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-md);
  }

  .arch-box {
    padding: var(--spacing-lg);
    border-radius: var(--radius-md);
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  .agent-box {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(96, 165, 250, 0.2));
    border: 2px solid var(--color-accent-bright);
    min-width: 300px;
  }

  .server-box {
    background: rgba(30, 58, 138, 0.3);
    border: 2px solid var(--color-electric);
    min-width: 300px;
  }

  .resource-box {
    background: rgba(30, 58, 138, 0.2);
    border: 1px solid rgba(96, 165, 250, 0.3);
  }

  .arch-box strong {
    font-size: 1.125rem;
    color: var(--color-neutral-light);
  }

  .arch-box span {
    font-size: 0.875rem;
    color: var(--color-neutral-light);
    opacity: 0.7;
  }

  .arch-arrow {
    text-align: center;
    font-size: 1rem;
    color: var(--color-electric);
    font-weight: 600;
    padding: var(--spacing-sm) 0;
  }

  .usecase-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
    margin-top: var(--spacing-lg);
  }

  .usecase-item {
    padding: var(--spacing-md);
    background: rgba(30, 58, 138, 0.2);
    border-radius: var(--radius-sm);
    border-left: 3px solid var(--color-accent-bright);
  }

  .usecase-item strong {
    display: block;
    font-size: 1.125rem;
    color: var(--color-neutral-light);
    margin-bottom: var(--spacing-xs);
  }

  .usecase-item p {
    font-size: 0.9rem;
    color: var(--color-neutral-light);
    opacity: 0.8;
  }

  .benefits-list {
    list-style: none;
    padding: 0;
    margin: var(--spacing-md) 0 0 0;
  }

  .benefits-list li {
    font-size: 1.125rem;
    line-height: 1.8;
    color: var(--color-neutral-light);
    opacity: 0.9;
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: var(--spacing-md);
  }

  .benefits-list li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--color-accent-bright);
    font-weight: bold;
    font-size: 1.25rem;
  }

  .footer-note {
    margin-top: var(--spacing-2xl);
    padding: var(--spacing-xl);
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(30, 58, 138, 0.1));
    border: 2px solid var(--color-accent-bright);
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--color-neutral-light);
    text-align: center;
  }

  .footer-note strong {
    color: var(--color-accent-bright);
    display: block;
    margin-bottom: var(--spacing-sm);
  }

  @media (max-width: 1024px) {
    .main-grid {
      grid-template-columns: 1fr;
    }

    .multi-layer {
      grid-template-columns: repeat(2, 1fr);
    }

    .usecase-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .slide-content {
      padding: var(--spacing-lg) 0;
    }

    .card-glass {
      padding: var(--spacing-lg);
    }

    .arch-box {
      min-width: auto;
    }

    .multi-layer {
      grid-template-columns: 1fr;
    }
  }
</style>
