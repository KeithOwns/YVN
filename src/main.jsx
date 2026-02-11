import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Zap, ShieldCheck, Users, Cpu, ArrowRight, CheckCircle2, MessageSquare, ChevronLeft } from 'lucide-react';


/**
 * YOUVIBENOW: VIBE ENGINEERING EDITION
 * Entry point for the YouVibeNow business platform.
 */


function App() {
  const [view, setView] = useState('home');


  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-indigo-500/30">
      {view === 'home' ? (
        <LandingPage onStart={() => setView('onboarding')} />
      ) : (
        <InductionForm onBack={() => setView('home')} />
      )}
    </div>
  );
}


function LandingPage({ onStart }) {
  return (
    <div className="animate-in fade-in duration-700">
      <nav className="border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Zap size={20} fill="white" />
            </div>
            <span className="text-xl font-bold tracking-tight">YouVibeNow</span>
          </div>
          <button 
            onClick={onStart}
            className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-neutral-200 transition-all"
          >
            Induction
          </button>
        </div>
      </nav>


      <header className="relative pt-24 pb-32 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter italic uppercase">
            YOU <span className="text-indigo-500">VIBE</span> NOW
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            From fragile "Vibe Coding" to resilient **Vibe Engineering**. Professional education for the 2026 technical landscape.
          </p>
          <button 
            onClick={onStart}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 mx-auto transition-all group shadow-[0_0_30px_rgba(79,70,229,0.3)]"
          >
            Start Your Induction <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>


      <section className="py-24 px-6 bg-neutral-900/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<ShieldCheck className="text-emerald-400" />}
            title="Technical Audit"
            description="Is your AI-generated MVP a 'slop' factory? We provide deep audits to stabilize your architecture before you scale."
          />
          <FeatureCard 
            icon={<Cpu className="text-indigo-400" />}
            title="Agentic Workflows"
            description="Move beyond prompting. We teach you to orchestrate multi-agent systems for autonomous development."
          />
          <FeatureCard 
            icon={<Users className="text-cyan-400" />}
            title="Strategic Mentorship"
            description="High-ticket coaching for founders who need to understand the 'Engineering' behind the 'Vibe'."
          />
        </div>
      </section>
    </div>
  );
}


function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group">
      <div className="mb-6 p-3 w-fit rounded-lg bg-black/50 border border-white/5">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}


function InductionForm({ onBack }) {
  return (
    <div className="min-h-screen pt-20 pb-12 px-6">
      <div className="max-w-xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-neutral-500 hover:text-white mb-8 uppercase tracking-widest text-xs font-bold">
          <ChevronLeft size={16} /> Cancel Induction
        </button>
        <div className="bg-white/5 border border-white/10 p-10 rounded-3xl">
          <h2 className="text-3xl font-black mb-6 italic uppercase tracking-tighter">New Client Intake</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Name</label>
              <input className="w-full bg-black/40 border border-white/10 p-4 rounded-xl outline-none focus:border-indigo-500" placeholder="Keith T." />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Project Goal</label>
              <textarea className="w-full bg-black/40 border border-white/10 p-4 rounded-xl outline-none focus:border-indigo-500" placeholder="Refactoring my vibe-coded MVP..."></textarea>
            </div>
            <button className="w-full py-4 bg-indigo-600 font-bold rounded-xl hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)]">
              Submit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);