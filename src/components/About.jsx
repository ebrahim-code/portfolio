import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 font-poppins relative overflow-hidden"
      id="about"
    >
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 1440 320">
          <path
            fill="url(#gradient)"
            d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,154.7C672,171,768,213,864,213.3C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#3B82F6" }} />
              <stop offset="100%" style={{ stopColor: "#9333EA" }} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="md:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <motion.img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-80 h-80 rounded-full mx-auto shadow-2xl border-4 border-white relative z-10"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
            className="md:w-1/2 text-center md:text-left"
          >
            <motion.p
              className="text-lg mb-6 dark:text-gray-200 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Hey there! I’m{" "}
              <span className="font-bold text-blue-500 hover:text-blue-400 transition-colors">Ebrahim Worke</span>, a tech enthusiast studying{" "}
              <span className="font-bold text-purple-500 hover:text-purple-400 transition-colors">Electrical and Computer Engineering</span> at{" "}
              <span className="font-bold text-amber-500 hover:text-amber-400 transition-colors">Jimma University</span>. I’m set to graduate in{" "}
              <span className="font-bold">2025</span> and can’t wait to shape the future with code and creativity!
            </motion.p>
            <motion.p
              className="text-lg mb-6 dark:text-gray-200 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              I spent 3 months interning at the{" "}
              <span className="font-bold text-blue-500 hover:text-blue-400 transition-colors">AI Center</span>, diving into full-stack development and AI projects—like building a smart irrigation system! It was a blast working with a team to solve real-world problems.
            </motion.p>
            <motion.p
              className="text-lg dark:text-gray-200 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              I’m skilled in{" "}
              <span className="font-bold text-purple-500 hover:text-purple-400 transition-colors">React</span>,{" "}
              <span className="font-bold text-amber-500 hover:text-amber-400 transition-colors">Node.js</span>, and more, blending tech with design to create awesome solutions. Fun fact: I love coffee, brainstorming, and turning ideas into reality—let’s team up!
            </motion.p>
            <motion.div
              className="text-sm italic text-gray-500 dark:text-gray-400 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p><strong>Note:</strong> I’m always exploring new tools—currently obsessed with IoT and animations!</p>
              <p><strong>Fun Fact:</strong> My favorite project so far? The irrigation system—it’s like a tech hug for farmers.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;