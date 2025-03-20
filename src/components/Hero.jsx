import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 relative overflow-hidden font-poppins"
    >
      <Particles
        className="absolute inset-0 z-0"
        options={{
          particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: ["#ffffff", "#3B82F6", "#9333EA"] },
            shape: { type: "circle" },
            opacity: { value: 0.6, random: true },
            size: { value: 4, random: true },
            move: { enable: true, speed: 3, direction: "none", random: true },
          },
          interactivity: {
            events: { onhover: { enable: true, mode: "bubble" }, onclick: { enable: true, mode: "push" } },
            modes: { bubble: { distance: 200, size: 6, duration: 2 }, push: { quantity: 4 } },
          },
        }}
      />
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-50 animate-pulse"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, type: "spring" }}
        className="relative z-10 bg-white dark:bg-gray-800 bg-opacity-95 p-12 rounded-3xl shadow-2xl max-w-3xl border border-purple-500/30"
      >
        <motion.img
          src="/images/profile.jpg"
          alt="Profile"
          className="w-64 h-64 rounded-full mx-auto mb-6 border-4 border-purple-500 shadow-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1, delay: 0.8 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
        />
        <motion.h2
          className="text-4xl font-bold mb-2 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Ebrahim Worke
        </motion.h2>
        <motion.h1
          className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Welcome to My World
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <p className="text-xl dark:text-gray-200">
            I’m a{" "}
            <TypeAnimation
              sequence={["Full Stack Developer", 1000, "Graphic Designer", 1000, "Video Editor", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-purple-400"
            />
          </p>
        </motion.div>
        <motion.a
          href="#projects"
          className="mt-8 inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-10 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          whileHover={{ scale: 1.1, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          Discover My Work
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;