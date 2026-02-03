import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-16 md:py-24 relative overflow-hidden min-h-screen"
      id="contact"
    >
      {/* Background gradient — same style as About */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950" />

      {/* Subtle wave background — same as About */}
      <div className="absolute inset-0 opacity-15 dark:opacity-8 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a5f3fc" />
              <stop offset="50%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#f9a8d4" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,154.7C672,171,768,213,864,213.3C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 md:mb-16 tracking-tight text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, type: "spring" }}
        >
          Contact Me
        </motion.h2>

        {/* Contact card / form */}
        <motion.div
          className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-cyan-200/50 dark:border-cyan-800/40 rounded-2xl p-8 md:p-10 lg:p-12 shadow-2xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.p
            className="text-center text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Feel free to reach out — whether it's for collaboration, freelance work, project ideas, or just to say hi.
          </motion.p>

          {/* Form */}
          <motion.form
            action="https://formspree.io/f/your-form-id" // ← Replace with your real Formspree ID
            method="POST"
            className="space-y-6"
          >
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-800/60 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 shadow-sm transition-all"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-800/60 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 shadow-sm transition-all"
              />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-800/60 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 shadow-sm transition-all resize-y"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-xl shadow-lg transition-all duration-300 mt-4"
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(79, 195, 247, 0.4)" }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Optional extra info / social links */}
          <motion.div
            className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p>Looking forward to hearing from you!</p>
            <p className="mt-2">
              Response time: usually within 24–48 hours
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;