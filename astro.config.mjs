import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vue from "@astrojs/vue";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), vue()],
  output: "server",
  adapter: netlify()
});