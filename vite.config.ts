import { defineConfig } from 'vite'

export default defineConfig(async () => {
  const mod = await import('@vitejs/plugin-react')
  const react = (mod as any).default ?? mod
  return {
    plugins: [react()],
  }
})
