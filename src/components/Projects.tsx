import { motion } from "framer-motion";
import { Lock, ExternalLink, Github } from "lucide-react";

const particles = Array.from({ length: 18 });

const projects = [
  {
    title: "AssetPro",
    description:
      "Sensitive Data Storing and Sharing System in Cloud using Beneficiary Access Code-based Encryption (BACE) with dynamic access control.",
    image: "projects/assetpro.webp",
    alt: "AssetPro — Cloud-based Beneficiary Access Code Encryption security system",
    tags: ["Python", "Cloud", "Security"],
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern personal portfolio built using React and Three.js with animated particle background, responsive UI, and performance optimization.",
    image: "projects/portfolio.webp",
    alt: "Personal portfolio website with modern UI and animations",
    tags: ["React", "Three.js", "Tailwind", "Framer Motion"],
    live: "https://sudhakaranmohanraj.netlify.app/",
    github: "https://github.com/sudhakaranmohanraj/sudhakaranmohanraj.github.io",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-900 to-black"
    >
      <div className="flex flex-col items-center px-4">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Projects
        </motion.h2>

        {projects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center mb-16"
          >

            {/* Image */}
            <div className="relative inline-block">
              <img
                src={project.image}
                alt={project.alt}
                width={660}
                height={440}
                loading="lazy"
                decoding="async"
                className="max-h-80 w-auto object-contain rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-105"
              />

              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none">
                {particles.map((_, i) => (
                  <motion.span
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full blur-[1px]"
                    initial={{
                      x: Math.random() * 400,
                      y: Math.random() * 200,
                      opacity: 0.3,
                    }}
                    animate={{
                      x: Math.random() * 400,
                      y: Math.random() * 200,
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 6 + Math.random() * 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="mt-6 text-center max-w-xl">

              {/* Title */}
              <div className="flex items-center justify-center gap-3 mb-2">
                <Lock className="text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex justify-center flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 justify-center">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition shadow-md hover:scale-105"
                >
                  <ExternalLink size={16} />
                  Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition shadow-md hover:scale-105"
                >
                  <Github size={16} />
                  Code
                </a>

              </div>

            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}