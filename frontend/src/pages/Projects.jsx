import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { featuredProjects } from "../data/projects";

function Projects() {
  return (
    <div className="pt-24 px-4 min-h-screen pb-10 md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-12 text-center">Our Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
