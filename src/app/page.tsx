"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Download, Monitor, Volume2, Waves, Zap, Sun, Hand,
  Cpu, BarChart3, TrendingUp, Activity, ArrowDown,
  ChevronDown, Terminal, Sparkles,
  Usb, Settings, MousePointer, Clock, Shield, Heart, ExternalLink,
} from "lucide-react";

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

// ─── Animated Counter ───
function Counter({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = Math.ceil(target / (duration * 60));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
}

// ─── FAQ Accordion ───
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors">
        <span className="font-medium text-lg">{question}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5 text-green-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
            <p className="px-5 pb-5 text-gray-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Feature Card ───
function FeatureCard({ icon: Icon, title, desc, delay = 0 }: { icon: React.ElementType; title: string; desc: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="glass rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300 group cursor-default hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/5"
    >
      <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
        <Icon className="w-6 h-6 text-green-400" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

// ─── Algorithm Step ───
function AlgoStep({ icon: Icon, name, desc, index }: { icon: React.ElementType; name: string; desc: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="glass rounded-2xl p-5 flex items-start gap-4"
    >
      <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-green-400" />
      </div>
      <div>
        <h4 className="font-semibold text-white">{name}</h4>
        <p className="text-gray-400 text-sm mt-1">{desc}</p>
      </div>
    </motion.div>
  );
}

// ─── Navbar ───
function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastScroll.current && y > 100);
      setScrolled(y > 50);
      lastScroll.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#features", label: "Features", icon: Sparkles },
    { href: "#how-it-works", label: "How It Works", icon: Cpu },
    { href: "#setup", label: "Setup", icon: Terminal },
    { href: "#faq", label: "FAQ", icon: Settings },
  ];

  return (
    <>
      {/* Desktop */}
      <motion.nav
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300 ${scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"}`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 text-xl font-bold">
            <span className="text-2xl">👋</span>
            <span className="gradient-text-green">MacSlapApp</span>
          </a>
          <div className="flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-gray-400 hover:text-green-400 transition-colors">{l.label}</a>
            ))}
            <a href="https://github.com/AbdullahFID/MacSlapApp" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-all text-sm font-medium">
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Mobile bottom nav */}
      <motion.nav
        animate={{ y: hidden ? 100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed bottom-4 left-4 right-4 z-50 md:hidden glass rounded-2xl shadow-lg shadow-black/40"
      >
        <div className="flex items-center justify-around py-3">
          <a href="#" className="flex flex-col items-center gap-1 text-green-400">
            <Hand className="w-5 h-5" />
            <span className="text-[10px]">Home</span>
          </a>
          {links.map(l => (
            <a key={l.href} href={l.href} className="flex flex-col items-center gap-1 text-gray-400 hover:text-green-400 transition-colors">
              <l.icon className="w-5 h-5" />
              <span className="text-[10px]">{l.label}</span>
            </a>
          ))}
          <a href="https://github.com/AbdullahFID/MacSlapApp" target="_blank" rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-green-400 transition-colors">
            <GithubIcon className="w-5 h-5" />
            <span className="text-[10px]">GitHub</span>
          </a>
        </div>
      </motion.nav>
    </>
  );
}

