// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    devtools: { enabled: true },
    app: {
        head: {
            title: "Anneloes Louwe | Portfolio",
            htmlAttrs: {
                lang: "en",
            },
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                {
                    hid: "description",
                    name: "description",
                    content: "Front-end developer, UX designer & Hedera enthusiast ",
                },
                { name: "format-detection", content: "telephone=no" },
            ],
        },
    },
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            "tailwindcss/nesting": {},
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
