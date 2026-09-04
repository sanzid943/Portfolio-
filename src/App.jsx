
import { useEffect, useState, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ShieldCheck,
  GraduationCap,
  ExternalLink,
  Lock,
  Code2,
  Bug,
  Calendar,
  Send,
} from "lucide-react";

const ACCENTS = ["#2DE2E6", "#FF3EA5", "#FFC857"];

const PROFILE_IMAGE = "data:image/jpeg;base64,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";

const SKILL_GROUPS = [
  {
    label: "Systems & Core",
    color: "#2DE2E6",
    items: ["C", "C++", "Java"],
  },
  {
    label: "Scripting & Security Tooling",
    color: "#FFC857",
    items: ["Python"],
  },
  {
    label: "Web Development",
    color: "#FF3EA5",
    items: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Bootstrap"],
  },
  {
    label: "Database",
    color: "#8B7FFF",
    items: ["SQL", "MongoDB"],
  },
];

const PROJECTS = [
  {
    id: "FILE_01",
    name: "Password Security Analyzer",
    desc: "A web-based tool that evaluates password strength and provides recommendations to help users create stronger and more secure passwords.",
    tag: "Frontend Development",
  },
  {
    id: "FILE_02",
    name: "Word Guessing Game",
    desc: "A logic-driven guessing game exploring game-state management and clear, replayable rules.",
    tag: "Problem Solving",
  },
  {
    id: "FILE_03",
    name: "Movie Explorer",
    desc: "A web application that allows users to explore movies, search for titles, and view useful movie information in an interactive interface.",
    tag: "Web Application",
  },
  {
    id: "FILE_04",
    name: "Electricity Bill Calculator",
    desc: "A simple application that calculates electricity bills based on electricity consumption and applicable billing rates.",
    tag: "Web Application",
  },
];

const EDUCATION = [
  {
    year: "Feb 2023 – Present",
    title: "B.Sc. in Information Technology",
    place: "Institute of Information Technology, Jahangirnagar University",
    result: "4th Year, 1st Semester — GPA 3.70 (Up to 5th Semester)",
  },
  {
    year: "2021",
    title: "Higher Secondary Certificate (HSC)",
    place: "Lion's School and College, Rangpur",
    result: "GPA 5.00",
  },
  {
    year: "2019",
    title: "Secondary School Certificate (SSC)",
    place: "Talimganj High School",
    result: "GPA 5.00",
  },
];

const FOCUS_AREAS = [
  {
    icon: "shield",
    title: "Secure Web Development",
    desc: "Building web applications with security woven into the build — not bolted on afterward.",
  },
  {
    icon: "code",
    title: "Full-Stack Development",
    desc: "Comfortable across the stack — from database design to interactive React front-ends.",
  },
  {
    icon: "bug",
    title: "Cybersecurity & Ethical Hacking",
    desc: "Actively learning how systems break, so I can help build ones that hold up.",
  },
];

const TERMINAL_LINES = [
  { cmd: "whoami", out: "Md. Sanzid Mostofa" },
  { cmd: "role --list", out: "Cybersecurity Enthusiast\nAspiring Full-Stack Developer" },
  { cmd: "status", out: "Available for opportunities" },
];

function useTypedTerminal(lines, active) {
  const [rendered, setRendered] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) return;
    let cancelled = false;
    let lineIdx = 0;
    let charIdx = 0;
    let mode = "cmd";
    let current = { cmd: "", out: "" };
    const built = [];

    function tick() {
      if (cancelled) return;
      if (lineIdx >= lines.length) {
        setDone(true);
        return;
      }
      const line = lines[lineIdx];
      if (mode === "cmd") {
        charIdx++;
        current = { ...current, cmd: line.cmd.slice(0, charIdx) };
        setRendered([...built, current]);
        if (charIdx >= line.cmd.length) {
          mode = "out";
          charIdx = 0;
          setTimeout(tick, 260);
          return;
        }
        setTimeout(tick, 34);
      } else {
        charIdx++;
        current = { ...current, out: line.out.slice(0, charIdx) };
        setRendered([...built, current]);
        if (charIdx >= line.out.length) {
          built.push(current);
          lineIdx++;
          charIdx = 0;
          mode = "cmd";
          current = { cmd: "", out: "" };
          setTimeout(tick, 380);
          return;
        }
        setTimeout(tick, 14);
      }
    }
    tick();
    return () => {
      cancelled = true;
    };
  }, [active]);

  return { rendered, done };
}

