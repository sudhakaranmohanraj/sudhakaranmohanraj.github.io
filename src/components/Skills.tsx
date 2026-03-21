import { motion } from 'framer-motion';
import { Code2, Database, GitBranch, Layout, Terminal, Palette } from 'lucide-react';

const skills = [
  {
    category: "Languages",
    items: ["Java", "Python", "HTML", "CSS", "Deluge", "SQL"],
    icon: <Code2 className="w-6 h-6" />
  },
  {
    category: "Tools",
    items: ["MS Office", "Adobe Photoshop", "GitHub", "AI tools"],
    icon: <Terminal className="w-6 h-6" />
  },
  {
    category: "Soft Skills",
    items: ["Problem-solving", "Communication", "Time management"],
    icon: <GitBranch className="w-6 h-6" />
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 backdrop-blur-sm
                border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{skillGroup.category}</h3>
              </div>

              <div className="space-y-2">
                {skillGroup.items.map((skill, i) => (
                  <div
                    key={skill}
                    className="px-3 py-1.5 bg-gray-800/50 rounded-lg text-gray-300 hover:bg-blue-500/20
                      hover:text-blue-300 transition-all duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}