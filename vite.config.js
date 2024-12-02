import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'custom-startup-logs',
      configureServer(server) {
        server.httpServer?.on('listening', () => {  
          console.clear();
          console.log(`VITE server is ready.`)
          console.log('\x1b[36m%s\x1b[0m',process.env.PUBLIC_URL);
        });
      },
    }
],
  server: {
    host:true,
    port: 8000,
  }
})
