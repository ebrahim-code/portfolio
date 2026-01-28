import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-24 md:py-32 bg-gradient-to-b from-gray-950 via-indigo-950 to-purple-950 text-white relative overflow-hidden font-sans"
      id="about"
    >
      {/* Subtle animated wave background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7dd3fc" />
              <stop offset="50%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>
          <motion.path
            fill="url(#waveGradient)"
            d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,154.7C672,171,768,213,864,213.3C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 md:mb-20 tracking-tight bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Profile Image with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 90 }}
            className="relative w-72 h-72 md:w-80 md:h-80 flex-shrink-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-600 to-pink-500 rounded-full blur-3xl opacity-40 animate-pulse-slow" />
            <motion.img
              src="/images/profile.jpg"
              alt="Ebrahim Worke"
              className="w-full h-full object-cover rounded-full border-4 border-white/30 shadow-2xl relative z-10"
              whileHover={{
                scale: 1.08,
                rotate: 5,
                boxShadow: "0 0 60px rgba(167, 139, 250, 0.6)",
                transition: { duration: 0.4 },
              }}
            />
          </motion.div>

          {/* Text Content – Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, type: "spring", stiffness: 80 }}
            className="lg:w-3/5 backdrop-blur-xl bg-black/40 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 0 0 0 1px rgba(167, 139, 250, 0.2)",
            }}
          >
            <motion.p
              className="text-lg md:text-xl leading-relaxed mb-6 text-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Hey there! I’m <span className="font-bold text-cyan-400">Ebrahim Worke</span>, a passionate tech enthusiast and{" "}
              <span className="font-bold text-purple-400">Technical Assistant</span> at{" "}
              <span className="font-bold text-pink-400">Wollo University</span>’s{" "}
              <span className="font-bold text-cyan-300">Kombolcha Institute of Technology (KIOT)</span>, in the{" "}
              <span className="font-bold text-purple-300">Electrical and Computer Engineering Department</span> –{" "}
              <span className="font-bold text-amber-300">Computer Engineering stream</span>.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl leading-relaxed mb-6 text-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              I’m currently pursuing my degree in <span className="font-bold text-cyan-400">Electrical and Computer Engineering</span> at{" "}
              <span className="font-bold text-purple-400">Jimma University</span>, with graduation on the horizon in <span className="font-bold text-pink-400">2025</span>. 
              Previously, I completed a 3-month internship at the <span className="font-bold text-cyan-300">AI Center</span>, where I dove deep into full-stack development and AI-driven projects — including building an intelligent irrigation system that truly made an impact.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl leading-relaxed mb-6 text-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              My toolkit includes <span className="font-bold text-purple-400">React</span>, <span className="font-bold text-cyan-400">Node.js</span>, modern JavaScript ecosystems, and a growing passion for IoT, animations, and creative problem-solving. I blend technical precision with design intuition to build meaningful, user-focused solutions.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl leading-relaxed text-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Whether it’s coding innovative apps, mentoring students, or exploring the latest in tech, I’m all about turning ideas into reality — fueled by coffee, collaboration, and curiosity. Let’s connect and build something extraordinary!
            </motion.p>

            <motion.div
              className="mt-8 text-base italic text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <p><strong>Currently exploring:</strong> Advanced animations, IoT integrations, and scalable full-stack architectures.</p>
              <p><strong>Favorite project highlight:</strong> That smart irrigation system — tech that helps farmers and feels like a real-world win.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;