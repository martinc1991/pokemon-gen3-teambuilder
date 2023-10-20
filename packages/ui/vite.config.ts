import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    watch: {},
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'ui2',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        sourcemap: true,
      },
    },
    emptyOutDir: true,
    outDir: 'dist',
    sourcemap: true,
    target: 'esnext',
  },
  plugins: [react(), dts()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
