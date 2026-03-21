import { Linkedin, Mail, Instagram, MessageCircle } from "lucide-react";

export default function SocialBar() {
  return (
    <div className="fixed left-6 bottom-10 flex flex-col gap-4 z-[9999]">
      
      {/* WhatsApp */}
      <a
        href="https://wa.me/919092918658"
        target="_blank"
        className="p-3 rounded-full bg-green-500/20 hover:bg-green-500 text-green-400 hover:text-white transition"
      >
        <MessageCircle size={22} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/sudhakar__vishwakarma"
        target="_blank"
        className="p-3 rounded-full bg-pink-500/20 hover:bg-pink-500 text-pink-400 hover:text-white transition"
      >
        <Instagram size={22} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/sudhakaranmohanraj"
        target="_blank"
        className="p-3 rounded-full bg-blue-500/20 hover:bg-blue-500 text-blue-400 hover:text-white transition"
      >
        <Linkedin size={22} />
      </a>

      {/* Email */}
      <a
        href="mailto:sudhakaranmohanraj@gmail.com"
        className="p-3 rounded-full bg-cyan-500/20 hover:bg-cyan-500 text-cyan-400 hover:text-white transition"
      >
        <Mail size={22} />
      </a>

    </div>
  );
}