import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaExpand } from "react-icons/fa";

import im1  from "../assets/im1.jpg";
import im2  from "../assets/im2.jpg";
import im3  from "../assets/im3.jpg";
import im4  from "../assets/im4.jpg";
import im5  from "../assets/im5.jpg";
import im6  from "../assets/im6.jpg";
import im7  from "../assets/im7.jpg";
import im8  from "../assets/im8.jpg";
import im9  from "../assets/im9.jpg";
import im10 from "../assets/im10.png";
import im11 from "../assets/im11.png";
import vh1  from "../assets/vh1.jpg";
import vh2  from "../assets/vh2.jpg";

const FILTERS = ["All", "Web Dev", "IoT", "Design"];

const projects = [
  {
    id: 0,
    name: "AI-IoT Health Monitor",
    category: "IoT",
    image: "/images/health_iot.png",
    tags: ["Final Year Project", "AI", "IoT", "React"],
    description:
      "A comprehensive AI-integrated health system that monitors body temperature, heart rate, and SpO2 in real-time. Features include a patient dashboard, doctor consultation portal, and an intelligent health assistant AI that analyzes historical data to provide personalized recommendations.",
    github: "https://github.com/ebrahim-code",
  },
  {
    id: 1,
    name: "Smart Irrigation System",
    category: "IoT",
    images: [vh1, vh2],
    tags: ["Arduino", "GSM", "Soil Sensors", "IoT"],
    description:
      "GSM-based automated irrigation system with real-time soil monitoring, SMS alerts, and remote control — built during my internship at Jimma Institute of Technology AI Center.",
    github: "https://github.com/ebrahim-code",
  },
  {
    id: 2,
    name: "Nikat PLC Corporate",
    category: "Web Dev",
    image: "/images/Galaxy-Fold2-nikatplc.org.png",
    tags: ["React", "Corporate", "Business"],
    description:
      "A high-end corporate portal for Nikat PLC, featuring glassmorphism design, real-time data integration, and a premium administrative command center.",
    github: "https://github.com/ebrahim-code",
    link: "https://nikatplc.org",
  },
  {
    id: 3,
    name: "Yenege Tesfa Platform",
    category: "Web Dev",
    image: "/images/Macbook-Air-yenege-tesfa.netlify.app.png",
    tags: ["NGO", "Community", "React"],
    description:
      "A community-focused platform for Yenege Tesfa, designed to empower and showcase social impact with a modern, responsive user interface.",
    github: "https://github.com/ebrahim-code",
    link: "https://yenege-tesfa.netlify.app/",
  },
  {
    id: 4,
    name: "CV Builder SaaS",
    category: "Web Dev",
    image: null,
    coverColor: "from-cyan-600 to-purple-700",
    tags: ["React", "Node.js", "PostgreSQL", "AI"],
    description:
      "Full-stack Aurora-themed CV builder with AI-powered content generation, PDF export, user auth, and a premium glassmorphism UI.",
    github: "https://github.com/ebrahim-code",
  },
  {
    id: 5,
    name: "Logo Design — Brand 1",
    category: "Design",
    image: im1,
    tags: ["Logo", "Brand Identity", "Photoshop"],
    description: "A sleek, modern logo for a professional brand — crafted with Adobe Photoshop.",
  },
  {
    id: 6,
    name: "Logo Design — Brand 2",
    category: "Design",
    image: im2,
    tags: ["Logo", "Minimalist", "Illustrator"],
    description: "Minimalist logo combining bold typography with a clean icon mark.",
  },
  {
    id: 7,
    name: "Social Media Post",
    category: "Design",
    image: im3,
    tags: ["Social Media", "Photoshop", "Marketing"],
    description: "Eye-catching social media graphic designed for maximum engagement.",
  },
  {
    id: 8,
    name: "YouTube Thumbnail",
    category: "Design",
    image: im4,
    tags: ["Thumbnail", "YouTube", "Photoshop"],
    description: "High-CTR YouTube thumbnail with bold visuals and typography.",
  },
  {
    id: 9,
    name: "Instagram Post",
    category: "Design",
    image: im5,
    tags: ["Instagram", "Social Media", "Design"],
    description: "Stylish Instagram post designed for a creative brand.",
  },
  {
    id: 10,
    name: "Event Banner",
    category: "Design",
    image: im6,
    tags: ["Banner", "Event", "Print Design"],
    description: "Dynamic event banner with vibrant colors and clean layout.",
  },
  {
    id: 11,
    name: "Business Card",
    category: "Design",
    image: im7,
    tags: ["Business Card", "Print", "Brand"],
    description: "Professional double-sided business card design.",
  },
  {
    id: 12,
    name: "Graphic Artwork 1",
    category: "Design",
    image: im8,
    tags: ["Digital Art", "Photoshop"],
    description: "Creative digital artwork combining illustration and photo manipulation.",
  },
  {
    id: 13,
    name: "Graphic Artwork 2",
    category: "Design",
    image: im9,
    tags: ["Abstract", "Digital Art"],
    description: "Abstract digital composition with layered gradients and shapes.",
  },
  {
    id: 14,
    name: "Graphic Artwork 3",
    category: "Design",
    image: im10,
    tags: ["Bold", "Typography", "Design"],
    description: "Bold typographic artwork with vibrant color treatment.",
  },
  {
    id: 15,
    name: "Graphic Artwork 4",
    category: "Design",
    image: im11,
    tags: ["Elegant", "Poster", "Design"],
    description: "Elegant poster design with refined composition.",
  },
];

