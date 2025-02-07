import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-white"
      id="about"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <p className="text-center max-w-2xl mx-auto">
          I am a passionate web developer with experience in building modern, responsive, and user-friendly websites. I specialize in React, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </motion.section>
  );
};

export default About;