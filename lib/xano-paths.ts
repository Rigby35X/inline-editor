export const ORG_PREFIX = process.env.XANO_ORG_PREFIX || '/orgs'

// Build Xano paths for a given org
export const xanoSettingsPath = (orgId: string) => `${ORG_PREFIX}/${orgId}/settings`
export const xanoPageElementsPath = (orgId: string, slug: string) =>
  `${ORG_PREFIX}/${orgId}/pages/${encodeURIComponent(slug)}/elements`
export const xanoAnimalsPath = (orgId: string) => `${ORG_PREFIX}/${orgId}/animals`
export const xanoAnimalDetailPath = (orgId: string, id: string) => `${ORG_PREFIX}/${orgId}/animals/${encodeURIComponent(id)}`
export const xanoEventsPath = (orgId: string) => `${ORG_PREFIX}/${orgId}/events`
