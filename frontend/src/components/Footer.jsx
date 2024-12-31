import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap flex-col gap-1 md:gap-5 justify-center  items-center border-t pt-4 border-gray-700 pb-6 mb-6">
          <div className="text-2xl font-bold text-indigo-500 mb-2 md:mb-0 ">
            ProjectHub
          </div>

          <ul className="flex space-x-6 text-gray-300 flex-wrap justify-center gap-2 items-center">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-400">
          <p>&copy; 2024 ProjectHub. All Rights Reserved.</p>
          <p>
            Built with ❤️ by <b>Legends</b>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
