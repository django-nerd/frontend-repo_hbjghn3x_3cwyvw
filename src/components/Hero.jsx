import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Jd4wcqFfe70N-TXP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center py-28">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-[0_0_30px_rgba(34,211,238,0.35)]">
              Neon Roguelike Monster Battler
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="mt-4 text-cyan-100/90 text-lg">
              Procedural routes, chaotic encounters, and deep buildcraft. Every run is a highlight reel.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#start" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold shadow-[0_0_35px_rgba(217,70,239,0.35)] hover:scale-[1.02] transition">Start Run</a>
              <a href="#features" className="px-6 py-3 rounded-xl border border-cyan-400/40 text-cyan-100/90 hover:bg-cyan-400/10 transition">See Features</a>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-cyan-100/80">
              <div className="bg-slate-900/60 border border-cyan-400/20 rounded-lg p-4"><p className="text-xs">Modes</p><p className="text-xl font-bold">Endless • Weekly • Daily</p></div>
              <div className="bg-slate-900/60 border border-cyan-400/20 rounded-lg p-4"><p className="text-xs">Systems</p><p className="text-xl font-bold">Biomes • Weather • Terrain</p></div>
              <div className="bg-slate-900/60 border border-cyan-400/20 rounded-lg p-4"><p className="text-xs">Combat</p><p className="text-xl font-bold">Status • Crit • Evasion</p></div>
              <div className="bg-slate-900/60 border border-cyan-400/20 rounded-lg p-4"><p className="text-xs">Depth</p><p className="text-xl font-bold">Unlocks • Artifacts • Fusion</p></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="h-48 sm:h-56 md:h-64 bg-slate-900/70 border border-cyan-400/20 rounded-xl p-4">
              <p className="text-cyan-200/90 text-sm">Animated Cards</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {[1,2,3,4].map((i) => (
                  <motion.div key={i} whileHover={{ rotate: -2, y: -6 }} className="aspect-[3/4] rounded-lg bg-gradient-to-b from-slate-800 to-slate-900 border border-cyan-400/30 shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
                    <div className="h-full w-full grid place-items-center text-cyan-200/80 text-xs">Card {i}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="h-48 sm:h-56 md:h-64 bg-slate-900/70 border border-fuchsia-400/20 rounded-xl p-4">
              <p className="text-fuchsia-200/90 text-sm">Particle Grid</p>
              <div className="relative mt-3 h-[calc(100%-1.25rem)] overflow-hidden rounded-md">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(34,211,238,0.6) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
                <div className="absolute inset-0 animate-pulse bg-gradient-to-tr from-cyan-500/10 via-transparent to-fuchsia-500/10"></div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="col-span-2 h-48 sm:h-56 md:h-64 bg-slate-900/70 border border-cyan-400/20 rounded-xl p-4">
              <p className="text-cyan-200/90 text-sm">Route Map UI</p>
              <div className="mt-3 h-[calc(100%-1.25rem)] grid grid-cols-12 gap-2">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    <div className="flex-1 w-px bg-cyan-500/30"></div>
                    <div className="w-3 h-3 rounded-full bg-fuchsia-400"></div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
