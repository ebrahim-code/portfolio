import { motion } from "framer-motion";
import {
  FaLinkedin, FaGithub, FaTelegram, FaInstagram, FaFacebook,
  FaHeart, FaArrowUp,
} from "react-icons/fa";

const socials = [
  { icon: FaLinkedin,  href: "https://linkedin.com/in/ebrahim-worke",  label: "LinkedIn",  color: "#0077b5" },
  { icon: FaGithub,    href: "https://github.com/ebrahim-code",         label: "GitHub",    color: "#ffffff" },
  { icon: FaTelegram,  href: "https://t.me/ebro_graphics",              label: "Telegram",  color: "#229ed9" },
  { icon: FaInstagram, href: "https://instagram.com/ebrahimwo",          label: "Instagram", color: "#e1306c" },
  { icon: FaFacebook,  href: "https://facebook.com/ebrahimworke",        label: "Facebook",  color: "#1877f2" },
];

const navLinks = [
  { label: "About",    id: "about"    },
  { label: "Skills",   id: "skills"   },
  { label: "Projects", id: "projects" },
  { label: "Contact",  id: "contact"  },
];

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-500">
      {/* Top gradient line */}
      <div className="h-px section-divider" />

      {/* Ambient blobs */}
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[200px] rounded-full bg-cyan-500/5 blur-[80px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] rounded-full bg-purple-500/5 blur-[80px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">

          {/* ── Brand ── */}
          <motion.div
            className="text-center md:text-left max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700/50">
                <img src="/images/profile.jpg" alt="EW" className="w-full h-full object-cover" />
              </div>
              <span
                className="text-xl font-black text-gradient"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Ebrahim Worke
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Full-stack developer & Computer Engineer building impactful digital experiences.
              Available for freelance & collaboration.
            </p>
          </motion.div>

          {/* ── Quick links ── */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Navigation</p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3 md:flex-col md:gap-2">
              {navLinks.map((l) => (
                <button
                  key={l.id}
                  onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })}
                  className="text-slate-500 dark:text-slate-400 text-sm hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* ── Socials ── */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Social</p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center glass-card border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-all bg-white dark:bg-transparent"
                    style={{ color: s.color }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={17} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-slate-600 text-sm text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            © 2026 Ebrahim Worke. Built with{" "}
            <FaHeart className="inline text-pink-500 mx-1" size={11} />
            using React & Framer Motion.
          </motion.p>

          {/* Back to top */}
          <motion.button
            onClick={scrollTop}
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors font-medium"
            whileHover={{ y: -2 }}
          >
            <FaArrowUp size={12} /> Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;