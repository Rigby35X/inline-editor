import { type XanoGroupKey, baseFor } from "./xano-groups"

// Reads Authorization: Bearer token from either:
// - explicit header (passed from client as "x-xano-token" or "authorization")
// - or from an HTTP-only cookie named "xano_token" (server only; see /api/auth/xano-token)
export function buildAuthHeader(token?: string) {
  if (!token) return {}
  return { Authorization: `Bearer ${token}` }
}

export async function xanoFetch<T = any>({
  group,
  path,
  token,
  init,
}: {
  group: XanoGroupKey
  path: string // includes leading slash, e.g. "/orgs/{orgId}/settings"
  token?: string
  init?: RequestInit
}): Promise<T> {
  const base = baseFor(group)
  const url = `${base}${path}`
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(init?.headers || {}),
    ...buildAuthHeader(token),
  }
  const res = await fetch(url, {
    ...init,
    headers,
    cache: "no-store",
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Xano ${group} ${res.status}: ${text}`)
  }
  return res.json()
}
