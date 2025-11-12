import * as configFactores from "./configs";

export function createConfigs(options: Record<string, unknown>) {
  const configs = [];

  for (const key in configFactores) {
    const factory = (configFactores as any)[key];
    const config = factory(options);
    config && configs.push(...config);
  }

  return configs.filter(Boolean);
}
