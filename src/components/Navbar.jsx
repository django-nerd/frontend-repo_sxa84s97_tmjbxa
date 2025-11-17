import { Menu, Scissors, CalendarDays } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How it works' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2 text-white font-semibold tracking-tight">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 p-[2px]">
            <div className="h-full w-full rounded-[10px] bg-slate-900 grid place-items-center">
              <Scissors className="h-5 w-5 text-fuchsia-400" />
            </div>
          </div>
          <span>shlak.ai</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-slate-300 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-slate-300 hover:text-white text-sm">Sign in</a>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/10 transition">
            <CalendarDays className="h-4 w-4" />
            Book a demo
          </a>
        </div>

        <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 rounded-lg bg-white/10 text-white">
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 rounded-2xl bg-slate-800/60 backdrop-blur border border-white/10 overflow-hidden">
          <div className="px-6 py-4 space-y-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="block text-slate-200" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="text-slate-300">Sign in</a>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-white/10 text-white border border-white/10">
                <CalendarDays className="h-4 w-4" />
                Book a demo
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
