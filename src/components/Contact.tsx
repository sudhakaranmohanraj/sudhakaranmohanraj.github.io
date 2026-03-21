import { motion, AnimatePresence } from "framer-motion";
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

      setTimeout(() => setSuccess(false), 3000);
    } catch {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }

    setLoading(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4">

        {/* Hidden Netlify Form */}
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
          <p className="text-gray-400">
            Let’s build something amazing together 🚀
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
          className="space-y-6 bg-gray-900/60 p-8 rounded-2xl backdrop-blur-lg border border-gray-800 shadow-lg"
        >
          <input type="hidden" name="form-name" value="contact" />

          <p hidden>
            <input name="bot-field" />
          </p>

          {/* Inputs */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <textarea
            name="message"
            rows={5}
            placeholder="Your Message..."
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : success ? "Sent ✅" : "Send Message"}
            <Send size={18} />
          </button>
        </motion.form>

        {/* Toast Messages */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
            >
              Message sent successfully 🚀
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-6 right-6 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg"
            >
              Something went wrong ❌
            </motion.div>
          )}
        </AnimatePresence>

        {/* Email */}
        <div className="mt-12 text-center">
          <a
            href="mailto:sudhakaranmohanraj@gmail.com"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
          >
            <Mail size={18} />
            sudhakaranmohanraj@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}