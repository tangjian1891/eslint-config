import { loadTypescriptEslint, loadVueParser, loadVuePlugin } from "./loaders";
import { isPackageExists } from "./is-package-exist";
import { getPackageMtime } from "./getPackageMtime";

export const utils = {
  loadTypescriptEslint,
  loadVueParser,
  loadVuePlugin,
  isPackageExists,
  getPackageMtime,
};
