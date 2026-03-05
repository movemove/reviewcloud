import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://reviewcloud.net',
  output: 'static',
  build: {
    outDir: 'dist'
  }
});
