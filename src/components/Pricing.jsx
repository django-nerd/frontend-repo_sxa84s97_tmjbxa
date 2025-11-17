export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Simple pricing</h2>
          <p className="mt-3 text-slate-300">Start free, scale as you grow.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-white font-semibold">Starter</h3>
            <p className="mt-2 text-slate-300 text-sm">For solo barbers</p>
            <div className="mt-6 flex items-end gap-1">
              <span className="text-3xl font-bold text-white">$0</span>
              <span className="text-slate-400">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li>• Online booking</li>
              <li>• SMS reminders</li>
              <li>• 100 AI minutes</li>
            </ul>
            <a className="mt-6 inline-flex items-center justify-center rounded-xl bg-white text-slate-900 font-semibold px-4 py-2" href="#">Get started</a>
          </div>

          <div className="rounded-2xl border border-fuchsia-400/30 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur relative">
            <div className="absolute -top-3 right-6 rounded-full bg-fuchsia-500 text-white text-xs px-2 py-1">Popular</div>
            <h3 className="text-white font-semibold">Pro</h3>
            <p className="mt-2 text-slate-300 text-sm">For busy shops</p>
            <div className="mt-6 flex items-end gap-1">
              <span className="text-3xl font-bold text-white">$49</span>
              <span className="text-slate-400">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li>• Everything in Starter</li>
              <li>• Unlimited bookings</li>
              <li>• 1,000 AI minutes</li>
            </ul>
            <a className="mt-6 inline-flex items-center justify-center rounded-xl bg-white text-slate-900 font-semibold px-4 py-2" href="#">Start free trial</a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-white font-semibold">Business</h3>
            <p className="mt-2 text-slate-300 text-sm">Multi-location</p>
            <div className="mt-6 flex items-end gap-1">
              <span className="text-3xl font-bold text-white">Custom</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li>• Dedicated success manager</li>
              <li>• Advanced analytics</li>
              <li>• Priority support</li>
            </ul>
            <a className="mt-6 inline-flex items-center justify-center rounded-xl bg-white text-slate-900 font-semibold px-4 py-2" href="#">Talk to sales</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_80%,rgba(168,85,247,0.12),transparent)]" />
    </section>
  )
}
