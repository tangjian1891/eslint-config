import createPresetConfigs from "./presets";
import { utils } from "./utils";
// 建议安装 @types/eslint，这样可以使用 Linter.FlatConfig 替代 any
import type { Linter } from "eslint";

// 1. 定义全局唯一的缓存 Key (使用 Symbol.for 确保跨模块重载有效)
const CACHE_KEY = Symbol.for("MY_ESLINT_CACHE_DATA");
const OPTIONS_KEY = Symbol.for("MY_ESLINT_CACHE_OPTIONS");

export async function createPromiseConfigs(
  options: Record<string, any> = {},
): Promise<Linter.FlatConfig[]> {
  // options+ package.json mtime 作为参数一致性标识
  const optionsEtag = JSON.stringify(options) + "_" + utils.getPackageMtime();

  // @ts-ignore
  const globalCache = globalThis[CACHE_KEY];
  // @ts-ignore
  const globalOptionsEtag = globalThis[OPTIONS_KEY];

  // 只有当：有缓存 且 用户参数完全一致 时，才直接返回
  if (globalCache && globalOptionsEtag === optionsEtag) {
    return globalCache;
  }

  // 4. auto detection package
  options.vue = options.vue ?? utils.isPackageExists("vue");
  options.typescript =
    options.typescript ?? utils.isPackageExists("typescript");

  const configs = await createPresetConfigs(options);

  // 7. 写入全局缓存
  // @ts-ignore
  globalThis[CACHE_KEY] = configs;
  // @ts-ignore
  globalThis[OPTIONS_KEY] = optionsEtag;

  return configs;
}
