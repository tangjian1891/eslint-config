import { defineConfig } from "eslint/config";

import * as configFactores from "./configs";

type ConfigFactory = (
  options: Record<string, unknown>
) => ReturnType<typeof defineConfig>;

export function createConfigs(options: Record<string, unknown>) {
  const configs: ReturnType<typeof defineConfig>[] = [];

  for (const key in configFactores) {
    const factory = configFactores[
      key as keyof typeof configFactores
    ] as ConfigFactory;
    const config = factory(options);
    config && configs.push(...config);
  }

  return configs.filter(Boolean);
}
