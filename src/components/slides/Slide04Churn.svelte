<script lang="ts">
  import { onMount } from 'svelte';
  import SlideShell from '@codigosinsiesta/theme/slides/SlideShell.svelte';
  import Eyebrow from '@codigosinsiesta/theme/components/Eyebrow.svelte';
  import { animateCounter } from '@/utils/animations';

  let churnEl: HTMLElement;
  let locEl: HTMLElement;
  let slideElement: HTMLElement;

  onMount(() => {
    const replay = () => {
      setTimeout(() => {
        if (churnEl) animateCounter(churnEl, 41, 2);
        if (locEl) animateCounter(locEl, 211, 2);
      }, 300);
    };
    replay();
    slideElement.addEventListener('slide-activated', replay);
    return () => slideElement.removeEventListener('slide-activated', replay);
  });
</script>

<SlideShell>
  <div class="wrapper" bind:this={slideElement}>
    <Eyebrow>Impacto</Eyebrow>
    <h2>Code Churn y <span class="highlight">Refactorización</span></h2>
    <p class="lead">El ciclo interminable de cambios</p>

    <div class="top-stats">
      <div class="stat card-glass">
        <div class="val err">+<span bind:this={churnEl}>0</span>%</div>
        <div class="lbl">Code Churn</div>
        <p>Código que se modifica inmediatamente después de escribirse</p>
      </div>
      <div class="stat card-glass">
        <div class="val err"><span bind:this={locEl}>0</span>M</div>
        <div class="lbl">LOC Copy-Paste</div>
        <p>Líneas duplicadas — Estudio GitClear</p>
      </div>
    </div>

    <div class="impact card-glass">
      <div class="item">
        <span class="num">2–3×</span>
        <span class="desc">Tiempo en reviews</span>
      </div>
      <div class="divider"></div>
      <div class="item">
        <span class="num">↓ 40%</span>
        <span class="desc">Calidad de código</span>
      </div>
      <div class="divider"></div>
      <div class="item">
        <span class="num">↑ 60%</span>
        <span class="desc">Deuda técnica</span>
      </div>
    </div>
  </div>
</SlideShell>

<style>
  .wrapper { max-width: 1000px; width: 100%; }
  h2 { font-size: clamp(2rem, 5vw, 3.5rem); margin-bottom: var(--spacing-sm); }
  .lead { color: var(--color-electric); margin-bottom: var(--spacing-2xl); }
  .top-stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--spacing-lg); margin-bottom: var(--spacing-xl); }
  .stat { padding: var(--spacing-xl); text-align: center; }
  .val {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 900;
    font-family: var(--font-display);
    line-height: 1;
    margin-bottom: var(--spacing-sm);
  }
  .val.err {
    background: linear-gradient(135deg, #ef4444, #f87171);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .lbl { font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-electric); margin-bottom: var(--spacing-sm); }
  .stat p { font-size: 0.875rem; opacity: 0.8; }
  .impact { display: flex; justify-content: space-around; align-items: center; padding: var(--spacing-xl); gap: var(--spacing-lg); }
  .item { display: flex; flex-direction: column; align-items: center; text-align: center; }
  .num { font-size: 1.75rem; font-weight: 900; font-family: var(--font-display); color: var(--color-electric); }
  .desc { font-size: 0.875rem; opacity: 0.75; margin-top: var(--spacing-xs); }
  .divider { width: 2px; height: 40px; background: linear-gradient(to bottom, transparent, rgba(96,165,250,0.3), transparent); }
  @media (max-width: 768px) {
    .top-stats { grid-template-columns: 1fr; }
    .impact { flex-direction: column; gap: var(--spacing-md); }
    .divider { width: 60px; height: 2px; background: linear-gradient(to right, transparent, rgba(96,165,250,0.3), transparent); }
  }
</style>