function ProjectCard({ project, onExpand }) {
  const [hovered, setHovered] = useState(false);
  const isSlider = Array.isArray(project.images);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      className="relative glass-card rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/40 transition-all duration-300 group card-lift"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <div className="relative h-52 overflow-hidden">
        {isSlider ? (
          <motion.div
            className="flex h-full"
            animate={{ x: hovered ? "-50%" : "0%" }}
            transition={{ duration: 8, ease: "linear", repeat: hovered ? Infinity : 0 }}
            style={{ width: `${project.images.length * 100}%` }}
          >
            {project.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={project.name}
                className="h-full object-cover flex-shrink-0"
                style={{ width: `${100 / project.images.length}%` }}
              />
            ))}
          </motion.div>
        ) : project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${project.coverColor} flex items-center justify-center`}>
            <span className="text-5xl font-black text-white/30" style={{ fontFamily: "Outfit,sans-serif" }}>
              {project.name.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category badge */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg"
            style={{ background: "linear-gradient(135deg,#06b6d4,#a855f7)" }}
          >
            {project.category}
          </span>
          {project.id === 0 && (
            <span
              className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg animate-pulse"
              style={{ background: "linear-gradient(135deg,#ec4899,#a855f7)" }}
            >
              Featured Project
            </span>
          )}
        </div>

        {/* Expand button */}
        {project.image || isSlider ? (
          <button
            onClick={() => onExpand(isSlider ? project.images[0] : project.image)}
            className="absolute top-3 right-3 w-8 h-8 rounded-full glass flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
          >
            <FaExpand size={12} />
          </button>
        ) : null}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="text-lg font-bold text-white mb-2 group-hover:text-gradient transition-colors"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          {project.name}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-medium border border-slate-700 text-slate-400">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <FaGithub size={13} /> Code
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-purple-400 transition-colors"
            >
              <FaExternalLinkAlt size={11} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const Projects = () => {
  const [filter, setFilter]       = useState("All");
  const [showAll, setShowAll]     = useState(false);
  const [lightbox, setLightbox]   = useState(null);

  const filtered  = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const visible   = showAll ? filtered : filtered.slice(0, 6);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      className="relative py-24 md:py-32 overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute top-1/2 left-0 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-purple-500/5 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-[0.25em] uppercase mb-3">What I've built</p>
          <h2
            className="text-5xl md:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 rounded-full mx-auto" style={{ background: "linear-gradient(90deg,#06b6d4,#a855f7)" }} />
        </motion.div>

        {/* Filter tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <motion.button
              key={f}
              onClick={() => { setFilter(f); setShowAll(false); }}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                filter === f
                  ? "text-white shadow-lg shadow-cyan-500/20"
                  : "glass-card text-slate-400 hover:text-white border border-slate-700/50"
              }`}
              style={filter === f ? { background: "linear-gradient(135deg,#06b6d4,#a855f7)" } : {}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {f}
              <span className="ml-2 text-xs opacity-60">
                {f === "All" ? projects.length : projects.filter((p) => p.category === f).length}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Projects grid / Carousel on mobile */}
        <motion.div
          layout
          className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar gap-6 md:gap-8 pb-10 md:pb-0 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="min-w-[85vw] md:min-w-0 snap-center"
              >
                <ProjectCard project={project} onExpand={setLightbox} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mobile Swipe Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="md:hidden flex items-center justify-center gap-2 mt-4 text-slate-500 text-xs font-medium uppercase tracking-[0.2em]"
        >
          <span>Swipe to explore</span>
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.div>
        </motion.div>

        {/* Show more */}
        {!showAll && filtered.length > 6 && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowAll(true)}
              className="px-10 py-4 rounded-2xl font-bold text-white shadow-lg shadow-cyan-500/20 transition-all"
              style={{ background: "linear-gradient(135deg,#06b6d4,#a855f7)" }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6,182,212,.3)" }}
              whileTap={{ scale: 0.97 }}
            >
              View All {filtered.length} Projects
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.button
              className="absolute top-5 right-5 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-red-400 transition-colors"
              onClick={() => setLightbox(null)}
              whileHover={{ scale: 1.1 }}
            >
              <FaTimes size={18} />
            </motion.button>
            <motion.img
              src={lightbox}
              alt="Preview"
              className="max-w-[92vw] max-h-[88vh] object-contain rounded-2xl shadow-2xl border border-slate-700"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;