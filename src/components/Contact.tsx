import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-300">Let's discuss how we can work together</p>
        </motion.div>

        <motion.form
          name="contact"
          method="POST"
          data-netlify="true"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl
            backdrop-blur-sm border border-gray-700/50"
        >
          {/* ⭐ REQUIRED */}
          <input type="hidden" name="form-name" value="contact" />

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                name="name"
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                name="email"
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700
                focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white resize-none"
              placeholder="Your message..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg
              hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Send Message</span>
            <Send className="w-5 h-5" />
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="mailto:sudhakaranmohanraj@gmail.com"
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>sudhakaranmohanraj@gmail.com</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
