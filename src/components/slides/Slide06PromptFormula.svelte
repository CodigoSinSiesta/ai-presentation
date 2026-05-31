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
        La <span class="highlight">Fórmula Perfecta</span>
      </h2>
      <p class="subtitle">
        Combinando los 4 pilares para resultados excepcionales
      </p>
    </div>

    <!-- Formula Visual -->
    <div class="formula-section card-glass">
      <div class="formula-box">
        <span class="formula-part context-part">Context</span>
        <span class="formula-operator">+</span>
        <span class="formula-part instruction-part">Instruction</span>
        <span class="formula-operator">+</span>
        <span class="formula-part rules-part">Rules</span>
        <span class="formula-operator">+</span>
        <span class="formula-part examples-part">Examples</span>
        <span class="formula-equals">=</span>
        <span class="formula-result">🎯 Output de Calidad</span>
      </div>
    </div>

    <!-- Complete Example -->
    <div class="example-section card-glass">
      <h3 class="example-title">
        <span class="example-icon">📋</span>
        Ejemplo Completo
      </h3>
      
      <div class="prompt-example">
        <div class="prompt-block context-block">
          <div class="block-label">Context</div>
          <p class="block-content">
            "Trabajo en un proyecto React 18 con TypeScript. Seguimos las guías de estilo de Airbnb y usamos hooks funcionales."
          </p>
        </div>

        <div class="prompt-block instruction-block">
          <div class="block-label">Instruction</div>
          <p class="block-content">
            "Crea un hook personalizado para gestionar el estado de un formulario con validación en tiempo real."
          </p>
        </div>

        <div class="prompt-block rules-block">
          <div class="block-label">Rules</div>
          <p class="block-content">
            "NO uses clases. DEBE incluir TypeScript tipos. Las funciones DEBEN ser menores de 20 líneas. SIEMPRE incluir comentarios JSDoc."
          </p>
        </div>

        <div class="prompt-block examples-block">
          <div class="block-label">Examples</div>
          <p class="block-content">
            "Formato: useForm retorna objeto con values, errors, handleChange, handleSubmit"
          </p>
        </div>
      </div>
    </div>

    <!-- Impact Metrics -->
    <div class="metrics-grid">
      <div class="metric-card card-glass">
        <div class="metric-value">3x</div>
        <div class="metric-label">Más preciso</div>
      </div>
      <div class="metric-card card-glass">
        <div class="metric-value">70%</div>
        <div class="metric-label">Menos iteraciones</div>
      </div>
      <div class="metric-card card-glass">
        <div class="metric-value">5x</div>
        <div class="metric-label">Menos tokens</div>
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
      radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.12) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(96, 165, 250, 0.1) 0%, transparent 50%);
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

  .formula-section {
    padding: var(--spacing-2xl);
    margin-bottom: var(--spacing-2xl);
    animation: fadeUp 0.8s ease-out 0.4s backwards;
  }

  .formula-box {
    display: flex;
    align-items: center;
    gap: var(--spacing-lg);
    flex-wrap: wrap;
    justify-content: center;
  }

  .formula-part {
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: var(--radius-md);
    font-weight: 700;
    font-size: 1.25rem;
    transition: all var(--transition-base);
    font-family: var(--font-mono);
  }

  .formula-part:hover {
    transform: scale(1.1);
  }

  .context-part {
    background: rgba(59, 130, 246, 0.2);
    border: 2px solid rgba(59, 130, 246, 0.6);
    color: var(--color-accent-bright);
  }

  .instruction-part {
    background: rgba(96, 165, 250, 0.2);
    border: 2px solid rgba(96, 165, 250, 0.6);
    color: var(--color-electric);
  }

  .rules-part {
    background: rgba(239, 68, 68, 0.15);
    border: 2px solid rgba(239, 68, 68, 0.5);
    color: #fca5a5;
  }

  .examples-part {
    background: rgba(34, 197, 94, 0.15);
    border: 2px solid rgba(34, 197, 94, 0.5);
    color: #86efac;
  }

  .formula-operator {
    font-size: 2rem;
    color: var(--color-electric);
    font-weight: bold;
  }

  .formula-equals {
    font-size: 2.5rem;
    color: var(--color-accent-bright);
    font-weight: bold;
  }

  .formula-result {
    padding: var(--spacing-md) var(--spacing-2xl);
    background: linear-gradient(135deg, var(--color-accent-bright), var(--color-electric));
    border-radius: var(--radius-md);
    color: var(--color-base-dark);
    font-weight: 700;
    font-size: 1.5rem;
    animation: pulse 2s ease-in-out infinite;
  }

  .example-section {
    padding: var(--spacing-2xl);
    margin-bottom: var(--spacing-2xl);
    animation: fadeUp 0.8s ease-out 0.6s backwards;
  }

  .example-title {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-md);
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-neutral-light);
    margin-bottom: var(--spacing-xl);
  }

  .example-icon {
    font-size: 2.5rem;
  }

  .prompt-example {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  .prompt-block {
    padding: var(--spacing-lg);
    border-radius: var(--radius-md);
    border-left: 4px solid;
    background: rgba(10, 22, 40, 0.4);
    transition: all var(--transition-base);
  }

  .prompt-block:hover {
    background: rgba(10, 22, 40, 0.6);
    transform: translateX(8px);
  }

  .context-block {
    border-left-color: var(--color-accent-bright);
  }

  .instruction-block {
    border-left-color: var(--color-electric);
  }

  .rules-block {
    border-left-color: #fca5a5;
  }

  .examples-block {
    border-left-color: #86efac;
  }

  .block-label {
    font-family: var(--font-mono);
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--spacing-sm);
    opacity: 0.7;
  }

  .context-block .block-label {
    color: var(--color-accent-bright);
  }

  .instruction-block .block-label {
    color: var(--color-electric);
  }

  .rules-block .block-label {
    color: #fca5a5;
  }

  .examples-block .block-label {
    color: #86efac;
  }

  .block-content {
    font-size: 1.125rem;
    line-height: 1.6;
    color: var(--color-neutral-light);
    margin: 0;
  }

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-xl);
    animation: fadeUp 0.8s ease-out 0.8s backwards;
  }

  .metric-card {
    padding: var(--spacing-xl);
    text-align: center;
    transition: all var(--transition-base);
  }

  .metric-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
  }

  .metric-value {
    font-size: 3.5rem;
    font-weight: 900;
    background: linear-gradient(135deg, var(--color-accent-bright), var(--color-electric));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: var(--spacing-sm);
  }

  .metric-label {
    font-size: 1.125rem;
    color: var(--color-neutral-light);
    opacity: 0.8;
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

  @keyframes pulse {
    0%, 100% {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
    }
    50% {
      box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
    }
  }

  @media (max-width: 1024px) {
    .formula-box {
      flex-direction: column;
      gap: var(--spacing-md);
    }

    .formula-operator {
      transform: rotate(90deg);
    }

    .metrics-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .slide-content {
      padding: var(--spacing-lg) 0;
    }

    .formula-section,
    .example-section {
      padding: var(--spacing-lg);
    }

    .formula-part {
      font-size: 1rem;
      padding: var(--spacing-sm) var(--spacing-lg);
    }

    .formula-result {
      font-size: 1.125rem;
    }

    .metric-value {
      font-size: 2.5rem;
    }
  }
</style>
