import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 overflow-hidden font-sans"
    >
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0"
        options={{
          fpsLimit: 90,
          particles: {
            number: { value: 80, density: { enable: true, value_area: 1200 } },
            color: { value: ["#a78bfa", "#7dd3fc", "#f472b6", "#ffffff"] },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1 } },
            size: { value: 2.5, random: true },
            line_linked: { enable: true, distance: 180, color: "#a78bfa", opacity: 0.25, width: 1 },
            move: { enable: true, speed: 1.2, direction: "none", random: true, out_mode: "out" },
          },
          interactivity: {
            events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" } },
            modes: { grab: { distance: 220, line_linked: { opacity: 0.7 } }, push: { quantity: 4 } },
          },
          detectRetina: true,
        }}
      />

      {/* Subtle overlay + floating orbs */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 z-10 pointer-events-none" />
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{ x: ["0%", "30%", "-20%", "0%"], y: ["0%", "-40%", "20%", "0%"], scale: [1, 1.15, 0.9, 1] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        animate={{ x: ["0%", "-25%", "15%", "0%"], y: ["0%", "30%", "-35%", "0%"], scale: [1, 1.25, 0.85, 1] }}
        transition={{ duration: 22, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />

      {/* Main Content – Split Layout */}
      <div className="container mx-auto px-6 lg:px-12 relative z-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 max-w-7xl">
        {/* Left: Profile Photo with Glow */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -80, scale: 0.85 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3, type: "spring", stiffness: 80 }}
        >
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-600 to-pink-500 rounded-full blur-3xl opacity-50 animate-pulse-slow" />
            <motion.img
              src="/images/profile.jpg"
              alt="Ebrahim Worke - Full Stack Developer & Creative"
              className="relative w-full h-full object-cover rounded-full border-8 border-white/20 shadow-2xl"
              whileHover={{
                scale: 1.08,
                rotate: 6,
                boxShadow: "0 0 80px rgba(167, 139, 250, 0.7)",
                transition: { duration: 0.5 },
              }}
            />
          </div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, delay: 0.5, type: "spring", stiffness: 80 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Hi, I'm Ebrahim Worke
          </motion.h2>

          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, type: "spring", stiffness: 70 }}
          >
            Full-Stack Developer & Creative Mind
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl mb-10 font-medium text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            I build{" "}
            <TypeAnimation
              sequence={[
                "beautiful web experiences", 1800,
                "smart IoT solutions", 1800,
                "creative designs & videos", 1800,
                "real-world impact", 1800,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent"
            />
          </motion.div>

          <motion.a
            href="#projects"
            className="group relative inline-flex items-center px-10 py-5 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-xl overflow-hidden"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 scale-0 rounded-full transition-transform duration-500 group-hover:scale-150" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;