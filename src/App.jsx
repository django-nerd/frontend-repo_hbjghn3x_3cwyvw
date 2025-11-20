import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import MonsterIndex from './components/MonsterIndex'
import Encyclopedia from './components/Encyclopedia'
import Leaderboards from './components/Leaderboards'
import BattlePreview from './components/BattlePreview'
import ProfileAndChallenges from './components/ProfileAndChallenges'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-cyan-50">
      {/* particle background */}
      <div className="fixed inset-0 -z-0 pointer-events-none opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(34,211,238,0.35) 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <FeatureGrid />
        <MonsterIndex />
        <Encyclopedia />
        <Leaderboards />
        <ProfileAndChallenges />
        <BattlePreview />

        <footer className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-cyan-100/70">
            Built for showcasing a neon pixel-art roguelike monster battler. Theme toggle supported.
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
