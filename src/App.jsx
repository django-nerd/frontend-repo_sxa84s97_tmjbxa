import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <div className="absolute inset-0 opacity-60 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(236,72,153,0.12),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(251,191,36,0.08),transparent_40%)]" />

      <div className="relative">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />

        <footer id="contact" className="border-t border-white/10 py-10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>© {new Date().getFullYear()} shlak.ai — AI barber bookings</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
