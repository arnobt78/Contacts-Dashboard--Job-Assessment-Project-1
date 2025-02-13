import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(), // Use the React plugin for Vite
    tsconfigPaths(), // Use the TypeScript paths plugin to resolve paths from tsconfig
  ],
  server: {
    port: 3000, // Set the development server port to 3000
    open: true, // Automatically open the app in the browser on server start
  },
  build: {
    outDir: 'dist', // Specify the output directory for the build
  },
});
