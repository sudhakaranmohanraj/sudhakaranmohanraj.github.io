import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        body: formData,
      });

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(true);
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 to-black"
    >
      <div className="max-w-4xl mx-auto px-4">

        {/* 🔥 Hidden Netlify Form (IMPORTANT) */}
        <form name="contact" data-netlify="true" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-300">
            Let's discuss how we can work together
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl
          backdrop-blur-sm border border-gray-700/50"
        >
          {/* Required hidden fields */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot */}
          <p hidden>
            <label>
              Don’t fill this: <input name="bot-field" />
            </label>
          </p>

          {/* Inputs */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700
                focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700
                focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              rows={6}
              placeholder="Your message..."
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700
              focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg
            hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            <span>{loading ? "Sending..." : "Send Message"}</span>
            <Send className="w-5 h-5" />
          </button>

          {/* Status Messages */}
          {success && (
            <p className="text-green-400 text-center">
              Message sent successfully 🚀
            </p>
          )}

          {error && (
            <p className="text-red-400 text-center">
              Something went wrong ❌
            </p>
          )}
        </motion.form>

        {/* Email */}
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