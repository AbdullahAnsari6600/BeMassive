import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo.png";
import {
  ArrowRight,
  Dumbbell,
  Flame,
  Heart,
  Activity,
  Salad,
  Sparkles,
  Users,
  Brain,
  ShieldCheck,
  Target,
  Zap,
  Award,
  Instagram,
  MessageCircle,
  Mail,
  ChevronDown,
  Quote,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import t1 from "@/assets/transform1.jpg";
import t2 from "@/assets/transform2.jpg";
import t3 from "@/assets/transform3.jpg";
import { Particles } from "@/components/be-massive/Particles";
import { MouseGlow } from "@/components/be-massive/MouseGlow";
import { Reveal } from "@/components/be-massive/Reveal";
import { Countdown } from "@/components/be-massive/Countdown";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { icon: Dumbbell, title: "Personal Training", desc: "1-on-1 elite coaching tailored to your body and goals." },
  { icon: Flame, title: "Fat Loss Programs", desc: "Sustainable fat loss without crash diets or burnout." },
  { icon: Activity, title: "Strength & Conditioning", desc: "Build raw strength and athletic conditioning." },
  { icon: Zap, title: "Functional Fitness", desc: "Move better, lift heavier, live stronger every day." },
  { icon: Brain, title: "Lifestyle Coaching", desc: "Discipline, mindset and habits that compound." },
  { icon: Salad, title: "Nutrition Guidance", desc: "Real food protocols designed for real lives." },
  { icon: Heart, title: "Mobility & Recovery", desc: "Stay pain-free, agile and ready to perform." },
  { icon: Sparkles, title: "Beginner Programs", desc: "A premium first step for those starting fresh." },
];

const whyUs = [
  { icon: Target, title: "Personalized Attention", desc: "Programs engineered around your body, schedule and ambitions." },
  { icon: ShieldCheck, title: "Science-Based Training", desc: "Methods rooted in modern sports science — no gimmicks." },
  { icon: Award, title: "Sustainable Results", desc: "Transformations built to last for life, not 30 days." },
  { icon: Users, title: "Elite Coaching", desc: "Years of experience guiding everyday athletes to greatness." },
  { icon: Zap, title: "Modern Methods", desc: "Cutting-edge training tools and recovery protocols." },
  { icon: Heart, title: "Community & Drive", desc: "A culture that pushes you when motivation runs thin." },
];

const stats = [
  { value: "500+", label: "Transformations" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "1:1", label: "Personalized Coaching" },
  { value: "365", label: "Lifestyle Plans" },
];

const testimonials = [
  {
    name: "Arjun M.",
    role: "Lost 18kg in 9 months",
    quote:
      "BE MASSIVE didn't just change my body — it rewired how I think about discipline, food and energy. This isn't a gym, it's a lifestyle upgrade.",
  },
  {
    name: "Sara K.",
    role: "Strength athlete",
    quote:
      "The coaching is on another level. Every session feels intentional, every week I'm stronger. I've never trained somewhere this premium.",
  },
  {
    name: "Daniel R.",
    role: "Busy executive",
    quote:
      "I came in burnt out and overweight. A year later, I'm leaner, sharper, and the most confident I've been in a decade. Worth every rupee.",
  },
];

