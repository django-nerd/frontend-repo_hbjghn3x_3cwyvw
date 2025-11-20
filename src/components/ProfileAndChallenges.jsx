import React from 'react'

const ProfileAndChallenges = () => {
  return (
    <section id="start" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-cyan-400/20 border border-cyan-400/30"></div>
              <div>
                <p className="text-white font-semibold">Guest</p>
                <div className="mt-2 w-56 h-2 rounded bg-white/10 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-cyan-500 to-fuchsia-500 w-1/3"></div>
                </div>
                <p className="text-xs text-cyan-100/80 mt-1">Account Level 12 • Milestone: Shiny Ticket</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {['Unlocks','Artifacts','Achievements','Skins'].map((s, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-white text-sm font-medium">{s}</p>
                  <p className="text-cyan-100/80 text-xs">{(Math.random()*100).toFixed(0)}%</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <a href="#features" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold">Start Run</a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <div className="flex items-center justify-between">
              <p className="text-white font-semibold">Daily Challenges</p>
              <span className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-cyan-100/90">Seed 78A-NEON</span>
            </div>
            <div className="mt-4 space-y-3">
              {['-25% Accuracy','+Storm Weather','Cursed Shops','Elite Density x2'].map((m, i) => (
                <div key={i} className="p-3 rounded-lg bg-white/5 border border-white/10 text-cyan-100/90">{m}</div>
              ))}
            </div>
            <div className="mt-4">
              <button className="w-full px-4 py-3 rounded-xl border border-cyan-400/30 text-white hover:bg-cyan-400/10">Preview Route</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileAndChallenges
