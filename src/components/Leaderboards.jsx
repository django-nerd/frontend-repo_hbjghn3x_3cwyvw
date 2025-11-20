import React from 'react'

const rows = Array.from({ length: 8 }).map((_, i) => ({
  rank: i + 1,
  player: `Player${i + 1}`,
  score: (Math.random() * 10_000).toFixed(0),
  mode: ['Endless','Weekly','Daily'][i % 3],
}))

const Leaderboards = () => {
  return (
    <section id="leaderboards" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Leaderboards</h2>
            <p className="text-cyan-100/90 mt-1">Global, friends, and guild standings.</p>
          </div>
          <div className="flex gap-2">
            <select className="px-3 py-2 rounded-lg bg-slate-900/70 border border-cyan-400/20 text-cyan-100">
              <option>Global</option>
              <option>Friends</option>
              <option>Guild</option>
            </select>
            <select className="px-3 py-2 rounded-lg bg-slate-900/70 border border-cyan-400/20 text-cyan-100">
              <option>All Modes</option>
              <option>Endless</option>
              <option>Weekly</option>
              <option>Daily</option>
            </select>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-slate-900/60">
          <table className="w-full">
            <thead>
              <tr className="text-left text-cyan-100/70 text-sm">
                <th className="p-3">Rank</th>
                <th className="p-3">Player</th>
                <th className="p-3">Mode</th>
                <th className="p-3">Score</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.rank} className="border-t border-white/5 text-white/90">
                  <td className="p-3">{r.rank}</td>
                  <td className="p-3">{r.player}</td>
                  <td className="p-3">{r.mode}</td>
                  <td className="p-3">{r.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Leaderboards
