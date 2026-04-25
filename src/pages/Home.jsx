import { Link } from 'react-router-dom'
import { Search, Map, BookOpen, FileText, MessageCircle, ChevronRight, Star, Users, Building2, Award } from 'lucide-react'
import Tag from '../components/ui/Tag'

const FEATURES = [
  { icon: Search,        color: 'text-brand-cyan',  bg: 'bg-brand-cyan/10',  title: 'CET Score Filter',       desc: 'Enter your CET percentile and instantly see all eligible colleges and branches.', link: '/colleges' },
  { icon: Award,         color: 'text-brand-gold',  bg: 'bg-brand-gold/10',  title: 'CAP Rounds Tracker',     desc: 'Stay updated on all 3 CAP rounds, cutoffs, seat availability and deadlines.',      link: '/rounds' },
  { icon: Map,           color: 'text-brand-green', bg: 'bg-brand-green/10', title: 'College Map',            desc: 'Explore college locations on an interactive map with campus gallery.',             link: '/map' },
  { icon: FileText,      color: 'text-brand-pink',  bg: 'bg-brand-pink/10',  title: 'Question Papers',        desc: 'Download previous year CET and university exam papers by subject and year.',       link: '/papers' },
  { icon: BookOpen,      color: 'text-purple-400',  bg: 'bg-purple-400/10',  title: 'Notes Sharing',          desc: 'Upload and discover student notes ranked by community upvotes.',                  link: '/notes' },
  { icon: MessageCircle, color: 'text-orange-400',  bg: 'bg-orange-400/10',  title: 'AI Chatbot (StudBot)',   desc: 'Ask anything about CET, admissions, colleges and get instant answers.',           link: '#' },
]

const STATS = [
  { num: '200+',  label: 'Colleges Listed',  icon: Building2 },
  { num: '50K+',  label: 'Students Helped',  icon: Users },
  { num: '4.8★',  label: 'Average Rating',   icon: Star },
  { num: '3',     label: 'CAP Rounds Data',  icon: Award },
]

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative flex flex-col items-center text-center gap-6 max-w-4xl">
          <Tag>Maharashtra CET 2024 · College Navigator</Tag>

          <h1 className="font-syne font-800 text-5xl md:text-7xl leading-[1.0] tracking-tight">
            Find Your<br />
            <span className="gradient-text glow-text">Dream College</span><br />
            <span className="text-ink-muted text-3xl md:text-4xl font-600 mt-2 block">Based on your CET Score</span>
          </h1>

          <p className="text-ink-muted text-lg max-w-xl leading-relaxed">
            Filter <strong className="text-ink-primary">200+ Maharashtra colleges</strong> by your exact CET percentile.
            Track CAP rounds, read student reviews, download papers and get AI guidance — all in one place.
          </p>

          <div className="flex gap-3 flex-wrap justify-center">
            <Link to="/colleges" className="btn-primary text-base px-8 py-3.5">
              Search Colleges <ChevronRight size={18} />
            </Link>
            <Link to="/rounds" className="btn-ghost text-base px-8 py-3.5">
              View CAP Rounds
            </Link>
          </div>

          {/* Mini score preview */}
          <div className="mt-4 bg-bg-card border border-brand-cyan/15 rounded-2xl px-8 py-4 flex items-center gap-6 flex-wrap justify-center">
            <div className="text-center">
              <div className="font-mono text-2xl font-500 text-brand-cyan">99.5</div>
              <div className="text-xs text-ink-muted">Your Percentile</div>
            </div>
            <div className="text-ink-faint hidden sm:block">→</div>
            <div className="text-center">
              <div className="font-syne text-sm font-700 text-ink-primary">COEP, VIT, PICT</div>
              <div className="text-xs text-ink-muted">Top matches for you</div>
            </div>
            <Link to="/colleges" className="text-xs text-brand-cyan hover:text-white transition-colors underline underline-offset-2">
              Try with your score →
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-brand-cyan/10 bg-bg-surface">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={i} className="flex flex-col items-center py-8 border-r border-brand-cyan/10 last:border-r-0">
              <s.icon size={20} className="text-brand-cyan mb-2" />
              <div className="font-syne font-800 text-2xl text-ink-primary">{s.num}</div>
              <div className="text-xs text-ink-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-14">
          <Tag>Everything you need</Tag>
          <h2 className="section-title mt-4">Built for CET Students</h2>
          <p className="section-sub mx-auto mt-3">All the tools you need during Maharashtra engineering admissions — from score filtering to AI guidance.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <Link key={i} to={f.link} className="card p-6 flex flex-col gap-4 hover:border-brand-cyan/25 hover:-translate-y-1 group">
              <div className={`w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center`}>
                <f.icon size={22} className={f.color} />
              </div>
              <div>
                <h3 className="font-syne font-700 text-ink-primary mb-1.5 group-hover:text-brand-cyan transition-colors">{f.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{f.desc}</p>
              </div>
              <span className="text-xs text-brand-cyan flex items-center gap-1 mt-auto">Explore <ChevronRight size={14} /></span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="relative rounded-2xl border border-brand-cyan/20 bg-bg-card overflow-hidden p-10 text-center">
          <div className="absolute inset-0 dot-bg opacity-40" />
          <div className="relative">
            <h2 className="font-syne font-800 text-3xl md:text-4xl text-ink-primary mb-3">
              Ready to find your college?
            </h2>
            <p className="text-ink-muted mb-6">Enter your CET score and get a personalized college list in seconds.</p>
            <Link to="/colleges" className="btn-primary text-base px-10 py-4">
              Get Started Free →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
