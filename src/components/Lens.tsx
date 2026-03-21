import { motion } from "framer-motion";

/* ⭐ Photo storytelling data */
const photos = [
  {
    src: "/lens/temple1.webp",
    title: "Ranganathar Temple, Srirangam",
    desc: "World’s largest active temple complex, where devotion breathes through stone.",
  },
  {
    src: "/lens/temple2.webp",
    title: "Brihadeeswarar Temple, Thanjavur",
    desc: "Chola brilliance carved in granite — timeless Dravidian mastery.",
  },
  {
    src: "/lens/temple3.webp",
    title: "216 Feet of Language & Legacy",
    desc: "The Brihadeeswarar tower rises 216 feet — echoing the 216 compound letters of Tamil.",
    special: true, // ⭐ enables 216 animation
  },
  {
    src: "/lens/leaf.webp",
    title: "Leaf & Drop",
    desc: "An eternal love story between a leaf and a resting drop of water.",
  },
  {
    src: "/lens/temple4.webp",
    title: "Chidambaram Temple",
    desc: "Where space becomes divine — the cosmic dance of Nataraja.",
  },
];

export default function Lens() {
  return (
    <section id="lens" className="py-24 px-6 max-w-5xl mx-auto scroll-mt-24">

      {/* ⭐ Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-14 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
      >
        Through My Lens
      </motion.h2>

      {/* ⭐ Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* ⭐ First 4 cards */}
        {photos.slice(0, 4).map((photo, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="
              group relative rounded-3xl overflow-hidden shadow-xl
              bg-gradient-to-br from-gray-900 via-black to-gray-900
              flex items-center justify-center p-3
            "
          >
            {/* ⭐ IMAGE */}
            <img
              src={photo.src}
              className="
                max-w-full max-h-[360px]
                object-contain rounded-xl
                transition duration-500 group-hover:scale-105
              "
            />

            {/* ⭐ Overlay */}
            <div
              className="
                absolute inset-0 opacity-0 group-hover:opacity-100
                transition duration-500 flex items-end p-5
                bg-gradient-to-t from-black/80 via-black/30 to-transparent
                backdrop-blur-sm border border-white/10
              "
            >
              <div>

                {/* ⭐ SPECIAL 216 animation */}
                {photo.special && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-cyan-300 font-bold text-4xl mb-1"
                  >
                    216
                  </motion.div>
                )}

                <h3 className="text-white font-semibold text-lg">
                  {photo.title}
                </h3>

                <p className="text-gray-300 text-sm">{photo.desc}</p>

                {/* ⭐ Quote style */}
                {photo.special && (
                  <p className="text-xs text-cyan-200 mt-2 italic">
                    “Architecture speaking the language of Tamil.”
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {/* ⭐ Wide card */}
        <motion.div
          whileHover={{ y: -6 }}
          className="
            group sm:col-span-2 relative rounded-3xl overflow-hidden shadow-xl
            bg-gradient-to-br from-gray-900 via-black to-gray-900
            flex items-center justify-center p-3
          "
        >
          <img
            src={photos[4].src}
            className="
              max-w-full max-h-[320px]
              object-contain rounded-xl
              transition duration-500 group-hover:scale-105
            "
          />

          <div
            className="
              absolute inset-0 opacity-0 group-hover:opacity-100
              transition duration-500 flex items-end p-6
              bg-gradient-to-t from-black/80 via-black/30 to-transparent
              backdrop-blur-sm border border-white/10
            "
          >
            <div>
              <h3 className="text-white font-semibold text-lg">
                {photos[4].title}
              </h3>
              <p className="text-gray-300 text-sm">{photos[4].desc}</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ⭐ Story footer line */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center text-gray-400 text-sm mt-12 italic"
      >
        Every frame holds a story — some carved in stone, some resting on a leaf.
      </motion.p>

    </section>
  );
}
