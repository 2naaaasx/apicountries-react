import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/apicountries-react/', // Chemin relatif correspondant à votre dépôt GitHub
  host: '0.0.0.0',
  port: process.env.PORT || 3000,
});
