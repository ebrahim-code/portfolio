import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaMoon, FaSun, FaGithub } from "react-icons/fa";

const links = ["About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen]       = useState(false);
  const [dark, setDark]           = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [progress, setProgress]   = useState(0);
  const [active, setActive]       = useState("");

  /* ── dark mode ── */
  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("darkMode", next);
    document.documentElement.classList.toggle("dark", next);
  };

  /* ── scroll progress + active section ── */
  useEffect(() => {
    const onScroll = () => {
      const doc  = document.documentElement;
      const pct  = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
      setProgress(pct);
      setScrolled(doc.scrollTop > 40);

      let current = "";
      links.forEach((l) => {
        const el = document.getElementById(l.toLowerCase());
        if (el && doc.scrollTop >= el.offsetTop - 120) current = l;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (item) => {
    setIsOpen(false);
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll progress */}
      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "glass-card shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer" onClick={scrollTop}>
            <motion.div
              className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shadow-lg shadow-cyan-500/20 border border-slate-700/50"
              whileHover={{ rotate: 5, scale: 1.1 }}
            >
              <img src="/images/profile.jpg" alt="EW" className="w-full h-full object-cover" />
            </motion.div>
            <span
              className="text-xl font-black text-gradient hidden sm:block"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Ebrahim Worke
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  active === item
                    ? "text-cyan-400"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item}
                {active === item && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                    style={{ background: "linear-gradient(90deg,#06b6d4,#a855f7)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <motion.a
              href="https://github.com/ebrahim-code"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={16} /> GitHub
            </motion.a>

            {/* Dark toggle */}
            <motion.button
              onClick={toggleDark}
              className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-700 text-slate-400 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait">
                {dark ? (
                  <motion.span key="sun"
                    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.25 }}>
                    <FaSun size={16} />
                  </motion.span>
                ) : (
                  <motion.span key="moon"
                    initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.25 }}>
                    <FaMoon size={16} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Hamburger */}
            <motion.button
              onClick={() => setIsOpen((o) => !o)}
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center border border-slate-700 text-slate-400"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden md:hidden glass-card border-t border-slate-800/60"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {links.map((item, i) => (
                  <motion.button
                    key={item}
                    onClick={() => handleNav(item)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                    className={`text-left px-4 py-3 rounded-xl font-medium transition-all ${
                      active === item
                        ? "text-cyan-400 bg-cyan-500/10"
                        : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                    }`}
                  >
                    {item}
                  </motion.button>
                ))}
                <a
                  href="https://github.com/ebrahim-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-slate-300 hover:text-cyan-400 transition-colors font-medium"
                >
                  <FaGithub size={16} /> GitHub
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;