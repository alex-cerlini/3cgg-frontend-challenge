import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: path.resolve(__dirname, 'src/components/') },
      { find: '@templates', replacement: path.resolve(__dirname, 'src/templates/') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages/') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils/') },
      { find: '@stores', replacement: path.resolve(__dirname, 'src/stores/') },
    ]
  },
  
});
