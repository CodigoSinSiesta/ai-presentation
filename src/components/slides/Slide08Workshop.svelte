<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';

  let slideElement: HTMLElement;
  let copyButtonText = 'Copiar Token';
  let copyButtonIcon = '🔑';

  // Token to copy - can be customized
  const TOKEN = 'Esto es un ejemplo';

  onMount(() => {
    animateSlideEntrance(slideElement);
  });

  async function copyToken() {
    try {
      await navigator.clipboard.writeText(TOKEN);
      
      // Visual feedback
      copyButtonText = '¡Copiado!';
      copyButtonIcon = '✓';
      
      // Reset after 2 seconds
      setTimeout(() => {
        copyButtonText = 'Copiar Token';
        copyButtonIcon = '🔑';
      }, 2000);
    } catch (err) {
      console.error('Error copying to clipboard:', err);
      
      // Fallback visual feedback
      copyButtonText = 'Error al copiar';
      copyButtonIcon = '✗';
      
      setTimeout(() => {
        copyButtonText = 'Copiar Token';
        copyButtonIcon = '🔑';
      }, 2000);
    }
  }
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>
  
  <div class="slide-content">
    <div class="slide-header">
      <h2 class="title">
        <span class="highlight">¡Ponlo en Práctica!</span>
      </h2>
      <p class="subtitle">
        Aprende a construir tus propios agentes y MCP servers
      </p>
    </div>

    <!-- Call to Action -->
    <div class="cta-container">
      <div class="cta-buttons">
        <a 
          href="https://github.com/CodigoSinSiesta/taller-ia-agentes-mcp" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="cta-button cta-primary"
        >
          <span class="cta-icon">🚀</span>
          <span class="cta-text">¡Vamos al Taller!</span>
          <span class="cta-arrow">→</span>
        </a>
        <button class="cta-button cta-secondary" id="copyTokenBtn" on:click={copyToken}>
          <span class="cta-icon">{copyButtonIcon}</span>
          <span class="cta-text">{copyButtonText}</span>
        </button>
      </div>
    </div>

    <div class="workshop-grid">
      <!-- What's Included -->
      <div class="included-section card-glass">
        <div class="section-icon">🎯</div>
        <h3>¿Qué Incluye el Taller?</h3>
        <ul class="feature-list">
          <li>
            <span class="emoji">🤖</span>
            <strong>Dos agentes de IA funcionales</strong> (básico y avanzado)
          </li>
          <li>
            <span class="emoji">🔌</span>
            <strong>Dos MCP servers</strong> listos para Claude Desktop
          </li>
          <li>
            <span class="emoji">📚</span>
            <strong>Documentación completa</strong> en español
          </li>
          <li>
            <span class="emoji">⚡</span>
            <strong>Código TypeScript</strong> con ejemplos ejecutables
          </li>
        </ul>
      </div>

      <!-- What You'll Learn -->
      <div class="learning-section card-glass">
        <div class="section-icon">🚀</div>
        <h3>Lo que Aprenderás</h3>
        <div class="learning-items">
          <div class="learning-item">
            <span class="bullet">✓</span>
            <p>Construir un <strong>agente básico</strong> con tool use</p>
          </div>
          <div class="learning-item">
            <span class="bullet">✓</span>
            <p>Implementar un <strong>agente avanzado</strong> con patrón Plan-Execute-Synthesize</p>
          </div>
          <div class="learning-item">
            <span class="bullet">✓</span>
            <p>Crear <strong>MCP servers</strong> con FastMCP y SDK oficial</p>
          </div>
          <div class="learning-item">
            <span class="bullet">✓</span>
            <p>Integrar con <strong>Claude y DeepSeek</strong></p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="slide-footer">
      <p class="footer-text">
        <span class="organization">Código Sin Siesta</span>
        <span class="separator">•</span>
        <span class="year">2025</span>
      </p>
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
      radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(96, 165, 250, 0.12) 0%, transparent 50%);
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
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 900;
    margin-bottom: var(--spacing-md);
    animation: fadeUp 0.8s ease-out;
  }

  .highlight {
    background: linear-gradient(135deg, var(--color-accent-bright), var(--color-electric));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    font-size: clamp(1.125rem, 2vw, 1.5rem);
    color: var(--color-electric);
    opacity: 0.9;
    animation: fadeUp 0.8s ease-out 0.2s backwards;
  }

  .workshop-grid {
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
    animation: fadeUp 0.8s ease-out 0.6s backwards;
  }

  .card-glass:hover {
    transform: translateY(-6px);
  }

  .section-icon {
    font-size: 3rem;
    margin-bottom: var(--spacing-md);
    display: inline-block;
    animation: bounce 2s ease-in-out infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .included-section h3,
  .learning-section h3 {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--color-neutral-light);
    margin-bottom: var(--spacing-lg);
  }

  .feature-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .feature-list li {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--color-neutral-light);
    opacity: 0.9;
    margin-bottom: var(--spacing-md);
    padding: var(--spacing-sm);
    border-radius: var(--radius-sm);
    transition: all var(--transition-base);
  }

  .feature-list li:hover {
    background: rgba(59, 130, 246, 0.1);
    padding-left: var(--spacing-md);
  }

  .emoji {
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  .feature-list strong {
    color: var(--color-accent-bright);
  }

  .learning-items {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .learning-item {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
    padding: var(--spacing-sm);
    border-radius: var(--radius-sm);
    transition: all var(--transition-base);
  }

  .learning-item:hover {
    background: rgba(96, 165, 250, 0.1);
    transform: translateX(8px);
  }

  .bullet {
    font-size: 1.5rem;
    color: var(--color-accent-bright);
    font-weight: bold;
    flex-shrink: 0;
  }

  .learning-item p {
    font-size: 1.125rem;
    line-height: 1.6;
    color: var(--color-neutral-light);
    opacity: 0.9;
    margin: 0;
  }

  .learning-item strong {
    color: var(--color-electric);
  }



  .cta-container {
    text-align: center;
    margin-bottom: var(--spacing-2xl);
    animation: fadeUp 0.8s ease-out 0.2s backwards;
  }

  .cta-buttons {
    display: flex;
    gap: var(--spacing-lg);
    justify-content: center;
    flex-wrap: wrap;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-lg) var(--spacing-2xl);
    font-size: 1.5rem;
    font-weight: 700;
    border: none;
    border-radius: var(--radius-lg);
    cursor: pointer;
    text-decoration: none;
    transition: all var(--transition-base);
    position: relative;
    overflow: hidden;
  }

  .cta-button::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.2);
    opacity: 0;
    transition: opacity var(--transition-base);
  }

  .cta-button:hover::before {
    opacity: 1;
  }

  .cta-primary {
    background: linear-gradient(135deg, var(--color-accent-bright), var(--color-electric));
    color: var(--color-base-dark);
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
  }

  .cta-primary:hover {
    transform: scale(1.08);
    box-shadow: 0 0 50px rgba(59, 130, 246, 0.8);
  }

  .cta-secondary {
    background: rgba(30, 58, 138, 0.6);
    color: var(--color-neutral-light);
    border: 2px solid var(--color-electric);
    box-shadow: 0 0 20px rgba(96, 165, 250, 0.3);
  }

  .cta-secondary:hover {
    background: rgba(30, 58, 138, 0.8);
    border-color: var(--color-accent-bright);
    transform: scale(1.08);
    box-shadow: 0 0 40px rgba(96, 165, 250, 0.6);
  }

  .cta-icon {
    font-size: 2rem;
  }

  .cta-primary .cta-icon {
    animation: rocket 1.5s ease-in-out infinite;
  }

  @keyframes rocket {
    0%, 100% { transform: translateY(0) rotate(-45deg); }
    50% { transform: translateY(-8px) rotate(-45deg); }
  }

  .cta-text {
    position: relative;
    z-index: 1;
  }

  .cta-arrow {
    font-size: 1.75rem;
    font-weight: bold;
    transition: transform var(--transition-base);
  }

  .cta-button:hover .cta-arrow {
    transform: translateX(8px);
  }

  .slide-footer {
    text-align: center;
    margin-top: var(--spacing-3xl);
    padding-top: var(--spacing-xl);
    border-top: 1px solid rgba(96, 165, 250, 0.2);
    animation: fadeUp 0.8s ease-out 0.8s backwards;
  }

  .footer-text {
    font-size: 1rem;
    color: var(--color-neutral-light);
    opacity: 0.7;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
    margin: 0;
  }

  .organization {
    font-weight: 600;
    color: var(--color-electric);
  }

  .separator {
    opacity: 0.5;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 1024px) {
    .workshop-grid {
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

    .cta-button {
      font-size: 1.25rem;
      padding: var(--spacing-md) var(--spacing-xl);
    }


  }
</style>
