import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 md:pt-32 md:pb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AI-powered barber bookings
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white">
              Book barber appointments in seconds.
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-slate-200/90">
              Shlak uses an AI voice agent to handle scheduling, reminders, and cancellations. Faster, smarter, and always on.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 font-semibold px-5 py-3 shadow-lg shadow-white/10">
                Get started
              </a>
              <a href="#how-it-works" className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white font-medium px-5 py-3 border border-white/10 backdrop-blur">
                See how it works
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.25),transparent_60%)]" />
    </section>
  )
}
