import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans"
    >
      {/* Background – light & dark versions */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-indigo-950 dark:to-purple-950 transition-colors duration-500" />

      {/* Particles – adapt colors for dark/light */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0"
        options={{
          fpsLimit: 90,
          particles: {
            number: { value: 60, density: { enable: true, value_area: 1200 } },
            color: { value: ["#4fc3f7", "#ab47bc", "#f06292", "#ffffff"] },
            shape: { type: "circle" },
            opacity: { value: 0.45, random: true, anim: { enable: true, speed: 1, opacity_min: 0.15 } },
            size: { value: 3, random: true },
            line_linked: {
              enable: true,
              distance: 180,
              color: "#4fc3f7",
              opacity: 0.3,
              width: 1,
            },
            move: { enable: true, speed: 1.2, direction: "none", random: true, out_mode: "out" },
          },
          interactivity: {
            events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" } },
            modes: { grab: { distance: 200, line_linked: { opacity: 0.6 } }, push: { quantity: 4 } },
          },
          detectRetina: true,
        }}
      />

      {/* Floating orbs – softer in light, stronger in dark */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-200/40 dark:bg-cyan-900/30 rounded-full blur-3xl"
        animate={{ x: ["0%", "30%", "-20%", "0%"], y: ["0%", "-40%", "20%", "0%"], scale: [1, 1.15, 0.9, 1] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-[-15%] right-[-15%] w-[700px] h-[700px] bg-purple-200/30 dark:bg-purple-900/30 rounded-full blur-3xl"
        animate={{ x: ["0%", "-25%", "15%", "0%"], y: ["0%", "35%", "-30%", "0%"], scale: [1, 1.2, 0.85, 1] }}
        transition={{ duration: 24, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Main content */}
      <div className="container mx-auto px-6 lg:px-16 relative z-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 max-w-7xl">
        {/* Photo */}
        <motion.div
          className="w-full lg:w-5/12 flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.3, delay: 0.4 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[440px] lg:h-[440px]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 to-purple-300 dark:from-cyan-800 dark:to-purple-800 rounded-full blur-3xl opacity-50 animate-pulse-slow" />
            <motion.img
              src="/images/profile.jpg"
              alt="Ebrahim Worke"
              className="relative w-full h-full object-cover rounded-full border-8 border-white/70 dark:border-gray-800/70 shadow-2xl"
              whileHover={{ scale: 1.1, boxShadow: "0 0 90px rgba(79,195,247,0.5) dark:rgba(34,211,238,0.6)" }}
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="w-full lg:w-7/12 text-center lg:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, delay: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-slate-800 dark:text-slate-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Hey, I'm Ebrahim Worke
          </motion.h2>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            Building the Future
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl lg:text-3xl mb-10 font-semibold text-slate-700 dark:text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            I craft{" "}
            <TypeAnimation
              sequence={["immersive web apps", 1600, "smart IoT experiences", 1600, "creative digital worlds", 1600, "impactful solutions", 1600]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
              className="font-extrabold bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent"
            />
          </motion.div>

          <motion.a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 dark:from-cyan-600 dark:to-purple-700 rounded-full shadow-xl hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
          >
            <span className="relative z-10">Explore My Universe</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 dark:from-cyan-700 dark:to-purple-800 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;