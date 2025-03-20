import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTelegram, FaLinkedin } from "react-icons/fa";

const FollowMe = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 font-poppins relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-10 animate-pulse"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 relative"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          Follow Me
          <motion.div
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-purple-500 rounded-full blur-2xl opacity-50 animate-pulse"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.h2>
        <motion.p
          className="mb-8 dark:text-gray-200 text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Stay connected with my journey!
        </motion.p>
        <div className="flex justify-center space-x-8 relative">
          {[
            { icon: <FaLinkedin size={32} />, link: "https://linkedin.com/in/ebrahim-worke", color: "bg-blue-700" },
            { icon: <FaFacebook size={32} />, link: "https://facebook.com/ebrahimworke", color: "bg-blue-600" },
            { icon: <FaInstagram size={32} />, link: "https://instagram.com/ebrahimwo", color: "bg-pink-600" },
            { icon: <FaTelegram size={32} />, link: "https://t.me/ebro_graphics", color: "bg-blue-400" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} text-white p-4 rounded-full shadow-lg`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
              whileHover={{ scale: 1.2, rotate: 360, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
              animate={{ rotate: [0, 360], transition: { duration: 10, repeat: Infinity, ease: "linear" } }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FollowMe;