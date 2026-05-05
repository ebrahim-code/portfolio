import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMail, HiLocationMarker, HiPhone } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaTelegram, FaInstagram, FaFacebook, FaCheckCircle } from "react-icons/fa";

const contactInfo = [
  {
    icon: HiMail,
    label: "Email",
    value: "ebrahimworkie@gmail.com",
    href: "mailto:ebrahimworkie@gmail.com",
    color: "#06b6d4",
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: "+251 938 133 800",
    href: "tel:+251938133800",
    color: "#ec4899",
  },
  {
    icon: HiLocationMarker,
    label: "Location",
    value: "Kombolcha, Ethiopia",
    href: null,
    color: "#a855f7",
  },
];

const socials = [
  { icon: FaLinkedin,  href: "https://linkedin.com/in/ebrahim-worke",  label: "LinkedIn",  color: "#0077b5" },
  { icon: FaGithub,    href: "https://github.com/ebrahim-code",         label: "GitHub",    color: "#ffffff" },
  { icon: FaTelegram,  href: "https://t.me/ebro_graphics",              label: "Telegram",  color: "#229ed9" },
  { icon: FaInstagram, href: "https://instagram.com/ebrahimwo",          label: "Instagram", color: "#e1306c" },
  { icon: FaFacebook,  href: "https://facebook.com/ebrahimworke",        label: "Facebook",  color: "#1877f2" },
];

const Contact = () => {
  const formRef   = useRef(null);
  const [sent, setSent]     = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = formRef.current;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };
    // Mailto fallback — works without any backend
    const subject = encodeURIComponent(`Portfolio Contact from ${data.name}`);
    const body    = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
    window.open(`mailto:ebrahimworkie@gmail.com?subject=${subject}&body=${body}`, "_blank");
    await new Promise((r) => setTimeout(r, 800));
    setSent(true);
    setLoading(false);
    form.reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      className="relative py-24 md:py-32 overflow-hidden bg-slate-900"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-pink-400 text-sm font-semibold tracking-[0.25em] uppercase mb-3">Let's work together</p>
          <h2
            className="text-5xl md:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 rounded-full mx-auto" style={{ background: "linear-gradient(90deg,#ec4899,#a855f7)" }} />
          <p className="text-slate-400 mt-5 max-w-xl mx-auto text-lg leading-relaxed">
            Whether it's a project, collaboration, or just a hello — I'd love to hear from you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">

          {/* ── LEFT: Info cards + socials ── */}
          <motion.div
            className="w-full lg:w-5/12 space-y-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.12 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl p-5 flex items-center gap-4 border border-slate-700/50 hover:border-cyan-500/40 transition-all duration-300 group"
                  whileHover={{ x: 6 }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}18`, border: `1px solid ${item.color}40` }}
                  >
                    <Icon size={20} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-slate-200 font-semibold hover:text-cyan-400 transition-colors text-sm">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-200 font-semibold text-sm">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* Socials */}
            <motion.div
              className="glass-card rounded-2xl p-6 border border-slate-700/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-4">Find me on</p>
              <div className="flex flex-wrap gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.label}
                      className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-700 hover:border-slate-500 transition-all"
                      style={{ color: s.color }}
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Form ── */}
          <motion.div
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-8 md:p-10 border border-slate-700/50 relative overflow-hidden">
              {/* Glow accent */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-cyan-500/10 blur-[60px]" />

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-16 gap-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <FaCheckCircle size={56} className="text-cyan-400" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                    <p className="text-slate-400 text-center">Thank you! I'll get back to you within 24–48 hours.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-5 relative z-10"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your full name"
                          className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="your@email.com"
                          className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="What's this about?"
                        className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell me about your project or idea..."
                        className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl font-bold text-white text-base shadow-lg shadow-cyan-500/20 transition-all disabled:opacity-60"
                      style={{ background: "linear-gradient(135deg,#06b6d4,#a855f7)" }}
                      whileHover={{ scale: loading ? 1 : 1.02, boxShadow: "0 20px 40px rgba(6,182,212,.3)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                          </svg>
                          Opening email…
                        </span>
                      ) : "Send Message ✉️"}
                    </motion.button>

                    <p className="text-center text-xs text-slate-600">
                      Response time: usually within 24–48 hours ⚡
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;