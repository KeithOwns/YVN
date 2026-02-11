import React, { useState } from 'react';
import {
    CheckCircle2,
    Circle,
    Terminal,
    Github,
    Globe,
    Layout,
    ArrowRight,
    History,
    ClipboardList,
    ChevronDown,
    ChevronUp,
    ShieldAlert,
    Lock,
    ChevronLeft
} from 'lucide-react';

const completedSteps = [
    {
        id: 1,
        title: "Market Thesis & SWOT Analysis",
        description: "Reviewed 2026 market research, established the 'Vibe Engineering' professional standard, and identified the quality chasm as a business opportunity.",
        details: "Focus on technical debt rescue and multi-agent orchestration."
    },
    {
        id: 2,
        title: "Brand & Architecture Design",
        description: "Defined 'YouVibeNow' brand identity and designed a high-performance React homepage with an integrated client induction workflow.",
        details: "Used Tailwind CSS, Lucide icons, and a modular component structure."
    },
    {
        id: 3,
        title: "Local Environment Setup",
        description: "Structured the project folder at C:\\Users\\KTibbitts\\Documents\\YVN and initialized the Vite-React skeleton.",
        details: "Files created: package.json, vite.config.js, index.html, and src/main.jsx."
    },
    {
        id: 4,
        title: "Git Engine Integration",
        description: "Resolved terminal environment issues by installing Git and successfully initializing the repository using Git Bash.",
        details: "Fixed the 'not recognized' error and cleaned up the root directory (.git removal in home folder)."
    },
    {
        id: 5,
        title: "Security & Privacy Audit",
        description: "Hardened the development environment by auditing and disabling optional telemetry in Antigravity and Chrome Sync.",
        details: "Set Telemetry Level to 'off' in IDE, disabled experimental Tree Sitter telemetry, and audited Chrome Services to ensure data sovereignty."
    },
    {
        id: 6,
        title: "Environment Restoration & Roadmap Integration",
        description: "Restored the missing Vite/React/Tailwind environment configuration and integrated the Tutorial file as a core application component.",
        details: "Created package.json, vite.config.js, index.html. Converted YVN_Tutorial.html to src/Roadmap.jsx and established routing."
    }
];

const futureSteps = [
    { id: 7, title: "Initial GitHub Sync", action: "Run 'git push -u origin main --force' in Git Bash to establish the remote source of truth." },
    { id: 8, title: "Vercel Deployment", action: "Connect GitHub repo to Vercel for automated cloud hosting and SSL certification." },
    { id: 9, title: "Squarespace Integration", action: "Embed the Vercel production URL into youvibenow.com via an iframe Code Block." },
    { id: 10, title: "Functionality Audit", action: "Execute a full-stack test of the Induction Form and mobile responsiveness." },
    { id: 11, title: "Pilot Phase Launch", action: "Initiate the 'Vibe Auditor' lead magnet campaign for Beta Client #001." }
];

export default function Roadmap({ onBack }) {
    const [expandedStep, setExpandedStep] = useState(null);

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans p-6 md:p-12 selection:bg-indigo-500/30">
            <div className="max-w-4xl mx-auto">

                {/* Back Button */}
                {onBack && (
                    <button onClick={onBack} className="flex items-center gap-2 text-neutral-500 hover:text-white mb-8 uppercase tracking-widest text-xs font-bold">
                        <ChevronLeft size={16} /> Back to Home
                    </button>
                )}

                {/* Header */}
                <header className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold mb-6 uppercase tracking-widest">
                        Project Log: 2026-001 | UPDATED
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase italic">
                        YouVibeNow <br /><span className="text-indigo-500">Roadmap</span>
                    </h1>
                    <p className="text-neutral-400 max-w-2xl leading-relaxed">
                        Documenting the transition from concept to production-grade Vibe Engineering.
                        This tutorial tracks the architecture, setup, and deployment of the YVN platform.
                    </p>
                </header>

                {/* Section: Completed Steps */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
                        <History className="text-indigo-500" />
                        <h2 className="text-xl font-bold uppercase tracking-widest">Completed Milestones</h2>
                    </div>

                    <div className="space-y-4">
                        {completedSteps.map((step) => (
                            <div
                                key={step.id}
                                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/50 transition-all cursor-pointer"
                                onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1">
                                            {step.id === 5 ? (
                                                <Lock size={22} className="text-indigo-400" />
                                            ) : (
                                                <CheckCircle2 size={22} className="text-emerald-500" />
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white group-hover:text-indigo-400 transition-colors">{step.title}</h3>
                                            <p className="text-sm text-neutral-400 mt-1">{step.description}</p>
                                        </div>
                                    </div>
                                    {expandedStep === step.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </div>

                                {expandedStep === step.id && (
                                    <div className="mt-6 pt-6 border-t border-white/5 animate-in slide-in-from-top-2">
                                        <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">
                                            <Terminal size={14} /> Technical Outcome
                                        </div>
                                        <p className="text-sm bg-black/40 p-4 rounded-xl border border-white/5 text-neutral-300">
                                            {step.details}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section: Future Steps Checklist */}
                <section>
                    <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
                        <ClipboardList className="text-indigo-500" />
                        <h2 className="text-xl font-bold uppercase tracking-widest">Future Implementation</h2>
                    </div>

                    <div className="grid gap-4">
                        {futureSteps.map((step) => (
                            <div key={step.id} className="flex items-center gap-6 p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 group hover:bg-indigo-500/10 transition-all">
                                <div className="flex-shrink-0">
                                    <Circle size={24} className="text-indigo-500/50 group-hover:text-indigo-500 transition-colors" />
                                </div>
                                <div className="flex-grow">
                                    <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-1 block">Task {step.id}</span>
                                    <h4 className="font-bold text-white">{step.title}</h4>
                                    <p className="text-sm text-neutral-400 mt-1">{step.action}</p>
                                </div>
                                <div className="hidden md:block">
                                    <ArrowRight size={20} className="text-neutral-700 group-hover:text-indigo-500 transition-colors translate-x-0 group-hover:translate-x-2" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Quick Reference Footer */}
                <footer className="mt-24 pt-12 border-t border-white/5 grid md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-white font-bold">
                            <Github size={18} /> Repository
                        </div>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest">KeithOwns / YVN</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-white font-bold">
                            <Globe size={18} /> Host
                        </div>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest">Vercel (In Transit)</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-white font-bold">
                            <ShieldAlert size={18} /> Privacy
                        </div>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest">Telemetry: DISABLED</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
