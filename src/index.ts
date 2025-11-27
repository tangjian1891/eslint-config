import { defineConfig } from "eslint/config";

import * as configFactores from "./configs";

type ConfigFactory = (
  options: Record<string, unknown>,
) => ReturnType<typeof defineConfig>;

export async function createPromiseConfigs(
  options: Record<string, unknown> = {},
): Promise<any[]> {
  const configs: ReturnType<typeof defineConfig>[] = [];

  for (const key in configFactores) {
    const factory = configFactores[
      key as keyof typeof configFactores
    ] as ConfigFactory;
    const config = await factory(options);
    if (Array.isArray(config)) {
      configs.push(...config);
    }
  }

  return configs.filter(Boolean);
}