// ─── Main Page ───
export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  return (
    <>
      <Navbar />

      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-green-500/8 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-2/3 -right-32 w-96 h-96 bg-cyan-500/6 rounded-full blur-[120px] animate-blob" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px] animate-blob" style={{ animationDelay: "2s" }} />
      </div>

      <main className="relative z-10">
        {/* ═══════════ HERO ═══════════ */}
        <motion.section ref={heroRef} style={{ opacity: heroOpacity, scale: heroScale }}
          className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-300 mb-8">
            <Shield className="w-4 h-4 text-green-400" />
            Free &amp; Open Source — No License, No DRM, No BS
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] max-w-5xl">
            Slap Your MacBook.
            <br />
            <span className="gradient-text">It Screams Back.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mt-8 leading-relaxed">
            Five seismology-grade algorithms detect your slap. Your screen shakes. Your brightness flashes.
            Your trackpad buzzes. And it plays one of 130+ sound effects scaled to how hard you hit it.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-10">
            <a href="https://github.com/AbdullahFID/MacSlapApp" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-green-500 text-black font-semibold text-lg hover:bg-green-400 transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
              <GithubIcon className="w-5 h-5" /> Get It Free
            </a>
            <a href="#setup"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full glass font-semibold text-lg hover:bg-white/10 transition-all hover:scale-105">
              <Terminal className="w-5 h-5 text-green-400" /> Quick Setup
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="mt-16">
            <span className="text-4xl animate-float inline-block">👋</span>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="mt-12">
            <a href="#features" className="text-gray-500 hover:text-green-400 transition-colors">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </a>
          </motion.div>
        </motion.section>

        {/* ═══════════ STATS ═══════════ */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 5, suffix: "", label: "Detection Algorithms" },
              { value: 7, suffix: "", label: "Voice Packs" },
              { value: 130, suffix: "+", label: "Sound Effects" },
              { value: 125, suffix: "Hz", label: "Sample Rate" },
            ].map((s, i) => (
              <div key={i} className="glass rounded-2xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text-green">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm text-gray-400 mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════ FEATURES ═══════════ */}
        <section id="features" className="py-20 px-6 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5 }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Everything Your MacBook <span className="gradient-text">Never Asked For</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                More features than the $7 paid app. All free, all open-source.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              <FeatureCard icon={Monitor} title="Screen Shake" desc="Your entire screen physically rattles on impact. Every window, the dock, menu bar — everything jolts." delay={0} />
              <FeatureCard icon={Sun} title="Brightness Flash" desc="DisplayServices private API dims your actual hardware backlight on impact. Works over fullscreen apps." delay={0.05} />
              <FeatureCard icon={MousePointer} title="Trackpad Haptic" desc="Your trackpad buzzes when you slap. Multiple intensity levels — single tap to triple buzz." delay={0.1} />
              <FeatureCard icon={Volume2} title="Dynamic Volume" desc="Logarithmic scaling: gentle taps play quiet whispers, hard slaps trigger full-volume screams." delay={0.15} />
              <FeatureCard icon={Zap} title="Screen Flash" desc="White overlay flash on impact with adjustable intensity. Because your laptop deserves to feel the pain too." delay={0.2} />
              <FeatureCard icon={TrendingUp} title="Escalation Tracking" desc="Keep slapping and sounds escalate through increasingly intense files with a 30-second decay half-life." delay={0.25} />
              <FeatureCard icon={Usb} title="USB Moaner" desc="Plug or unplug a USB device and it moans. Same voice packs, no slapping required." delay={0.3} />
              <FeatureCard icon={Settings} title="Per-Effect Sliders" desc="Every effect has its own intensity slider in the menu bar. Dial each one exactly how you want." delay={0.35} />
              <FeatureCard icon={Clock} title="Launch at Login" desc="Installs as a LaunchAgent. Always running, always listening. No .app bundle needed." delay={0.4} />
            </div>
          </div>
        </section>

        {/* ═══════════ VOICE PACKS ═══════════ */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Seven Moods of <span className="gradient-text">Protest</span>
              </h2>
              <p className="text-gray-400 text-lg">Your open-plan office will have questions.</p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { emoji: "🌹", name: "Sexy", desc: "The default. You know what this is." },
                { emoji: "🥊", name: "Combo Hit", desc: "Fighting game combo system with announcer." },
                { emoji: "🗣️", name: "Male", desc: "\"Ow!\", \"Hey that hurts!\", \"Yowch!\"" },
                { emoji: "💨", name: "Fart", desc: "Self-explanatory. 13 varieties." },
                { emoji: "🎩", name: "Gentleman", desc: "Distinguished reactions. High quality WAV." },
                { emoji: "😵", name: "Yamete", desc: "Anime-style protests. 6 clips." },
                { emoji: "🐐", name: "Goat", desc: "Goat screams. 10 flavors of chaos." },
                { emoji: "➕", name: "Custom", desc: "Drop your own .mp3/.wav files in." },
              ].map((pack, i) => (
                <motion.div key={pack.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="glass rounded-2xl p-5 text-center hover:bg-white/[0.06] transition-all hover:scale-105 cursor-default"
                >
                  <div className="text-3xl mb-3">{pack.emoji}</div>
                  <div className="font-semibold">{pack.name}</div>
                  <div className="text-xs text-gray-400 mt-1">{pack.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ HOW IT WORKS ═══════════ */}
        <section id="how-it-works" className="py-20 px-6 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Wildly Overengineered <span className="gradient-text">Slap Detection</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Five concurrent signal processing algorithms vote on whether you actually slapped your laptop.
                Democracy, but for physical abuse.
              </p>
            </motion.div>

            <div className="space-y-4">
              <AlgoStep icon={Waves} name="High-Pass Filter" desc="Strips out gravity so we only see sudden impacts. First-order IIR filter at alpha=0.95." index={0} />
              <AlgoStep icon={BarChart3} name="STA/LTA Ratio" desc="Classic seismology algorithm. Compares short-term vs long-term energy at 3 timescales. Literally used to detect earthquakes." index={1} />
              <AlgoStep icon={TrendingUp} name="CUSUM" desc="Cumulative Sum change-point detection. Catches sustained shifts in mean acceleration that other detectors miss." index={2} />
              <AlgoStep icon={Activity} name="Kurtosis" desc="4th statistical moment — measures signal peakedness. Sharp impacts have extremely high excess kurtosis." index={3} />
              <AlgoStep icon={Zap} name="Peak/MAD" desc="Median Absolute Deviation outlier detection. More robust than standard deviation. Finds the spike in the noise." index={4} />
            </div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-green-400 font-medium">
                <ArrowDown className="w-4 h-4" />
                When enough algorithms agree &rarr; <span className="font-bold">sound plays</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="mt-12 glass rounded-2xl p-6 font-mono text-sm text-gray-300 overflow-x-auto">
              <pre className="whitespace-pre">{`MenuBarExtra (SwiftUI)
  └─ SlapController
       ├─ AccelerometerReader   ← IOKit HID, ~125Hz
       ├─ SlapDetector          ← 5 algorithms vote
       ├─ AudioPlayer           ← AVFoundation
       ├─ ScreenShaker          ← CGS private API
       ├─ BrightnessFlash       ← DisplayServices
       ├─ HapticFeedback        ← NSHapticFeedback
       ├─ ScreenFlash           ← AppKit overlay
       ├─ USBMonitor            ← IOKit notifications
       └─ SettingsStore         ← UserDefaults`}</pre>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ WHY ═══════════ */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass rounded-3xl p-10">
              <Heart className="w-10 h-10 text-green-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Why did we make this?</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                We were bored, didn&apos;t want to pay $7, and thought it would be a fun challenge anyway.
                Turns out reverse-engineering an app, implementing earthquake detection algorithms,
                and calling private macOS APIs is a pretty good weekend.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ SETUP ═══════════ */}
        <section id="setup" className="py-20 px-6 scroll-mt-20">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Get It <span className="gradient-text">Running</span>
              </h2>
              <p className="text-gray-400 text-lg">Three commands. That&apos;s it.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="text-xs text-gray-500 ml-2 font-mono">Terminal</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-4">
                <div>
                  <span className="text-gray-500"># Clone the repo</span>
                  <div><span className="text-green-400">$</span> git clone https://github.com/AbdullahFID/MacSlapApp.git</div>
                </div>
                <div>
                  <span className="text-gray-500"># Enter the directory</span>
                  <div><span className="text-green-400">$</span> cd MacSlapApp</div>
                </div>
                <div>
                  <span className="text-gray-500"># Build, install, and launch at login</span>
                  <div><span className="text-green-400">$</span> make install</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="mt-6 glass rounded-2xl p-5 text-sm text-gray-400 leading-relaxed">
              <p className="font-medium text-white mb-2">Not comfortable with git?</p>
              <p>Click the green <strong className="text-green-400">Code</strong> button on GitHub &rarr; <strong>Download ZIP</strong>, unzip it, open Terminal, drag the folder into Terminal to <code className="text-green-400 bg-white/5 px-1.5 py-0.5 rounded">cd</code> into it, and run <code className="text-green-400 bg-white/5 px-1.5 py-0.5 rounded">make install</code>.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="mt-6 glass rounded-2xl p-5 text-sm text-gray-400">
              <p className="font-medium text-white mb-2">Requirements</p>
              <ul className="space-y-1">
                <li>&#x2022; macOS 14.6+ (Sonoma or newer)</li>
                <li>&#x2022; Apple Silicon MacBook (M1 / M2 / M3 / M4 / M5)</li>
                <li>&#x2022; Xcode Command Line Tools (<code className="text-green-400 bg-white/5 px-1.5 py-0.5 rounded">xcode-select --install</code>)</li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="mt-6 glass rounded-2xl p-5 text-sm text-gray-400">
              <p className="font-medium text-white mb-2">Pre-built binary (no Xcode needed)</p>
              <p>Download the latest release from <a href="https://github.com/AbdullahFID/MacSlapApp/releases" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">GitHub Releases</a>, unzip, and run <code className="text-green-400 bg-white/5 px-1.5 py-0.5 rounded">./install.sh</code></p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ COMPARISON ═══════════ */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why <span className="gradient-text">MacSlapApp</span>?
              </h2>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-4 text-gray-400 font-medium">Feature</th>
                      <th className="p-4 text-center text-green-400 font-bold">MacSlapApp</th>
                      <th className="p-4 text-center text-gray-400 font-medium">SlapMac ($7)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      ["Detection Algorithms", "yes", "yes"],
                      ["Voice Packs", "yes", "yes"],
                      ["Screen Shake", "yes", "no"],
                      ["Brightness Flash", "yes", "no"],
                      ["Haptic Feedback", "yes", "no"],
                      ["Per-Effect Sliders", "yes", "no"],
                      ["Dynamic Volume", "yes", "yes"],
                      ["Escalation Tracking", "yes", "yes"],
                      ["USB Moaner", "yes", "yes"],
                      ["Launch at Login", "yes", "yes"],
                      ["Open Source", "yes", "no"],
                      ["Price", "Free", "$7"],
                    ].map(([feature, us, them], i) => (
                      <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4">{feature}</td>
                        <td className="p-4 text-center">
                          {us === "yes" ? <span className="text-green-400 font-bold">&#10003;</span> :
                           us === "no" ? <span className="text-red-400">&#10007;</span> :
                           <span className="text-green-400 font-bold">{us}</span>}
                        </td>
                        <td className="p-4 text-center">
                          {them === "yes" ? <span className="text-gray-300">&#10003;</span> :
                           them === "no" ? <span className="text-red-400/50">&#10007;</span> :
                           <span className="text-gray-400">{them}</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section id="faq" className="py-20 px-6 scroll-mt-20">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">FAQ</h2>
            </motion.div>

            <div className="space-y-3">
              <FAQItem question="Will this damage my MacBook?" answer="No. Your MacBook's accelerometer is designed to detect drops and impacts. We're just reading data from it. Slap responsibly though — we're not responsible for cracked screens." />
              <FAQItem question="Does it work on iMac / Mac Mini / Mac Pro?" answer="No. Only MacBooks have built-in accelerometers. Desktop Macs don't have the BMI286 IMU sensor." />
              <FAQItem question="Does it work on Intel MacBooks?" answer="No. It requires Apple Silicon (M1 or later). The AppleSPUHIDDevice sensor driver is Apple Silicon only." />
              <FAQItem question="Where do I get sound files?" answer="You can use any .mp3 or .wav files. Name them with the voice pack prefix (sexy_, male_, punch_, etc.) and drop them in ~/Desktop/slapmac/audio/. If you own SlapMac ($7), you can copy their 130+ sound files from the app bundle for personal use — but redistribution is not permitted by copyright." />
              <FAQItem question="Does it use private APIs?" answer="Yes — DisplayServices for brightness control and CGS for screen capture. These work without disabling SIP and are fine for non-App Store apps." />
              <FAQItem question="How do I uninstall it?" answer="Run 'make uninstall' in the project directory, or manually: launchctl unload ~/Library/LaunchAgents/com.slapmacpro.plist && rm ~/Desktop/slapmac/bin/SlapMacPro" />
            </div>
          </div>
        </section>

        {/* ═══════════ CTA ═══════════ */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="glass rounded-3xl p-12">
              <div className="text-5xl mb-6 animate-float inline-block">👋</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your MacBook has feelings now.
              </h2>
              <p className="text-gray-400 mb-8 text-lg">Free forever. Open source. No license. No DRM. Just vibes.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://github.com/AbdullahFID/MacSlapApp" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-green-500 text-black font-semibold text-lg hover:bg-green-400 transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                  <GithubIcon className="w-5 h-5" /> Get It on GitHub
                </a>
                <a href="https://github.com/AbdullahFID/MacSlapApp/releases" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-full glass font-semibold text-lg hover:bg-white/10 transition-all hover:scale-105">
                  <Download className="w-5 h-5 text-green-400" /> Download Release
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ FOOTER ═══════════ */}
        <footer className="py-12 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-xl">👋</span>
              <span className="font-semibold text-white">MacSlapApp</span>
              <span className="text-sm">&copy; {new Date().getFullYear()}</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="https://github.com/AbdullahFID/MacSlapApp" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors flex items-center gap-1">
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a href="https://github.com/AbdullahFID/MacSlapApp/releases" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors flex items-center gap-1">
                <Download className="w-4 h-4" /> Releases
              </a>
              <span className="text-gray-600">MIT License</span>
            </div>
          </div>
          <div className="max-w-5xl mx-auto mt-6 text-center text-xs text-gray-600">
            Inspired by <a href="https://slapmac.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors underline">SlapMac</a> by tonnoz
            &amp; <a href="https://github.com/taigrr/spank" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors underline">taigrr/spank</a>.
            Built with Swift, IOKit, and private macOS APIs.
          </div>
        </footer>
      </main>

      {/* Mobile nav spacer */}
      <div className="h-20 md:hidden" />
    </>
  );
}
