import { defineConfig, loadEnv } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(async ({ command, mode }) => {
    const env = loadEnv(mode, process.cwd());
    console.log(`command - ${command}. mode - ${mode}.`);
    return {
        base: env.VITE_APP_BASE ?? '/',
        server: {
            port: 8081,
        },
        build: {
            outDir: env.VITE_APP_DIST ?? 'www',
        },
        plugins: [react(), legacy(), tsconfigPaths()],
    };
});