function useOnScreen(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const visible = useOnScreen(ref);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function ClearanceStamp({ color, text }) {
  return (
    <div
      className="absolute -top-3 -right-3 rotate-6 select-none rounded-sm border-2 px-2 py-0.5 text-[10px] font-bold tracking-widest"
      style={{
        borderColor: color,
        color: color,
        fontFamily: "'JetBrains Mono', monospace",
        background: "rgba(15,11,30,0.9)",
      }}
    >
      {text}
    </div>
  );
}

export default function Portfolio() {
  const heroRef = useRef(null);
  const heroVisible = useOnScreen(heroRef);
  const { rendered, done } = useTypedTerminal(TERMINAL_LINES, heroVisible);
  const [copied, setCopied] = useState(false);
  const [journeyTab, setJourneyTab] = useState("education");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const email = "sanzidmostofa@gmail.com";

  return (
    <div
      style={{
        background: "#0F0B1E",
        color: "#F2EFFB",
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::selection { background: #FF3EA5; color: #0F0B1E; }
        .blink-cursor::after {
          content: '▌';
          animation: blink 1s steps(1) infinite;
          color: #2DE2E6;
        }
        @keyframes blink { 50% { opacity: 0; } }
        .glow-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.35;
          pointer-events: none;
        }
        a { color: inherit; }
        .nav-link { position: relative; }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0; bottom: -4px;
          width: 0; height: 2px;
          background: #2DE2E6;
          transition: width 0.25s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .badge-chip { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .badge-chip:hover { transform: translateY(-3px); }
        .case-card { transition: transform 0.25s ease, border-color 0.25s ease; }
        .case-card:hover { transform: translateY(-6px); }
        .btn-primary { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px -8px rgba(45,226,230,0.5); }
      `}</style>

      {/* Ambient glow blobs */}
      <div className="glow-blob" style={{ width: 420, height: 420, background: "#2DE2E6", top: -100, left: -120 }} />
      <div className="glow-blob" style={{ width: 380, height: 380, background: "#FF3EA5", top: 300, right: -140 }} />
      <div className="glow-blob" style={{ width: 320, height: 320, background: "#FFC857", bottom: -80, left: "30%" }} />

      {/* NAV */}
      <nav className="sticky top-0 z-50 flex items-center justify-end px-6 md:px-12 py-4 backdrop-blur-md overflow-x-auto" style={{ background: "rgba(15,11,30,0.75)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="flex gap-3 md:gap-8 text-xs md:text-sm whitespace-nowrap" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          {["home", "focus", "about", "skills", "journey", "projects", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToId(id)}
              className="nav-link bg-transparent border-none cursor-pointer p-0 uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: "#F2EFFB" }}
            >
              {id}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="home" ref={heroRef} className="px-6 md:px-12 pt-16 md:pt-24 pb-20 max-w-5xl mx-auto">
        <div>

          <Reveal delay={80}>
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 mb-6">
              <div className="relative shrink-0">
                <div
                  className="absolute -inset-1.5 rounded-full"
                  style={{ background: "linear-gradient(135deg, #2DE2E6, #FF3EA5, #FFC857)", opacity: 0.6, filter: "blur(10px)" }}
                />
                <div
                  className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2"
                  style={{ borderColor: "rgba(255,255,255,0.2)", background: "#130E24" }}
                >
                  <img
                    src={PROFILE_IMAGE}
                    alt="Md. Sanzid Mostofa"
                    className="w-full h-full object-cover"
                    style={{ display: "block" }}
                  />
                </div>
              </div>
              <h1
                style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.05 }}
                className="text-4xl md:text-6xl font-bold text-center sm:text-left"
              >
                Md. Sanzid <span style={{ color: "#2DE2E6" }}>Mostofa</span>
              </h1>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <p className="text-base md:text-lg max-w-xl mb-10" style={{ color: "#B9AEDD" }}>
              Aspiring Cybersecurity &amp; Ethical Hacking enthusiast and Web Developer, passionate about
              building secure web applications and continuously expanding technical skills.
            </p>
          </Reveal>

          {/* Terminal window */}
          <Reveal delay={200}>
            <div
              className="rounded-lg overflow-hidden max-w-xl border"
              style={{ borderColor: "rgba(45,226,230,0.35)", background: "#130E24", boxShadow: "0 20px 60px -20px rgba(45,226,230,0.25)" }}
            >
              <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: "#1A1330", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF3EA5" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FFC857" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#2DE2E6" }} />
                <span className="ml-3 text-xs" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#7A6FA0" }}>
                  bash — sanzid@iit-ju
                </span>
              </div>
              <div className="p-5 text-sm min-h-[160px]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {rendered.map((line, i) => (
                  <div key={i} className="mb-2">
                    <div>
                      <span style={{ color: "#2DE2E6" }}>$ </span>
                      <span>{line.cmd}</span>
                    </div>
                    {line.out && (
                      <div style={{ color: "#F2EFFB", whiteSpace: "pre-line" }} className="pl-3 opacity-90">
                        {line.out}
                      </div>
                    )}
                  </div>
                ))}
                <span className="blink-cursor" style={{ color: "#2DE2E6" }}></span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://github.com/sanzid943"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-5 py-2.5 rounded-md text-sm font-semibold flex items-center gap-2"
                style={{ fontFamily: "'JetBrains Mono', monospace", background: "#2DE2E6", color: "#0F0B1E" }}
              >
                <Github size={15} /> view_github_profile
              </a>
              <a
                href="https://drive.google.com/file/d/1ur-eiFEhAEoHPTu1E2c4DEiMa9y_koyw/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-5 py-2.5 rounded-md text-sm font-semibold flex items-center gap-2 border"
                style={{ fontFamily: "'JetBrains Mono', monospace", borderColor: "#FF3EA5", color: "#FF3EA5" }}
              >
                <Download size={15} /> download_resume
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section id="focus" className="px-6 md:px-12 py-20 max-w-5xl mx-auto">
        <Reveal>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-3xl font-bold mb-10">
            Focus Areas
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {FOCUS_AREAS.map((area, i) => {
            const color = ACCENTS[i % ACCENTS.length];
            const Icon = area.icon === "shield" ? ShieldCheck : area.icon === "code" ? Code2 : Bug;
            return (
              <Reveal key={area.title} delay={i * 100}>
                <div
                  className="rounded-xl p-6 h-full border"
                  style={{ borderColor: `${color}33`, background: "#150F28" }}
                >
                  <div
                    className="w-11 h-11 rounded-md flex items-center justify-center mb-4"
                    style={{ background: `${color}18` }}
                  >
                    <Icon size={20} color={color} />
                  </div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-semibold text-lg mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#B9AEDD" }}>
                    {area.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 md:px-12 py-20 max-w-5xl mx-auto">
        <Reveal>
          <div
            className="relative rounded-xl p-8 md:p-10 border"
            style={{ borderColor: "rgba(255,255,255,0.1)", background: "linear-gradient(145deg, rgba(45,226,230,0.06), rgba(255,62,165,0.05))" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck size={18} color="#2DE2E6" />
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-2xl font-semibold">
                About
              </h2>
            </div>
            <p className="leading-relaxed mb-8" style={{ color: "#CFC6EA" }}>
              I'm a student at the Institute of Information Technology, Jahangirnagar University, drawn to
              the security side of software — how systems break, and how to build them so they don't.
              Alongside that, I build web applications end to end, treating security as part of the build
              rather than an afterthought. Currently sharpening both halves of that skill set: offense-minded
              thinking, and clean, dependable full-stack development.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              {[
                ["Name", "Md. Sanzid Mostofa"],
                ["Focus", "Cybersecurity & Full-Stack Dev"],
                ["Institution", "IIT, Jahangirnagar University"],
                ["Email", "sanzidmostofa@gmail.com"],
                ["Phone", "01309436080"],
              ].map(([label, val]) => (
                <div key={label} className="text-sm">
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", color: "#7A6FA0" }} className="uppercase text-xs tracking-wider">
                    {label}
                  </span>
                  <p style={{ color: "#F2EFFB" }} className="font-medium mt-0.5">{val}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 md:px-12 py-20 max-w-5xl mx-auto">
        <Reveal>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-3xl font-bold mb-10">
            Skills
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {SKILL_GROUPS.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 100}>
              <div
                className="rounded-xl p-6 h-full border"
                style={{ borderColor: `${group.color}33`, background: "#150F28" }}
              >
                <p
                  className="text-xs uppercase tracking-widest mb-4 font-semibold"
                  style={{ color: group.color, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="badge-chip px-3 py-1.5 rounded-md text-sm font-medium"
                      style={{
                        border: `1px solid ${group.color}`,
                        color: "#F2EFFB",
                        background: `${group.color}14`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 md:px-12 py-20 max-w-5xl mx-auto">
        <Reveal>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-3xl font-bold mb-10">
            Case Files
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((proj, i) => {
            const color = ACCENTS[i % ACCENTS.length];
            return (
              <Reveal key={proj.id} delay={i * 90}>
                <div
                  className="case-card relative rounded-lg overflow-hidden border h-full"
                  style={{ borderColor: "rgba(255,255,255,0.1)", background: "#150F28" }}
                >
                  <div className="h-1.5 w-full" style={{ background: color }} />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-xs font-bold tracking-widest"
                        style={{ color, fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {proj.id}
                      </span>
                      <span
                        className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full"
                        style={{ border: `1px solid ${color}55`, color }}
                      >
                        {proj.tag}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-lg font-semibold mb-2">
                      {proj.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#B9AEDD" }}>
                      {proj.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="px-6 md:px-12 py-20 max-w-5xl mx-auto">
        <Reveal>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-3xl font-bold mb-8">
            My Journey
          </h2>
        </Reveal>
        <Reveal delay={60}>
          <div className="flex gap-3 mb-10">
            {["education", "projects"].map((tab) => (
              <button
                key={tab}
                onClick={() => setJourneyTab(tab)}
                className="px-4 py-2 rounded-md text-sm font-semibold capitalize border"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  borderColor: journeyTab === tab ? "#2DE2E6" : "rgba(255,255,255,0.15)",
                  color: journeyTab === tab ? "#2DE2E6" : "#B9AEDD",
                  background: journeyTab === tab ? "rgba(45,226,230,0.1)" : "transparent",
                }}
              >
                {tab === "education" ? "🎓 Education" : "💼 Projects"}
              </button>
            ))}
          </div>
        </Reveal>

        {journeyTab === "education" && (
          <div className="space-y-4">
            {EDUCATION.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div
                  className="flex gap-5 rounded-xl p-6 border"
                  style={{ borderColor: "rgba(255,200,87,0.2)", background: "#150F28" }}
                >
                  <div className="shrink-0">
                    <div
                      className="w-11 h-11 rounded-md flex items-center justify-center"
                      style={{ background: "rgba(255,200,87,0.12)" }}
                    >
                      <GraduationCap size={20} color="#FFC857" />
                    </div>
                  </div>
                  <div>
                    <span
                      className="text-xs font-semibold tracking-wider"
                      style={{ fontFamily: "'JetBrains Mono', monospace", color: "#FFC857" }}
                    >
                      {item.year}
                    </span>
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-semibold text-lg mt-1">
                      {item.title}
                    </h3>
                    <p className="text-sm mt-1" style={{ color: "#B9AEDD" }}>{item.place}</p>
                    <p className="text-xs mt-1" style={{ color: "#7A6FA0" }}>{item.result}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {journeyTab === "projects" && (
          <div className="space-y-4">
            {PROJECTS.map((proj, i) => {
              const color = ACCENTS[i % ACCENTS.length];
              return (
                <Reveal key={proj.id} delay={i * 90}>
                  <div
                    className="flex gap-5 rounded-xl p-6 border"
                    style={{ borderColor: `${color}33`, background: "#150F28" }}
                  >
                    <div className="shrink-0">
                      <div
                        className="w-11 h-11 rounded-md flex items-center justify-center"
                        style={{ background: `${color}18` }}
                      >
                        <Code2 size={20} color={color} />
                      </div>
                    </div>
                    <div>
                      <span
                        className="text-xs font-semibold tracking-wider"
                        style={{ fontFamily: "'JetBrains Mono', monospace", color }}
                      >
                        {proj.tag}
                      </span>
                      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-semibold text-lg mt-1">
                        {proj.name}
                      </h3>
                      <p className="text-sm mt-1" style={{ color: "#B9AEDD" }}>{proj.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-12 py-24 max-w-5xl mx-auto">
        <Reveal>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-3xl font-bold mb-10">
            Get In Touch
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8">
          <Reveal>
            <div
              className="rounded-xl p-8 h-full border"
              style={{ borderColor: "rgba(255,62,165,0.3)", background: "linear-gradient(160deg, rgba(255,62,165,0.08), rgba(45,226,230,0.05))" }}
            >
              <Lock size={24} color="#FF3EA5" className="mb-4" />
              <p className="mb-8 leading-relaxed" style={{ color: "#B9AEDD" }}>
                Open to internships, collaborations, and conversations about security &amp; the web.
                Reach out directly, or drop a note using the form.
              </p>
              <div className="flex flex-col gap-3 text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(email).catch(() => {});
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1800);
                  }}
                  className="btn-primary flex items-center gap-2 px-4 py-2.5 rounded-md border w-fit"
                  style={{ borderColor: "#2DE2E6", color: "#2DE2E6" }}
                >
                  <Mail size={16} /> {copied ? "copied!" : email}
                </button>
                <a
                  href="https://github.com/sanzid943"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2 px-4 py-2.5 rounded-md border w-fit"
                  style={{ borderColor: "#FFC857", color: "#FFC857" }}
                >
                  <Github size={16} /> github/sanzid943
                </a>
                <a
                  href="https://www.linkedin.com/in/sanzid-mostofa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2 px-4 py-2.5 rounded-md border w-fit"
                  style={{ borderColor: "#FF3EA5", color: "#FF3EA5" }}
                >
                  <Linkedin size={16} /> linkedin/sanzid-mostofa
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const subject = encodeURIComponent(form.subject || `Message from ${form.name || "your website"}`);
                const body = encodeURIComponent(
                  `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`
                );
                const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
                const link = document.createElement("a");
                link.href = mailtoLink;
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                setSent(true);
                setTimeout(() => setSent(false), 4000);
              }}
              className="rounded-xl p-8 border flex flex-col gap-4"
              style={{ borderColor: "rgba(255,255,255,0.1)", background: "#150F28" }}
            >
              <input
                required
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="px-4 py-3 rounded-md text-sm outline-none"
                style={{ background: "#0F0B1E", border: "1px solid rgba(255,255,255,0.12)", color: "#F2EFFB" }}
              />
              <input
                required
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="px-4 py-3 rounded-md text-sm outline-none"
                style={{ background: "#0F0B1E", border: "1px solid rgba(255,255,255,0.12)", color: "#F2EFFB" }}
              />
              <input
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="px-4 py-3 rounded-md text-sm outline-none"
                style={{ background: "#0F0B1E", border: "1px solid rgba(255,255,255,0.12)", color: "#F2EFFB" }}
              />
              <textarea
                required
                placeholder="Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="px-4 py-3 rounded-md text-sm outline-none resize-none"
                style={{ background: "#0F0B1E", border: "1px solid rgba(255,255,255,0.12)", color: "#F2EFFB" }}
              />
              <button
                type="submit"
                className="btn-primary flex items-center justify-center gap-2 px-5 py-3 rounded-md text-sm font-semibold"
                style={{ fontFamily: "'JetBrains Mono', monospace", background: sent ? "#FFC857" : "#2DE2E6", color: "#0F0B1E" }}
              >
                <Send size={15} /> {sent ? "opened_mail_app()" : "send_message()"}
              </button>
              {sent && (
                <p className="text-xs text-center" style={{ color: "#FFC857", fontFamily: "'JetBrains Mono', monospace" }}>
                  Your email app should now be open with the message pre-filled — just hit send there.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-8 text-center text-xs" style={{ color: "#5E5480", fontFamily: "'JetBrains Mono', monospace" }}>
        <div className="flex items-center justify-center gap-4 mb-3">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-1.5 hover:opacity-80"
            style={{ color: "#7A6FA0" }}
          >
            <Mail size={13} /> {email}
          </a>
          <span style={{ color: "#3A3358" }}>•</span>
          <a
            href="https://www.linkedin.com/in/sanzid-mostofa/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:opacity-80"
            style={{ color: "#7A6FA0" }}
          >
            <Linkedin size={13} /> sanzid-mostofa
          </a>
        </div>
        <p className="flex items-center justify-center gap-2">
          <ExternalLink size={12} /> built by Md. Sanzid Mostofa — © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
