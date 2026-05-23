<script lang="ts">
  import SlideList from '@codigosinsiesta/theme/slides/SlideList.svelte';
</script>

<SlideList
  eyebrow="Estándar abierto"
  title="MCP — Model Context Protocol"
  titleHighlight="MCP"
  columns={2}
  items={[
    {
      title: '¿Qué es MCP?',
      body: 'Protocolo abierto de **Anthropic** que permite a los agentes conectarse con fuentes de datos y herramientas externas de forma segura y consistente.'
    },
    {
      title: 'El problema que resuelve',
      body: 'Antes de MCP cada integración era ad-hoc. MCP estandariza cómo los agentes consumen **Tools**, **Resources** y **Prompts** de cualquier servidor.'
    },
    {
      title: 'Primitivas',
      body: '**Tools** — acciones que el agente puede ejecutar · **Resources** — datos que puede leer · **Prompts** — plantillas reutilizables.'
    },
    {
      title: 'Ecosistema',
      body: 'Servidores disponibles para GitHub, Postgres, filesystem, Slack, Figma, Notion, navegador y cientos más. Creciendo cada semana.'
    }
  ]}
/>
