import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Mail, Phone, MapPin, Github, Linkedin, Sparkles,
  Code2, Palette, Smartphone, LayoutGrid, GraduationCap, Briefcase,
  Send, ExternalLink, Download,
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import portrait from "@/assets/yogeswari.png";

const EMAILJS_PUBLIC_KEY = "QRkq84ZgmYO9y9URk";
const EMAILJS_SERVICE_ID = "service_ql1854o";
const EMAILJS_TEMPLATE_ID = "template_ldkcfdn";
const RECIPIENT_EMAIL = "yogeswariveluv@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yogeswari V — Software Developer & UI/UX Designer" },
      { name: "description", content: "Portfolio of Yogeswari V — aspiring software developer & UI/UX designer building meaningful, user-centered digital experiences." },
      { property: "og:title", content: "Yogeswari V — Software Developer & UI/UX Designer" },
      { property: "og:description", content: "Portfolio of Yogeswari V — aspiring software developer & UI/UX designer building meaningful, user-centered digital experiences." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700;9..144,900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: Portfolio,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function Portfolio() {
  return (
    <div className="min-h-screen text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 shadow-card">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-full gradient-hero text-primary-foreground">Y</span>
          <span>Yogeswari</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-105 md:inline-flex">
          Let's talk
        </a>
        <button onClick={() => setOpen(!open)} className="rounded-full bg-secondary p-2 md:hidden" aria-label="Menu">
          <LayoutGrid className="h-5 w-5" />
        </button>
      </nav>
      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-4 shadow-card md:hidden">
          <ul className="grid gap-1">
            {NAV.map((n) => (
              <li key={n.id}>
                <a onClick={() => setOpen(false)} href={`#${n.id}`} className="block rounded-xl px-4 py-2 text-sm font-medium hover:bg-secondary">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative px-4 pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Available for opportunities
          </motion.div>
          <motion.h1 variants={fadeUp} className="mt-5 text-5xl font-bold leading-[1.05] md:text-7xl">
            Designing &<br />Developing<br />
            <span className="gradient-text">Meaningful</span><br />
            Digital Experiences.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-md text-base text-muted-foreground md:text-lg">
            Hi, I'm <strong className="text-foreground">Yogeswari V</strong> — an aspiring Software Developer
            & UI/UX Designer passionate about turning ideas into thoughtful, user-centered products.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105">
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/resume.pdf" download="Yogeswari-V-Resume.pdf" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-card">
              <Download className="h-4 w-4" /> Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-card">
              Contact Me
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div><span className="block text-2xl font-bold text-foreground">9.04</span>CGPA</div>
            <div className="h-8 w-px bg-border" />
            <div><span className="block text-2xl font-bold text-foreground">2+</span>Projects</div>
            <div className="h-8 w-px bg-border" />
            <div><span className="block text-2xl font-bold text-foreground">1</span>Internship</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-6 -z-10 rounded-[3rem] gradient-hero blur-2xl opacity-70" />
          <div className="relative h-[420px] w-[340px] overflow-hidden rounded-[2.5rem] border-4 border-card shadow-soft md:h-[520px] md:w-[420px]">
            <img src={portrait} alt="Yogeswari V portrait" className="h-full w-full object-cover" />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="glass absolute -left-6 top-10 rounded-2xl px-4 py-3 shadow-card"
          >
            <p className="text-xs text-muted-foreground">Currently</p>
            <p className="text-sm font-semibold">B.Tech CSE · Year 3</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="glass absolute -right-4 bottom-12 rounded-2xl px-4 py-3 shadow-card"
          >
            <p className="text-xs text-muted-foreground">Designs in</p>
            <p className="text-sm font-semibold">Figma · Canva</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mb-12 max-w-2xl"
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-4xl font-bold md:text-5xl">{title}</motion.h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title={<>A developer with a <span className="gradient-text">designer's eye</span>.</>}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-6 md:grid-cols-5">
        <motion.div variants={fadeUp} className="md:col-span-3 rounded-3xl bg-card p-8 shadow-card">
          <p className="text-lg leading-relaxed text-foreground/80">
            I'm an aspiring developer and designer with strong organizational, communication, and
            problem-solving skills. Comfortable with modern IT tools and social platforms, I move
            easily between team collaboration and independent execution — always focused on shipping
            interfaces that feel as good as they look.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {["Adaptable", "Curious", "Detail-driven", "Team player", "Self-starter", "User-first"].map((t) => (
              <span key={t} className="rounded-full bg-secondary px-4 py-2 text-center text-sm font-medium text-secondary-foreground">{t}</span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="md:col-span-2 rounded-3xl bg-gradient-to-br from-[color:var(--lavender)] to-[color:var(--pink)] p-8 shadow-card">
          <div className="mb-4 flex items-center gap-2 text-foreground/70">
            <GraduationCap className="h-5 w-5" /> <span className="text-sm font-semibold uppercase tracking-wider">Education</span>
          </div>
          <ul className="space-y-5">
            <li>
              <p className="font-display text-lg font-bold">B.Tech · CSE</p>
              <p className="text-sm text-foreground/70">Sri Manakula Vinayagar Engineering College</p>
              <p className="mt-1 text-sm font-semibold">2023 – 2027 · CGPA 9.04</p>
            </li>
            <li>
              <p className="font-display text-lg font-bold">HSC (Biology)</p>
              <p className="text-sm text-foreground/70">Sri Sankara Vidyalaya HSS</p>
              <p className="mt-1 text-sm font-semibold">2022 – 2023 · 92.5%</p>
            </li>
            <li>
              <p className="font-display text-lg font-bold">SSLC</p>
              <p className="text-sm text-foreground/70">2020 – 2021</p>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </Section>
  );
}

const SKILL_GROUPS = [
  { icon: Code2, title: "Programming", items: ["Java", "C", "Python"] },
  { icon: LayoutGrid, title: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
  { icon: Palette, title: "Design", items: ["Figma", "Canva"] },
  { icon: Sparkles, title: "Soft Skills", items: ["Problem Solving", "Communication", "Leadership"] },
];

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title={<>Tools & talents I bring to every <span className="gradient-text">project</span>.</>}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_GROUPS.map(({ icon: Icon, title, items }) => (
          <motion.div key={title} variants={fadeUp} whileHover={{ y: -6 }} className="rounded-3xl bg-card p-6 shadow-card transition-shadow hover:shadow-soft">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl gradient-hero text-primary-foreground">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <ul className="mt-3 space-y-1.5">
              {items.map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />{i}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

const PROJECTS = [
  {
    title: "Cloud-Based BI System using Process Mining",
    tag: "AWS · Analytics",
    desc: "Analyzes transactional data on AWS to surface profit/loss patterns and bottlenecks. Auto-generates flowcharts and reports that power smarter business decisions.",
    accent: "from-[color:var(--lavender)] to-[color:var(--mint)]",
  },
  {
    title: "Patient Monitoring System",
    tag: "MERN · Full Stack",
    desc: "A full-stack web app to manage patient records with full CRUD. Built with React, Node, Express and MongoDB — frontend & backend integrated for seamless data flow.",
    accent: "from-[color:var(--pink)] to-[color:var(--peach)]",
  },
];

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title={<>Selected <span className="gradient-text">work</span>.</>}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <motion.article key={p.title} variants={fadeUp} whileHover={{ y: -8 }} className="group overflow-hidden rounded-3xl bg-card shadow-card transition-shadow hover:shadow-soft">
            <div className={`relative h-48 bg-gradient-to-br ${p.accent} p-6`}>
              <span className="absolute top-5 right-5 rounded-full bg-card/80 px-3 py-1 text-xs font-semibold backdrop-blur">{p.tag}</span>
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-card/30 blur-2xl" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold leading-tight">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                View case study <ExternalLink className="h-3.5 w-3.5" />
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

const SERVICES = [
  { icon: Palette, title: "UI/UX Design", desc: "Wireframing & prototyping in Figma — from idea to clickable flows." },
  { icon: Code2, title: "Website Development", desc: "Frontend builds with simple full-stack integration where it counts." },
  { icon: Smartphone, title: "Responsive Design", desc: "Pages that feel native on mobile, tablet, and desktop." },
  { icon: LayoutGrid, title: "App Interface Design", desc: "Clean, usable application interfaces with thoughtful interaction." },
];

function Services() {
  return (
    <Section id="services" eyebrow="Services" title={<>What I can <span className="gradient-text">build for you</span>.</>}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-4 sm:grid-cols-2">
        {SERVICES.map(({ icon: Icon, title, desc }) => (
          <motion.div key={title} variants={fadeUp} whileHover={{ scale: 1.02 }} className="flex gap-5 rounded-3xl bg-card p-6 shadow-card">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-secondary">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title={<>Where I've <span className="gradient-text">contributed</span>.</>}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative rounded-3xl bg-card p-8 shadow-card md:p-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-hero text-primary-foreground">
              <Briefcase className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold">Intern · Hattusa IT Solutions</h3>
              <p className="text-sm text-muted-foreground">Application Development</p>
            </div>
          </div>
          <span className="rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold">Nov 2024 – Dec 2024</span>
        </div>
        <ul className="mt-6 grid gap-3 text-foreground/80 md:grid-cols-2">
          {[
            "Contributed to active application development by completing missing content.",
            "Added descriptions, images, and usage details for location-based modules.",
            "Organized 'how-to-play' guides and rules sections for clarity.",
            "Improved overall usability and content accuracy across screens.",
          ].map((p) => (
            <li key={p} className="flex gap-3 rounded-2xl bg-secondary/40 p-4">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span className="text-sm leading-relaxed">{p}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </Section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: String(data.get("from_name") ?? ""),
          from_email: String(data.get("from_email") ?? ""),
          subject: String(data.get("subject") ?? ""),
          message: String(data.get("message") ?? ""),
          to_email: RECIPIENT_EMAIL,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("sent");
      form.reset();
    } catch (err: unknown) {
      setStatus("error");
      const msg = err instanceof Error ? err.message : typeof err === "object" && err && "text" in err ? String((err as { text: unknown }).text) : "Something went wrong";
      setErrorMsg(msg);
    }
  };

  return (
    <Section id="contact" eyebrow="Contact" title={<>Let's build something <span className="gradient-text">meaningful</span>.</>}>
      <div className="grid gap-6 lg:grid-cols-5">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-2 rounded-3xl gradient-hero p-8 shadow-card">
          <h3 className="font-display text-2xl font-bold">Get in touch</h3>
          <p className="mt-2 text-sm text-foreground/70">Open to internships, freelance projects, and collaborations.</p>
          <ul className="mt-8 space-y-4">
            <ContactItem icon={Mail} label="Email" value="yogeswariveluv@gmail.com" href="mailto:yogeswariveluv@gmail.com" />
            <ContactItem icon={Phone} label="Phone" value="+91 93459 23374" href="tel:+919345923374" />
            <ContactItem icon={MapPin} label="Location" value="Puducherry, India" />
          </ul>
          <div className="mt-8 flex gap-3">
            <a href="https://github.com/yogeswarivelu" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full bg-card/70 backdrop-blur transition-transform hover:scale-110">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/yogeswari-v" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full bg-card/70 backdrop-blur transition-transform hover:scale-110">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.form
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          onSubmit={handleSubmit}
          className="lg:col-span-3 rounded-3xl bg-card p-8 shadow-card"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="from_name" placeholder="Your name" />
            <Field label="Email" name="from_email" type="email" placeholder="you@email.com" />
          </div>
          <div className="mt-4">
            <Field label="Subject" name="subject" placeholder="What's this about?" />
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block text-sm font-semibold">Message</label>
            <textarea required name="message" rows={5} placeholder="Tell me about your project…" className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
          </div>
          <input type="hidden" name="to_email" value={RECIPIENT_EMAIL} />
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:scale-105 hover:shadow-soft disabled:opacity-60 disabled:hover:scale-100"
          >
            {status === "sending" ? "Sending…" : status === "sent" ? "Sent — thank you!" : "Send Message"}
            <Send className="h-4 w-4" />
          </button>
          {status === "sent" && (
            <p className="mt-4 text-sm font-medium text-primary">Your message has been sent. I'll get back to you soon!</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm font-medium text-destructive">Couldn't send your message{errorMsg ? ` (${errorMsg})` : ""}. Please try again or email me directly.</p>
          )}
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold">{label}</label>
      <input required name={name} type={type} placeholder={placeholder} className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
    </div>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center gap-3 rounded-2xl bg-card/60 p-3 backdrop-blur transition-colors hover:bg-card">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-card">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div>
        <p className="text-xs text-foreground/60">{label}</p>
        <p className="text-sm font-semibold">{value}</p>
      </div>
    </div>
  );
  return <li>{href ? <a href={href}>{content}</a> : content}</li>;
}

function Footer() {
  return (
    <footer className="border-t border-border/50 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-1 text-center">
        <p className="text-sm font-semibold tracking-wide text-foreground/80">© 2026 Yogeswari V</p>
        <p className="text-xs font-medium tracking-wide text-muted-foreground/70">Designed &amp; developed by Yogeswari V</p>
      </div>
    </footer>
  );
}
