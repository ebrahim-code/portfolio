import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const stats = [
  { value: 3,  suffix: "+", label: "Years\nExperience" },
  { value: 20, suffix: "+", label: "Projects\nCompleted" },
  { value: 10, suffix: "+", label: "Happy\nClients"  },
  { value: 5,  suffix: "★", label: "Avg.\nRating"    },
];

const timeline = [
  { year: "2021", title: "Inception", desc: "Launched my journey into deep-tech and embedded systems at Jimma University, mastering the fundamentals of logic." },
  { year: "2022", title: "Full-Stack Mastery", desc: "Dived into the world of React, Node.js, and architectural design, building scalable web ecosystems." },
  { year: "2023", title: "IoT Innovation", desc: "Developed a GSM-based Smart Irrigation System at JiT AI Center, bridging technology with agriculture." },
  { year: "June 2025", title: "Engineering Excellence", desc: "Graduated with honors in Electrical & Computer Engineering from Jimma University, specializing in the Computer stream." },
  { year: "Dec 2025", title: "Academic Leadership", desc: "Joined Wollo University's KIOT as a Technical Assistant, mentoring students and optimizing engineering streams." },
];

function CountUp({ target, suffix, inView }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!inView) return;
    const el = ref.current;
    let start = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { start = target; clearInterval(timer); }
      el.textContent = start + suffix;
    }, 40);
    return () => clearInterval(timer);
  }, [inView, target, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

const About = () => {
  const sectionRef = useRef(null);
  const inView     = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <motion.section
      id="about"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      className="relative py-24 md:py-32 overflow-hidden bg-slate-950"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
      <div className="absolute top-1/2 left-[-10%] w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />
      <div className="absolute top-1/2 right-[-10%] w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-[0.25em] uppercase mb-3">Get to know me</p>
          <h2
            className="text-5xl md:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 rounded-full mx-auto" style={{ background: "linear-gradient(90deg,#06b6d4,#a855f7)" }} />
        </motion.div>

        {/* ── Row 1: Image + Bio ── */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
          {/* Image */}
          <motion.div
            className="w-full lg:w-5/12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-3xl blur-2xl opacity-40"
                style={{ background: "linear-gradient(135deg,#06b6d4,#a855f7)" }} />
              <motion.img
                src="/images/b3.jpg"
                alt="Ebrahim Worke"
                className="relative w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl border border-slate-700/50 z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/420x560?text=Ebrahim"; }}
              />
              {/* Badge */}
              <motion.div
                className="absolute -right-5 top-1/2 -translate-y-1/2 glass-card rounded-2xl p-4 text-center z-20 border border-cyan-500/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-3xl font-black text-gradient" style={{ fontFamily:"Outfit,sans-serif" }}>3+</div>
                <div className="text-xs text-slate-400 leading-tight">Years<br/>Experience</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            className="w-full lg:w-7/12 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-8 md:p-10 border border-slate-700/50 space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-slate-300">
                I am a <span className="font-bold text-cyan-400">Visionary Computer Engineer</span> and 
                <span className="font-bold text-purple-400"> Full-Stack Architect</span> dedicated to building the 
                digital-physical bridges of tomorrow.
              </p>
              <p className="text-lg leading-relaxed text-slate-400">
                With a solid academic foundation from <span className="font-semibold text-white text-gradient">Jimma University</span> (Class of 2025) in 
                <span className="font-semibold text-white"> Electrical & Computer Engineering</span>, I specialize in 
                transforming complex hardware-software intersections into elegant, high-performance solutions.
              </p>
              <p className="text-lg leading-relaxed text-slate-400">
                Currently, I serve as a <span className="font-semibold text-cyan-400">Technical Assistant</span> at 
                <span className="font-semibold text-purple-400"> Wollo University's KIOT</span>, where I mentor future engineers 
                and lead technical operations in the Computer Engineering stream.
              </p>
              <p className="text-lg leading-relaxed text-slate-400">
                My philosophy is simple: <strong className="text-white">Code must solve real-world problems.</strong> 
                Whether it's crafting immersive web experiences with JavaScript or architecting intelligent IoT 
                ecosystems, I thrive on the synergy between pure logic and physical impact.
              </p>

              <div className="pt-6 border-t border-slate-700/50 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-slate-500 text-sm italic">
                    ⚡ Focus: JavaScript, Advanced Animations, IoT ↔ Web Integration
                  </p>
                  <p className="text-slate-500 text-sm italic">
                    🏆 Peak Impact: Smart Irrigation System for local farmers
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-500 text-sm italic">
                    🎨 Creative: Video Editing & Digital Storytelling
                  </p>
                  <p className="text-slate-500 text-sm italic">
                    🎓 Mentorship: Shaping the next gen at Wollo University
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <motion.a
                  href="/images/Ebrahim Workie CV.pdf"
                  download="Ebrahim_Workie_CV.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm shadow-lg shadow-purple-500/20 transition-all"
                  style={{ background: "linear-gradient(135deg,#a855f7,#ec4899)" }}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(168,85,247,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload size={14} /> Download CV (PDF)
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats row ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-4 md:p-6 text-center border border-slate-700/50 hover:border-cyan-500/40 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="text-2xl md:text-4xl font-black text-gradient mb-1 md:mb-2"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                <CountUp target={s.value} suffix={s.suffix} inView={inView} />
              </div>
              <div className="text-[10px] md:text-sm text-slate-500 whitespace-pre-line leading-tight uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* ── Timeline ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3
            className="text-3xl font-black text-white text-center mb-10"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            My <span className="text-gradient">Journey</span>
          </h3>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center gap-6 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div className={`pl-12 md:pl-0 w-full md:w-[45%] ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"}`}>
                    <div className="glass-card rounded-2xl p-5 border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
                      <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">{item.year}</span>
                      <h4 className="text-lg font-bold text-white mt-1 mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Dot — desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-cyan-500 bg-slate-950 z-10" />
                  {/* Dot — mobile */}
                  <div className="absolute left-4 -translate-x-1/2 md:hidden w-3 h-3 rounded-full border-2 border-cyan-500 bg-slate-950 z-10" />

                  {/* Empty half for layout */}
                  <div className="hidden md:block w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;