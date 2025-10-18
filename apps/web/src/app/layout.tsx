import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'FluentPath — Learn English',
  description: 'An engaging way to master English.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-6">{children}</div>
      </body>
    </html>
  );
}
