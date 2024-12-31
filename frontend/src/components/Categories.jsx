import React, { useState } from "react";
import ContactForm from "./ContactForm"; // Importing the contact form
import frontend from "../assets/frontend.jpeg";
import fullstack from "../assets/full-stack.png";
import ai from "../assets/ai.jpg";

const Categories = () => {
  const [showModal, setShowModal] = useState(false);
  const [categoryInfo, setCategoryInfo] = useState(null);

  // Function to handle opening the modal with the appropriate category info
  const handleShowModal = (category) => {
    setCategoryInfo(category);
    setShowModal(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setCategoryInfo(null);
  };

  const categories = [
    {
      id: 1,
      title: "Frontend Project",
      description: "Build a sleek and interactive frontend using React.",
      cost: "₹2500 - ₹3000",
      image: frontend,
      details:
        "This project involves creating a visually appealing frontend with basic interactive features like forms, animations, and UI components.",
    },
    {
      id: 2,
      title: "Frontend + API + Database Project",
      description:
        "Build a full-featured frontend with an API and database integration.",
      cost: "₹5000 - ₹6000",
      image: fullstack,
      details:
        "This project involves building a frontend, integrating it with an API for dynamic content, and setting up a database to store data.",
    },
    {
      id: 3,
      title: "Full Stack + AI Features Project",
      description: "Create a full-stack application with AI features.",
      cost: "₹7000 - ₹8000",
      image: ai,
      details:
        "This project includes a frontend, backend, database, and integrating AI-based features such as machine learning models or data analysis tools.",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Project Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {categories.map((category) => (
          <div
            key={category.id}
            className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-slate-300 cursor-pointer"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <p className="text-gray-600 mt-2">{category.description}</p>
              <p className="text-lg font-semibold text-gray-900 mt-2">
                {category.cost}
              </p>
              <button
                onClick={() => handleShowModal(category)}
                className="mt-4 px-4 py-2 bg-[#646cff] text-white rounded-md font-bold hover:bg-[#535bf2]"
              >
                More Info
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && categoryInfo && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-6"
          onClick={handleCloseModal}
        >
          <div
            className="bg-black p-6 sm:p-8 md:p-10 rounded-lg w-full h-full sm:w-full sm:h-full md:w-full md:h-full lg:w-full lg:h-full xl:w-full xl:h-full border-2 border-slate-700 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end items-center py-4 md:py-2 ">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Close
              </button>
            </div>
            <h2 className="text-3xl font-semibold text-center">
              {categoryInfo.title}
            </h2>
            <p className="mt-4 text-gray-400 text-center">
              {categoryInfo.details}
            </p>
            <ContactForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
