export default defineNuxtConfig({
    compatibilityDate: '2025-01-21',
    devtools: { enabled: false },

    // Head [Icon, charset, meta]
    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/svg', href: '/favicon.svg' }]
        },

        rootTag: 'body',
        rootId: 'app'
    },

    // Src Directory
    srcDir: 'src/',

    // Modules and components
    modules: ["@nuxt/ui", '@nuxt/image'],

    components: {
        dirs: [
            { path: '~/components/global', global: true },
        ]
    },

    // Tailwind CSS
    css: ['~/assets/css/main.css']
});