import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact, SiNodedotjs, SiJavascript, SiNextdotjs, SiExpress,
  SiMongodb, SiPostgresql, SiTailwindcss, SiGit,
  SiAdobepremierepro, SiAdobephotoshop, SiAdobelightroom, SiFigma,
} from "react-icons/si";
import { FaMicrochip } from "react-icons/fa";

const techSkills = [
  { name: "JavaScript",      icon: SiJavascript,        pct: 94, color: "#f7df1e" },
  { name: "React.js",       icon: SiReact,             pct: 92, color: "#61dafb" },
  { name: "Node.js",        icon: SiNodedotjs,         pct: 85, color: "#68a063" },
  { name: "Next.js",        icon: SiNextdotjs,         pct: 80, color: "#ffffff" },
  { name: "Express.js",     icon: SiExpress,           pct: 83, color: "#cccccc" },
  { name: "MongoDB",        icon: SiMongodb,           pct: 80, color: "#47a248" },
  { name: "PostgreSQL",     icon: SiPostgresql,        pct: 75, color: "#336791" },
  { name: "Tailwind CSS",   icon: SiTailwindcss,       pct: 92, color: "#38bdf8" },
  { name: "IoT / ESP32",    icon: FaMicrochip,         pct: 80, color: "#a855f7" },
  { name: "Git & GitHub",   icon: SiGit,               pct: 88, color: "#f05032" },
];

const creativeSkills = [
  { name: "Adobe Premiere Pro", icon: SiAdobepremierepro, pct: 95, color: "#9999ff" },
  { name: "Adobe Photoshop",    icon: SiAdobephotoshop,   pct: 90, color: "#31a8ff" },
  { name: "Adobe Lightroom",    icon: SiAdobelightroom,   pct: 85, color: "#31c5f0" },
  { name: "Video Editing",      icon: null,               pct: 95, color: "#ec4899", emoji: "🎬" },
  { name: "Graphic Design",     icon: null,               pct: 90, color: "#f97316", emoji: "🎨" },
  { name: "Figma / UI Design",  icon: SiFigma,            pct: 75, color: "#f24e1e" },
];

const TABS = ["Tech Stack", "Creative Tools"];

function SkillBar({ skill, delay = 0 }) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span style={{ color: skill.color }}>
            {Icon ? <Icon size={18} /> : <span className="text-base">{skill.emoji}</span>}
          </span>
          <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>
        <motion.span
          className="text-xs font-bold text-slate-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.4 }}
          viewport={{ once: true }}
        >
          {skill.pct}%
        </motion.span>
      </div>
      <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
          }}
          initial={{ width: "0%" }}
          whileInView={{ width: `${skill.pct}%` }}
          transition={{ delay: delay + 0.2, duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Tech Stack");
  const skills = activeTab === "Tech Stack" ? techSkills : creativeSkills;

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      className="relative py-24 md:py-32 overflow-hidden bg-slate-900"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute top-1/3 right-0 w-[350px] h-[350px] rounded-full bg-purple-500/5 blur-[100px]" />
      <div className="absolute bottom-1/3 left-0 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 text-sm font-semibold tracking-[0.25em] uppercase mb-3">What I work with</p>
          <h2
            className="text-5xl md:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 rounded-full mx-auto" style={{ background: "linear-gradient(90deg,#a855f7,#ec4899)" }} />
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-1 p-1 glass-card rounded-2xl border border-slate-700/50">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "text-white shadow-lg"
                    : "text-slate-400 hover:text-white"
                }`}
                style={
                  activeTab === tab
                    ? { background: "linear-gradient(135deg,#06b6d4,#a855f7)" }
                    : {}
                }
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5"
        >
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} delay={i * 0.06} />
          ))}
        </motion.div>

        {/* Tech badge cloud */}
        {activeTab === "Tech Stack" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-14 text-center"
          >
            <p className="text-slate-500 text-sm mb-5 uppercase tracking-widest">Also experienced with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["REST APIs","JWT Auth","Socket.io","Docker","Linux","Sequelize","Prisma","Framer Motion","ESP32","Raspberry Pi"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-xs font-medium border border-slate-700 text-slate-400 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Skills;