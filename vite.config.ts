import { reactRouter } from "@react-router/dev/vite";
import {
  sentryOnBuildEnd,
  sentryReactRouter,
  type SentryReactRouterBuildOptions,
} from "@sentry/react-router";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "samcrafters",
  project: "travel-agency",
  // An auth token is required for uploading source maps.
  authToken:
    "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",
  // ...
};

export default defineConfig((config) => {
  return {
    plugins: [
      tailwindcss(),
      tsconfigPaths(),
      reactRouter(),
      sentryReactRouter(sentryConfig, config),
    ],
    ssr: {
      noExternal: [/@syncfusion/],
    },
    buildEnd: async ({ viteConfig, reactRouterConfig, buildManifest }) => {
      // ...
      // Call this at the end of the hook
      await sentryOnBuildEnd({ viteConfig, reactRouterConfig, buildManifest });
    },
  };
});
