import { motion } from "framer-motion";
import icon1 from "../assets/icons/premiere pro_icon.png";
import icon2 from "../assets/icons/photoshop_icon.png";
import icon3 from "../assets/icons/lightroom_logo_icon.png";
import icon4 from "../assets/icons/video editing.png";
import icon5 from "../assets/icons/graphic-design.png";
import icon6 from "../assets/icons/full-stack.png";

const skills = [
  { name: "Adobe Premiere Pro", icon: icon1, proficiency: 95 },
  { name: "Adobe Photoshop", icon: icon2, proficiency: 90 },
  { name: "Adobe Lightroom", icon: icon3, proficiency: 85 },
  { name: "Graphic Design", icon: icon5, proficiency: 90 },
  { name: "Video Editing", icon: icon4, proficiency: 95 },
  { name: "Full Stack Web Dev", icon: icon6, proficiency: 88 },
];

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 font-poppins relative overflow-hidden"
      id="skills"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-10 animate-pulse"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 relative"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          My Skills
          <motion.div
            className="absolute -top-8 -left-8 w-24 h-24 bg-blue-500 rounded-full blur-2xl opacity-40 animate-pulse"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg text-center relative overflow-hidden border border-purple-500/20"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              <motion.img
                src={skill.icon}
                alt={skill.name}
                className="w-20 h-20 mx-auto mb-4 relative z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <h3 className="text-xl font-bold mb-2 dark:text-white relative z-10">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-600 overflow-hidden relative z-10">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full shadow-[0_0_10px_rgba(147,51,234,0.5)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.2 }}
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 relative z-10">{skill.proficiency}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;