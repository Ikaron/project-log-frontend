import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig(({ command, mode }) => {

    console.log('API URL: ' + env.VITE_API_BASE_URL)

    const env = loadEnv(mode, process.cwd() + "/env", '')
    if (command === 'serve') {
        return {
            plugins: [vue(), tailwindcss(), basicSsl()],
            envDir: './env',
            server: {
                proxy: {
                    '/api': {
                        target: env.VITE_API_PROXY_FROM_URL,
                        changeOrigin: true,
                        secure: false,
                        rewrite: str => str.replace("api/", "")
                    }
                },
                https: {

                },
                port: 5173
            },
            define: {
                API_OVERRIDE_URL: JSON.stringify('https://localhost:5173/api')
            }
        }
    } else {
        // command === 'build'
        return {
            plugins: [vue(), tailwindcss()],
            envDir: './env',
            define: {
                API_OVERRIDE_URL: null
            }
        }
    }
})