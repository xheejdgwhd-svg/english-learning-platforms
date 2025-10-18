'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="space-y-12">
      <section className="text-center py-16">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Master English, One Lesson at a Time
        </motion.h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Personalized paths, interactive quizzes, and smooth animations keep you motivated.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/dashboard" className="px-5 py-3 rounded-2xl bg-blue-600 text-white font-medium">Go to Dashboard</Link>
          <Link href="/auth/signin" className="px-5 py-3 rounded-2xl border border-slate-300">Sign in</Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {['Grammar','Vocabulary','Listening'].map((s, i) => (
          <motion.div key={s}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl shadow-sm bg-white"
          >
            <h3 className="text-xl font-semibold">{s}</h3>
            <p className="text-slate-600 mt-2">Bite-sized lessons with instant feedback.</p>
          </motion.div>
        ))}
      </section>
    </main>
  )
}
