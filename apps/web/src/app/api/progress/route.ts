import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { authGuard } from '@/lib/server-auth'

export async function GET() {
  const { user } = await authGuard()
  const progress = await prisma.progress.findMany({ where: { userId: user.id } })
  return NextResponse.json({ items: progress })
}
