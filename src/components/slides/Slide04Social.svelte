<script>
  import { Users, TrendingDown } from 'lucide-svelte';
</script>

<div class="slide slide-social swiper-slide">
  <div class="slide-background"></div>

  <div class="slide-content">
    <div class="slide-header">
      <h2>Riesgos Sociales</h2>
      <p class="subtitle">Impacto en la sociedad y empleo</p>
    </div>

    <div class="social-grid">
      <div class="comparison">
        <h3>Desplazamiento Laboral</h3>
        <div class="before-after">
          <div class="before">
            <h4>Antes</h4>
            <p>Trabajos humanos tradicionales</p>
          </div>
          <div class="arrow">→</div>
          <div class="after">
            <h4>Después</h4>
            <p>Automatización masiva</p>
          </div>
        </div>
        <p class="stat">Hasta 300M empleos podrían ser afectados globalmente</p>
      </div>

      <div class="risks-list">
        <div class="risk-item">
          <div class="icon">
            <Users size={32} />
          </div>
          <div>
            <h4>Desigualdad Digital</h4>
            <p>Solo corporaciones grandes pueden acceder a IA avanzada</p>
          </div>
        </div>

        <div class="risk-item">
          <div class="icon">
            <TrendingDown size={32} />
          </div>
          <div>
            <h4>Concentración de Poder</h4>
            <p>El poder de la IA se concentra en pocas manos</p>
          </div>
        </div>

        <div class="risk-item">
          <div class="icon">
            <Users size={32} />
          </div>
          <div>
            <h4>Desinformación</h4>
            <p>Generación de contenido falso convincente a escala</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .slide {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: var(--color-base-dark);
    padding: var(--spacing-2xl);
  }

  .slide-background {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.1) 0%, transparent 70%);
    z-index: 1;
  }

  .slide-content {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 1100px;
  }

  .slide-header {
    text-align: center;
    margin-bottom: var(--spacing-2xl);
    animation: slideDown 0.6s ease-out;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .slide-header h2 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    margin-bottom: var(--spacing-md);
    color: var(--color-accent-bright);
  }

  .subtitle {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: rgba(250, 249, 246, 0.7);
  }

  .social-grid {
    display: grid;
    gap: var(--spacing-2xl);
  }

  .comparison {
    background: rgba(30, 58, 138, 0.2);
    border: 1px solid rgba(96, 165, 250, 0.2);
    border-radius: var(--radius-lg);
    padding: var(--spacing-2xl);
    animation: fadeUp 0.6s ease-out;
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

  .comparison h3 {
    font-size: 1.5rem;
    color: var(--color-accent-bright);
    margin-bottom: var(--spacing-lg);
  }

  .before-after {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
    flex-wrap: wrap;
  }

  .before, .after {
    background: rgba(30, 58, 138, 0.3);
    border: 1px solid rgba(96, 165, 250, 0.3);
    border-radius: var(--radius-md);
    padding: var(--spacing-lg);
    text-align: center;
    min-width: 150px;
  }

  .before h4, .after h4 {
    font-size: 1rem;
    color: var(--color-electric);
    margin-bottom: var(--spacing-sm);
  }

  .before p, .after p {
    font-size: 0.9rem;
    color: rgba(250, 249, 246, 0.7);
  }

  .arrow {
    font-size: 1.5rem;
    color: var(--color-electric);
    font-weight: bold;
  }

  .stat {
    font-size: 1.1rem;
    color: var(--color-accent-bright);
    font-weight: 600;
    text-align: center;
  }

  .risks-list {
    display: grid;
    gap: var(--spacing-lg);
  }

  .risk-item {
    display: flex;
    gap: var(--spacing-lg);
    background: rgba(30, 58, 138, 0.15);
    border: 1px solid rgba(96, 165, 250, 0.2);
    border-radius: var(--radius-md);
    padding: var(--spacing-lg);
    transition: all var(--transition-base);
    animation: slideLeft 0.6s ease-out both;
  }

  .risk-item:nth-child(1) {
    animation-delay: 0.1s;
  }
  .risk-item:nth-child(2) {
    animation-delay: 0.2s;
  }
  .risk-item:nth-child(3) {
    animation-delay: 0.3s;
  }

  @keyframes slideLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .risk-item:hover {
    background: rgba(30, 58, 138, 0.3);
    border-color: rgba(96, 165, 250, 0.4);
    transform: translateX(8px);
  }

  .icon {
    color: var(--color-electric);
    flex-shrink: 0;
  }

  .risk-item h4 {
    font-size: 1.1rem;
    color: var(--color-accent-bright);
    margin-bottom: var(--spacing-sm);
  }

  .risk-item p {
    font-size: 0.95rem;
    color: rgba(250, 249, 246, 0.75);
  }

  @media (max-width: 768px) {
    .slide {
      padding: var(--spacing-xl);
    }

    .before-after {
      flex-direction: column;
    }

    .arrow {
      transform: rotate(90deg);
    }
  }
</style>
