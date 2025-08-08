import { cookies, headers } from "next/headers"

// Extract the best available Xano bearer token for server routes.
// Order of precedence:
// 1) "authorization" header (already "Bearer ...")
// 2) "x-xano-token" header (we'll prefix Bearer)
// 3) "xano_token" cookie (raw token value)
export async function getServerXanoToken(): Promise<string | undefined> {
  const h = await headers()
  const direct = h.get("authorization")
  if (direct) {
    const val = direct.trim()
    if (val.toLowerCase().startsWith("bearer ")) return val.slice(7)
    return val // fallback
  }
  const custom = h.get("x-xano-token")
  if (custom) return custom.trim()

  const c = await cookies()
  const ck = c.get("xano_token")?.value
  return ck
}