function Index() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Loading screen */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: loading ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        style={{ pointerEvents: loading ? "auto" : "none" }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      >
        <div className="relative">
          <img
  src={logo}
  alt="BE MASSIVE Logo"
  className="w-28 sm:w-36 md:w-44 object-contain shimmer"
/>
          <div className="mt-6 h-px w-full overflow-hidden bg-border">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="h-full w-full bg-white"
            />
          </div>
        </div>
      </motion.div>

      <MouseGlow />

      {/* NAV */}
      {/* <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between glass-strong mt-4 rounded-full w-[calc(100%-2rem)] sm:w-auto sm:mx-auto sm:px-8">
          <a href="#top" className="font-display text-xl sm:text-2xl tracking-[0.2em] text-gradient-gold">
            BE MASSIVE
          </a>
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#transform" className="hover:text-foreground transition-colors">Transform</a>
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#why" className="hover:text-foreground transition-colors">Why Us</a>
            <a href="#soon" className="hover:text-foreground transition-colors">Soon</a>
          </nav>
          <a
            href="#soon"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2 text-xs uppercase tracking-[0.2em] text-primary-foreground font-semibold hover:scale-105 transition-transform"
          >
            Join
          </a>
        </div>
      </header> */}
      <header className="fixed top-0 left-0 right-0 z-50">
  <div className="mx-auto max-w-7xl px-8 lg:px-12 py-7 flex items-center justify-between">
    
    <a
      href="#top"
      className="font-display text-2xl sm:text-3xl tracking-[0.25em] text-gradient-gold"
    >
      BE MASSIVE
    </a>

    <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.3em] text-muted-foreground font-medium">
      <a href="#about" className="hover:text-foreground transition-colors">
        About
      </a>
      <a href="#transform" className="hover:text-foreground transition-colors">
        Transform
      </a>
      <a href="#services" className="hover:text-foreground transition-colors">
        Services
      </a>
      <a href="#locations" className="hover:text-foreground transition-colors">
  Locations
</a>
      <a href="#why" className="hover:text-foreground transition-colors">
        Why Us
      </a>
      
      <a href="#soon" className="hover:text-foreground transition-colors">
        Soon
      </a>
    </nav>

    <a
      href="#soon"
      className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3 text-sm uppercase tracking-[0.2em] text-primary-foreground font-semibold hover:scale-105 transition-transform"
    >
      Join
    </a>

  </div>
</header>

      {/* HERO */}
      {/* <section
        id="top"
        ref={heroRef}
        className="relative h-screen min-h-[700px] w-full overflow-hidden grain"
      > */}
      <section
  id="top"
  ref={heroRef}
  className="relative h-screen min-h-screen w-full overflow-hidden grain pt-28 sm:pt-32"
