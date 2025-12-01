
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Let's configure Vite to dynamically understand the repository context.
// E.g. when we deploy to GitHub pages, the repository name will be part of the path 
// We can use a flag in the GitHub Actions build environment to detect the repo name.
// The repo name is always the bit after the “/” 
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';

// See also: https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Locally you still get “/”, but on Actions you get “/repositoryName/”
  base: process.env.GITHUB_ACTIONS === 'true' ? `/${repositoryName}/` : '/'
}); 
