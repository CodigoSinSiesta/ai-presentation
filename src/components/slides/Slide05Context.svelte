<script lang="ts">
  import SlideList from '@codigosinsiesta/theme/slides/SlideList.svelte';
</script>

<SlideList
  eyebrow="Fundamentos"
  title="Ventana de Contexto"
  titleHighlight="Ventana de Contexto"
  columns={2}
  items={[
    {
      title: '¿Qué es?',
      body: 'La cantidad máxima de **tokens** que un modelo puede procesar en una sola conversación. Es su "memoria de trabajo".'
    },
    {
      title: 'Limitaciones',
      body: 'Capacidad finita de procesamiento. Mayor contexto = mayor costo. El modelo no recuerda conversaciones anteriores.'
    },
    {
      title: 'Modelos actuales',
      body: '**GPT-4**: 128K tokens · **Claude**: hasta 1M tokens · **Gemini**: hasta 2M tokens. 1 token ≈ 0.75 palabras.'
    },
    {
      title: 'Estrategias',
      body: 'RAG para contexto dinámico, resúmenes progresivos, memory banks, y `CLAUDE.md` / `AGENTS.md` para contexto persistente.'
    }
  ]}
/>
