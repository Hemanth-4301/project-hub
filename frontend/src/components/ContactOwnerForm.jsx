import { useState } from 'react'
import { motion } from 'framer-motion'

function ContactOwnerForm({ project }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Hello! I'm interested in the project "${project.name}"\n\nName: ${formData.name}\nPhone: ${formData.phone}`
    const whatsappUrl = `https://wa.me/${project.owner.phone}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Talk to Owner</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            required
            className="w-full p-2 rounded bg-dark/50 border border-gray-600 focus:border-primary outline-none"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            required
            className="w-full p-2 rounded bg-dark/50 border border-gray-600 focus:border-primary outline-none"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Contact via WhatsApp
        </motion.button>
      </form>
    </div>
  )
}

export default ContactOwnerForm