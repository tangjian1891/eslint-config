import { defineConfig } from "eslint/config";
import { noConsole, noDebugger } from "../../custom-rules";
// enhangce for ci environment
export function createConfig(options: Record<string, boolean>) {
  if (!options.ci && process.env["ci"] !== "true") return [];
  return defineConfig({
    name: "custom/setup",
    plugins: {
      custom: {
        rules: {
          "no-console": noConsole,
          "no-debugger": noDebugger,
        },
      },
    },
  });
}
