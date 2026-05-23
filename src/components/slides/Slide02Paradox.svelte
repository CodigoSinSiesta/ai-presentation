<script lang="ts">
  import SlideStats from '@codigosinsiesta/theme/slides/SlideStats.svelte';
</script>

<SlideStats
  eyebrow="El problema"
  title="La Paradoja del Vibe Coding"
  titleHighlight="Paradoja"
  intro="Alta adopción, baja confianza. Sin procesos adecuados, la velocidad se convierte en deuda técnica."
  stats={[
    {
      value: '85%',
      label: 'Adopción',
      trend: '↑ de desarrolladores usan IA',
      color: 'ok',
      note: 'Los equipos abrazan la IA para acelerar desarrollo'
    },
    {
      value: '68%',
      label: 'Desconfianza',
      trend: '↓ baja confianza en la calidad',
      color: 'err',
      note: 'Requieren revisión senior del código generado'
    },
    {
      value: '3×',
      label: 'Más revisiones',
      color: 'warn',
      note: 'Sin control, la velocidad se convierte en deuda técnica'
    }
  ]}
/>
