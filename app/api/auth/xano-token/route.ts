import { NextRequest, NextResponse } from "next/server"

// Allows client to POST { token } to set a secure HTTP-only cookie for server-side Xano calls.
export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json()
    if (!token) {
      return NextResponse.json({ error: "Missing token" }, { status: 400 })
    }
    const res = NextResponse.json({ ok: true })
    res.cookies.set("xano_token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
    return res
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Failed to set token" }, { status: 500 })
  }
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true })
  res.cookies.set("xano_token", "", { httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge: 0 })
  return res
}
