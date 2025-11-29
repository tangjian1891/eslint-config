import unusedImports from "eslint-plugin-unused-imports";

function createConfig(options: Record<string, boolean>) {
  if (!options.ci && process.env["ci"] !== "true") return [];
  return {
    name: "unused-imports/setup",
    plugins: {
      "unused-imports": unusedImports,
    },
  };
}

export { createConfig };
