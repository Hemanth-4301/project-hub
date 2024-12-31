import { motion } from "framer-motion";

function About() {
  return (
    <div className="pt-24 px-4 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
        <div className="bg-dark/50 backdrop-blur-sm p-8 rounded-lg shadow-xl">
          <p className="text-lg text-gray-300 mb-6">
            We are a platform dedicated to connecting innovative project ideas
            with talented developers. Our mission is to make it easier for
            businesses and individuals to find and collaborate with the right
            technical partners for their projects.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Whether you're looking to build a new application, create a website,
            or develop any other digital solution, our platform provides a
            curated selection of high-quality projects and experienced
            developers ready to bring your vision to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Quality First
              </h3>
              <p className="text-gray-300">
                We ensure all projects meet high standards of quality and
                innovation.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Easy Communication
              </h3>
              <p className="text-gray-300">
                Direct communication channels with project owners and
                developers.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Secure Platform
              </h3>
              <p className="text-gray-300">
                Your data and communications are always protected.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
