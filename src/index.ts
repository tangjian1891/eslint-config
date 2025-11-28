import {  configFactories } from "./configs";

export async function createPromiseConfigs(
  options: Record<string, any> = {},
): Promise<any[]> {
  const configs: any[] = [];

  for (const factory of configFactories) {
    const config = await factory(options);
    if (Array.isArray(config)) {
      configs.push(...config);
    } else if (config) {
      configs.push(config);
    }
  }
  configs.push({
    rules:{
      "unused-imports/no-unused-vars":"off",
      "no-unused-vars":"off",
      "@typescript-eslint/no-unused-vars":"off"
    }
  })

  return configs;
}
