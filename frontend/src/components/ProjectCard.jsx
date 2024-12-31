import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-dark/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border-2 border-slate-700"
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.name}
        </h3>
        <p className="text-gray-300 mb-4">{project.shortDescription}</p>
        <Link
          to={`/projects/${project.id}`}
          className="inline-block bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded transition-colors"
        >
          More Info
        </Link>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
