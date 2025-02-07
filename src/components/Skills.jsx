import { motion } from "framer-motion";
import icon1 from "../assets/icons/premiere pro_icon.png"
import icon2 from "../assets/icons/photoshop_icon.png"
import icon3 from "../assets/icons/lightroom_logo_icon.png"
import icon4 from "../assets/icons/video editing.png"
import icon5 from "../assets/icons/graphic-design.png"

const skills = [
  { name: "Adobe Premiere Pro", icon: icon1, proficiency: 95 },
  { name: "Adobe Photoshop", icon: icon2, proficiency: 90 },
  { name: "Adobe Lightroom", icon: icon3, proficiency: 85 },
  { name: "Graphic Design", icon: icon5, proficiency: 90 },
  { name: "Video Editing", icon: icon4, proficiency: 95 },
];

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-gray-100 dark:bg-gray-800"
      id="skills"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 dark:text-white">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;