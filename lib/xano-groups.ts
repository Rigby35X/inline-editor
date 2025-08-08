// Central map of your Xano API group base URLs.
// You can override these with env vars later if desired.
export const XANO_GROUPS = {
  primary: "https://x8ki-letl-twmt.n7.xano.io/api:wPrzs4Mr",
  design_settings: "https://x8ki-letl-twmt.n7.xano.io/api:0BQDG239",
  dogs: "https://x8ki-letl-twmt.n7.xano.io/api:Od874PbA",
  live_site: "https://x8ki-letl-twmt.n7.xano.io/api:nS8IsiFR",
  pages: "https://x8ki-letl-twmt.n7.xano.io/api:mlssTgVM",
  site_config: "https://x8ki-letl-twmt.n7.xano.io/api:1vOYCkyt",
  templates: "https://x8ki-letl-twmt.n7.xano.io/api:cz-ZpYmR",
} as const

export type XanoGroupKey = keyof typeof XANO_GROUPS

export function baseFor(group: XanoGroupKey) {
  return XANO_GROUPS[group]
}
