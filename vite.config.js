import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import VitePluginCss from 'vite-plugin-css';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    modules:{
      localsConvention:"camelCase",
    },
  },
})



