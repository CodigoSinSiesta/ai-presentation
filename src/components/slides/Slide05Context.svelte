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
        <span class="highlight">Ventana de Contexto</span>
      </h2>
      <p class="subtitle">
        La memoria de trabajo de los modelos de IA
      </p>
    </div>

    <div class="content-grid">
      <div class="concept-card card-glass">
        <div class="icon">🧠</div>
        <h3>¿Qué es?</h3>
        <p>
          La ventana de contexto es la cantidad máxima de tokens (texto) que un modelo 
          de IA puede procesar en una sola conversación. Es su "memoria de trabajo".
        </p>
      </div>

      <div class="concept-card card-glass">
        <div class="icon">📏</div>
        <h3>Limitaciones</h3>
        <ul class="limitations-list">
          <li>Capacidad finita de procesamiento</li>
          <li>Mayor contexto = mayor costo</li>
          <li>Degradación de atención en contextos largos</li>
          <li>El modelo "olvida" lo que sale del contexto</li>
        </ul>
      </div>

      <div class="analogy-card card-glass">
        <div class="icon">💡</div>
        <h3>Analogía</h3>
        <p>
          Piensa en la ventana de contexto como tu escritorio: puedes tener varios 
          documentos abiertos, pero hay un límite físico. Cuando necesitas más espacio, 
          debes guardar algunos documentos para abrir otros nuevos.
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
  }

  .slide-background {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
    z-index: 1;
  }

  .slide-content {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 1400px;
  }

  .slide-header {
    text-align: center;
    margin-bottom: var(--spacing-2xl);
  }

  .title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    margin-bottom: var(--spacing-md);
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
  }

  .content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-xl);
    margin-top: var(--spacing-2xl);
  }

  .concept-card,
  .analogy-card {
    padding: var(--spacing-xl);
    transition: transform var(--transition-base);
  }

  .concept-card:hover,
  .analogy-card:hover {
    transform: translateY(-4px);
  }

  .icon {
    font-size: 3rem;
    margin-bottom: var(--spacing-md);
  }

  .concept-card h3,
  .analogy-card h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-neutral-light);
    margin-bottom: var(--spacing-md);
  }

  .concept-card p,
  .analogy-card p {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--color-neutral-light);
    opacity: 0.9;
  }

  .limitations-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .limitations-list li {
    font-size: 1.125rem;
    line-height: 1.8;
    color: var(--color-neutral-light);
    opacity: 0.9;
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: var(--spacing-sm);
  }

  .limitations-list li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--color-accent-bright);
  }

  @media (max-width: 768px) {
    .content-grid {
      grid-template-columns: 1fr;
      gap: var(--spacing-lg);
    }

    .concept-card,
    .analogy-card {
      padding: var(--spacing-lg);
    }
  }

  @media (max-width: 600px) {
    .swiper-slide {
      height: 100vh;
      overflow: visible;
      overflow-y: auto;
      align-items: flex-start;
      padding-top: var(--spacing-lg);
      padding-bottom: var(--spacing-lg);
    }
  }
</style>
