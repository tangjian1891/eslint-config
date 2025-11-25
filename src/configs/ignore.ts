import { defineConfig } from "eslint/config";

// default add
export function createConfig() {
  return defineConfig({
    ignores: ["node_modules", "dist", "build"],
  });
}
