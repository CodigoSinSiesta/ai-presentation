<script lang="ts">
  import SlideList from '@codigosinsiesta/theme/slides/SlideList.svelte';
</script>

<SlideList
  eyebrow="Buenas prácticas"
  title="Los 4 Pilares de un Buen Prompt"
  titleHighlight="4 Pilares"
  columns={2}
  items={[
    {
      title: 'Instructions',
      body: 'Define **qué** quieres que haga. Sé específico, usa verbos de acción y define el resultado esperado.\n\n`"Analiza este código y refactorízalo para mejorar su legibilidad usando principios SOLID"`'
    },
    {
      title: 'Context',
      body: 'Proporciona el **contexto necesario**: tecnologías, restricciones, audiencia. Cuanto más relevante sea el contexto, mejor el output.'
    },
    {
      title: 'Rules',
      body: 'Establece **reglas y restricciones** claras: estilo de código, convenciones, qué evitar. Delimita el espacio de soluciones.'
    },
    {
      title: 'Examples',
      body: 'Muestra **ejemplos** del formato esperado. El few-shot prompting mejora drásticamente la precisión y consistencia.'
    }
  ]}
/>
