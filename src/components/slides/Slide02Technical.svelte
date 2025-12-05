<script>
  import Card from '../ui/Card.astro';
  import { AlertCircle, Zap, Bug } from 'lucide-svelte';
</script>

<div class="slide slide-technical swiper-slide">
  <div class="slide-background"></div>

  <div class="slide-content">
    <div class="slide-header">
      <h2>Riesgos Técnicos</h2>
      <p class="subtitle">Los desafíos de la ingeniería de IA</p>
    </div>

    <div class="risks-grid">
      <div class="risk-item">
        <div class="risk-icon">
          <AlertCircle size={40} />
        </div>
        <h3>Alucinaciones</h3>
        <p>Los modelos de IA pueden generar información convincente pero completamente falsa.</p>
      </div>

      <div class="risk-item">
        <div class="risk-icon">
          <Bug size={40} />
        </div>
        <h3>Sesgos Algorítmicos</h3>
        <p>Los datos de entrenamiento pueden perpetuar sesgos históricos y discriminación.</p>
      </div>

      <div class="risk-item">
        <div class="risk-icon">
          <Zap size={40} />
        </div>
        <h3>Falta de Transparencia</h3>
        <p>Las "cajas negras" IA son difíciles de interpretar y explicar.</p>
      </div>
    </div>

    <div class="stat-box">
      <div class="stat-number">87%</div>
      <p>de los expertos en IA expresan preocupación sobre las alucinaciones</p>
    </div>
  </div>
</div>

<style>
  .slide {
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
      radial-gradient(circle at 20% 50%, rgba(30, 58, 138, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(96, 165, 250, 0.1) 0%, transparent 50%);
    z-index: 1;
  }

  .slide-content {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 1200px;
  }

  .slide-header {
    text-align: center;
    margin-bottom: var(--spacing-3xl);
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

  .risks-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-2xl);
    margin-bottom: var(--spacing-3xl);
  }

  .risk-item {
    background: rgba(30, 58, 138, 0.2);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(96, 165, 250, 0.2);
    border-radius: var(--radius-lg);
    padding: var(--spacing-2xl);
    text-align: center;
    transition: all var(--transition-base);
    animation: scaleUp 0.6s ease-out both;
    animation-fill-mode: both;
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

  @keyframes scaleUp {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .risk-item:hover {
    background: rgba(30, 58, 138, 0.4);
    border-color: rgba(96, 165, 250, 0.4);
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(59, 130, 246, 0.2);
  }

  .risk-icon {
    color: var(--color-electric);
    margin-bottom: var(--spacing-lg);
    display: flex;
    justify-content: center;
  }

  .risk-item h3 {
    font-size: 1.25rem;
    margin-bottom: var(--spacing-md);
    color: var(--color-accent-bright);
  }

  .risk-item p {
    font-size: 0.95rem;
    color: rgba(250, 249, 246, 0.75);
    line-height: 1.6;
  }

  .stat-box {
    background: linear-gradient(135deg, rgba(30, 58, 138, 0.3), rgba(59, 130, 246, 0.1));
    border: 2px solid var(--color-electric);
    border-radius: var(--radius-lg);
    padding: var(--spacing-2xl);
    text-align: center;
    animation: fadeUp 0.8s ease-out 0.4s both;
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

  .stat-number {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 6vw, 3.5rem);
    font-weight: 900;
    background: linear-gradient(135deg, var(--color-accent-bright), var(--color-electric));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: var(--spacing-md);
  }

  .stat-box p {
    font-size: 1.1rem;
    color: rgba(250, 249, 246, 0.8);
  }

  @media (max-width: 768px) {
    .slide {
      padding: var(--spacing-xl);
    }

    .risks-grid {
      grid-template-columns: 1fr;
      gap: var(--spacing-xl);
    }
  }
</style>
