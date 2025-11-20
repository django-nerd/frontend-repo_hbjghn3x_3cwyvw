import React from 'react'
import { motion } from 'framer-motion'

const monsters = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: `Mon ${i + 1}`,
  type: i % 3 === 0 ? 'Fire / Dark' : i % 3 === 1 ? 'Water / Ice' : 'Leaf / Earth',
  rarity: ['Common','Uncommon','Rare','Epic','Legendary'][i % 5],
}))

const MonsterIndex = () => {
  return (
    <section id="dex" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Monster Index</h2>
            <p className="text-cyan-100/90 mt-1">Discover starters, evolutions, shinies, and more.</p>
          </div>
          <div className="flex gap-2">
            <input className="px-3 py-2 rounded-lg bg-slate-900/70 border border-cyan-400/20 text-cyan-100 placeholder:text-cyan-300/40" placeholder="Search..."/>
            <select className="px-3 py-2 rounded-lg bg-slate-900/70 border border-cyan-400/20 text-cyan-100">
              <option>All Types</option>
              <option>Fire</option>
              <option>Water</option>
              <option>Leaf</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {monsters.map((m) => (
            <motion.div whileHover={{ y: -6 }} key={m.id} className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 grid place-items-center">
                <div className="w-16 h-16 rounded-md bg-cyan-400/20 border border-cyan-400/30"></div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">{m.name}</h3>
                  <span className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-cyan-100/90">{m.rarity}</span>
                </div>
                <p className="mt-1 text-sm text-cyan-100/80">{m.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MonsterIndex
