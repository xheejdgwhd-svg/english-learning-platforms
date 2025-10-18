'use client'
import { signIn } from 'next-auth/react'

export default function SignIn() {
  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-2xl shadow-sm">
      <h1 className="text-2xl font-bold">Sign in</h1>
      <p className="mt-2 text-slate-600">Use your Google account to continue.</p>
      <button onClick={() => signIn('google')}
        className="mt-6 w-full px-4 py-3 rounded-xl bg-blue-600 text-white font-medium">
        Continue with Google
      </button>
    </div>
  )
}
