/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_MAILGUN_API_KEY: string
    readonly VITE_MAILGUN_DOMAIN: string
    readonly VITE_MAILGUN_RECIPIENT: string
    readonly VITE_MAILGUN_FROM: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