>
        <motion.div
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <img
            src={heroImg}
            alt="Athlete in motion lit by gold rim light"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 70% 50%, rgba(212,175,55,0.18), transparent 55%)" }} />
        </motion.div>

        <Particles count={30} />

        {/* <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"> */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center pt-20 sm:pt-24 md:pt-28 lg:pt-32">
          

          <motion.h1
            initial={{ opacity: 0, y: 60, letterSpacing: "0.4em" }}
            animate={{
              opacity: loading ? 0 : 1,
              y: loading ? 60 : 0,
              letterSpacing: loading ? "0.4em" : "0.05em",
            }}
            transition={{ delay: 1.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[18vw] sm:text-[14vw] md:text-[11rem] leading-[0.9] tracking-tight text-shadow-gold"
          >
            <span className="text-gradient-gold">BE</span>{" "}
            <span className="text-foreground">MASSIVE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="mt-6 font-display text-2xl sm:text-4xl tracking-[0.25em] text-foreground"
          >
            BE BOLD. BE GREAT. STAND OUT.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: loading ? 0 : 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="mt-6 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed"
          >
            A premium personal training studio focused on fitness, strength,
            health, and real transformation.
          </motion.p>

          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
  transition={{ delay: 2.4, duration: 0.8 }}
  className="mt-10 flex flex-col sm:flex-row items-center gap-3"
>
  <a
    href="#soon"
    className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-gold hover:scale-105 transition-transform overflow-hidden"
  >
    <span className="relative z-10">Coming Online Soon</span>
    <ArrowRight className="relative z-10 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
  </a>

  <a
    href="#about"
    className="inline-flex items-center justify-center gap-2 rounded-full border border-[--gold]/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-foreground hover:border-[--gold] hover:bg-[--gold]/10 transition-all"
  >
    Start Your Transformation
  </a>
</motion.div>
        </div>

        {/* scroll indicator */}
        
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-gradient-gold mb-6">— Our Philosophy</p>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95]">
              MORE THAN<br /><span className="text-gradient-gold">FITNESS.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 gap-12 items-start">
            <Reveal delay={0.1}>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                We believe fitness is not about becoming a bodybuilder. It's about
                becoming <span className="text-foreground font-medium">stronger, healthier, more confident,</span> and
                mentally disciplined.
              </p>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                At BE MASSIVE, we help everyday people unlock their best version
                through sustainable fitness and personal transformation. No shortcuts.
                No noise. Just elite coaching, modern science and a relentless standard.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4 md:-mt-12 lg:-mt-20">
              {[
                { t: "Strength", d: "Build a body that performs." },
                { t: "Discipline", d: "Train the mind first." },
                { t: "Health", d: "Energy that lasts decades." },
                { t: "Confidence", d: "Show up as your best." },
              ].map((c, i) => (
                <Reveal key={c.t} delay={0.15 + i * 0.08}>
                  <div className="glass rounded-2xl p-6 h-full hover:border-[--gold]/40 hover:-translate-y-1 transition-all group">
                    <div className="font-display text-2xl text-gradient-gold mb-2">{c.t}</div>
                    <p className="text-sm text-muted-foreground">{c.d}</p>
                    <div className="mt-4 h-px w-8 bg-gradient-gold group-hover:w-full transition-all duration-500" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMATIONS */}
      <section id="transform" className="relative py-32 px-6 bg-gradient-dark">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center mb-20">
              <p className="text-xs uppercase tracking-[0.4em] text-gradient-gold mb-6">— Proof, not promises</p>
              <h2 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95]">
                REAL <span className="text-gradient-gold">TRANSFORMATIONS</span>
              </h2>
            </div>
          </Reveal>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="glass-strong rounded-2xl p-6 sm:p-8 text-center">
                  <div className="font-display text-5xl sm:text-6xl text-gradient-gold">{s.value}</div>
                  <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div> */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
  {stats.map((s, i) => (
    <Reveal key={s.label} delay={i * 0.1}>
      <div className="glass-strong rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center justify-center min-h-[170px]">
        
        <div className="font-display text-4xl sm:text-5xl md:text-6xl text-gradient-gold leading-none">
          {s.value}
        </div>

        <div className="mt-3 text-[9px] sm:text-[11px] uppercase tracking-[0.15em] text-muted-foreground text-center leading-relaxed">
          {s.label}
        </div>

      </div>
    </Reveal>
  ))}
</div>

          {/* Showcase */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: t1, name: "Arjun", result: "-18 kg / 9 months" },
              { img: t2, name: "Sara", result: "+12 kg lean / 1 year" },
              { img: t3, name: "Daniel", result: "Strength doubled / 8 months" },
            ].map((c, i) => (
              <Reveal key={c.name} delay={i * 0.12}>
                <div className="group relative overflow-hidden rounded-2xl glass-strong">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={c.img}
                      alt={`${c.name} transformation`}
                      width={800}
                      height={1024}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="font-display text-3xl text-foreground">{c.name}</div>
                    <div className="text-xs uppercase tracking-[0.3em] text-gradient-gold mt-1">{c.result}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <blockquote className="mt-20 text-center max-w-3xl mx-auto">
              <Quote className="mx-auto h-8 w-8 text-[--gold] opacity-60" />
              <p className="mt-6 font-display text-2xl sm:text-3xl leading-tight text-foreground">
                "You don't rise to your goals. You fall to the level of your standards."
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">— BE MASSIVE Code</p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-20 max-w-3xl">
              <p className="text-xs uppercase tracking-[0.4em] text-gradient-gold mb-6">— What we do</p>
              <h2 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95]">
                ELITE <span className="text-gradient-gold">SERVICES</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-lg">
                Eight signature programs. One uncompromising standard. Choose your path.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={(i % 4) * 0.08}>
                  <div className="group relative h-full overflow-hidden rounded-2xl glass p-7 hover:border-[--gold] transition-all duration-500">
                    <div
                      className="absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"
                      style={{ background: "radial-gradient(circle, rgba(212,175,55,0.6), transparent 70%)" }}
                    />
                    <Icon className="h-8 w-8 text-[--gold] relative z-10" />
                    <h3 className="mt-6 font-display text-2xl tracking-wide relative z-10">{s.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed relative z-10">{s.desc}</p>
                    <div className="mt-6 h-px w-8 bg-gradient-gold group-hover:w-full transition-all duration-700 relative z-10" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      {/* LOCATIONS */}
<section
  id="locations"
  className="relative py-32 px-6 overflow-hidden bg-gradient-dark"
>
  {/* glow background */}
  <div
    className="absolute inset-0 opacity-30"
    style={{
      background:
        "radial-gradient(circle at center, rgba(212,175,55,0.15), transparent 65%)",
    }}
  />

  <div className="relative mx-auto max-w-7xl">
    <Reveal>
      <div className="text-center mb-20">
        <p className="text-xs uppercase tracking-[0.4em] text-gradient-gold mb-6">
          — Our Presence
        </p>

        <h2 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95]">
          OUR <span className="text-gradient-gold">LOCATIONS</span>
        </h2>

        <p className="mt-8 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
          Building a stronger fitness culture — one community at a time.
        </p>
      </div>
    </Reveal>

    <div className="grid lg:grid-cols-2 gap-6">
      
      {/* ACTIVE BRANCH */}
      <Reveal delay={0.1}>
        <div className="relative overflow-hidden rounded-3xl glass-strong p-6 sm:p-7 h-full border border-[--gold]/20 hover:border-[--gold]/50 transition-all duration-500">
          
          <div
            className="absolute -top-20 -right-20 h-52 w-52 rounded-full blur-3xl opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(212,175,55,0.45), transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center rounded-full bg-green-500/10 border border-green-500/30 px-4 py-1.5 text-[10px] uppercase tracking-[0.35em] text-green-400">
              LIVE NOW
            </div>

            <h3 className="mt-8 font-display text-4xl sm:text-5xl tracking-wide">
              Malapally
            </h3>

            <p className="mt-6 text-muted-foreground leading-relaxed text-base">
              Personal training sessions are actively running in Malapally with
              focused coaching, strength training, transformation programs, and
              lifestyle guidance.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <div className="rounded-full border border-[--gold]/20 px-4 py-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Strength Training
              </div>

              <div className="rounded-full border border-[--gold]/20 px-4 py-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Fat Loss
              </div>

              <div className="rounded-full border border-[--gold]/20 px-4 py-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Lifestyle Coaching
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* UPCOMING BRANCH */}
      <Reveal delay={0.2}>
        <div className="relative overflow-hidden rounded-3xl glass p-6 sm:p-7 h-full border border-[--gold]/20 hover:border-[--gold]/50 transition-all duration-500">
          
          <div
            className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full blur-3xl opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(212,175,55,0.5), transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center rounded-full bg-[--gold]/10 border border-[--gold]/30 px-4 py-1.5 text-[10px] uppercase tracking-[0.35em] text-gradient-gold">
              COMING SOON
            </div>

            <h3 className="mt-8 font-display text-4xl sm:text-5xl tracking-wide">
              Vinayak Nagar
            </h3>

            <p className="mt-6 text-muted-foreground leading-relaxed text-base">
              Construction and setup work has officially begun for our upcoming
              premium branch in Vinayak Nagar.
            </p>

            <p className="mt-5 text-foreground text-base leading-relaxed">
              Stay connected to be among the first to know when the doors open
              and early access registrations begin.
            </p>

            <div className="mt-10">
              <a
                href="#soon"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-gold px-7 py-4 text-sm uppercase tracking-[0.2em] font-semibold text-primary-foreground shadow-gold hover:scale-105 transition-transform"
              >
                Stay Updated
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </div>
</section>

      {/* WHY US */}
      <section id="why" className="relative py-32 px-6 bg-gradient-dark">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center mb-20">
              <p className="text-xs uppercase tracking-[0.4em] text-gradient-gold mb-6">— The standard</p>
              <h2 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95]">
                WHY <span className="text-gradient-gold">BE MASSIVE?</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((w, i) => {
              const Icon = w.icon;
              return (
                <Reveal key={w.title} delay={(i % 3) * 0.1}>
                  <div className="glass-strong rounded-2xl p-8 h-full group hover:-translate-y-2 transition-transform duration-500">
                    <div className="flex items-start gap-5">
                      <div className="rounded-xl bg-gradient-gold p-3 shadow-gold flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl tracking-wide">{w.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section id="soon" className="relative py-32 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(212,175,55,0.18), transparent 60%)",
          }}
        />
        <Particles count={20} />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-gradient-gold mb-6">— The launch</p>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95]">
              WE'RE <span className="text-gradient-gold shimmer">COMING ONLINE</span> SOON.
            </h2>
            <p className="mt-8 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
              Our complete digital experience, transformation stories, programs, and
              online training ecosystem are launching soon.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-12">
              <Countdown />
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                form.reset();
              }}
              className="mt-12 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 rounded-full glass-strong px-6 py-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-[--gold] transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-gold hover:scale-105 transition-transform pulse-gold"
              >
                Notify Me
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <p className="mt-4 text-xs text-muted-foreground">
              Be first in. Founding members get exclusive early access.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-32 px-6 bg-gradient-dark">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.4em] text-gradient-gold mb-6">— Voices</p>
              <h2 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95]">
                FROM THE <span className="text-gradient-gold">FLOOR</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.12}>
                <div className="glass-strong rounded-2xl p-8 h-full hover:border-[--gold]/40 transition-all duration-500 hover:-translate-y-2">
                  <Quote className="h-8 w-8 text-[--gold] opacity-60" />
                  <p className="mt-6 text-sm sm:text-base text-foreground/90 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="font-display text-lg tracking-wide">{t.name}</div>
                    <div className="text-xs uppercase tracking-[0.3em] text-gradient-gold mt-1">{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative px-6 pt-24 pb-10">
        <div className="gold-divider mb-16" />
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div>
              <div className="font-display text-4xl tracking-[0.15em] text-gradient-gold">
                BE MASSIVE
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
                Be Bold. Be Great. Stand Out. A premium personal training studio
                building the strongest version of you.
              </p>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Connect</div>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
  href="https://www.instagram.com/bemassive_p.t_studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 hover:text-[--gold] transition-colors"
>
  <Instagram className="h-4 w-4 text-[--gold]" />
  @bemassive_p.t_studio
</a>
                </li>
                <li>
                  <a
  href="https://wa.me/919381948455?text=Hello%20BE%20MASSIVE%2C%20I%20would%20like%20to%20know%20more%20about%20your%20training%20programs."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 hover:text-[--gold] transition-colors"
>
  <MessageCircle className="h-4 w-4 text-[--gold]" />
  WhatsApp +91 93819 48455
</a>
                </li>
                <li>
                  <a href="#" className="inline-flex items-center gap-3 hover:text-[--gold] transition-colors">
                    <Mail className="h-4 w-4 text-[--gold]" /> asraar@bemassive_pt_studio.com 
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Studio</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Open by appointment.<br />
                Premium 1-on-1 coaching, small group strength sessions, and
                lifestyle programming.
              </p>
            </div>
          </div>

          <div className="gold-divider mt-16 mb-6" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <div>© {new Date().getFullYear()} BE MASSIVE. All rights reserved.</div>
            <div className="uppercase tracking-[0.3em]">Be Bold · Be Great · Stand Out</div>
          </div>
        </div>

        {/* scroll-down arrow back to top */}
        
      </footer>
    </div>
  );
}
