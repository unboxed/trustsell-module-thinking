import type { NextConfig } from "next";

/**
 * Two ways to run the blueprint:
 *  - default (docker compose / `next dev`): a live server that reads the module
 *    docs from disk on every request.
 *  - STATIC_EXPORT=1 (`.github/workflows/pages.yml`): a static snapshot in
 *    `out/`, baked at build time and published to GitHub Pages. PAGES_BASE_PATH
 *    is the sub-path a project site lives under (`/<repo-name>`).
 */
const isStaticExport = process.env.STATIC_EXPORT === "1";
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = isStaticExport
  ? {
      output: "export",
      basePath,
      assetPrefix: basePath || undefined,
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;
