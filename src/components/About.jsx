import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-16 md:py-24 relative min-h-screen"
      id="about"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950" />

      {/* Subtle wave */}
      <div className="absolute inset-0 opacity-15 dark:opacity-8 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a5f3fc" />
              <stop offset="50%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#f9a8d4" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,154.7C672,171,768,213,864,213.3C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-10 md:mb-16 tracking-tight text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, type: "spring" }}
        >
          About Me
        </motion.h2>

        {/* === First row === */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-16 mb-16 lg:mb-20">
          {/* Image - left */}
          <motion.div
            className="w-full lg:w-5/12 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] sm:aspect-[5/6]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 to-purple-300 dark:from-cyan-700 dark:to-purple-700 rounded-3xl blur-2xl opacity-40" />
              <motion.img
                src="/images/b3.jpg"
                alt="Ebrahim Worke"
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700"
                whileHover={{ scale: 1.03 }}
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/420x560?text=Image+Not+Found";
                }}
              />
            </div>
          </motion.div>

          {/* Text - right */}
          <motion.div
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-cyan-200/50 dark:border-cyan-800/40 rounded-2xl p-7 md:p-9 lg:p-12 shadow-2xl flex flex-col min-h-[420px] lg:min-h-0 lg:h-full">
              <div className="space-y-6 md:space-y-7">
                <motion.p
                  className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Hi, I'm <span className="font-semibold text-cyan-700 dark:text-cyan-400">Ebrahim Worke</span> — a full-stack developer and technical assistant at{" "}
                  <span className="font-semibold text-purple-700 dark:text-purple-400">
                    Wollo University's Kombolcha Institute of Technology (KIOT)
                  </span>{" "}
                  in the Computer Engineering stream.
                </motion.p>

                <motion.p
                  className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.65 }}
                >
                  I graduated in June 2025 from{" "}
                  <span className="font-semibold text-pink-700 dark:text-pink-400">Jimma University</span> with a degree in{" "}
                  <span className="font-semibold text-indigo-700 dark:text-indigo-300">
                    Electrical and Computer Engineering
                  </span>
                  , specializing in Computer Engineering.
                </motion.p>

                <motion.p
                  className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  I bridge code, hardware, and real-world impact through clean, modern web applications and IoT solutions.
                </motion.p>
              </div>

              <motion.div
                className="mt-auto pt-6 text-sm md:text-base italic text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p>Open to collaborations, freelance opportunities, and meaningful tech projects.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* === Second row === */}
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-stretch gap-10 lg:gap-16">
          {/* Image - right */}
          <motion.div
            className="w-full lg:w-5/12 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[5/4]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 to-purple-300 dark:from-cyan-700 dark:to-purple-700 rounded-3xl blur-2xl opacity-30" />
              <img
                src="/images/bb2.jpg"
                alt="Working on project"
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/500x400?text=Second+Image+Missing";
                }}
              />
            </div>
          </motion.div>

          {/* Text - left */}
          <motion.div
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-cyan-200/50 dark:border-cyan-800/40 rounded-2xl p-7 md:p-9 lg:p-12 shadow-2xl flex flex-col min-h-[420px] lg:min-h-0 lg:h-full">
              <div className="space-y-6 md:space-y-7">
                <motion.p
                  className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="font-semibold">My stack:</span> React • Next.js • TypeScript • Node.js • Express • Tailwind CSS • Framer Motion • MongoDB / PostgreSQL • IoT (ESP32, Raspberry Pi)
                </motion.p>

                <motion.p
                  className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.55 }}
                >
                  I enjoy clean code, smooth animations, performance optimization, and turning real-world problems into practical, scalable solutions — whether web, mobile, or hardware-integrated systems.
                </motion.p>

                <motion.p
                  className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Outside of tech: video editing, graphic design, strong coffee, and late-night product experiments.
                </motion.p>

                <motion.div
                  className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-sm md:text-base italic text-gray-700 dark:text-gray-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <p><strong>Currently focused on:</strong> TypeScript + modern full-stack practices, advanced animations, IoT ↔ web integration</p>
                  <p><strong>Most rewarding project:</strong> Smart irrigation system — tech that directly helps people</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;