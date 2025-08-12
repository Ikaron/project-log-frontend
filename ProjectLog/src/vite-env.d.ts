/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_PROXY_FROM_URL: string;
    readonly VITE_API_BASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare const API_OVERRIDE_URL: string | null;