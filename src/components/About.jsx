import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-white dark:bg-gray-900"
      id="about"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-64 h-64 rounded-full mx-auto shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <p className="text-lg mb-4 dark:text-gray-300">
              Hi, I'm a passionate <span className="font-bold">Graphic Designer</span> and{" "}
              <span className="font-bold">Video Editor</span> with over 5 years of experience in
              creating visually stunning designs and engaging video content. I specialize in using
              tools like Adobe Premiere Pro, Adobe Photoshop, and Adobe Lightroom to bring ideas to
              life.
            </p>
            <p className="text-lg dark:text-gray-300">
              Whether it's designing a brand identity, editing a cinematic video, or retouching
              photos, I strive to deliver high-quality work that exceeds expectations. Let's create
              something amazing together!
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;