"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

/* ⭐ Mobile check (SSR safe) */
const isMobile =
  typeof window !== "undefined" ? window.innerWidth < 768 : false;

/* ⭐ Optimized particle count */
const PARTICLE_COUNT = isMobile ? 400 : 1500;

/* ⭐ Floating particles */
function Particles() {
  const ref = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  const particles = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;

    const positions = ref.current.geometry.attributes.position;
    const array = positions.array as Float32Array;

    for (let i = 0; i < array.length; i += 3) {
      array[i + 1] +=
        0.0025 + Math.sin(state.clock.elapsedTime + i) * 0.0007;

      if (array[i + 1] > 6) array[i + 1] = -6;

      array[i] += mouse.x * 0.0007;
      array[i + 2] += mouse.y * 0.0007;
    }

    positions.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={particles} stride={3}>
      <PointMaterial
        transparent
        color="#22d3ee"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

/* ⭐ HERO */
export default function Hero() {
  return (
    <section className="h-[100svh] relative overflow-hidden w-screen">
      
      {/* ⭐ Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-cyan-900" />

      {/* ⭐ Canvas */}
      <div className="absolute inset-0 w-screen h-full">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 1.2]}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <pointLight position={[-5, -5, -5]} intensity={1.5} color="#22d3ee" />

          <Particles />

          {/* ❌ Removed AnimatedText */}
        </Canvas>
      </div>

      {/* ⭐ UI Layer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-24 inset-x-0 text-center w-full max-w-2xl mx-auto px-4"
      >
        {/* ⭐ Logo */}
        <motion.img
          src="/sm.webp"
          alt="Sudhakaran Mohanraj Logo"
          width={80}
          height={80}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.9, 1, 0.9],
            filter: [
              "drop-shadow(0 0 6px #8b5cf6)",
              "drop-shadow(0 0 18px #22d3ee)",
              "drop-shadow(0 0 6px #8b5cf6)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-20 mx-auto mb-6 bg-white/5 p-3 rounded-xl backdrop-blur-sm"
        />

        {/* ⭐ Tagline */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-light text-gray-200 mb-6">
          MCA Graduate | Java Developer <br />
          Building scalable software and cloud-driven solutions
        </h2>

        {/* ⭐ Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          <a
            href="#about"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full
            hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer"
          >
            Who Am I
          </a>

          <a
            href="/Sudhakaran_Mohanraj_Resume.pdf"
            download="Sudhakaran_Resume.pdf"
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-full
            hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer"
          >
            Download Resume
          </a>

        </div>
      </motion.div>
    </section>
  );
}