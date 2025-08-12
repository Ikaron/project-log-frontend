import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig(({ command }) => {

    if (command === 'serve') {
        return {
            plugins: [vue(), tailwindcss(), basicSsl()],
            envDir: "./env",
            server: {
                proxy: {
                    '/api': {
                        // TODO: Load this from a .env file as well
                        target: 'https://localhost:8081',
                        changeOrigin: true,
                        secure: false
                    }
                },
                https: {

                }
            }
        }
    } else {
        // command === 'build'
        return {
            plugins: [vue(), tailwindcss()],
            envDir: "./env"
        }
    }
})