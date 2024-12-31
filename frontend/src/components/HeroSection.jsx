import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 bg-black relative overflow-hidden">
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-primary rounded-full opacity-20"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-secondary rounded-full opacity-10"
        animate={{ scale: [1, 1.8, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
      ></motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        className="text-center z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          Transform Your Ideas Into Reality
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-6">
          Empowering innovation with seamless solutions
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
          Join a community of creators, developers, and visionaries who are
          shaping the future. Explore projects, collaborate, and make your
          dreams a reality.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/projects")}
          className="bg-primary me-2 hover:bg-transparent border border-primary hover:text-primary text-white font-bold py-3 px-8 rounded-full transition-colors mb-4"
        >
          Explore Projects
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/about")}
          className="border border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full transition-colors"
        >
          Learn More
        </motion.button>
      </motion.div>

      {/* Animated Illustration */}
    </div>
  );
}

export default HeroSection;
