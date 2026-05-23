<script lang="ts">
  import { onMount } from 'svelte';
  import SlideShell from '@codigosinsiesta/theme/slides/SlideShell.svelte';
  import Eyebrow from '@codigosinsiesta/theme/components/Eyebrow.svelte';
  import { animateCounter } from '@/utils/animations';

  let prSizeEl: HTMLElement;
  let reviewTimeEl: HTMLElement;
  let bugsEl: HTMLElement;
  let slideElement: HTMLElement;

  onMount(() => {
    const replay = () => {
      setTimeout(() => {
        if (prSizeEl) animateCounter(prSizeEl, 154, 2);
        if (reviewTimeEl) animateCounter(reviewTimeEl, 91, 2);
        if (bugsEl) animateCounter(bugsEl, 9, 2);
      }, 300);
    };
    replay();
    slideElement.addEventListener('slide-activated', replay);
    return () => slideElement.removeEventListener('slide-activated', replay);
  });
</script>

<SlideShell>
  <div class="wrapper" bind:this={slideElement}>
    <Eyebrow>Datos</Eyebrow>
    <h2>Métricas de <span class="highlight">Sobrecarga</span></h2>
    <p class="lead">El costo oculto de la generación de código sin proceso</p>

    <div class="stats-row">
      <div class="stat card-glass">
        <div class="val">+<span bind:this={prSizeEl}>0</span>%</div>
        <div class="lbl">Tamaño de PR</div>
        <p>Pull requests significativamente más grandes</p>
      </div>
      <div class="stat card-glass">
        <div class="val">+<span bind:this={reviewTimeEl}>0</span>%</div>
        <div class="lbl">Tiempo de Review</div>
        <p>Revisiones de código más lentas y detalladas</p>
      </div>
      <div class="stat card-glass">
        <div class="val">+<span bind:this={bugsEl}>0</span>%</div>
        <div class="lbl">Bugs por Dev</div>
        <p>Incremento en defectos introducidos</p>
      </div>
    </div>

    <div class="callout card-glass">
      <strong>Humano</strong> 200–400 LOC/h · <strong>IA</strong> 1 000 LOC/h
      <span class="note"> — la IA genera 2.5× más rápido, pero la revisión humana se convierte en el cuello de botella</span>
    </div>
  </div>
</SlideShell>

<style>
  .wrapper { max-width: 1100px; width: 100%; }
  h2 { font-size: clamp(2rem, 5vw, 3.5rem); margin-bottom: var(--spacing-sm); }
  .lead { color: var(--color-electric); margin-bottom: var(--spacing-2xl); }
  .stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--spacing-lg); margin-bottom: var(--spacing-xl); }
  .stat { padding: var(--spacing-xl); text-align: center; }
  .val {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 900;
    font-family: var(--font-display);
    background: linear-gradient(135deg, var(--color-accent-bright), var(--color-electric));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: var(--spacing-sm);
  }
  .lbl { font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-electric); margin-bottom: var(--spacing-sm); }
  .stat p { font-size: 0.875rem; opacity: 0.8; }
  .callout { padding: var(--spacing-lg) var(--spacing-xl); font-size: 1rem; }
  .note { opacity: 0.7; font-style: italic; }
  @media (max-width: 768px) {
    .stats-row { grid-template-columns: 1fr; }
  }
</style>
