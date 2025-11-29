import {default as jsRules} from "./js";
import { default as prettierRules } from "./prettier";
import { default as customRules } from "./custom";
import { default as typescriptRules } from "./typescript";
import { default as vueRules } from "./vue";
import { default as unusedImportsRules } from "./unused-imports";

export default [
  jsRules,
  prettierRules, //  MUST BE LAST!
  typescriptRules,
  vueRules,
  unusedImportsRules,
  customRules,
];
