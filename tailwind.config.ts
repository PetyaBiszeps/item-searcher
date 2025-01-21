import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
    content: [],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                backgroundBlocks: "var(--bg-blocks)",
                title: "var(--title)",
                description: "var(--description)",
                discount: "var(--discount)",
                other: "var(--other)",
                categoryBg: "var(--category-bg)",
                categoryText: "var(--category-text)"
            }
        }
    },
    plugins: [
        require('tailwind-scrollbar')({ nocompatible: true })
    ]
};