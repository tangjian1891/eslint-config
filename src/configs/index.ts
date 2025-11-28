import { createConfig as createCiConfig } from "./ci";
import { createConfig as createIgnoreConfig } from "./ignore";
import { createConfig as createJsConfig } from "./js";
import { createConfig as createPrettierConfig } from "./prettier";
import { createConfig as createTypescriptConfig } from "./typescript";
import { createConfig as createVueConfig } from "./vue";

/**
 * Array of config factory functions in strict order.
 * Order matters:
 * 1. js - base JavaScript rules
 * 2. typescript - TypeScript support (conditional)
 * 3. vue - Vue support (conditional)
 * 4. ci - CI-specific rules (conditional)
 * 5. ignore - ignore patterns
 * 6. prettier - MUST BE LAST (disables conflicting formatting rules)
 */
export const configFactories = [
  createJsConfig,
  createTypescriptConfig,
  createVueConfig,
  createCiConfig,
  createIgnoreConfig,
  createPrettierConfig, // MUST BE LAST!
];
