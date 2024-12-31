import React, { useState } from "react";
import { motion } from "framer-motion";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // Loader state
  const [showModal, setShowModal] = useState(false); // Modal state
  const [progress, setProgress] = useState(0); // Progress bar state

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email) {
      alert("Please enter your email.");
      return;
    }

    setLoading(true); // Show loader
    setProgress(10); // Start progress bar

    let progressInterval; // Declare the progress interval

    try {
      // Simulate progress for demo (you can remove this in production)
      progressInterval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 10, 90)); // Increment progress
      }, 300);

      const response = await fetch("http://localhost:5000/send-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      clearInterval(progressInterval); // Clear progress interval after completion
      setProgress(100); // Set progress to 100% when done

      if (response.ok) {
        alert(result.message);
        setFormData({ name: "", email: "", message: "" });
        setLoading(false); // Hide loader after successful submission
        setShowModal(true); // Show modal after success
      } else {
        alert(result.error || "Failed to send verification email");
        setLoading(false); // Hide loader on error
      }
    } catch (error) {
      clearInterval(progressInterval); // Clear progress interval on error
      console.error("Error sending verification email:", error);
      alert("An error occurred. Please try again.");
      setLoading(false); // Hide loader on error
    }
  };

  return (
    <div>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onSubmit={handleSubmit}
        className="bg-black/50 backdrop-blur-sm p-8 rounded-lg shadow-xl pb-10 lg:pb-15"
      >
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-white">
            Name
          </label>
          <input
            type="text"
            required
            className="w-full p-2 rounded bg-black/50 border border-gray-600 focus:border-primary outline-none text-white"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            name="name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-white">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full p-2 rounded bg-black/50 border border-gray-600 focus:border-primary outline-none text-white"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            name="email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-white">
            Message
          </label>
          <textarea
            required
            rows="4"
            className="w-full p-2 rounded bg-black/50 border border-gray-600 focus:border-primary outline-none text-white"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            name="message"
          ></textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded transition-colors"
        >
          {loading ? (
            <>
              <span className="text-sm">Sending...</span>
              <div className="mt-2 relative">
                <progress
                  value={progress}
                  max="100"
                  className="w-full h-2 bg-gray-700 rounded-full"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white">
                  {progress}%
                </span>
              </div>
            </>
          ) : (
            "Send Message"
          )}
        </motion.button>
      </motion.form>

      {/* Modal for Email Verification */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">Check Your Email!</h2>
            <p className="mb-4">
              A verification email has been sent. Please verify your email to
              proceed.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
