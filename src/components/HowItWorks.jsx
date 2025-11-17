export default function HowItWorks() {
  const steps = [
    {
      title: 'Connect your calendar',
      desc: 'Link Google Calendar or your POS to sync availability and services.'
    },
    {
      title: 'Train your AI receptionist',
      desc: 'A short onboarding teaches the agent your hours, prices, and policies.'
    },
    {
      title: 'Share your booking link',
      desc: 'Clients book via phone or web — confirmations and reminders happen automatically.'
    }
  ]

  return (
    <section id="how-it-works" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">How it works</h2>
          <p className="mt-3 text-slate-300">Up and running in minutes.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 pt-12 backdrop-blur">
              <div className="absolute -top-4 left-6 h-10 w-10 rounded-xl bg-white text-slate-900 font-bold grid place-items-center shadow-lg">
                {i + 1}
              </div>
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_90%,rgba(251,191,36,0.08),transparent)]" />
    </section>
  )
}
