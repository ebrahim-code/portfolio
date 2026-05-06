import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaDownload, FaArrowDown } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import ParticleBackground from "./ParticleBackground";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Built" },
  { value: "10+", label: "Clients Served" },
  { value: "5★", label: "Avg. Rating" },
];

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden font-sans"
      id="hero"
    >
      {/* Background layer */}
      <div className="absolute inset-0 bg-white dark:bg-slate-950 transition-colors duration-500" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/40 via-white to-purple-100/40 dark:from-cyan-950/40 dark:via-slate-950 dark:to-purple-950/40 transition-all duration-500" />

      {/* Canvas particles */}
      <ParticleBackground count={75} />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-[-8%] left-[-8%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]"
        animate={{ x: ["0%","25%","-15%","0%"], y: ["0%","-30%","20%","0%"] }}
        transition={{ duration: 22, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-8%] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[130px]"
        animate={{ x: ["0%","-20%","12%","0%"], y: ["0%","25%","-20%","0%"] }}
        transition={{ duration: 26, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-pink-500/8 blur-[100px]"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-10 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* ── LEFT: Text ── */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-slate-200 dark:border-cyan-500/30 text-slate-600 dark:text-cyan-400 glass"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            Available for freelance & collaboration
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium mb-3"
          >
            Hey, I'm{" "}
            <span className="text-slate-900 dark:text-white font-semibold">Ebrahim Worke</span> 👋
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="text-[2.6rem] sm:text-6xl md:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            <span className="text-slate-900 dark:text-white transition-colors duration-500">Building</span>
            <br />
            <span className="text-gradient-shimmer">the Future</span>
          </motion.h1>

          {/* Type animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium mb-10 h-9"
          >
            I craft{" "}
            <TypeAnimation
              sequence={[
                "immersive web apps",  1800,
                "smart IoT systems",   1800,
                "creative digital art",1800,
                "scalable backends",   1800,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
              className="font-bold text-gradient"
            />
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
          >
            {/* Primary */}
            <motion.a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-base shadow-lg shadow-cyan-500/25 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #06b6d4, #a855f7)" }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6,182,212,.35)" }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
            </motion.a>

            {/* Secondary */}
            <motion.a
              href="mailto:ebrahimworkie@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-slate-600 dark:text-slate-300 text-base border border-slate-200 dark:border-slate-600 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 glass"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <HiMail size={18} /> Hire Me
            </motion.a>

            {/* Resume Download */}
            <motion.a
              href="/images/Ebrahim Workie CV.pdf"
              download="Ebrahim_Workie_CV.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-slate-600 dark:text-slate-300 text-base border border-slate-200 dark:border-slate-600 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 glass"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaDownload size={16} /> Download CV
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/ebrahim-code"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl font-bold text-slate-400 text-base border border-slate-700 hover:border-slate-500 hover:text-white transition-all duration-300 glass"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaGithub size={18} />
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto lg:mx-0"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + i * 0.1 }}
                className="glass rounded-2xl p-4 text-center border border-slate-200 dark:border-slate-700/50 hover:border-cyan-500/40 transition-colors"
              >
                <div
                  className="text-2xl font-black text-gradient mb-1"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-slate-400 dark:text-slate-500 font-medium leading-tight">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Photo ── */}
        <motion.div
          className="flex-shrink-0 flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
            {/* Morphing blob background */}
            <motion.div
              className="absolute inset-[-8%] animate-morph"
              style={{
                background: "linear-gradient(135deg, rgba(6,182,212,.3), rgba(168,85,247,.3), rgba(236,72,153,.2))",
                filter: "blur(20px)",
              }}
            />

            {/* Spinning ring */}
            <motion.div
              className="absolute inset-[-4px] rounded-full border-2 border-dashed border-cyan-500/30 animate-spin-slow"
            />
            <motion.div
              className="absolute inset-[-16px] rounded-full border border-purple-500/20 animate-spin-slow"
              style={{ animationDirection: "reverse", animationDuration: "30s" }}
            />

            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full animate-glow-pulse" />

            {/* Profile image */}
            <motion.img
              src="/images/profile.jpg"
              alt="Ebrahim Worke"
              className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-2 border border-slate-200 dark:border-slate-700 z-20"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Full-Stack</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">Developer ⚡</div>
            </motion.div>

            <motion.div
              className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-2 border border-slate-200 dark:border-slate-700 z-20"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Computer</div>
              <div className="text-sm font-bold text-cyan-500 dark:text-cyan-400">Engineering 💻</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="text-slate-600"
        >
          <FaArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;