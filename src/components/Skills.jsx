import { motion } from "framer-motion";
import iconPremiere from "../assets/icons/premiere pro_icon.png";
import iconPhotoshop from "../assets/icons/photoshop_icon.png";
import iconLightroom from "../assets/icons/lightroom_logo_icon.png";
import iconGraphic from "../assets/icons/graphic-design.png";
import iconVideo from "../assets/icons/video editing.png";
import iconFullStack from "../assets/icons/full-stack.png";

const adobeSkillsTop = [
  { name: "Adobe Premiere Pro", icon: iconPremiere, proficiency: 95 },
  { name: "Adobe Photoshop", icon: iconPhotoshop, proficiency: 90 },
];

const adobeSkillBottom = [
  { name: "Adobe Lightroom", icon: iconLightroom, proficiency: 85 },
];

const coreSkillsTop = [
  { name: "Graphic Design", icon: iconGraphic, proficiency: 90 },
  { name: "Video Editing", icon: iconVideo, proficiency: 95 },
];

const coreSkillBottom = [
  { name: "Full Stack Web Development", icon: iconFullStack, proficiency: 88 },
];

// Reusable Circular Progress Component
const CircularProgress = ({ percentage, color = "from-blue-500 to-purple-600" }) => {
  const radius = 40;
  const stroke = 8;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-24 h-24 mx-auto mb-4">
      <svg className="w-full h-full transform -rotate-90">
        {/* Background circle */}
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={stroke}
          className="dark:stroke-gray-700"
        />
        {/* Progress circle */}
        <motion.circle
          cx="50%"
          cy="50%"
          r={radius}
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {/* Gradient definition */}
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-slate-800 dark:text-slate-200">
        {percentage}%
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 font-poppins relative overflow-hidden"
      id="skills"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 dark:from-blue-900/10 dark:to-purple-900/10 animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-center mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-400 dark:to-purple-400"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          My Skills
        </motion.h2>

        {/* Side-by-side layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* LEFT column: Core Creative & Development Skills */}
          <div>
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-center mb-8 text-slate-800 dark:text-slate-200"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Core Creative & Development Skills
            </motion.h3>

            {/* First row: Graphic Design + Video Editing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {coreSkillsTop.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15, type: "spring" }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center relative overflow-hidden border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(147, 51, 234, 0.15)" }}
                >
                  <CircularProgress percentage={skill.proficiency} />
                  <h4 className="text-lg font-semibold mb-2 dark:text-white">{skill.name}</h4>
                  <motion.img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 mx-auto opacity-80"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Full Stack – centered below */}
            <div className="flex justify-center">
              {coreSkillBottom.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="w-full max-w-sm bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center relative overflow-hidden border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.45, type: "spring" }}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(147, 51, 234, 0.15)" }}
                >
                  <CircularProgress percentage={skill.proficiency} />
                  <h4 className="text-lg font-semibold mb-2 dark:text-white">{skill.name}</h4>
                  <motion.img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 mx-auto opacity-80"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT column: Adobe Software Skills */}
          <div>
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-center mb-8 text-slate-800 dark:text-slate-200"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Adobe Software Skills
            </motion.h3>

            {/* First row: Premiere + Photoshop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {adobeSkillsTop.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15, type: "spring" }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center relative overflow-hidden border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(147, 51, 234, 0.15)" }}
                >
                  <CircularProgress percentage={skill.proficiency} />
                  <h4 className="text-lg font-semibold mb-2 dark:text-white">{skill.name}</h4>
                  <motion.img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 mx-auto opacity-80"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Lightroom – centered below */}
            <div className="flex justify-center">
              {adobeSkillBottom.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="w-full max-w-sm bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center relative overflow-hidden border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.45, type: "spring" }}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(147, 51, 234, 0.15)" }}
                >
                  <CircularProgress percentage={skill.proficiency} />
                  <h4 className="text-lg font-semibold mb-2 dark:text-white">{skill.name}</h4>
                  <motion.img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 mx-auto opacity-80"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;