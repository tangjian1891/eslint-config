import { createConfig as createCiConfig } from "./custom";
import { createConfig as createJsConfig } from "./js";

import { createConfig as createTypescriptConfig } from "./typescript";
import { createConfig as createVueConfig } from "./vue";
import { createConfig as createSimpleImportSortConfig } from "./simple-import-sort";
import { createConfig as createUnusedImportsConfig } from "./unused-imports";

/**
 * Array of config factory functions in strict order.
 * Order matters:
 * 1. js - base JavaScript rules
 * 2. typescript - TypeScript support (conditional)
 * 3. vue - Vue support (conditional)
 * 4. ci - CI-specific rules (conditional)
 * 5. ignore - ignore patterns
 */
export default [
  createJsConfig,
  createTypescriptConfig,
  createVueConfig,
  createCiConfig,
  createSimpleImportSortConfig,
  createUnusedImportsConfig,
];
