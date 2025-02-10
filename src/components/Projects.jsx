import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    { id: 1, name: "redux query app", description: "crud app with redux", image: "https://via.placeholder.com/300" },
    { id: 2, name: "next js admin", description: "next js simple admin app", image: "https://via.placeholder.com/300" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-gray-100 dark:bg-gray-800"
      id="projects"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{project.name}</h3>
                <p className="dark:text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;