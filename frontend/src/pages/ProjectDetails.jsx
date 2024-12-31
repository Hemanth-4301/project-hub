import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { featuredProjects } from '../data/projects'
import ContactOwnerForm from '../components/ContactOwnerForm'

function ProjectDetails() {
  const { id } = useParams()
  const project = featuredProjects.find(p => p.id === parseInt(id))

  if (!project) {
    return <div className="pt-24 text-center">Project not found</div>
  }

  return (
    <div className="pt-24 px-4 min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto bg-dark/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl"
      >
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
          <p className="text-gray-300 mb-6">{project.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-dark/50 p-4 rounded">
              <h3 className="font-semibold text-primary mb-2">Estimated Cost</h3>
              <p>{project.cost}</p>
            </div>
            <div className="bg-dark/50 p-4 rounded">
              <h3 className="font-semibold text-primary mb-2">Duration</h3>
              <p>{project.duration}</p>
            </div>
          </div>

          <ContactOwnerForm project={project} />
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectDetails