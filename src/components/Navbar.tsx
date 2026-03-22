import { motion } from "framer-motion";

const links = [
  { name: "About",    id: "about"    },
  { name: "Skills",   id: "skills"   },
  { name: "Projects", id: "projects" },
  { name: "Contact",  id: "contact"  },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* ⭐ Logo — svg replaces webp, width/height added */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="/sm-logo.svg"
            alt="Sudhakaran Mohanraj Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="font-semibold text-lg">Sudhakaran Mohanraj ♡</span>
        </motion.div>

        {/* ⭐ Links */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              whileHover={{ scale: 1.08 }}
              className="relative text-white/70 hover:text-white transition-colors duration-300 group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

      </div>
    </nav>
  );
}