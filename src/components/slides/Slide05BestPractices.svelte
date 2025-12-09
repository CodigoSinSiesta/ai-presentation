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
        Los 4 Pilares de un <span class="highlight">Buen Prompt</span>
      </h2>
      <p class="subtitle">
        Estructura fundamental para prompts efectivos
      </p>
    </div>

    <div class="practices-grid">
      <!-- Instructions -->
      <div class="practice-card card-glass">
        <div class="card-icon">📝</div>
        <h3 class="card-title">Instructions</h3>
        <p class="card-description">Define <strong>qué</strong> quieres que haga</p>
        <div class="example-box">
          <code class="example-text">
            "Analiza este código y refactorízalo para mejorar su legibilidad usando principios SOLID"
          </code>
        </div>
        <ul class="tips-list">
          <li>Sé específico y claro</li>
          <li>Usa verbos de acción</li>
          <li>Define el resultado esperado</li>
        </ul>
      </div>

      <!-- Context -->
      <div class="practice-card card-glass">
        <div class="card-icon">🎯</div>
        <h3 class="card-title">Context</h3>
        <p class="card-description">Proporciona <strong>información relevante</strong></p>
        <div class="example-box">
          <code class="example-text">
            "Este proyecto usa React 18 con TypeScript. El equipo sigue la guía de estilo de Airbnb"
          </code>
        </div>
        <ul class="tips-list">
          <li>Stack tecnológico</li>
          <li>Restricciones del proyecto</li>
          <li>Convenciones del equipo</li>
        </ul>
      </div>

      <!-- Rules -->
      <div class="practice-card card-glass">
        <div class="card-icon">⚠️</div>
        <h3 class="card-title">Rules</h3>
        <p class="card-description">Establece <strong>límites y restricciones</strong></p>
        <div class="example-box">
          <code class="example-text">
            "NO uses 'any' en TypeScript. Mantén funciones bajo 20 líneas. SIEMPRE incluye tests"
          </code>
        </div>
        <ul class="tips-list">
          <li>Define qué NO hacer</li>
          <li>Establece límites claros</li>
          <li>Especifica requisitos obligatorios</li>
        </ul>
      </div>

      <!-- Examples -->
      <div class="practice-card card-glass">
        <div class="card-icon">💡</div>
        <h3 class="card-title">Examples</h3>
        <p class="card-description">Muestra <strong>ejemplos concretos</strong></p>
        <div class="example-box">
          <code class="example-text">
            "Formato: const suma = (a, b) => a + b;"
          </code>
        </div>
        <ul class="tips-list">
          <li>Input y output esperados</li>
          <li>Casos de uso reales</li>
          <li>Formato deseado</li>
        </ul>
      </div>
    </div>

    <!-- Key Takeaway -->
    <div class="takeaway-section card-glass">
      <div class="takeaway-content">
        <span class="takeaway-icon">💡</span>
        <p class="takeaway-text">
          <strong>Recuerda:</strong> Un prompt bien estructurado es la diferencia entre una respuesta genérica y una solución precisa
        </p>
      </div>
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
      radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.12) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(96, 165, 250, 0.1) 0%, transparent 50%);
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
    font-size: clamp(2.5rem, 5vw, 4rem);
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

  .practices-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-xl);
    margin-bottom: var(--spacing-2xl);
  }

  .practice-card {
    padding: var(--spacing-xl);
    transition: all var(--transition-base);
    animation: fadeUp 0.8s ease-out 0.4s backwards;
  }

  .practice-card:nth-child(2) {
    animation-delay: 0.5s;
  }

  .practice-card:nth-child(3) {
    animation-delay: 0.6s;
  }

  .practice-card:nth-child(4) {
    animation-delay: 0.7s;
  }

  .practice-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
  }

  .card-icon {
    font-size: 3rem;
    margin-bottom: var(--spacing-md);
    display: inline-block;
  }

  .card-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--color-accent-bright);
    margin-bottom: var(--spacing-sm);
  }

  .card-description {
    font-size: 1.125rem;
    color: var(--color-neutral-light);
    opacity: 0.85;
    margin-bottom: var(--spacing-lg);
  }

  .card-description strong {
    color: var(--color-electric);
  }

  .example-box {
    background: rgba(10, 22, 40, 0.6);
    border: 1px solid rgba(96, 165, 250, 0.3);
    border-radius: var(--radius-sm);
    padding: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
  }

  .example-text {
    font-family: var(--font-mono);
    font-size: 0.875rem;
    line-height: 1.6;
    color: var(--color-electric);
    display: block;
  }

  .tips-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .tips-list li {
    font-size: 0.95rem;
    color: var(--color-neutral-light);
    opacity: 0.8;
    padding: var(--spacing-xs) 0;
    padding-left: var(--spacing-lg);
    position: relative;
  }

  .tips-list li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--color-accent-bright);
    font-weight: bold;
  }

  .takeaway-section {
    padding: var(--spacing-2xl);
    animation: fadeUp 0.8s ease-out 0.8s backwards;
    text-align: center;
  }

  .takeaway-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-lg);
  }

  .takeaway-icon {
    font-size: 3rem;
    flex-shrink: 0;
  }

  .takeaway-text {
    font-size: 1.25rem;
    color: var(--color-neutral-light);
    line-height: 1.6;
    margin: 0;
  }

  .takeaway-text strong {
    color: var(--color-accent-bright);
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
    .practices-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .slide-content {
      padding: var(--spacing-lg) 0;
    }

    .practice-card {
      padding: var(--spacing-lg);
    }

    .card-icon {
      font-size: 2.5rem;
    }

    .card-title {
      font-size: 1.5rem;
    }

    .takeaway-section {
      padding: var(--spacing-lg);
    }

    .takeaway-content {
      flex-direction: column;
      text-align: center;
    }

    .takeaway-text {
      font-size: 1.125rem;
    }
  }
</style>
