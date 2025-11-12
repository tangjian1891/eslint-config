export async function interopDefault<T>(
  m: Awaited<T>
): Promise<T extends { default: infer U } ? U : T> {
  const resolved = await m;
  return (resolved as any).default || resolved;
}
