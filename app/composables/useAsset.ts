// Resolves a public/ asset path against the app baseURL so it works both
// locally (baseURL "/") and on GitHub Pages (baseURL "/elevation-marketing/").
//
// Static `src`/`srcset` attributes are prefixed automatically at build time, but
// dynamic `:src`/`:srcset` bindings (for example from useSiteData) are not.
// This helper makes those paths explicit and keeps them deploy-target aware.
export function useAsset() {
  const runtimeConfig = useRuntimeConfig();
  const base = runtimeConfig.app.baseURL?.replace(/\/$/, "") ?? "";

  return (path: string) => `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
