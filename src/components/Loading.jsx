import { motion } from "framer-motion";

const Loading = () => {
  const name = "Ebrahim Worke".split("");

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-600/20 blur-[120px] animate-morph" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[120px] animate-morph" style={{ animationDelay: "2s" }} />

      {/* Logo ring */}
      <div className="relative mb-10">
        {/* Spinning outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, #06b6d4, #a855f7, #ec4899, transparent)",
            padding: "3px",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full rounded-full bg-slate-950" />
        </motion.div>

        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-pulse-ring" />

        {/* Inner circle */}
        <motion.div
          className="relative w-28 h-28 rounded-full flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(6,182,212,.15), rgba(168,85,247,.15))",
            border: "1px solid rgba(6,182,212,.3)",
          }}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span
            className="text-4xl font-black text-gradient"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            EW
          </span>
        </motion.div>
      </div>

      {/* Name reveal */}
      <div className="flex gap-[2px] mb-8 overflow-hidden">
        {name.map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4 + i * 0.045,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`text-xl font-semibold tracking-widest ${
              char === " " ? "w-3" : ""
            } text-slate-200`}
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="text-sm text-slate-500 tracking-[0.3em] uppercase mb-10"
      >
        Portfolio
      </motion.p>

      {/* Progress bar */}
      <div className="w-48 h-[2px] bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #06b6d4, #a855f7, #ec4899)",
          }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default Loading;