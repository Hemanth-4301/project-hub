// src/components/FeaturedProjects.js

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { featuredProjects } from "../data/projects";

function FeaturedProjects() {
  const [visibleCount, setVisibleCount] = useState(3); // Initial number of visible projects
  const projectsToShow = featuredProjects.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const allProjectsLoaded = visibleCount >= featuredProjects.length;

  return (
    <section className="py-16 px-4 bg-black">
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projectsToShow.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {!allProjectsLoaded && (
        <div className="text-center mt-12">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-indigo-600 text-white text-sm uppercase font-medium rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}

export default FeaturedProjects;
