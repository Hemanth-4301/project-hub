import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import FeaturedProjects from "../components/FeaturedProjects";
import Categories from "../components/Categories";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-16"
    >
      <HeroSection />
      <Categories />
      <FeaturedProjects />
    </motion.div>
  );
}

export default Home;
