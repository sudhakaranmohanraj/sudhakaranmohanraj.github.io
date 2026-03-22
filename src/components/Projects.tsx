import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const particles = Array.from({ length: 18 });

const projects = [
  {
    title: "AssetPro",
    description:
      "Sensitive Data Storing and Sharing System in Cloud using Beneficiary Access Code-based Encryption (BACE) with dynamic access control.",
    image: "projects/assetpro.webp",
    alt: "AssetPro — Cloud-based Beneficiary Access Code Encryption security system",
    tags: ["Python", "Cloud", "Security"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="flex flex-col items-center px-4">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        {projects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >

            <div className="relative inline-block">
              {/* ⭐ alt, width, height, loading="lazy" added */}
              <img
                src={project.image}
                alt={project.alt}
                width={660}
                height={440}
                loading="lazy"
                decoding="async"
                className="max-h-80 w-auto object-contain rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-105"
              />

              <div className="absolute inset-0 pointer-events-none">
                {particles.map((_, i) => (
                  <motion.span
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full blur-[1px]"
                    initial={{ x: Math.random() * 400, y: Math.random() * 200, opacity: 0.3 }}
                    animate={{ x: Math.random() * 400, y: Math.random() * 200, opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 6 + Math.random() * 6, repeat: Infinity, ease: "linear" }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6 text-center max-w-xl">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Lock className="text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex justify-center flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}