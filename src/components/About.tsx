import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >

          {/* ⭐ LEFT CONTENT */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white mb-6">Who Am I</h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Recent MCA graduate with a strong foundation in software engineering. Proficient in Java and experienced
              with Python and SQL for application development. Skilled in problem-solving, debugging, and applying SDLC
              practices to real-world challenges. Looking for an entry-level Software Developer position to design and
              develop scalable, high-quality applications.
            </p>

            {/* ⭐ CONTACT */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>Chennai, Tamil Nadu - 600 100</span>
              </div>

              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>9092918658</span>
              </div>

              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>sudhakaranmohanraj@gmail.com</span>
              </div>
            </div>

            {/* ⭐ RESUME BUTTON */}
            <a
              href="/Sudhakaran_Mohanraj_Resume.pdf"
              download="Sudhakaran_Resume.pdf"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full
              hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg mt-6"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* ⭐ RIGHT PROFILE */}
          <div className="relative flex flex-col items-center justify-center gap-6">

            {/* ⭐ Breathing glow */}
            <motion.div
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute w-72 h-72 rounded-full blur-3xl bg-gradient-to-r from-purple-500/30 to-cyan-500/30"
            />

            {/* ⭐ Image card */}
            <div className="relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-5">
              <img
                src="/profile.png"
                alt="Sudhakaran Mohanraj"
                className="max-h-[420px] w-auto rounded-xl transition-transform duration-300 hover:scale-[1.03]"
              />
            </div>

            {/* ⭐ Animated skill chips */}
            <div className="flex flex-wrap justify-center gap-3 max-w-xs">
              {["Python", "Java", "Deluge", "SQL", "Git", "Cloud"].map((skill, i) => (
                <motion.div
                  key={skill}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4
                  }}
                  className="
                    px-3 py-1.5
                    rounded-full
                    text-sm
                    bg-white/5
                    border border-white/10
                    backdrop-blur-sm
                    text-gray-200
                  "
                >
                  {skill}
                </motion.div>
              ))}
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}