import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-fixed"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white dark:bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg"
      >
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h1 className="text-5xl font-bold mb-4 dark:text-white">Welcome to My Portfolio</h1>
        <p className="text-xl dark:text-gray-300">I build amazing web experiences</p>
      </motion.div>
    </motion.section>
  );
};

export default Hero;