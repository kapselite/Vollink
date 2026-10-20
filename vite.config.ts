import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // or your framework plugin
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ command, isPreview }) => ({
  // GitHub Pages serves the site from https://kapselite.github.io/Vollink/,
  // so the build (and `npm run preview` of it) use /Vollink/. Local dev stays at /.
  base: command === 'build' || isPreview ? '/Vollink/' : '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
}));
