import { motion } from "framer-motion";
import { useState } from "react";
import Particles from "react-tsparticles";
import im1 from "../assets/im1.jpg";
import im2 from "../assets/im2.jpg";
import im3 from "../assets/im3.jpg";
import im4 from "../assets/im4.jpg";
import im5 from "../assets/im5.jpg";
import im6 from "../assets/im6.jpg";
import im7 from "../assets/im7.jpg";
import im8 from "../assets/im8.jpg";
import im9 from "../assets/im9.jpg";
import im10 from "../assets/im10.png";
import im11 from "../assets/im11.png";
import vh1 from "../assets/vh1.jpg";
import vh2 from "../assets/vh2.jpg";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Smart Irrigation System",
      images: [vh1, vh2],
      description:
        "During my internship at the Jimma Institute of Technology AI Center, our team created a GSM-based Smart Irrigation System to improve water use in farming. We used Arduino microcontrollers, soil moisture sensors, and GSM modules to build an automated system that saves water and boosts crop growth. It offers real-time monitoring, SMS alerts, and remote control, making irrigation easy for farmers. This group project sharpened my IoT and embedded systems skills while teaching me teamwork, problem-solving, and how to apply engineering ideas in real life.",
    },
    { id: 2, name: "Logo 1", image: im1, description: "A sleek logo design." },
    { id: 3, name: "Logo 2", image: im2, description: "Minimalist logo." },
    { id: 4, name: "Social Media Post", image: im3, description: "Eye-catching graphic." },
    { id: 5, name: "Youtube Thumbnail", image: im4, description: "Vivid thumbnail." },
    { id: 6, name: "Instagram Post", image: im5, description: "Stylish post." },
    { id: 7, name: "Banner", image: im6, description: "Dynamic banner." },
    { id: 8, name: "Business Card", image: im7, description: "Professional card." },
    { id: 9, name: "Graphic Design 8", image: im8, description: "Creative artwork." },
    { id: 10, name: "Graphic Design 9", image: im9, description: "Abstract design." },
    { id: 11, name: "Graphic Design 10", image: im10, description: "Bold graphic." },
    { id: 12, name: "Graphic Design 11", image: im11, description: "Elegant design." },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="py-24 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 font-poppins relative overflow-hidden"
      id="projects"
    >
      <Particles
        className="absolute inset-0 z-0"
        options={{
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: "#9333EA" },
            shape: { type: "star" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 1, direction: "top", random: true },
          },
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 relative"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          My Projects
          <motion.div
            className="absolute -top-10 -right-10 w-20 h-20 bg-purple-500 rounded-full blur-2xl opacity-50 animate-pulse"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: project.id * 0.1, type: "spring" }}
              className="relative bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden group border border-blue-500/20"
              whileHover={{ rotateX: 5, rotateY: 5, scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              {project.images ? (
                <motion.div
                  className="flex relative"
                  animate={{ x: ["0%", "-50%"], transition: { duration: 5, repeat: Infinity, ease: "linear" } }}
                >
                  {project.images.map((img, idx) => (
                    <motion.img
                      key={idx}
                      src={img}
                      alt={`${project.name} ${idx + 1}`}
                      className="w-full h-64 object-cover cursor-pointer flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setSelectedImage(img)}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(project.image)}
                />
              )}
              <div className="p-6 text-center">
                <motion.h3
                  className="text-2xl font-bold mb-2 dark:text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {project.name}
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {!showAll && (
          <motion.div
            className="flex justify-center mt-12 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.button
              onClick={() => setShowAll(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 relative z-10"
              whileHover={{ scale: 1.1, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              View More
            </motion.button>
            <motion.div
              className="absolute w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        )}
      </div>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Full size"
            className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl border border-purple-500/50"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 0.8, type: "spring" }}
          />
        </motion.div>
      )}
    </motion.section>
  );
};

export default Projects;