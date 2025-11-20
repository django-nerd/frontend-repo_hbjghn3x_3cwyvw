import React from 'react'
import { motion } from 'framer-motion'

const Badge = ({ children }) => (
  <span className="px-2 py-1 rounded-md text-xs bg-white/5 border border-white/10 text-cyan-100/90">{children}</span>
)

const BattlePreview = () => {
  return (
    <section id="battle" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Battle UI Mockup</h2>
            <p className="mt-2 text-cyan-100/90">Turn order, weather, status, and layered accuracy/evasion visualized.</p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge>Weather: Storm</Badge>
              <Badge>Terrain: Misty Field</Badge>
              <Badge>Speed: x2</Badge>
              <Badge>Auto: Off</Badge>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {['Attack','Skill','Item','Defend','Run','Auto'].map((b) => (
                <button key={b} className="px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-cyan-400/30 text-white hover:from-cyan-500/30 hover:to-fuchsia-500/30 transition">{b}</button>
              ))}
            </div>
          </div>

          <div className="relative bg-slate-950/60 border border-white/10 rounded-2xl p-6 overflow-hidden">
            <div className="absolute -inset-32 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(34,211,238,0.6) 1px, transparent 1px)', backgroundSize: '14px 14px' }} />
            <div className="relative grid grid-rows-6 gap-3">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="row-span-4 rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 grid grid-cols-2">
                <div className="flex flex-col items-center justify-center gap-3 border-r border-white/5">
                  <div className="w-24 h-24 rounded-md bg-cyan-400/20 border border-cyan-400/30"></div>
                  <div className="text-center">
                    <p className="text-white font-semibold">Volt Drake</p>
                    <p className="text-cyan-100/80 text-xs">Electric / Air</p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="w-24 h-24 rounded-md bg-fuchsia-400/20 border border-fuchsia-400/30"></div>
                  <div className="text-center">
                    <p className="text-white font-semibold">Hex Bloom</p>
                    <p className="text-cyan-100/80 text-xs">Hex / Nature</p>
                  </div>
                </div>
              </motion.div>

              <div className="row-span-2 grid grid-cols-4 gap-3">
                {['Spark Chain','Gale Cut','Ion Shield','Focus'].map((a, i) => (
                  <motion.button key={i} whileHover={{ y: -3 }} className="rounded-lg bg-white/5 border border-white/10 p-3 text-left">
                    <p className="text-white text-sm font-medium">{a}</p>
                    <p className="text-cyan-100/80 text-xs">Acc 95% • Crit x1.{i+2}</p>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default BattlePreview
