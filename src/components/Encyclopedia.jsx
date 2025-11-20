import React from 'react'
import { motion } from 'framer-motion'

const sections = [
  { title: 'Items', color: 'from-amber-400 to-pink-500' },
  { title: 'Skills', color: 'from-cyan-400 to-fuchsia-500' },
  { title: 'Artifacts', color: 'from-emerald-400 to-lime-400' },
  { title: 'Biomes', color: 'from-violet-400 to-sky-400' },
]

const Encyclopedia = () => {
  return (
    <section id="encyclopedia" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Item & Skill Encyclopedia</h2>
          <p className="mt-2 text-cyan-100/90">All the tools you need to break the game—in the best way.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${s.color} opacity-10`}></div>
              <div className="relative">
                <h3 className="font-semibold text-white">{s.title}</h3>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <div key={idx} className="h-10 rounded-lg bg-white/5 border border-white/10"></div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Encyclopedia
