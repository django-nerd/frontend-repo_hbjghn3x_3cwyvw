import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Map, Swords, CloudLightning, Brain, Layers, Crown, Trophy, FlaskConical, Users, BookOpen, ShoppingCart, CalendarCheck2, Wand2 } from 'lucide-react'

const featureGroups = [
  {
    title: 'Core Roguelike Loop',
    color: 'from-cyan-500 to-fuchsia-500',
    items: [
      'Procedurally generated routes',
      'Randomized monster encounters',
      'Multiple biomes with weather/terrain',
      'Elite floors, minibosses, unique bosses',
      'Endless mode, dailies, weeklies',
      'Interactive route map with fog-of-war',
    ],
    icon: Map,
  },
  {
    title: 'Combat Depth',
    color: 'from-amber-400 to-pink-500',
    items: [
      'Status, crit, accuracy/evasion layers',
      'Combo move bonuses, turn-order preview',
      'Auto-battle & battle speed controls',
      'Elemental typing & dual-type creatures',
      'Passive abilities & hidden evolutions',
    ],
    icon: Swords,
  },
  {
    title: 'Progression & Systems',
    color: 'from-emerald-400 to-cyan-500',
    items: [
      'Player skill tree & alignment paths',
      'Monster loyalty & personality traits',
      'Unlockable starters, artifacts, cosmetics',
      'Account-level milestones & prestige',
      'Cloud saves, guest mode',
    ],
    icon: Brain,
  },
  {
    title: 'Meta & Events',
    color: 'from-violet-400 to-sky-400',
    items: [
      'Seasonal events & map themes',
      'Legendary events & ultra-rare shinies',
      'Daily modifiers & challenge seeds',
      'Leaderboards: global, friends, guilds',
      'Guild challenges & trading hub',
    ],
    icon: Trophy,
  },
  {
    title: 'Crafting & Economy',
    color: 'from-cyan-400 to-lime-400',
    items: [
      'Item crafting & skill fusion',
      'Monster fusion & breeding',
      'Randomized shops & rare merchants',
      'Relic forging & inventory upgrades',
      'Run currency & persistent currency',
    ],
    icon: FlaskConical,
  },
  {
    title: 'UX & Accessibility',
    color: 'from-fuchsia-400 to-rose-400',
    items: [
      'Theme switching: light, dark, neon',
      'Color modes & VFX sliders',
      'Music toggles & sound controls',
      'Keybind & controller support',
      'Replay viewer & battle logs',
    ],
    icon: Sparkles,
  },
]

const FeatureCard = ({ group }) => {
  const Icon = group.icon
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-6">
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${group.color} opacity-10`}></div>
      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/5 border border-white/10">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-semibold text-white">{group.title}</h3>
        </div>
        <ul className="mt-4 space-y-2 text-sm text-cyan-100/90 list-disc list-inside">
          {group.items.map((it, idx) => (
            <li key={idx}>{it}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

const FeatureGrid = () => {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15),transparent_60%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Replayability at Neon Speed</h2>
          <p className="mt-2 text-cyan-100/90">A showcase of systems designed for infinite runs.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureGroups.map((group, i) => (
            <FeatureCard key={i} group={group} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid
