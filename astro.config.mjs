import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

export default defineConfig({
  site: 'https://codigosinsiesta.github.io',
  base: '/ai-presentation',
  integrations: [svelte()],
  server: {
    port: 4321,
  },
});
