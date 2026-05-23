<script lang="ts">
  import SlideCompare from '@codigosinsiesta/theme/slides/SlideCompare.svelte';
</script>

<SlideCompare
  eyebrow="Evolución"
  title="Agentes vs Chatbots"
  titleHighlight="Agentes"
  leftKind="neutral"
  rightKind="ok"
  left={{
    label: 'Chatbot tradicional',
    headline: 'Conversación reactiva',
    icon: '💬',
    items: [
      'Responde preguntas, mantiene conversación',
      'Procesa texto y genera respuestas',
      'Sin memoria persistente entre sesiones',
      'No ejecuta acciones en el mundo real'
    ]
  }}
  right={{
    label: 'Agente de IA',
    headline: 'Acción autónoma',
    icon: '🤖',
    items: [
      'Planifica y ejecuta tareas complejas',
      'Usa herramientas: búsqueda, código, APIs',
      'Memoria y contexto persistente',
      'Actúa en el mundo: ficheros, APIs, navegador'
    ]
  }}
/>
