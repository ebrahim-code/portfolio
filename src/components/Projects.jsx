import { motion } from "framer-motion";
import { useState } from "react";
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

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    { id: 1, name: "Logo 1", image: im1 },
    { id: 2, name: "Logo 2", image: im2 },
    { id: 3, name: "Social Media post", image: im3 },
    { id: 4, name: "Youtube thumbnail", image: im4 },
    { id: 5, name: "Instagram post", image: im5 },
    { id: 6, name: "Banner", image: im6 },
    { id: 7, name: "Business Card", image: im7 },
    { id: 8, name: "Graphic Design 8", image: im8 },
    { id: 9, name: "Graphic Design 9", image: im9 },
    { id: 10, name: "Graphic Design 10", image: im10 },
    { id: 11, name: "Graphic Design 11", image: im11 },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-gray-100 dark:bg-gray-800"
      id="projects"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">My Graphic Design Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <motion.img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover cursor-pointer"
                whileHover={{ scale: 1.1 }} // Zoom effect on hover
                transition={{ duration: 0.3 }}
                onClick={() => handleImageClick(project.image)} // Open modal on click
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{project.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        {!showAll && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              View More
            </button>
          </div>
        )}
      </div>

      {/* Modal for viewing full-size image */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50" onClick={handleCloseModal}>
          <motion.img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain cursor-zoom-out"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
    </motion.section>
  );
};

export default Projects;