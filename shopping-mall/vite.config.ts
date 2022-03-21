import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { reactRouterPlugin } from "vite-plugin-next-react-router";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
    // reactRouterPlugin(),
    reactRefresh(),
  ],
});
