<script lang="ts">
  import SlideResources from '@codigosinsiesta/theme/slides/SlideResources.svelte';
</script>

<SlideResources
  eyebrow="Taller"
  title="¡Ponlo en Práctica!"
  titleHighlight="Práctica"
  closing="Hecho con ♥ por Código Sin Siesta · 2025"
  takeaways={[
    { text: 'Los **4 pilares** del prompt: Instructions + Context + Rules + Examples' },
    { text: 'La **ventana de contexto** es la memoria de trabajo del modelo — úsala bien' },
    { text: 'Los **agentes** actúan en el mundo; los chatbots solo conversan' },
    { text: '**MCP** es el estándar para conectar agentes con herramientas externas' }
  ]}
  links={[
    {
      icon: '🚀',
      title: '¡Vamos al Taller!',
      url: 'https://github.com/CodigoSinSiesta/taller-ia-agentes-mcp',
      tag: 'github'
    }
  ]}
  qr={{ title: 'Repo del taller', url: 'https://github.com/CodigoSinSiesta/taller-ia-agentes-mcp' }}
/>
