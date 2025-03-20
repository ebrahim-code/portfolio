import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import Particles from "react-tsparticles";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12 font-poppins relative overflow-hidden"
    >
      <Particles
        className="absolute inset-0 z-0"
        options={{
          particles: {
            number: { value: 30, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "star" },
            opacity: { value: 0.7, random: true },
            size: { value: 2, random: true },
            move: { enable: true, speed: 0.5, direction: "none", random: true },
          },
        }}
      />
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          © 2025 Ebrahim Worke. All rights reserved.
        </motion.p>
        <div className="flex justify-center space-x-8">
          {[
            { icon: <FaLinkedin size={24} />, link: "https://linkedin.com/in/ebrahim-worke" },
            { icon: <FaFacebook size={24} />, link: "https://facebook.com/ebrahimworke" },
            { icon: <FaInstagram size={24} />, link: "https://instagram.com/ebrahimwo" },
            { icon: <FaTelegram size={24} />, link: "https://t.me/ebro_graphics" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
              whileHover={{ scale: 1.2, rotate: 360, boxShadow: "0 0 15px rgba(245, 158, 11, 0.5)" }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;