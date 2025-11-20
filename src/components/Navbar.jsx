import React from 'react'
import { Menu, Sword, ShoppingBag, BookOpenCheck, User, SunMedium, Moon, Zap } from 'lucide-react'

const Navbar = () => {
  const [theme, setTheme] = React.useState('neon')

  React.useEffect(() => {
    const root = document.documentElement
    root.classList.remove('theme-light', 'theme-dark', 'theme-neon')
    root.classList.add(`theme-${theme}`)
  }, [theme])

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-slate-950/40 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <span className="absolute inset-0 rounded-lg blur-lg bg-cyan-500/40 group-hover:bg-pink-500/40 transition-colors"></span>
              <div className="relative bg-slate-900/70 border border-cyan-400/30 rounded-lg p-2">
                <Zap className="w-6 h-6 text-cyan-300" />
              </div>
            </div>
            <span className="font-extrabold tracking-tight text-white text-lg">RogueMon</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-cyan-100/80">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#dex" className="hover:text-white transition-colors">Monsters</a>
            <a href="#encyclopedia" className="hover:text-white transition-colors">Encyclopedia</a>
            <a href="#leaderboards" className="hover:text-white transition-colors">Leaderboards</a>
            <a href="#battle" className="hover:text-white transition-colors">Battle Preview</a>
          </nav>

          <div className="flex items-center gap-2">
            <button aria-label="theme light" onClick={() => setTheme('light')} className="p-2 rounded-lg border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition"><SunMedium className="w-5 h-5"/></button>
            <button aria-label="theme dark" onClick={() => setTheme('dark')} className="p-2 rounded-lg border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition"><Moon className="w-5 h-5"/></button>
            <button aria-label="theme neon" onClick={() => setTheme('neon')} className="p-2 rounded-lg border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition"><Sword className="w-5 h-5"/></button>

            <a href="#start" className="ml-2 inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold px-4 py-2 rounded-lg shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:shadow-[0_0_35px_rgba(217,70,239,0.35)] transition">
              <Menu className="w-4 h-4"/> Start Run
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
