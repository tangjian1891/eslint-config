import { default as plugins } from "./plugins";
import { default as rules } from "./rules";
import { default as ignores } from "./ignores";

export default async function createPresetConfigs(
  options: Record<string, boolean>,
) {
  return (
    await Promise.all([plugins, rules, ignores].flat().map((f) => f(options)))
  ).flat().filter(Boolean);
}
