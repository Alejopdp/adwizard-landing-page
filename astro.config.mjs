import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://adwizard.github.io/",
  integrations: [tailwind(), icon()],
  base: 'adwizard-landing-page',

});
