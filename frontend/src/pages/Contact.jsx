import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <div className="pt-24 px-4 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <ContactForm />
      </motion.div>
    </div>
  )
}

export default Contact