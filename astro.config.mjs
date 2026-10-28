import { defineConfig } from "astro/config";

// Set SITE_URL to the final public origin; BASE_PATH supports GitHub project pages.
export default defineConfig({
  output: "static",
  devToolbar: { enabled: false },
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || "/",
  trailingSlash: "always",
  build: { format: "directory" },
  // External script files keep the static Cloudflare CSP effective.
  vite: { build: { assetsInlineLimit: 0 } },
});
