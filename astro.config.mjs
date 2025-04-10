// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
// import react from "@astrojs/react"; 
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    
  }, 
  integrations: [sanity({
    projectId: 'in4t04gl',
    dataset: 'production',
    useCdn: false, // See note on using the CDN
    // apiVersion: "2025-04-06", // insert the current date to access the latest version of the API
    studioBasePath: '/admin' // If you want to access the Studio on a route
  }), react()
],
output: 'server'
})