import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export async function authGuard(role?: 'ADMIN') {
  const session = await getServerSession()
  if (!session?.user) {
    throw new Response('Unauthorized', { status: 401 })
  }
  if (role) {
    // NOTE: for demo, assume everyone is STUDENT; implement role check using DB in real app
    throw new Response('Forbidden', { status: 403 })
  }
  return { user: session.user }
}
