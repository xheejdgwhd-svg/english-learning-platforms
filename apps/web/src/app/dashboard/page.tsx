import { getServerSession } from "next-auth"
import Link from "next/link"

export default async function Dashboard() {
  const session = await getServerSession()
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      {!session ? (
        <p className="text-slate-600">You are not signed in. <Link className="text-blue-600 underline" href="/auth/signin">Sign in</Link></p>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-5 bg-white rounded-2xl shadow-sm">
            <h3 className="font-semibold">Today&apos;s Goal</h3>
            <p className="text-slate-600">Finish 1 lesson, score 80%+.</p>
          </div>
          <div className="p-5 bg-white rounded-2xl shadow-sm">
            <h3 className="font-semibold">Continue Lesson</h3>
            <p className="text-slate-600">Unit 1: Present Simple</p>
          </div>
          <div className="p-5 bg-white rounded-2xl shadow-sm">
            <h3 className="font-semibold">Streak</h3>
            <p className="text-slate-600">4 days 🔥</p>
          </div>
        </div>
      )}
    </div>
  )
}
