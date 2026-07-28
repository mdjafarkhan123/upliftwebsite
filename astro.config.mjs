import { defineConfig } from "astro/config";
import yaml from "@rollup/plugin-yaml";
import sitemap from "@astrojs/sitemap"; // Import the Astro sitemap integration

// https://astro.build/config
export default defineConfig({
    // IMPORTANT FOR SEO: Your production site URL is required for sitemap generation.
    // Replace "https://upliftcontractor.com" with your actual domain when you launch.
    site: "https://upliftcontractor.com",
    
    // Enable sitemap auto-generation on build
    integrations: [
        sitemap({
            // You can add options here if you want to exclude certain pages, e.g.:
            // filter: (page) => page !== 'https://upliftcontractor.com/private-page'
        })
    ],

    vite: {
        plugins: [yaml()],
        build: {
            cssCodeSplit: true,
        },
        css: {
            preprocessorOptions: {
                scss: {
                    // This tells Sass it can look in these folders automatically
                    loadPaths: ["./src/styles"],
                },
            },
        },
    },
});
