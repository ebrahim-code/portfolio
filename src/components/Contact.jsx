import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="py-16 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 font-poppins relative overflow-hidden"
      id="contact"
    >
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#3B82F6_25%,transparent_25%,transparent_75%,#9333EA_75%)] bg-[size:20px_20px] opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 relative"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          Contact Me
          <motion.div
            className="absolute -top-6 right-0 w-16 h-16 bg-purple-500 rounded-full blur-2xl opacity-40 animate-pulse"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.h2>
        <motion.form
          action="https://formspree.io/f/your-form-id" // Replace with your Formspree ID
          method="POST"
          className="max-w-lg mx-auto bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg border border-blue-500/20 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
          <motion.div
            className="mb-4 relative z-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-[0_0_10px_rgba(147,51,234,0.2)] text-sm"
              required
            />
          </motion.div>
          <motion.div
            className="mb-4 relative z-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-[0_0_10px_rgba(147,51,234,0.2)] text-sm"
              required
            />
          </motion.div>
          <motion.div
            className="mb-4 relative z-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-[0_0_10px_rgba(147,51,234,0.2)] text-sm"
              rows="3"
              required
            />
          </motion.div>
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 relative z-10 text-sm"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;