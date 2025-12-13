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
        Tu Opinión <span class="highlight">Importa</span>
      </h2>
      <p class="subtitle">
        Ayúdanos a mejorar esta presentación
      </p>
    </div>

    <!-- Main CTA Card -->
    <div class="feedback-card card-glass">
      <div class="feedback-icon">📋</div>
      <h3 class="feedback-heading">¿Qué te pareció?</h3>
      <p class="feedback-description">
        Nos encantaría conocer tu opinión sobre esta presentación. Tu feedback nos ayuda a mejorar y crear contenido más valioso.
      </p>
      
      <div class="feedback-topics">
        <div class="topic-item">
          <span class="topic-icon">💡</span>
          <span class="topic-text">¿Fue útil la información?</span>
        </div>
        <div class="topic-item">
          <span class="topic-icon">🎯</span>
          <span class="topic-text">¿Qué te llevas del taller?</span>
        </div>
        <div class="topic-item">
          <span class="topic-icon">🚀</span>
          <span class="topic-text">¿Qué debemos mejorar?</span>
        </div>
        <div class="topic-item">
          <span class="topic-icon">📬</span>
          <span class="topic-text">Comparte tus sugerencias</span>
        </div>
      </div>

      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLScSwstUG24p0s6ygRtbfZz6lOgaH2gm-wcVru3we0UlAFr6bQ/viewform?usp=publish-editor" 
        target="_blank" 
        rel="noopener noreferrer"
        class="cta-button"
      >
        <span class="button-icon">✍️</span>
        <span class="button-text">Responder Formulario</span>
        <span class="button-arrow">→</span>
      </a>

      <p class="time-estimate">
        ⏱️ Toma solo 2-3 minutos
      </p>
    </div>

    <!-- Contact Info -->
    <div class="contact-section">
      <div class="contact-box card-glass">
        <h3 class="contact-heading">¿Preguntas o Sugerencias?</h3>
        <p class="contact-text">
          Puedes contactarme directamente en <a href="https://tellmeales.dev" target="_blank" rel="noopener noreferrer" class="contact-link">tellmeales.dev</a>
        </p>
      </div>
    </div>

    <!-- Footer -->
    <div class="slide-footer">
      <p class="footer-text">
        <span class="footer-emoji">🙏</span>
        <span class="footer-message">¡Gracias por tu tiempo y atención!</span>
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

  @media (max-width: 600px) {
    .swiper-slide {
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
    position: fixed;
    inset: 0;
    background: 
      radial-gradient(circle at 50% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 50% 70%, rgba(96, 165, 250, 0.12) 0%, transparent 50%);
    z-index: 1;
  }

  .slide-content {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 900px;
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

  .feedback-card {
    padding: var(--spacing-3xl);
    text-align: center;
    margin-bottom: var(--spacing-2xl);
    animation: fadeUp 0.8s ease-out 0.4s backwards;
  }

  .feedback-icon {
    font-size: 4rem;
    margin-bottom: var(--spacing-lg);
    display: inline-block;
    animation: bounce 2s ease-in-out infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }

  .feedback-heading {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--color-neutral-light);
    margin-bottom: var(--spacing-md);
  }

  .feedback-description {
    font-size: 1.25rem;
    color: var(--color-neutral-light);
    opacity: 0.85;
    line-height: 1.7;
    margin-bottom: var(--spacing-2xl);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .feedback-topics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-2xl);
  }

  .topic-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
    background: rgba(59, 130, 246, 0.08);
    border-radius: var(--radius-md);
    border: 1px solid rgba(96, 165, 250, 0.2);
    transition: all var(--transition-base);
  }

  .topic-item:hover {
    background: rgba(59, 130, 246, 0.15);
    border-color: rgba(96, 165, 250, 0.4);
    transform: translateY(-4px);
  }

  .topic-icon {
    font-size: 1.75rem;
    flex-shrink: 0;
  }

  .topic-text {
    font-size: 1rem;
    color: var(--color-neutral-light);
    font-weight: 500;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-lg);
    padding: var(--spacing-xl) var(--spacing-3xl);
    font-size: 1.25rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--color-accent-bright), var(--color-electric));
    color: var(--color-base-dark);
    border: none;
    border-radius: var(--radius-lg);
    cursor: pointer;
    text-decoration: none;
    transition: all var(--transition-base);
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
  }

  .cta-button::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.2);
    opacity: 0;
    transition: opacity var(--transition-base);
  }

  .cta-button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 50px rgba(59, 130, 246, 0.7);
  }

  .cta-button:hover::before {
    opacity: 1;
  }

  .button-icon {
    font-size: 1.5rem;
  }

  .button-text {
    position: relative;
    z-index: 1;
  }

  .button-arrow {
    font-size: 1.5rem;
    transition: transform var(--transition-base);
  }

  .cta-button:hover .button-arrow {
    transform: translateX(8px);
  }

  .time-estimate {
    font-size: 1rem;
    color: var(--color-neutral-light);
    opacity: 0.7;
    margin-top: var(--spacing-lg);
  }

  .contact-section {
    margin-bottom: var(--spacing-2xl);
    animation: fadeUp 0.8s ease-out 0.6s backwards;
  }

  .contact-box {
    padding: var(--spacing-xl);
    text-align: center;
  }

  .contact-heading {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-accent-bright);
    margin-bottom: var(--spacing-md);
  }

  .contact-text {
    font-size: 1.125rem;
    color: var(--color-neutral-light);
    opacity: 0.85;
  }

  .contact-link {
    color: var(--color-electric);
    text-decoration: none;
    font-weight: 600;
    border-bottom: 2px solid var(--color-electric);
    transition: all var(--transition-base);
  }

  .contact-link:hover {
    color: var(--color-accent-bright);
    border-bottom-color: var(--color-accent-bright);
  }

  .slide-footer {
    text-align: center;
    padding-top: var(--spacing-xl);
    border-top: 1px solid rgba(96, 165, 250, 0.2);
    animation: fadeUp 0.8s ease-out 0.8s backwards;
  }

  .footer-text {
    font-size: 1.25rem;
    color: var(--color-neutral-light);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-md);
    margin: 0;
  }

  .footer-emoji {
    font-size: 1.5rem;
  }

  .footer-message {
    font-weight: 600;
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
    .feedback-topics {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .slide-content {
      padding: var(--spacing-lg) 0;
    }

    .feedback-card {
      padding: var(--spacing-xl);
    }

    .feedback-icon {
      font-size: 3rem;
    }

    .feedback-heading {
      font-size: 1.75rem;
    }

    .feedback-description {
      font-size: 1.125rem;
    }

    .cta-button {
      padding: var(--spacing-lg) var(--spacing-2xl);
      font-size: 1.125rem;
    }

    .feedback-topics {
      grid-template-columns: 1fr;
    }

    .topic-item {
      padding: var(--spacing-md);
    }

    .footer-text {
      flex-direction: column;
      gap: var(--spacing-sm);
    }
  }
</style>
