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
          className="w-48 h-48 rounded-full mx-auto mb-4" // Increased size
        />
        <h2 className="text-3xl font-bold mb-2 dark:text-white">Ebrahim Worke</h2>
        <h1 className="text-4xl font-bold mb-4 dark:text-white">Welcome to My Portfolio</h1> {/* Reduced size */}
        <p className="text-xl dark:text-gray-300">
          I'm a <span className="font-bold">Graphic Designer</span> and{" "}
          <span className="font-bold">Video Editor</span> creating visual magic.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Hero;