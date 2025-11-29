import { defineConfig } from "eslint/config";

export default function rules(options: Record<string, boolean>) {
  if (!options.ci && process.env["ci"] !== "true") return [];
  return defineConfig({
    name: "custom/rules",
    rules: {
      "custom/no-console": "error",
      "custom/no-debugger": "error",
    },
  });
}
