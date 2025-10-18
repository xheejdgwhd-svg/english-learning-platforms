import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { authGuard } from '@/lib/server-auth'

export async function GET() {
  await authGuard()
  const lessons = await prisma.lesson.findMany({ take: 20, orderBy: { createdAt: 'desc' } })
  return NextResponse.json({ items: lessons })
}

export async function POST(req: Request) {
  await authGuard('ADMIN')
  const body = await req.json()
  const created = await prisma.lesson.create({ data: body })
  return NextResponse.json(created, { status: 201 })
}
