import { Bot, CalendarCheck2, BellRing, PhoneCall } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'AI voice agent',
    desc: 'Answers calls, understands intent, and books the right service without you lifting a finger.'
  },
  {
    icon: CalendarCheck2,
    title: 'Smart scheduling',
    desc: 'Fills gaps, prevents double-booking, and syncs with your existing calendar tools.'
  },
  {
    icon: BellRing,
    title: 'Reliable reminders',
    desc: 'Automatic SMS reminders reduce no-shows and keep your chairs full.'
  },
  {
    icon: PhoneCall,
    title: '24/7 availability',
    desc: 'Never miss a booking again — your AI receptionist works around the clock.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Built for modern barbershops</h2>
          <p className="mt-3 text-slate-300">Tools that save time and create a smoother client experience.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/30 to-amber-400/30 grid place-items-center mb-4">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(99,102,241,0.15),transparent),radial-gradient(60%_60%_at_80%_20%,rgba(236,72,153,0.1),transparent)]" />
    </section>
  )
}
