<script lang="ts">
  import SlideEquation from '@codigosinsiesta/theme/slides/SlideEquation.svelte';
</script>

<SlideEquation
  eyebrow="La fórmula"
  title="La Fórmula Perfecta"
  titleHighlight="Fórmula Perfecta"
  note="Combina los 4 pilares en orden y obtendrás outputs consistentes y de alta calidad en cualquier modelo."
  terms={[
    { kind: 'term', label: 'Pilar 1', value: 'Context' },
    { kind: 'op', symbol: '+' },
    { kind: 'term', label: 'Pilar 2', value: 'Instruction' },
    { kind: 'op', symbol: '+' },
    { kind: 'term', label: 'Pilar 3', value: 'Rules' },
    { kind: 'op', symbol: '+' },
    { kind: 'term', label: 'Pilar 4', value: 'Examples' },
    { kind: 'op', symbol: '=' },
    { kind: 'term', label: 'Resultado', value: 'Output de Calidad', outcome: true }
  ]}
/>
